/** chunk id: 664654 params = (module,exports,require) **/
n.d(t, {
    J: () => c,
    Z: () => o
});
var i = n(64700),
    a = n(311907),
    l = n(803306),
    r = n(287809),
    s = n(851746);
let o = 3;

function c() {
    let e = (0, a.yK)([s.A], () => s.A.getSentUserIds()),
        t = (0, a.yK)([r.default], () => e.map(e => r.default.getUser(e)).filter(e => null != e));
    return i.useEffect(() => {
        e.forEach(e => {
            (0, l.wz)(e)
        })
    }, [e]), {
        referralSentUsers: t,
        hasSentAllReferrals: e.length === o,
        refreshAt: (0, a.bG)([s.A], () => s.A.getRefreshAt())
    }
}