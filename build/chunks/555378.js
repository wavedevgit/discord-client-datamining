/** Chunk was on 84018 **/
/** chunk id: 555378, original params: e,t,n (module,exports,require) **/
var i = n(66823),
    r = n(274581),
    s = n(279137),
    l = n(659671);
e.exports = function(e) {
    return function(t) {
        var n = r(t = l(t)) ? s(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            a = n ? i(n, 1).join("") : t.slice(1);
        return o[e]() + a
    }
}