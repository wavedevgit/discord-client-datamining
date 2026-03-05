/** chunk id: 278941, original params: t,e,i (module,exports,require) **/
i.d(e, {
    e: () => m
}), i(775443);
var s = i(927813),
    _ = i(349435),
    l = i(557279),
    n = i(338510),
    r = i(168447),
    o = i(151119);
let a = +s.A.Millis.HOUR,
    p = 12 * s.A.Millis.HOUR;

function m(t) {
    let e = (0, n.u)(t),
        i = (0, r.Y)(t),
        s = (0, o.S)(t);
    if (null == e || s || (0, l.S)(i)) return;
    let m = i.some(t => t.type === _._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        u = i.filter(t => null != t.dismiss_timestamp).sort((t, e) => e.dismiss_timestamp < t.dismiss_timestamp ? -1 : 1);
    if (u.length < 1 || ! function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == t) return !0;
            let i = new Date(t).getTime() + (e ? a : p);
            return new Date().getTime() >= i
        }(u[0].dismiss_timestamp, m)) return;
    let d = i.filter(t => null == t.dismiss_timestamp);
    return d.findLast(t => t.type === _._j.INAPPROPRIATE_CONVERSATION_TIER_1) ?? d.findLast(t => t.type === _._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}