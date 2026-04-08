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
            l = function(e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t)
            },
            a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
            s = e.webkitRequestFileSystem,
            o = e.requestFileSystem || s || e.mozRequestFileSystem,
            u = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            c = "application/octet-stream",
            d = 0,
            h = function(e) {
                setTimeout(function() {
                    "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                }, 4e4)
            },
            m = function(e, t, n) {
                for (var r = (t = [].concat(t)).length; r--;) {
                    var i = e["on" + t[r]];
                    if ("function" == typeof i) try {
                        i.call(e, n || e)
                    } catch (e) {
                        u(e)
                    }
                }
            },
            f = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
                    type: e.type
                }) : e
            },
            p = function(t, u, p) {
                p || (t = f(t));
                var _, v, y = this,
                    g = t.type,
                    x = !1,
                    E = function() {
                        m(y, "writestart progress write writeend".split(" "))
                    },
                    A = function() {
                        if (v && a && "u" > typeof FileReader) {
                            var r = new FileReader;
                            r.onloadend = function() {
                                var e = r.result;
                                v.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), y.readyState = y.DONE, E()
                            }, r.readAsDataURL(t), y.readyState = y.INIT;
                            return
                        }(x || !_) && (_ = n().createObjectURL(t)), v ? v.location.href = _ : void 0 === e.open(_, "_blank") && a && (e.location.href = _), y.readyState = y.DONE, E(), h(_)
                    },
                    b = function(e) {
                        return function() {
                            if (y.readyState !== y.DONE) return e.apply(this, arguments)
                        }
                    },
                    S = {
                        create: !0,
                        exclusive: !1
                    };
                if (y.readyState = y.INIT, u || (u = "download"), i) {
                    _ = n().createObjectURL(t), setTimeout(function() {
                        r.href = _, r.download = u, l(r), E(), h(_), y.readyState = y.DONE
                    });
                    return
                }(e.chrome && g && g !== c && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, c), x = !0), s && "download" !== u && (u += ".download"), (g === c || s) && (v = e), o) ? (d += t.size, o(e.TEMPORARY, d, b(function(e) {
                    e.root.getDirectory("saved", S, b(function(e) {
                        var n = function() {
                            e.getFile(u, S, b(function(e) {
                                e.createWriter(b(function(n) {
                                    n.onwriteend = function(t) {
                                        v.location.href = e.toURL(), y.readyState = y.DONE, m(y, "writeend", t), h(e)
                                    }, n.onerror = function() {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && A()
                                    }, "writestart progress write abort".split(" ").forEach(function(e) {
                                        n["on" + e] = y["on" + e]
                                    }), n.write(t), y.abort = function() {
                                        n.abort(), y.readyState = y.DONE
                                    }, y.readyState = y.WRITING
                                }), A)
                            }), A)
                        };
                        e.getFile(u, {
                            create: !1
                        }, b(function(e) {
                            e.remove(), n()
                        }), b(function(e) {
                            e.code === e.NOT_FOUND_ERR ? n() : A()
                        }))
                    }), A)
                }), A)) : A()
            },
            _ = p.prototype;
        return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return n || (e = f(e)), navigator.msSaveOrOpenBlob(e, t || "download")
        } : (_.abort = function() {
            this.readyState = this.DONE, m(this, "abort")
        }, _.readyState = _.INIT = 0, _.WRITING = 1, _.DONE = 2, _.error = _.onwritestart = _.onprogress = _.onwrite = _.onabort = _.onerror = _.onwriteend = null, function(e, t, n) {
            return new p(e, t, n)
        })
    }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
    return t
})