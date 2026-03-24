/** chunk id: 555378 params = (module,exports,require) **/
var n = i(66823),
    s = i(274581),
    a = i(279137),
    l = i(659671);
e.exports = function(e) {
    return function(t) {
        var i = s(t = l(t)) ? a(t) : void 0,
            r = i ? i[0] : t.charAt(0),
            o = i ? n(i, 1).join("") : t.slice(1);
        return r[e]() + o
    }
}