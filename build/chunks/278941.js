/** Chunk was on 77870 **/
/** chunk id: 278941, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => d
}), n(638769), n(775443);
var r = n(927813),
    l = n(349435),
    i = n(557279),
    s = n(338510),
    a = n(168447),
    o = n(151119);
let c = +r.A.Millis.HOUR,
    u = 12 * r.A.Millis.HOUR;

function d(e) {
    var t;
    let n = (0, s.u)(e),
        r = (0, a.Y)(e),
        d = (0, o.S)(e);
    if (null == n || d || (0, i.S)(r)) return;
    let p = r.some(e => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        h = r.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
    if (h.length < 1 || ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let n = new Date(e).getTime() + (t ? c : u);
            return new Date().getTime() >= n
        }(h[0].dismiss_timestamp, p)) return;
    let f = r.filter(e => null == e.dismiss_timestamp);
    return null != (t = f.findLast(e => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}