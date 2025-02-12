! function(t, e, n, o) {
    if (!n) throw ReferenceError("Dependence jQuery not found.");
    var i = t,
        s = "FlipBookPlugins",
        a = {},
        r = function(t) {
            void 0 === t && (t = "unkown");
            var e = a[t];
            return e || (e = 0), a[t] = ++e, t + "_" + e
        };
    n.audioFadeIn = function(t) {
        return n.fadeSound(t, !1)
    }, n.audioFadeOut = function(t) {
        return n.fadeSound(t, !0)
    }, n.fadeSound = function(t, e) {
        var o = e ? 0 : n.data(t, "volume"),
            i = n.data(t, "animation");
        i && i.stop(!1, !1);
        var s = t.volume;
        return i = n({
            a: 0
        }).animate({
            a: 1
        }, {
            start: function() {
                e || t.play()
            },
            complete: function() {
                e && t.pause()
            },
            duration: 2e3,
            step: function(e) {
                t.volume = (o - s) * e + s
            }
        }), n.data(t, "animation", i), i
    };
    var d = function() {
            function t() {
                this.__hash_code__ = t.hashCode++
            }
            return t.prototype.hashCode = function() {
                return this.__hash_code__
            }, t.hashCode = 1, t
        }(),
        p = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            n.prototype = e.prototype, t.prototype = new n
        },
        l = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return p(e, t), e.get = function(t) {
                return e.map[t]
            }, e.register = function(t, n) {
                e.map[t] = n
            }, e.map = {}, e
        }(d),
        c = function(t) {
            function e(e) {
                t.call(this), this.options = e, this.__guid__ = r("component"), this.loadList = [], this.visible = !0, this.audioAutoPlay = !1, this.node = n("<div>").appendTo(e.container).css(e.style), this.addLoadItem("audio", this.createAudio);
                var o = this.options.audio;
                o && (this.audioAutoPlay = o.autoplay)
            }
            return p(e, t), e.prototype.onload = function() {}, e.prototype.resize = function() {}, e.prototype.enter = function() {
                var t = this;
                this.node.fadeTo(1e3, this.options.opacity || 1, function() {
                    t.start()
                })
            }, e.prototype._show = function() {}, e.prototype._hide = function() {}, e.prototype.start = function() {
                var t = this.options.audio;
                if (t && t.src) {
                    var e = this.audio;
                    this.audioAutoPlay && this.visible && (this.audioAutoPlay = !1, e.play())
                }
            }, e.prototype.addLoadItem = function(t, e) {
                this.loadList.push({
                    id: t,
                    cb: e
                })
            }, e.prototype.load = function() {
                var t = this,
                    e = this.loadList;
                n.each(e, function(n, o) {
                    o.cb.apply(t, [function() {
                        if (!t.destroyed) {
                            var n = e.indexOf(o);
                            n >= 0 && (e.splice(n, 1), 0 === e.length && (t.onloadTimeout = setTimeout(function() {
                                t.onload()
                            }, 1e3)))
                        }
                    }])
                })
            }, e.prototype.createAudio = function(t) {
                var e = this.options.audio;
                if (e && e.src) {
                    var o = new Audio;
                    o.volume = e.volume || 1, n.data(o, "volume", o.volume), n(o).one("canplay error", function() {
                        t()
                    }).appendTo(this.node.parent()), o.src = e.src, o.load(), this.audio = o
                } else setTimeout(t)
            }, e.prototype.show = function() {
                this.visible || (this.visible = !0, this.node.show(), this.audioAutoPlay && this.audio && this.audio.play(), this._show())
            }, e.prototype.hide = function() {
                this.visible && (this.visible = !1, this.node.hide(), this.audio && this.audio.pause(), this._hide())
            }, e.prototype.onDestroy = function() {}, e.prototype.destroy = function() {
                this.onloadTimeout && clearTimeout(this.onloadTimeout), this.onDestroy(), this.destroyed = !0, this.node.remove()
            }, e.addMenuIcon = function(t, e) {
                (this.menulist = n.extend([], this.menulist)).push({
                    name: t,
                    handler: e
                })
            }, e.menulist = [], e
        }(d);
    c.addMenuIcon("Delete", function(t) {
        var e = this;
        n(t).click(function() {
            e.destroy()
        })
    }), c.addMenuIcon("Move", function(t) {
        n(t).addClass("dragable")
    }), c.addMenuIcon("Audio", function(t) {
        var e = this,
            o = n(t),
            i = this.options.audio;
        this.audio;
        if (i && i.src) {
            var s = "menu__audio--muted",
                a = "menu__audio--sound";
            i.autoplay ? o.data("paused", !1).addClass(a) : o.data("paused", !0).addClass(s);
            var r;
            o.on("click", function() {
                var t = e.audio,
                    i = o.data("paused");
                t.ended && (t.currentTime = 0), r && r.stop(!1, !1), i ? (t.currentTime ? r = n.audioFadeIn(t) : (t.volume = 1, t.play()), o.data("paused", !1).addClass(a).removeClass(s)) : (r = n.audioFadeOut(t), o.data("paused", !0).addClass(s).removeClass(a))
            })
        } else o.remove()
    });
    var u = function(o) {
        function i(e) {
            o.call(this), this.config = e, this.components = [];
            for (var i, a, r, d, p, c, u = e.plugins, h = (this.components, n(e.container)), f = 0; i = u[f++];) i = this.transform(i), p = n("<div>").addClass(s).appendTo(h), p.css(i.position), p.css("zIndex", e.zIndex), i.container = p, a = l.get(i.type), r = new a(i), d = this.createComponentMenu(a.menulist, r), c = n("<div>").addClass("loading").html("<div><span></span><span></span><span></span><span></span></div>"), p.append(d), p.append(c), this.loadComponent(p, r, c);
            this.dragable(h), n(t).resize(this.resizeHandler = this.resize.bind(this)), this.stopPropagationHandler = function(t) {
                t.preventDefault()
            }, h.on("mousedown dbclick", "img", this.stopPropagationHandler), h.on("mousedown dbclick", ".menu", this.stopPropagationHandler)
        }
        return p(i, o), i.prototype.transform = function(t) {
            var e = t.style;
            return t.position = {
                width: e.width,
                height: e.height,
                left: e.left,
                top: e.top
            }, delete e.width, delete e.height, delete e.left, delete e.top, t
        }, i.prototype.createComponentMenu = function(t, e) {
            var o = this,
                i = n("<ul>").addClass("menu"),
                s = t.length;
            return n.each(t, function(t, n) {
                var a = o.newIcon(n.name, s - t);
                i.append(a), n.handler && n.handler.apply(e, [a])
            }), i
        }, i.prototype.newIcon = function(t, e) {
            var o = '<li class = "menu__' + t.replace(/\s+/g, "_").toLowerCase() + '" style = "z-index: ' + e + ';"><div class="menu__wrap"><span>' + t + "</span><i></i></div></li>";
            return n(o)[0]
        }, i.prototype.loadComponent = function(t, e, n) {
            var o = this;
            return e.load(), e.onload = function() {
                e.onload = null, n.fadeOut(function() {
                    n.remove(), e.enter()
                })
            }, e.onDestroy = function() {
                e.onDestroy = null, t.remove(), o.removeComponent(e)
            }, this.components.push(e), this.components
        }, i.prototype.removeComponent = function(t) {
            var e = this.components,
                n = e.indexOf(t);
            return e.splice(n, 1), 0 === e.length && this.destroy(), e
        }, i.prototype.resize = function() {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                n.each(t.components, function(t, e) {
                    e.resize()
                })
            }, 100)
        }, i.prototype.dragable = function(t) {
            var o, i, a, r, d, p, l, c, u, h = n(n("#bookContainer")[0] || e),
                f = 0,
                v = 0,
                m = 5,
                y = n("<div>").addClass("dragCover"),
                g = !1;
            t.on("touchstart mousedown", ".dragable", this.dragDownHandler = function(t) {
                c = !0;
                var e = t.originalEvent.changeTouches;
                f = e ? e[0].clientX : t.pageX, v = e ? e[0].clientY : t.pageY, p = n(t.currentTarget), t.preventDefault()
            }), h.on("touchmove mousemove", this.dragMoveHandler = function(e) {
                if (c) {
                    var h = e.originalEvent.changeTouches,
                        _ = h ? h[0].clientX : e.pageX,
                        w = h ? h[0].clientY : e.pageY,
                        C = _ - f,
                        k = w - v;
                    (C * C > m * m || k * k > m * m) && (d = !0, g || (g = !0, u = p.data("dragable"), l = n(p.parents("." + s)[0] || p), u && u.start ? u.start(f, v) : (o = l[0].offsetLeft, i = l[0].offsetTop, a = t.width(), r = t.height()), u && u.cover === !1 || y.appendTo(l)), u && u.move ? u.move(C, k) : l.css({
                        left: (o + C) / a * 100 + "%",
                        top: (i + k) / r * 100 + "%"
                    }))
                }
            }), h.on("touchend touchcancel mouseup", this.dragEndHandler = function(t) {
                c = !1, d && (u && u.end && u.end(t), g = !1, y.remove(), d = !1)
            })
        }, i.prototype.undragable = function() {
            var t = n(this.config.container),
                o = n(n("#bookContainer")[0] || e);
            n(t).off("mousedown dbclick", this.stopPropagationHandler).off("mousedown touchstart", this.dragDownHandler), o.off("mousemove touchmove", this.dragMoveHandler), o.off("mouseup touchend touchcancel", this.dragEndHandler), this.stopPropagationHandler = null, this.dragDownHandler = null, this.dragMoveHandler = null, this.dragEndHandler = null
        }, i.prototype.show = function() {
            for (var t, e = 0, n = this.components; t = n[e++];) t.show()
        }, i.prototype.hide = function() {
            for (var t, e = 0, n = this.components; t = n[e++];) t.hide()
        }, i.prototype.destroy = function() {
            for (var e, o = 0, i = this.components; e = i[o++];) e.destroy();
            this.components = null, this.undragable(), n(t).off("resize", this.resizeHandler), this.resizeHandler = null
        }, i
    }(d);
    i[s] = u;
    var h = function(t) {
            function o(e) {
                t.call(this), this.options = e, this.node = n("<div>").addClass("fbvp").css({
                    width: e.width,
                    height: e.height,
                    left: e.left,
                    top: e.top
                }), this.init()
            }
            return p(o, t), o.prototype.init = function() {
                var t = this,
                    o = this.node,
                    i = this.createElementByPrefix("fbvp")("div"),
                    s = this.createElementByPrefix("")("div"),
                    a = i("prompt"),
                    r = i("video-container"),
                    d = this.video = e.createElement("video"),
                    p = n(d).click(function() {
                        d.duration && (d.paused ? (a.removeClass("stop").addClass("play"), d.play()) : (a.removeClass("play").addClass("stop"), d.pause()), a.stop(!0, !0).css({
                            opacity: 1,
                            transform: "none"
                        }).show().fadeOut({
                            duration: 400,
                            step: function(t) {
                                n(this).css("transform", "scale(" + (1 + (1 - t) / 3) + ")")
                            }
                        }))
                    });
                r.append(d).appendTo(this.node);
                var l = i("loading").html("<div><span></span><span></span><span></span><span></span></div>"),
                    c = i("error").text("An error occurred, please try again later."),
                    u = i("gradient--bottom").appendTo(o),
                    r = i("controls-container"),
                    h = i("play-pause-button").addClass("play").on("click", function() {
                        d.paused && d.duration ? d.play() : d.pause()
                    });
                h.appendTo(r), p.on("play", function() {
                    h.removeClass("play").addClass("stop")
                }).on("pause", function() {
                    h.removeClass("stop").addClass("play")
                });
                var f, v = i("volume-controls"),
                    m = i("volume-button").addClass("unmuted").click(function() {
                        d.muted = !d.muted
                    }),
                    y = i("volume-bar").mousedown(function(t) {
                        var e = t.originalEvent.changeTouches,
                            o = e ? e[0].clientX : t.pageX,
                            i = (o - n(this).offset().left) / 50;
                        0 > i && (i = 0), i > 1 && (i = 1), d.volume = i
                    }).addClass("dragable").data("dragable", {
                        cover: !1,
                        start: function() {
                            f = d.volume, y.css("width", 53)
                        },
                        end: function() {
                            f = null, y.css("width", "")
                        },
                        move: function(t) {
                            var e = f + t / 50;
                            0 > e && (e = 0), e > 1 && (e = 1), d.volume = e
                        }
                    }),
                    g = (s("bg").appendTo(y), s("fg").appendTo(y)),
                    _ = s("cursor").appendTo(y);
                v.append(m).append(y).appendTo(r);
                var w, C, k = i("time").appendTo(r),
                    b = n("<span>").addClass("current").appendTo(k).text("00:00"),
                    T = (n("<span>").addClass("separator").appendTo(k).text(" / "), n("<span>").addClass("total").appendTo(k).text("00:00")),
                    x = (i("fullscreen").appendTo(r).click(function() {
                        d.requestFullscreen ? d.requestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen()
                    }), null),
                    I = i("progress-container").mousedown(function(t) {
                        var e = d.duration;
                        if (e) {
                            null === x && (x = d.paused), d.pause();
                            var o = t.originalEvent.changeTouches,
                                i = o ? o[0].clientX : t.pageX;
                            w = n(this).width();
                            var s = (i - n(this).offset().left) / w * e;
                            0 > s && (s = 0), s > e && (s = e), d.currentTime = s, z.css("width", s / e * 100 + "%"), H.css("left", s / e * 100 + "%")
                        }
                    }).mouseup(function() {
                        x === !1 && d.play(), x = null
                    }).addClass("dragable").data("dragable", {
                        cover: !1,
                        start: function() {
                            C = d.currentTime, E.css("transform", "scaleY(1)"), H.css("transform", "scale(1)")
                        },
                        end: function() {
                            C = null, E.css("transform", ""), H.css("transform", ""), x === !1 && d.play(), x = null
                        },
                        move: function(t) {
                            var e = d.duration;
                            if (e) {
                                var n = C + t / w * e;
                                0 > n && (n = 0), n > e && (n = e), d.currentTime = n, z.css("width", n / e * 100 + "%"), H.css("left", n / e * 100 + "%")
                            }
                        }
                    }),
                    E = (i("progress-padding").appendTo(I), i("progress-bar").appendTo(I)),
                    z = (s("bg").appendTo(E), s("fg").appendTo(E)),
                    H = s("cursor").appendTo(E);
                o.append(l).append(c).append(a).append(I).append(r), p.on("canplay", function() {
                    l.hide()
                }), p.on("waiting", function() {
                    l.show()
                }), p.on("error", function() {
                    l.hide(), c.show()
                });
                var A, L = u.add(r).add(I);
                p.on("pause", function() {
                    A && clearTimeout(A), L.stop(!0, !0).fadeIn()
                }), o.hover(function() {
                    A && clearTimeout(A), L.stop(!0, !0).fadeIn()
                }, function() {
                    d.paused || (A = setTimeout(function() {
                        A = null, L.stop(!0, !0).fadeOut()
                    }, 1500))
                }), p.one("canplay", function() {
                    t.options.autoplay && (d.play(), d.paused || (A = setTimeout(function() {
                        L.stop(!0, !0).fadeOut()
                    }, 1500))), t.onload()
                }), p.on("volumechange", function() {
                    var t = d.muted ? 0 : d.volume,
                        e = 50 * t;
                    g.css("width", e), _.css("left", e), 0 === t ? m.removeClass("unmuted").addClass("muted") : m.removeClass("muted").addClass("unmuted")
                });
                var S = function(t) {
                    var e = ~~(t / 3600),
                        n = ~~(t % 3600 / 60),
                        o = ~~(t % 60),
                        i = [n > 10 ? n : "0" + n, o > 10 ? o : "0" + o];
                    return e > 0 && i.push(e), i.join(":")
                };
                p.on("durationchange", function() {
                    var t = d.duration;
                    t && (T.text(S(t)), b.text(S(0)))
                }), p.on("timeupdate", function() {
                    var t = d.currentTime;
                    b.text(S(d.currentTime));
                    var e = d.duration,
                        n = t / e * 100 + "%";
                    z.css("width", n), H.css("left", n)
                })
            }, o.prototype.load = function() {
                n(this.video).attr("src", this.options.src)
            }, o.prototype.onload = function() {}, o.prototype.createElementByPrefix = function(t) {
                return t = t ? t + "__" : "",
                    function(o) {
                        var i = e.createElement(o);
                        return function(e) {
                            var o = n(i.cloneNode(!1));
                            if (e) {
                                var s = e.split(" ").map(function(e) {
                                    return t + e
                                }).join(" ");
                                o.addClass(s)
                            }
                            return o
                        }
                    }
            }, o.prototype.destroy = function() {
                this.video.removeAttribute("src")
            }, o
        }(d),
        f = function(t) {
            function e(e) {
                t.call(this, e), this.node.addClass("embed");
                var o = n("<div>").addClass("embed__wrap").appendTo(this.node);
                /^((?!chrome).)*safari/i.test(navigator.userAgent) && o.css({
                    webkitOverflowScrolling: "touch",
                    overflow: "scroll"
                })
            }
            return p(e, t), e.prototype.start = function() {
                t.prototype.start.call(this), this.init()
            }, e.prototype.init = function() {
                var t = this.options.embedCode;
                if (t.match(/facebook/gi)) this.node.html(t);
                else {
                    var e = n("<iframe>").attr({
                        frameBorder: 0,
                        onmousewheel: !0,
                        allowfullscreen: "",
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        width: "100%",
                        height: "100%",
                        src: "javascript:document.write('" + this.parseCode(t) + "');"
                    });
                    this.node.find(".embed__wrap").append(e), this.iframe = e
                }
            }, e.prototype.parseCode = function(t) {
                for (var e, o = n("<div>").html(t)[0], i = o.childNodes, s = 0, a = 0; e = i[s++];)
                    if ("SCRIPT" === e.nodeName && e.src) {
                        a++;
                        var r = e.onload;
                        r = r ? "(" + r.toString() + ").apply(this,arguments);" : "", e.setAttribute("onload", "leo_loadCallback();" + r)
                    } var d = "<style>body {margin: 0;}</style><script>var count = -1;var LEO_SCRIPT_COUNT = " + a + ";function leo_loadCallback() {if (++count < LEO_SCRIPT_COUNT) return;setTimeout(function(){var windowLaodedEvent = document.createEvent('CustomEvent');windowLaodedEvent.initCustomEvent('load',true,true);window.dispatchEvent(windowLaodedEvent);var documentLoadedEvent = document.createEvent('Event');documentLoadedEvent.initEvent('DOMContentLoaded',true,true);window.document.dispatchEvent(documentLoadedEvent);}, 0);}leo_loadCallback();</script>";
                return d += o.innerHTML, o.innerHTML = "", o = null, d.replace(/'/g, "\\'").replace(/%22/g, "").replace(/%27/g, "")
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this)
            }, e
        }(c);
    l.register("embed", f);
    var v = function(t) {
        function e(e) {
            t.call(this, e), this.node.addClass("img dragable"), this.addLoadItem("img", this.loadImage)
        }
        return p(e, t), e.prototype.loadImage = function(t) {
            n("<img>").one("load error", t).attr("src", this.options.src).appendTo(this.node)
        }, e
    }(c);
    l.register("img", v);
    var m = function(t) {
        function e(e) {
            t.call(this, e), this.paused = !1, this.node.addClass("linklist"), this.init()
        }
        return p(e, t), e.prototype.init = function() {
            for (var t, e, o, i, s = this.options, a = s.title, r = s.body, d = this.node, p = n("<input>").addClass("linklist__title dragable").val(a.content).attr("disabled", !0).css(a).appendTo(d), l = d.height(), c = p[0].offsetHeight, u = l - c - 2, h = n("<ul>").appendTo(n("<div>").addClass("linklist__body").appendTo(d).css("height", u)), f = r.content, v = 0; t = f[v++];) e = n("<li>"), i = t.title || t.content, o = n("<span>").html(i), t.link ? (o.attr("title", t.link), e.append(n("<a>").attr({
                href: t.link,
                target: "_blank"
            }).append(o).css(r))) : e.append(o.css(r)), h.append(e)
        }, e.prototype.start = function() {
            t.prototype.start.call(this), this.checkScroll(), this.bindDragEvent()
        }, e.prototype.resize = function() {
            var t = this.node,
                e = t.height(),
                n = t.find(".linklist__title")[0].offsetHeight,
                o = e - n - 2;
            t.find(".linklist__body").css("height", o), this.checkScroll()
        }, e.prototype.bindDragEvent = function() {
            var t, e = this,
                o = this.node.find(".linklist__body"),
                i = o.find("ul");
            o.addClass("dragable").data("dragable", {
                start: function() {
                    i.stop(), t = parseFloat(i.css("top"))
                },
                move: function(e, n) {
                    i.css("top", t + n)
                },
                end: function() {
                    e.scrollingAnimation || n(i).animate({
                        top: 15
                    }, 200)
                }
            })
        }, e.prototype.checkScroll = function() {
            var t = this;
            this.scrollingAnimation && (this.scrollingAnimation.stop(), this.scrollingAnimation = null);
            var e, o = this.node,
                i = o.find(".linklist__body"),
                s = i.find("ul"),
                a = s.height(),
                r = 40,
                d = i.height(),
                p = n.now,
                l = !1;
            a > d ? this.scrollingAnimation = n({
                a: 0
            }).delay(1e3).animate({
                a: 1
            }, {
                duration: 31536e3,
                step: function() {
                    var n = p(),
                        o = p() - e;
                    if (!l && !t.paused && 300 > o) {
                        var i = parseFloat(s.css("top")) || 15; - a > i && (i = d + .3 * r), i -= o / 1e3 * r, s.css("top", i)
                    }
                    e = n
                }
            }) : s.css("top", null);
            var c = function(t) {
                    l = !0
                },
                u = function(t) {
                    l = !1
                };
            i.off("**"), i.hover(c, u)
        }, e.prototype.enter = function() {
            var t = this,
                e = this.node.find(".linklist__title").css({
                    width: 0,
                    opacity: 0
                }),
                n = this.node.find(".linklist__body");
            n.slideUp(0, function() {
                t.node.css("opacity", t.options.opacity || 1), e.animate({
                    width: "100%",
                    opacity: 1
                }, 300, function() {
                    n.slideDown(function() {
                        t.start()
                    })
                })
            })
        }, e.prototype._show = function() {
            this.paused = !0
        }, e.prototype._hide = function() {
            this.paused = !1
        }, e.prototype.destroy = function() {
            t.prototype.destroy.call(this), this.scrollingAnimation && (this.scrollingAnimation.stop(!0, !1), this.scrollingAnimation = null)
        }, e
    }(c);
    l.register("linklist", m), m.addMenuIcon("Scroll", function(t) {
        var e = this,
            o = "menu__scroll--stop",
            i = "menu__scroll--play",
            s = n(t);
        s.addClass(o).click(function() {
            e.paused = !e.paused, e.paused ? s.removeClass(o).addClass(i) : s.removeClass(i).addClass(o)
        })
    });
    var y = function(e) {
        function o(t) {
            e.call(this, t), this.paused = !0, this.interval = 3e3, this.duration = 400, this.count = 0, this.__paused = null, this.node.addClass("newsticker dragable"), this.options.pauseOnMouseover = !0, this.init()
        }
        return p(o, e), o.prototype.transition = function(t, e, n, o) {}, o.prototype.resize = function() {
            var t = this.node,
                e = t.width(),
                n = t.height(),
                o = t.find(".newsticker__title"),
                i = t.find(".newsticker__controls"),
                s = t.find(".newsticker__body"),
                a = o[0].offsetWidth;
            t.css("lineHeight", n + "px");
            var r = this.bodywidth = e - o[0].offsetWidth - i[0].offsetWidth;
            s.css({
                width: ~~r,
                left: ~~a
            });
            var d = this.transitionContainer.height();
            this.transitionContainer.css("top", ~~((n - d) / 2))
        }, o.prototype.init = function() {
            var t = this,
                e = this.node,
                o = this.options,
                i = e.width(),
                s = e.height();
            e.css({
                lineHeight: s + "px"
            });
            var a = n("<div>").addClass("newsticker__title").css(o.title).appendTo(e);
            o.title ? a.html(o.title.content) : a.hide();
            var r = n("<div>").addClass("newsticker__body").appendTo(e).css(o.content),
                d = n("<div>").appendTo(r).html("&nbsp;"),
                p = d.height();
            d.css("top", ~~((s - p) / 2));
            var l = n("<button>").addClass("newsticker__controls");
            if (o.controls) {
                l.css("backgroundColor", o.title.backgroundColor).appendTo(e);
                var c = (n("<i>").addClass("newsticker__controls--previous").appendTo(l).click(function() {
                        t.prev()
                    }), "newsticker__controls--play"),
                    u = "newsticker__controls--stop",
                    h = n("<i>").addClass(o.autoplay ? u : c).appendTo(l).click(function() {
                        t.paused ? (t.play(), h.addClass(u).removeClass(c)) : (t.pause(), h.addClass(c).removeClass(u))
                    });
                n("<i>").addClass("newsticker__controls--next").appendTo(l).click(function() {
                    t.next()
                })
            } else l.hide();
            var f = a[0].offsetWidth,
                v = this.bodywidth = i - a[0].offsetWidth - l[0].offsetWidth;
            r.css({
                width: ~~v,
                left: ~~f
            }), this.transition = this.getTransition(this.options.effect), this.transitionContainer = d
        }, o.prototype.start = function() {
            e.prototype.start.call(this), this.options.autoplay && this.play(), this.skip(0)
        }, o.prototype.play = function() {
            var t = this;
            if (this.paused = !1, !this.animation) {
                var e, o = n.now,
                    i = !1;
                if (this.animation = n({
                        a: 0
                    }).animate({
                        a: 1
                    }, {
                        duration: 31536e3,
                        easing: "linear",
                        queue: !1,
                        step: function() {
                            var n = o(),
                                s = n - e;
                            t.update(s, i), e = n
                        }
                    }), this.options.pauseOnMouseover) {
                    var s = function() {
                            i = !0
                        },
                        a = function() {
                            i = !1
                        };
                    this.node.find(".newsticker__body").hover(s, a)
                }
            }
        }, o.prototype.update = function(t, e) {
            !e && !this.paused && 300 > t ? (this.count += t) >= this.interval && (this.next(), this.count = 0) : this.count = 0
        }, o.prototype.pause = function() {
            this.paused = !0
        }, o.prototype.getNewsItem = function(e) {
            var o = this.options.news[e],
                i = o.title || o.content,
                s = n("<div>").addClass("newsticker__body--content").appendTo(this.transitionContainer).attr({
                    target: "_blank",
                    title: i
                }).html(i);
            return o.link && s.click(function() {
                t.open(o.link, "_blank")
            }).css("cursor", "pointer").hover(function() {
                s.css({
                    textDecoration: "underline"
                })
            }, function() {
                s.css({
                    textDecoration: "none"
                })
            }), s
        }, o.prototype.skip = function(t) {
            var e = this,
                n = this.currentIndex;
            if (n !== t) {
                var o = n > t,
                    i = this.options.news.length;
                0 > t && (t = i - 1, o = !0), t > i - 1 && (t = 0, o = !1), null === this.__paused && (this.__paused = this.paused), this.paused = !0;
                var s = function() {
                        e.paused = e.__paused, e.__paused = null
                    },
                    a = this.currentTarget,
                    r = this.getNewsItem(t);
                this.transition(o, a, r, s), this.prevTarget = a, this.currentTarget = r, this.currentIndex = t
            }
        }, o.prototype.getTransition = function(t) {
            return this[(t || "transition").toLowerCase()]
        }, o.prototype.prev = function() {
            this.skip(this.currentIndex - 1)
        }, o.prototype.next = function() {
            this.skip(this.currentIndex + 1)
        }, o.prototype._show = function() {
            this.play()
        }, o.prototype._hide = function() {
            this.pause(), this.animation.stop(!0, !0), this.animation = null
        }, o.prototype.destroy = function() {
            e.prototype.destroy.call(this), this.animation.stop(!0, !0), this.animation = null
        }, o.prototype.fade = function(t, e, n, o) {
            var i = this.duration;
            this.prevTarget && this.prevTarget.remove(), e && e.stop().fadeOut(i, function() {
                this.remove()
            }), n.css("opacity", 0).delay(i).animate({
                opacity: 1
            }, i, function() {
                o()
            })
        }, o.prototype.slide = function(t, e, n, o) {
            var i = this.duration;
            this.prevTarget && this.prevTarget.remove(), e && e.stop().fadeOut(i, function() {
                this.remove()
            }), n.css({
                left: "20%",
                opacity: 0
            }).delay(i).animate({
                left: 0,
                opacity: 1
            }, i, function() {
                o()
            })
        }, o.prototype.type = function(t, e, n, o) {
            var i = 250;
            this.prevTarget && this.prevTarget.remove(), e && e.stop().fadeOut(i, function() {
                this.remove()
            }), n.width(0).delay(i).animate({
                width: "100%"
            }, 800, function() {
                o()
            })
        }, o.prototype.tick = function(t, e, n, o) {
            var i = this.duration,
                s = "-100%",
                a = "100%";
            e && e.stop().animate({
                top: t ? a : s
            }, i, function() {
                this.remove()
            }), n.css("top", t ? s : a).animate({
                top: "0"
            }, i, function() {
                o()
            })
        }, o.prototype.erase = function(t, e, n, o) {
            var i = this.duration;
            this.prevTarget && this.prevTarget.remove(), e && e.stop().animate({
                height: 0
            }, i, function() {
                this.remove()
            }), n.height(0).delay(i).animate({
                height: "100%"
            }, i, function() {
                o()
            })
        }, o
    }(c);
    l.register("newsticker", y);
    var g = function(t) {
        function e(e) {
            t.call(this, e), this.startLeft = 0, this.node.addClass("newsbar")
        }
        return p(e, t), e.prototype.transition = function(t, e, n, o) {
            e && e.remove(), n.css("left", this.bodywidth), this.currentWidth = n.width(), o()
        }, e.prototype.update = function(t, e) {
            if (!e && !this.paused && 300 > t) {
                var n = this.options.speed,
                    o = this.currentTarget,
                    i = parseFloat(o.css("left")) - t / 1e3 * n;
                o.css("left", i), i < -this.currentWidth && this.next()
            }
        }, e
    }(y);
    l.register("newsbar", g);
    var _ = function(t) {
        function e(e) {
            t.call(this, e), this.interval = 3e3, this.imageSize = [], this.paused = !0, this.count = 0, this.node.addClass("slide dragable"), this.width = this.node.width(), this.height = this.node.height(), this.init()
        }
        return p(e, t), e.prototype.init = function() {
            for (var t, e, i, s = this, a = this.node, r = this.options, d = r.slides, p = n("<ul>").addClass("slide--pages").appendTo(a), l = n("<div>").addClass("slide--title").appendTo(a), c = n("<ul>").addClass("slide--thumbnails").appendTo(a), u = this.width, h = this.height, f = function(t, e) {
                    s.imageSize[e] = {
                        width: t.naturalWidth !== o ? t.naturalWidth : t.width,
                        height: t.naturalHeight !== o ? t.naturalHeight : t.height
                    }, s.setImageSize(t, e)
                }, v = function(t) {
                    return function() {
                        s.skip(t)
                    }
                }, m = 0; i = d[m];) 0 === m && l.html(i.title), e = n("<img>"), this.addLoadItem("img" + m, function(t, e, n) {
                return function(o) {
                    e.one("load error", function() {
                        f(e[0], t), o()
                    }).attr("src", n.src)
                }
            }(m, e, i)), t = n("<li>").appendTo(p).width(u).height(h), i.link ? n("<a>").attr({
                href: i.link,
                target: "_blank",
                title: i.link
            }).append(e).appendTo(t) : t.append(e), n("<li>").appendTo(c).on("click", v(m)), m++
        }, e.prototype.start = function() {
            t.prototype.start.call(this), this.skip(0), this.autoskip(), this.options.autoplay && (this.paused = !1, this.interval = this.options.interval || this.interval)
        }, e.prototype.setImageSize = function(t, e) {
            var o, i, s, a, r, d, p, l, c = this.imageSize[e];
            c && (o = c.width, i = c.height, s = this.width, a = this.height, 0 === o || 0 === i ? (r = t.offsetWidth, d = t.offsetHeight, p = (s - r) / 2, l = (a - d) / 2) : o / i > s / a ? (r = s, d = i / o * s, p = 0, l = (a - d) / 2) : (r = o / i * a, d = a, p = (s - r) / 2, l = 0), n(t).css({
                width: ~~r,
                height: ~~d,
                left: ~~p,
                top: ~~l
            }))
        }, e.prototype.resize = function() {
            var t = this;
            this.width = this.node.width(), this.height = this.node.height(), this.node.find("slide--pagewrap").find("img").each(function(e, n) {
                t.setImageSize(n, e)
            }), this.skip(this.currentIndex)
        }, e.prototype.autoskip = function() {
            var t, e = this,
                o = n.now,
                i = !1;
            this.animation = n({
                a: 0
            }).animate({
                a: 1
            }, {
                duration: 31536e3,
                easing: "linear",
                queue: !1,
                step: function() {
                    var n = o(),
                        s = n - t;
                    !i && !e.paused && 300 > s ? (e.count += s, e.count >= e.interval && e.skip(e.currentIndex + 1)) : e.count = 0, t = n
                }
            });
            var s = function(t) {
                    i = !0
                },
                a = function(t) {
                    i = !1
                };
            this.node.hover(s, a)
        }, e.prototype.skip = function(t) {
            this.count = 0;
            var e = this.options.slides;
            0 > t && (t = e.length - 1), t > e.length - 1 && (t = 0);
            var n = e[t],
                o = (this.node.find(".slide--pages").css("transform", "translateX(" + this.width * -t + "px)"), this.node.find(".slide--title")),
                i = n.title || n.content || "";
            n.link && i && o.html("<a href='" + n.link + "' title='" + i + "' target='_blank'>" + i + "</a>");
            var s = this.node.find(".slide--thumbnails"),
                a = "active";
            s.find("." + a).removeClass(a), s.find("li").eq(t).addClass(a), this.currentIndex = t
        }, e.prototype.prev = function() {
            this.skip(this.currentIndex - 1)
        }, e.prototype.next = function() {
            this.skip(this.currentIndex + 1)
        }, e.prototype.enter = function() {
            var t = this,
                e = this.node.css("opacity", this.options.opacity || 1).find(".slide--title").css("bottom", "-40px"),
                o = this.node.find(".slide--thumbnails li").css({
                    opacity: 0,
                    left: -50
                }),
                i = o.length;
            o.each(function(o, s) {
                n(s).delay(50 * (i - 1 - o)).animate({
                    left: 0,
                    opacity: 1
                }, 300, function() {
                    0 === o && e.animate({
                        bottom: 0
                    }, 300, function() {
                        t.start()
                    })
                })
            })
        }, e.prototype._show = function() {
            this.options.autoplay && (this.paused = !1)
        }, e.prototype._hide = function() {
            this.paused = !0
        }, e.prototype.destroy = function() {
            t.prototype.destroy.call(this), this.animation.stop(!0, !1)
        }, e
    }(c);
    l.register("slide", _), _.addMenuIcon("Autoskip", function(t) {
        var e = this,
            o = n(t),
            i = "menu__autoskip--stop",
            s = "menu__autoskip--play";
        o.addClass(this.options.autoplay ? i : s), o.click(function() {
            e.paused = !e.paused, e.paused ? o.addClass(s).removeClass(i) : o.addClass(i).removeClass(s)
        })
    }), _.addMenuIcon("Previous", function(t) {
        var e = this;
        n(t).click(function() {
            e.prev()
        })
    }), _.addMenuIcon("Next", function(t) {
        var e = this;
        n(t).click(function() {
            e.next()
        })
    });
    var w = function(t) {
        function e(e) {
            t.call(this, e), this.node.addClass("text")
        }
        return p(e, t), e.prototype.init = function() {
            var t = this.node,
                e = this.options,
                o = e.style,
                i = "<style>body{color: " + o.color + ";margin:8px;font-size: " + o.fontSize + "px;}</style>" + e.content;
            if (i.match(/facebook/gi)) t.html(i);
            else {
                var s = n("<iframe>").attr({
                    frameBorder: 0,
                    onmousewheel: !0,
                    allowfullscreen: "",
                    mozallowfullscreen: !0,
                    webkitallowfullscreen: !0,
                    src: "javascript:document.write('" + this.parseCode(i) + "');"
                });
                t.find(".embed__wrap").append(s), this.iframe = s
            }
        }, e
    }(f);
    l.register("text", w);
    var C = function(e) {
        function o(t) {
            e.call(this, t);
            for (var n, o, i = this.node.addClass("ticker"), s = this.options.rss, a = 0; n = s[a++];) o = this.creatItem(n), i.append(o)
        }
        return p(o, e), o.prototype.creatItem = function(e) {
            var o = n('<div class="ticker__item"><img class="item__img"src="' + e.src + '""><div class="item__text"><p class="text__title">' + e.title + '</p><p class="text__content">' + e.content + '</p></div><div class="clear"></div></div>'),
                i = this.options;
            return o.find(".text__title").css(i.title), o.find(".text__content").css(i.content), o.css("backgroundColor", i.style.backgroundColor).hover(function() {
                o.css("backgroundColor", "#fff")
            }, function() {
                o.css("backgroundColor", i.style.backgroundColor)
            }), e.link && o.css("cursor", "pointer").click(function() {
                t.open(e.link, "_blank")
            }), o[0]
        }, o.prototype.enter = function() {
            var t = this,
                e = this.node.css("opacity", this.options.opacity || 1).find(".ticker__item"),
                o = e.length;
            e.each(function(e, i) {
                n(i).delay(100 * e).animate({
                    opacity: 1,
                    top: 0
                }, 500, function() {
                    o - 1 === e && t.start()
                })
            })
        }, o
    }(c);
    l.register("ticker", C);
    var k = function(t) {
        function e(e) {
            t.call(this, e);
            var n = this.player = new h(e);
            this.node.addClass("videoplayer").append(n.node)
        }
        return p(e, t), e.prototype.start = function() {
            t.prototype.start.call(this), this.player.load()
        }, e.prototype._show = function() {
            this.options.autoplay && this.player.video.play()
        }, e.prototype._hide = function() {
            this.player.video.pause()
        }, e.prototype.destroy = function() {
            t.prototype.destroy.call(this), this.player.destroy()
        }, e
    }(c);
    l.register("video", k)
}(window, document, jQuery);