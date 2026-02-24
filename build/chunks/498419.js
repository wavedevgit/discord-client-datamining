/** chunk id: 498419, original params: t (module,exports,require) **/ ! function() {
    var e = function(t) {
        "use strict";
        t = t || {};
        var e, n, o, r, i, a, s, c, l, f, u, h, d, y, w, g, p = {
            bgColor: "#d00",
            textColor: "#fff",
            fontFamily: "sans-serif",
            fontStyle: "bold",
            type: "circle",
            position: "down",
            animation: "slide",
            elementId: !1,
            dataUrl: !1,
            win: window
        };
        (d = {}).ff = "u" > typeof InstallTrigger, d.chrome = !!window.chrome, d.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, d.ie = !1, d.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, d.supported = d.chrome || d.ff || d.opera;
        var m = [];
        u = function() {}, c = h = !1;
        var x = {};
        x.ready = function() {
            c = !0, x.reset(), u()
        }, x.reset = function() {
            c && (m = [], l = !1, f = !1, a.clearRect(0, 0, r, o), a.drawImage(s, 0, 0, r, o), I.setIcon(i), window.clearTimeout(y), window.clearTimeout(w))
        }, x.start = function() {
            if (c && !f) {
                var t = function() {
                    l = m[0], f = !1, m.length > 0 && (m.shift(), x.start())
                };
                if (m.length > 0) {
                    f = !0;
                    var n = function() {
                        ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(t) {
                            t in m[0].options && (e[t] = m[0].options[t])
                        }), S.run(m[0].options, function() {
                            t()
                        }, !1)
                    };
                    l ? S.run(l.options, function() {
                        n()
                    }, !0) : n()
                }
            }
        };
        var v = {},
            b = function(t) {
                return t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n, t.x = r * t.x, t.y = o * t.y, t.w = r * t.w, t.h = o * t.h, t.len = ("" + t.n).length, t
            };

        function E(t) {
            if (t.paused || t.ended || h) return !1;
            try {
                a.clearRect(0, 0, r, o), a.drawImage(t, 0, 0, r, o)
            } catch (t) {}
            w = setTimeout(function() {
                E(t)
            }, S.duration), I.setIcon(i)
        }
        v.circle = function(t) {
            t = b(t);
            var n = !1;
            2 === t.len ? (t.x = t.x - .4 * t.w, t.w = 1.4 * t.w, n = !0) : t.len >= 3 && (t.x = t.x - .65 * t.w, t.w = 1.65 * t.w, n = !0), a.clearRect(0, 0, r, o), a.drawImage(s, 0, 0, r, o), a.beginPath(), a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .85 : 1)) + "px " + e.fontFamily, a.textAlign = "center", n ? (a.moveTo(t.x + t.w / 2, t.y), a.lineTo(t.x + t.w - t.h / 2, t.y), a.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2), a.lineTo(t.x + t.w, t.y + t.h - t.h / 2), a.quadraticCurveTo(t.x + t.w, t.y + t.h, t.x + t.w - t.h / 2, t.y + t.h), a.lineTo(t.x + t.h / 2, t.y + t.h), a.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2), a.lineTo(t.x, t.y + t.h / 2), a.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y)) : a.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")", "number" == typeof t.n && t.n > 999 ? a.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h)), a.closePath()
        }, v.rectangle = function(t) {
            t = b(t);
            2 === t.len ? (t.x = t.x - .4 * t.w, t.w = 1.4 * t.w) : t.len >= 3 && (t.x = t.x - .65 * t.w, t.w = 1.65 * t.w), a.clearRect(0, 0, r, o), a.drawImage(s, 0, 0, r, o), a.beginPath(), a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .9 : 1)) + "px " + e.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")", a.fillRect(t.x, t.y, t.w, t.h), a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")", "number" == typeof t.n && t.n > 999 ? a.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h)), a.closePath()
        };
        var I = {};

        function C(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, o) {
                return e + e + n + n + o + o
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return !!e && {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            }
        }

        function R(t, e) {
            var n, o = {};
            for (n in t) o[n] = t[n];
            for (n in e) o[n] = e[n];
            return o
        }
        I.getIcon = function() {
            var t = !1;
            return e.element ? t = e.element : e.elementId ? (t = g.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src")) : !1 === (t = function() {
                for (var t = g.getElementsByTagName("head")[0].getElementsByTagName("link"), e = t.length, n = e - 1; n >= 0; n--)
                    if (/(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel"))) return t[n];
                return !1
            }()) && ((t = g.createElement("link")).setAttribute("rel", "icon"), g.getElementsByTagName("head")[0].appendChild(t)), t.setAttribute("type", "image/png"), t
        }, I.setIcon = function(t) {
            var o = t.toDataURL("image/png");
            if (e.dataUrl && e.dataUrl(o), e.element) e.element.setAttribute("href", o), e.element.setAttribute("src", o);
            else if (e.elementId) {
                var r = g.getElementById(e.elementId);
                r.setAttribute("href", o), r.setAttribute("src", o)
            } else if (d.ff || d.opera) {
                var i = n;
                n = g.createElement("link"), d.opera && n.setAttribute("rel", "icon"), n.setAttribute("rel", "icon"), n.setAttribute("type", "image/png"), g.getElementsByTagName("head")[0].appendChild(n), n.setAttribute("href", o), i.parentNode && i.parentNode.removeChild(i)
            } else n.setAttribute("href", o)
        };
        var S = {};
        S.duration = 40, S.types = {}, S.types.fade = [{
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: 0
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .1
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .2
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .3
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .4
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .5
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .6
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .7
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .8
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: .9
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: 1
        }], S.types.none = [{
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: 1
        }], S.types.pop = [{
            x: 1,
            y: 1,
            w: 0,
            h: 0,
            o: 1
        }, {
            x: .9,
            y: .9,
            w: .1,
            h: .1,
            o: 1
        }, {
            x: .8,
            y: .8,
            w: .2,
            h: .2,
            o: 1
        }, {
            x: .7,
            y: .7,
            w: .3,
            h: .3,
            o: 1
        }, {
            x: .6,
            y: .6,
            w: .4,
            h: .4,
            o: 1
        }, {
            x: .5,
            y: .5,
            w: .5,
            h: .5,
            o: 1
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: 1
        }], S.types.popFade = [{
            x: .75,
            y: .75,
            w: 0,
            h: 0,
            o: 0
        }, {
            x: .65,
            y: .65,
            w: .1,
            h: .1,
            o: .2
        }, {
            x: .6,
            y: .6,
            w: .2,
            h: .2,
            o: .4
        }, {
            x: .55,
            y: .55,
            w: .3,
            h: .3,
            o: .6
        }, {
            x: .5,
            y: .5,
            w: .4,
            h: .4,
            o: .8
        }, {
            x: .45,
            y: .45,
            w: .5,
            h: .5,
            o: .9
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: 1
        }], S.types.slide = [{
            x: .4,
            y: 1,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .9,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .9,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .8,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .7,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .6,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .5,
            w: .6,
            h: .6,
            o: 1
        }, {
            x: .4,
            y: .4,
            w: .6,
            h: .6,
            o: 1
        }], S.run = function(t, n, o, r) {
            var a = S.types[g.hidden || g.msHidden || g.webkitHidden || g.mozHidden ? "none" : e.animation];
            (r = !0 === o ? void 0 !== r ? r : a.length - 1 : void 0 !== r ? r : 0, n = n || function() {}, r < a.length && r >= 0) ? (v[e.type](R(t, a[r])), y = setTimeout(function() {
                o ? r -= 1 : r += 1, S.run(t, n, o, r)
            }, S.duration), I.setIcon(i)) : n()
        }, (e = R(p, t)).bgColor = C(e.bgColor), e.textColor = C(e.textColor), e.position = e.position.toLowerCase(), e.animation = S.types["" + e.animation] ? e.animation : p.animation, g = e.win.document;
        var T = e.position.indexOf("up") > -1,
            A = e.position.indexOf("left") > -1;
        if (T || A)
            for (var M = 0; M < S.types["" + e.animation].length; M++) {
                var O = S.types["" + e.animation][M];
                T && (O.y < .6 ? O.y = O.y - .4 : O.y = O.y - 2 * O.y + (1 - O.w)), A && (O.x < .6 ? O.x = O.x - .4 : O.x = O.x - 2 * O.x + (1 - O.h)), S.types["" + e.animation][M] = O
            }
        return e.type = v["" + e.type] ? e.type : p.type, n = I.getIcon(), i = document.createElement("canvas"), s = document.createElement("img"), n.hasAttribute("href") ? (s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
            o = s.height > 0 ? s.height : 32, r = s.width > 0 ? s.width : 32, i.height = o, i.width = r, a = i.getContext("2d"), x.ready()
        }, s.setAttribute("src", n.getAttribute("href"))) : (s.onload = function() {
            o = 32, r = 32, s.height = o, s.width = r, i.height = o, i.width = r, a = i.getContext("2d"), x.ready()
        }, s.setAttribute("src", "")), {
            badge: function(t, e) {
                e = ("string" == typeof e ? {
                    animation: e
                } : e) || {}, u = function() {
                    try {
                        if ("number" == typeof t ? t > 0 : "" !== t) {
                            var n = {
                                type: "badge",
                                options: {
                                    n: t
                                }
                            };
                            if ("animation" in e && S.types["" + e.animation] && (n.options.animation = "" + e.animation), "type" in e && v["" + e.type] && (n.options.type = "" + e.type), ["bgColor", "textColor"].forEach(function(t) {
                                    t in e && (n.options[t] = C(e[t]))
                                }), ["fontStyle", "fontFamily"].forEach(function(t) {
                                    t in e && (n.options[t] = e[t])
                                }), m.push(n), m.length > 100) throw Error("Too many badges requests in queue.");
                            x.start()
                        } else x.reset()
                    } catch (t) {
                        throw Error("Error setting badge. Message: " + t.message)
                    }
                }, c && u()
            },
            video: function(t) {
                u = function() {
                    try {
                        if ("stop" === t) {
                            h = !0, x.reset(), h = !1;
                            return
                        }
                        t.addEventListener("play", function() {
                            E(this)
                        }, !1)
                    } catch (t) {
                        throw Error("Error setting video. Message: " + t.message)
                    }
                }, c && u()
            },
            image: function(t) {
                u = function() {
                    try {
                        var e = t.width,
                            n = t.height,
                            s = document.createElement("img"),
                            c = e / r < n / o ? e / r : n / o;
                        s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
                            a.clearRect(0, 0, r, o), a.drawImage(s, 0, 0, r, o), I.setIcon(i)
                        }, s.setAttribute("src", t.getAttribute("src")), s.height = n / c, s.width = e / c
                    } catch (t) {
                        throw Error("Error setting image. Message: " + t.message)
                    }
                }, c && u()
            },
            webcam: function(t) {
                if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(t) {
                        return t
                    }), d.supported) {
                    var e = !1;
                    navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, u = function() {
                        try {
                            if ("stop" === t) {
                                h = !0, x.reset(), h = !1;
                                return
                            }(e = document.createElement("video")).width = r, e.height = o, navigator.getUserMedia({
                                video: !0,
                                audio: !1
                            }, function(t) {
                                e.src = URL.createObjectURL(t), e.play(), E(e)
                            }, function() {})
                        } catch (t) {
                            throw Error("Error setting webcam. Message: " + t.message)
                        }
                    }, c && u()
                }
            },
            reset: x.reset,
            browser: {
                supported: d.supported
            }
        }
    };
    "u" > typeof define && define.amd ? define([], function() {
        return e
    }) : t.exports ? t.exports = e : this.Favico = e
}()