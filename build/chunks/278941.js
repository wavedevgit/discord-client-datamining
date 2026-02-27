/** chunk id: 278941, original params: t,e,i (module,exports,require) **/
i.d(e, {
    e: () => p
}), i(775443);
var s = i(927813),
    n = i(349435),
    l = i(557279),
    r = i(338510),
    a = i(168447),
    _ = i(151119);
let o = +s.A.Millis.HOUR,
    u = 12 * s.A.Millis.HOUR;

function p(t) {
    let e = (0, r.u)(t),
        i = (0, a.Y)(t),
        s = (0, _.S)(t);
    if (null == e || s || (0, l.S)(i)) return;
    let p = i.some(t => t.type === n._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        d = i.filter(t => null != t.dismiss_timestamp).sort((t, e) => e.dismiss_timestamp < t.dismiss_timestamp ? -1 : 1);
    if (d.length < 1 || ! function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == t) return !0;
            let i = new Date(t).getTime() + (e ? o : u);
            return new Date().getTime() >= i
        }(d[0].dismiss_timestamp, p)) return;
    let c = i.filter(t => null == t.dismiss_timestamp);
    return c.findLast(t => t.type === n._j.INAPPROPRIATE_CONVERSATION_TIER_1) ?? c.findLast(t => t.type === n._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}