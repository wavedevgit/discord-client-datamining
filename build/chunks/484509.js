/** chunk id: 484509 params = (module,exports,require) **/
l.d(n, {
    A: () => d
});
var i = l(64700),
    t = l(311907),
    s = l(573648),
    a = l(681819),
    r = l(622543);
let o = [];

function d(e) {
    let n = (0, a.dq)({
            forUserProfile: !0
        }),
        l = (0, t.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, i.useMemo)(() => l?.connectedAccounts == null ? o : l.connectedAccounts.filter(e => {
        let {
            type: l
        } = e, i = s.A.get(l);
        return null != i && s.A.isSupported(l) && n(i)
    }), [l?.connectedAccounts, n])
}