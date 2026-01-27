/** Chunk was on web.js **/
/** chunk id: 350445, original params: e,t,n (module,exports,require) **/
"use strict";
n(747238);
var r = n(446474),
    i = n(693655),
    a = n(221748),
    o = n(503628),
    s = n(380744),
    l = n(706938),
    c = s("species"),
    u = RegExp.prototype;
e.exports = function(e, t, n, d) {
    var f = s(e),
        p = !o(function() {
            var t = {};
            return t[f] = function() {
                return 7
            }, 7 !== "" [e](t)
        }),
        _ = p && !o(function() {
            var t = !1,
                n = /a/;
            return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
                return n
            }, n.flags = "", n[f] = /./ [f]), n.exec = function() {
                return t = !0, null
            }, n[f](""), !t
        });
    if (!p || !_ || n) {
        var h = /./ [f],
            m = t(f, "" [e], function(e, t, n, i, o) {
                var s = t.exec;
                return s === a || s === u.exec ? p && !o ? {
                    done: !0,
                    value: r(h, t, n, i)
                } : {
                    done: !0,
                    value: r(e, n, t, i)
                } : {
                    done: !1
                }
            });
        i(String.prototype, e, m[0]), i(u, f, m[1])
    }
    d && l(u[f], "sham", !0)
}