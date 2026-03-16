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
                var y, p, _ = this,
                    x = t.type,
                    b = !1,
                    v = function() {
                        f(_, "writestart progress write writeend".split(" "))
                    },
                    A = function() {
                        if (p && s && "u" > typeof FileReader) {
                            var r = new FileReader;
                            r.onloadend = function() {
                                var e = r.result;
                                p.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), _.readyState = _.DONE, v()
                            }, r.readAsDataURL(t), _.readyState = _.INIT;
                            return
                        }(b || !y) && (y = n().createObjectURL(t)), p ? p.location.href = y : void 0 === e.open(y, "_blank") && s && (e.location.href = y), _.readyState = _.DONE, v(), m(y)
                    },
                    j = function(e) {
                        return function() {
                            if (_.readyState !== _.DONE) return e.apply(this, arguments)
                        }
                    },
                    S = {
                        create: !0,
                        exclusive: !1
                    };
                if (_.readyState = _.INIT, c || (c = "download"), i) {
                    y = n().createObjectURL(t), setTimeout(function() {
                        r.href = y, r.download = c, a(r), v(), m(y), _.readyState = _.DONE
                    });
                    return
                }(e.chrome && x && x !== u && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, u), b = !0), l && "download" !== c && (c += ".download"), (x === u || l) && (p = e), o) ? (d += t.size, o(e.TEMPORARY, d, j(function(e) {
                    e.root.getDirectory("saved", S, j(function(e) {
                        var n = function() {
                            e.getFile(c, S, j(function(e) {
                                e.createWriter(j(function(n) {
                                    n.onwriteend = function(t) {
                                        p.location.href = e.toURL(), _.readyState = _.DONE, f(_, "writeend", t), m(e)
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
            y = h.prototype;
        return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return n || (e = g(e)), navigator.msSaveOrOpenBlob(e, t || "download")
        } : (y.abort = function() {
            this.readyState = this.DONE, f(this, "abort")
        }, y.readyState = y.INIT = 0, y.WRITING = 1, y.DONE = 2, y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null, function(e, t, n) {
            return new h(e, t, n)
        })
    }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
    return t
})