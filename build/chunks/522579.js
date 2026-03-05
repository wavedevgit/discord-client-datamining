/** chunk id: 522579 params = (module,exports,require) **/
var t = t || function(e) {
    "use strict";
    if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document,
            r = function() {
                return e.URL || e.webkitURL || e
            },
            a = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            n = "download" in a,
            o = function(e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t)
            },
            s = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
            i = e.webkitRequestFileSystem,
            c = e.requestFileSystem || i || e.mozRequestFileSystem,
            l = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            u = "application/octet-stream",
            b = 0,
            f = function(e) {
                setTimeout(function() {
                    "string" == typeof e ? r().revokeObjectURL(e) : e.remove()
                }, 4e4)
            },
            d = function(e, t, r) {
                for (var a = (t = [].concat(t)).length; a--;) {
                    var n = e["on" + t[a]];
                    if ("function" == typeof n) try {
                        n.call(e, r || e)
                    } catch (e) {
                        l(e)
                    }
                }
            },
            h = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
                    type: e.type
                }) : e
            },
            p = function(t, l, p) {
                p || (t = h(t));
                var y, v, g = this,
                    m = t.type,
                    A = !1,
                    w = function() {
                        d(g, "writestart progress write writeend".split(" "))
                    },
                    O = function() {
                        if (v && s && "u" > typeof FileReader) {
                            var a = new FileReader;
                            a.onloadend = function() {
                                var e = a.result;
                                v.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), g.readyState = g.DONE, w()
                            }, a.readAsDataURL(t), g.readyState = g.INIT;
                            return
                        }(A || !y) && (y = r().createObjectURL(t)), v ? v.location.href = y : void 0 === e.open(y, "_blank") && s && (e.location.href = y), g.readyState = g.DONE, w(), f(y)
                    },
                    k = function(e) {
                        return function() {
                            if (g.readyState !== g.DONE) return e.apply(this, arguments)
                        }
                    },
                    E = {
                        create: !0,
                        exclusive: !1
                    };
                if (g.readyState = g.INIT, l || (l = "download"), n) {
                    y = r().createObjectURL(t), setTimeout(function() {
                        a.href = y, a.download = l, o(a), w(), f(y), g.readyState = g.DONE
                    });
                    return
                }(e.chrome && m && m !== u && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, u), A = !0), i && "download" !== l && (l += ".download"), (m === u || i) && (v = e), c) ? (b += t.size, c(e.TEMPORARY, b, k(function(e) {
                    e.root.getDirectory("saved", E, k(function(e) {
                        var r = function() {
                            e.getFile(l, E, k(function(e) {
                                e.createWriter(k(function(r) {
                                    r.onwriteend = function(t) {
                                        v.location.href = e.toURL(), g.readyState = g.DONE, d(g, "writeend", t), f(e)
                                    }, r.onerror = function() {
                                        var e = r.error;
                                        e.code !== e.ABORT_ERR && O()
                                    }, "writestart progress write abort".split(" ").forEach(function(e) {
                                        r["on" + e] = g["on" + e]
                                    }), r.write(t), g.abort = function() {
                                        r.abort(), g.readyState = g.DONE
                                    }, g.readyState = g.WRITING
                                }), O)
                            }), O)
                        };
                        e.getFile(l, {
                            create: !1
                        }, k(function(e) {
                            e.remove(), r()
                        }), k(function(e) {
                            e.code === e.NOT_FOUND_ERR ? r() : O()
                        }))
                    }), O)
                }), O)) : O()
            },
            y = p.prototype;
        return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, r) {
            return r || (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download")
        } : (y.abort = function() {
            this.readyState = this.DONE, d(this, "abort")
        }, y.readyState = y.INIT = 0, y.WRITING = 1, y.DONE = 2, y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null, function(e, t, r) {
            return new p(e, t, r)
        })
    }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
    return t
})