/** Chunk was on 64935 **/
/** chunk id: 664654, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J: () => c,
    Z: () => o
});
var r = n(64700),
    i = n(311907),
    l = n(803306),
    a = n(287809),
    s = n(851746);
let o = 3;

function c() {
    let e = (0, i.yK)([s.A], () => s.A.getSentUserIds()),
        t = (0, i.yK)([a.default], () => e.map(e => a.default.getUser(e)).filter(e => null != e));
    return r.useEffect(() => {
        e.forEach(e => {
            (0, l.wz)(e)
        })
    }, [e]), {
        referralSentUsers: t,
        hasSentAllReferrals: e.length === o,
        refreshAt: (0, i.bG)([s.A], () => s.A.getRefreshAt())
    }
}