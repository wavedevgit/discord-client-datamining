/** chunk id: 555378 params = (module,exports,require) **/
var i = n(66823),
    s = n(274581),
    a = n(279137),
    l = n(659671);
e.exports = function(e) {
    return function(t) {
        var n = s(t = l(t)) ? a(t) : void 0,
            r = n ? n[0] : t.charAt(0),
            o = n ? i(n, 1).join("") : t.slice(1);
        return r[e]() + o
    }
}