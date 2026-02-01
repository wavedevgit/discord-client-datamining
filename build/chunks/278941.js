/** chunk id: 278941, original params: e,t,r (module,exports,require) **/
r.d(t, {
    e: () => u
}), r(638769), r(775443);
var n = r(927813),
    i = r(349435),
    s = r(557279),
    o = r(338510),
    l = r(168447),
    a = r(151119);
let c = +n.A.Millis.HOUR,
    p = 12 * n.A.Millis.HOUR;

function u(e) {
    var t;
    let r = (0, o.u)(e),
        n = (0, l.Y)(e),
        u = (0, a.S)(e);
    if (null == r || u || (0, s.S)(n)) return;
    let _ = n.some(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        b = n.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
    if (b.length < 1 || ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let r = new Date(e).getTime() + (t ? c : p);
            return new Date().getTime() >= r
        }(b[0].dismiss_timestamp, _)) return;
    let f = n.filter(e => null == e.dismiss_timestamp);
    return null != (t = f.findLast(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}