/** Chunk was on 20941 **/
/** chunk id: 849504, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => u
});
var r = n(64700),
    l = n(311907),
    a = n(339048),
    i = n(544420),
    s = n(796104),
    o = n(719718),
    c = n(652215);

function u() {
    let e = (0, l.bG)([o.A], () => o.A.getFetchState()),
        t = (0, l.bG)([o.A], () => o.A.getCheckpointData()),
        n = (0, r.useMemo)(() => null != t.applications ? t.applications.applications.map(e => e.game.id) : [], [t.applications]);
    return (0, r.useEffect)(() => {
        e === o.$.INIT && ((0, s.nX)(), (0, a.qw)({
            entitlementType: c.zF_.FREE_PURCHASE
        }))
    }, [e]), (0, r.useEffect)(() => {
        i.A.getDetectableGamesSupplemental(n)
    }, [n]), e
}