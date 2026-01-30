/** chunk id: 826383, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var l = n(64700),
    r = n(311907),
    i = n(285059),
    s = n(698441);

function a(e, t, n) {
    let a = (0, r.bG)([s.Ay], () => s.Ay.getUserCount(t, n));
    return (0, l.useEffect)(() => {
        null != e && null != t && i.A.getGuildEventUserCounts(e, t, null != n ? [n] : [])
    }, [t, e, n]), a
}