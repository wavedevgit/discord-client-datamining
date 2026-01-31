/** chunk id: 258671, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => r
}), t(896048);
var s = t(64700),
    n = t(311907),
    i = t(857182),
    o = t(560010);
let a = +t(927813).A.Millis.HOUR;

function r(e) {
    let [l, t] = s.useState(!1), r = (0, n.bG)([o.A], () => o.A.getFollowerStatsForChannel(e), [e]);
    return s.useEffect(() => {
        (null == r || Date.now() - r.lastFetched > a) && !l ? (t(!0), i.A.fetchChannelFollowerStats(e)) : null != r && l && t(!1)
    }, [e, r, l]), [r, l]
}