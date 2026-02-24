/** chunk id: 522579, original params: t (module,exports,require) **/
var e = e || function(t) {
    "use strict";
    if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var e = t.document,
            o = function() {
                return t.URL || t.webkitURL || t
            },
            n = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            r = "download" in n,
            i = function(t) {
                var e = new MouseEvent("click");
                t.dispatchEvent(e)
            },
            a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
            s = t.webkitRequestFileSystem,
            c = t.requestFileSystem || s || t.mozRequestFileSystem,
            l = function(e) {
                (t.setImmediate || t.setTimeout)(function() {
                    throw e
                }, 0)
            },
            f = "application/octet-stream",
            u = 0,
            h = function(t) {
                setTimeout(function() {
                    "string" == typeof t ? o().revokeObjectURL(t) : t.remove()
                }, 4e4)
            },
            d = function(t, e, o) {
                for (var n = (e = [].concat(e)).length; n--;) {
                    var r = t["on" + e[n]];
                    if ("function" == typeof r) try {
                        r.call(t, o || t)
                    } catch (t) {
                        l(t)
                    }
                }
            },
            y = function(t) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
                    type: t.type
                }) : t
            },
            w = function(e, l, w) {
                w || (e = y(e));
                var p, g, m = this,
                    x = e.type,
                    b = !1,
                    v = function() {
                        d(m, "writestart progress write writeend".split(" "))
                    },
                    E = function() {
                        if (g && a && "u" > typeof FileReader) {
                            var n = new FileReader;
                            n.onloadend = function() {
                                var t = n.result;
                                g.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), m.readyState = m.DONE, v()
                            }, n.readAsDataURL(e), m.readyState = m.INIT;
                            return
                        }(b || !p) && (p = o().createObjectURL(e)), g ? g.location.href = p : void 0 === t.open(p, "_blank") && a && (t.location.href = p), m.readyState = m.DONE, v(), h(p)
                    },
                    I = function(t) {
                        return function() {
                            if (m.readyState !== m.DONE) return t.apply(this, arguments)
                        }
                    },
                    R = {
                        create: !0,
                        exclusive: !1
                    };
                if (m.readyState = m.INIT, l || (l = "download"), r) {
                    p = o().createObjectURL(e), setTimeout(function() {
                        n.href = p, n.download = l, i(n), v(), h(p), m.readyState = m.DONE
                    });
                    return
                }(t.chrome && x && x !== f && (e = (e.slice || e.webkitSlice).call(e, 0, e.size, f), b = !0), s && "download" !== l && (l += ".download"), (x === f || s) && (g = t), c) ? (u += e.size, c(t.TEMPORARY, u, I(function(t) {
                    t.root.getDirectory("saved", R, I(function(t) {
                        var o = function() {
                            t.getFile(l, R, I(function(t) {
                                t.createWriter(I(function(o) {
                                    o.onwriteend = function(e) {
                                        g.location.href = t.toURL(), m.readyState = m.DONE, d(m, "writeend", e), h(t)
                                    }, o.onerror = function() {
                                        var t = o.error;
                                        t.code !== t.ABORT_ERR && E()
                                    }, "writestart progress write abort".split(" ").forEach(function(t) {
                                        o["on" + t] = m["on" + t]
                                    }), o.write(e), m.abort = function() {
                                        o.abort(), m.readyState = m.DONE
                                    }, m.readyState = m.WRITING
                                }), E)
                            }), E)
                        };
                        t.getFile(l, {
                            create: !1
                        }, I(function(t) {
                            t.remove(), o()
                        }), I(function(t) {
                            t.code === t.NOT_FOUND_ERR ? o() : E()
                        }))
                    }), E)
                }), E)) : E()
            },
            p = w.prototype;
        return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, o) {
            return o || (t = y(t)), navigator.msSaveOrOpenBlob(t, e || "download")
        } : (p.abort = function() {
            this.readyState = this.DONE, d(this, "abort")
        }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(t, e, o) {
            return new w(t, e, o)
        })
    }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
t.exports ? t.exports.saveAs = e : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
    return e
})