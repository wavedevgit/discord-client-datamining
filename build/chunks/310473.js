/** Chunk was on web.js **/
/** chunk id: 310473, original params: e,t,n (module,exports,require) **/
var r = n(876666),
    i = n(752909),
    a = n(750615);
e.exports = function(e) {
    return function(t, n, o) {
        var s = Object(t);
        if (!i(t)) {
            var l = r(n, 3);
            t = a(t), n = function(e) {
                return l(s[e], e, s)
            }
        }
        var c = e(t, n, o);
        return c > -1 ? s[l ? t[c] : c] : void 0
    }
}