/** chunk id: 661908, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(638769), n(896048);
var i = n(64700),
    r = n(974690),
    l = n(311907),
    a = n(205184),
    s = n(21119),
    o = n(927813),
    u = n(661191),
    c = n(20805),
    d = n(583846);
let h = o.A.Millis.WEEK;

function p(e) {
    let t = (0, a.s)(e),
        n = (0, l.cf)([s.A], () => s.A.getUserAffinitiesMap());
    return i.useMemo(() => null == t ? [] : t.filter(t => (0, c.zD)(t) && (0, c.P)(t) && t.extra.application_id === e && u.default.age(t.id) < h).sort((e, t) => g(n, t) - g(n, e)), [t, e, n])
}
let f = 30 * o.A.Seconds.MINUTE;

function g(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let i = Math.max(...n.map(t => {
            var n;
            let i = e.get(t);
            return (null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0) + 1e-4
        })),
        l = Math.exp(-(u.default.age(t.id) / 1e3 / f * .01)),
        a = t.traits.some(e => e.type !== r.K.DURATION_SECONDS),
        s = (0, d.I5)(t);
    return i * l * (1 + .6 * (a && !s ? 1 : 0))
}