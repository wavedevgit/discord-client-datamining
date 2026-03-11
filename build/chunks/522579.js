/** chunk id: 522579 params = (module,exports,require) **/
var t = t || function(e) {
    "use strict";
    if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document,
            n = function() {
                return e.URL || e.webkitURL || e
            },
            r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            i = "download" in r,
            a = function(e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t)
            },
            s = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
            l = e.webkitRequestFileSystem,
            o = e.requestFileSystem || l || e.mozRequestFileSystem,
            c = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            u = "application/octet-stream",
            d = 0,
            m = function(e) {
                setTimeout(function() {
                    "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                }, 4e4)
            },
            f = function(e, t, n) {
                for (var r = (t = [].concat(t)).length; r--;) {
                    var i = e["on" + t[r]];
                    if ("function" == typeof i) try {
                        i.call(e, n || e)
                    } catch (e) {
                        c(e)
                    }
                }
            },
            g = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
                    type: e.type
                }) : e
            },
            h = function(t, c, h) {
                h || (t = g(t));
                var p, y, _ = this,
                    x = t.type,
                    v = !1,
                    b = function() {
                        f(_, "writestart progress write writeend".split(" "))
                    },
                    A = function() {
                        if (y && s && "u" > typeof FileReader) {
                            var r = new FileReader;
                            r.onloadend = function() {
                                var e = r.result;
                                y.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), _.readyState = _.DONE, b()
                            }, r.readAsDataURL(t), _.readyState = _.INIT;
                            return
                        }(v || !p) && (p = n().createObjectURL(t)), y ? y.location.href = p : void 0 === e.open(p, "_blank") && s && (e.location.href = p), _.readyState = _.DONE, b(), m(p)
                    },
                    j = function(e) {
                        return function() {
                            if (_.readyState !== _.DONE) return e.apply(this, arguments)
                        }
                    },
                    N = {
                        create: !0,
                        exclusive: !1
                    };
                if (_.readyState = _.INIT, c || (c = "download"), i) {
                    p = n().createObjectURL(t), setTimeout(function() {
                        r.href = p, r.download = c, a(r), b(), m(p), _.readyState = _.DONE
                    });
                    return
                }(e.chrome && x && x !== u && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, u), v = !0), l && "download" !== c && (c += ".download"), (x === u || l) && (y = e), o) ? (d += t.size, o(e.TEMPORARY, d, j(function(e) {
                    e.root.getDirectory("saved", N, j(function(e) {
                        var n = function() {
                            e.getFile(c, N, j(function(e) {
                                e.createWriter(j(function(n) {
                                    n.onwriteend = function(t) {
                                        y.location.href = e.toURL(), _.readyState = _.DONE, f(_, "writeend", t), m(e)
                                    }, n.onerror = function() {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && A()
                                    }, "writestart progress write abort".split(" ").forEach(function(e) {
                                        n["on" + e] = _["on" + e]
                                    }), n.write(t), _.abort = function() {
                                        n.abort(), _.readyState = _.DONE
                                    }, _.readyState = _.WRITING
                                }), A)
                            }), A)
                        };
                        e.getFile(c, {
                            create: !1
                        }, j(function(e) {
                            e.remove(), n()
                        }), j(function(e) {
                            e.code === e.NOT_FOUND_ERR ? n() : A()
                        }))
                    }), A)
                }), A)) : A()
            },
            p = h.prototype;
        return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return n || (e = g(e)), navigator.msSaveOrOpenBlob(e, t || "download")
        } : (p.abort = function() {
            this.readyState = this.DONE, f(this, "abort")
        }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(e, t, n) {
            return new h(e, t, n)
        })
    }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
    return t
})