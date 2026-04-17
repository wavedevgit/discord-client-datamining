/** chunk id: 664654 params = (module,exports,require) **/
n.d(t, {
    J: () => c,
    Z: () => o
});
var i = n(64700),
    r = n(311907),
    a = n(803306),
    s = n(287809),
    l = n(851746);
let o = 3;

function c() {
    let e = (0, r.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, r.yK)([s.default], () => e.map(e => s.default.getUser(e)).filter(e => null != e));
    return i.useEffect(() => {
        e.forEach(e => {
            (0, a.wz)(e)
        })
    }, [e]), {
        referralSentUsers: t,
        hasSentAllReferrals: e.length === o,
        refreshAt: (0, r.bG)([l.A], () => l.A.getRefreshAt())
    }
}