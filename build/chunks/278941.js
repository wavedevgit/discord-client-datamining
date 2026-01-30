/** chunk id: 278941, original params: e,t,r (module,exports,require) **/
r.d(t, {
    e: () => p
}), r(638769), r(775443);
var n = r(927813),
    i = r(349435),
    o = r(557279),
    s = r(338510),
    l = r(168447),
    a = r(151119);
let c = +n.A.Millis.HOUR,
    u = 12 * n.A.Millis.HOUR;

function p(e) {
    var t;
    let r = (0, s.u)(e),
        n = (0, l.Y)(e),
        p = (0, a.S)(e);
    if (null == r || p || (0, o.S)(n)) return;
    let _ = n.some(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        b = n.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
    if (b.length < 1 || ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let r = new Date(e).getTime() + (t ? c : u);
            return new Date().getTime() >= r
        }(b[0].dismiss_timestamp, _)) return;
    let f = n.filter(e => null == e.dismiss_timestamp);
    return null != (t = f.findLast(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}