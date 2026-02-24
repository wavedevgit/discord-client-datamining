/** chunk id: 522579, original params: e (module,exports,require) **/
var t = t || function(e) {
    "use strict";
    if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document,
            n = function() {
                return e.URL || e.webkitURL || e
            },
            o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            r = "download" in o,
            i = function(e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t)
            },
            a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
            s = e.webkitRequestFileSystem,
            c = e.requestFileSystem || s || e.mozRequestFileSystem,
            l = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            d = "application/octet-stream",
            u = 0,
            _ = function(e) {
                setTimeout(function() {
                    "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                }, 4e4)
            },
            b = function(e, t, n) {
                for (var o = (t = [].concat(t)).length; o--;) {
                    var r = e["on" + t[o]];
                    if ("function" == typeof r) try {
                        r.call(e, n || e)
                    } catch (e) {
                        l(e)
                    }
                }
            },
            f = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
                    type: e.type
                }) : e
            },
            m = function(t, l, m) {
                m || (t = f(t));
                var p, g, S = this,
                    h = t.type,
                    R = !1,
                    w = function() {
                        b(S, "writestart progress write writeend".split(" "))
                    },
                    x = function() {
                        if (g && a && "u" > typeof FileReader) {
                            var o = new FileReader;
                            o.onloadend = function() {
                                var e = o.result;
                                g.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), S.readyState = S.DONE, w()
                            }, o.readAsDataURL(t), S.readyState = S.INIT;
                            return
                        }(R || !p) && (p = n().createObjectURL(t)), g ? g.location.href = p : void 0 === e.open(p, "_blank") && a && (e.location.href = p), S.readyState = S.DONE, w(), _(p)
                    },
                    v = function(e) {
                        return function() {
                            if (S.readyState !== S.DONE) return e.apply(this, arguments)
                        }
                    },
                    y = {
                        create: !0,
                        exclusive: !1
                    };
                if (S.readyState = S.INIT, l || (l = "download"), r) {
                    p = n().createObjectURL(t), setTimeout(function() {
                        o.href = p, o.download = l, i(o), w(), _(p), S.readyState = S.DONE
                    });
                    return
                }(e.chrome && h && h !== d && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, d), R = !0), s && "download" !== l && (l += ".download"), (h === d || s) && (g = e), c) ? (u += t.size, c(e.TEMPORARY, u, v(function(e) {
                    e.root.getDirectory("saved", y, v(function(e) {
                        var n = function() {
                            e.getFile(l, y, v(function(e) {
                                e.createWriter(v(function(n) {
                                    n.onwriteend = function(t) {
                                        g.location.href = e.toURL(), S.readyState = S.DONE, b(S, "writeend", t), _(e)
                                    }, n.onerror = function() {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && x()
                                    }, "writestart progress write abort".split(" ").forEach(function(e) {
                                        n["on" + e] = S["on" + e]
                                    }), n.write(t), S.abort = function() {
                                        n.abort(), S.readyState = S.DONE
                                    }, S.readyState = S.WRITING
                                }), x)
                            }), x)
                        };
                        e.getFile(l, {
                            create: !1
                        }, v(function(e) {
                            e.remove(), n()
                        }), v(function(e) {
                            e.code === e.NOT_FOUND_ERR ? n() : x()
                        }))
                    }), x)
                }), x)) : x()
            },
            p = m.prototype;
        return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return n || (e = f(e)), navigator.msSaveOrOpenBlob(e, t || "download")
        } : (p.abort = function() {
            this.readyState = this.DONE, b(this, "abort")
        }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(e, t, n) {
            return new m(e, t, n)
        })
    }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
    return t
})