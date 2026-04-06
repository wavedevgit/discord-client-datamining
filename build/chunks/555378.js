/** chunk id: 555378 params = (module,exports,require) **/
var i = n(66823),
    s = n(274581),
    l = n(279137),
    r = n(659671);
e.exports = function(e) {
    return function(t) {
        var n = s(t = r(t)) ? l(t) : void 0,
            a = n ? n[0] : t.charAt(0),
            o = n ? i(n, 1).join("") : t.slice(1);
        return a[e]() + o
    }
}