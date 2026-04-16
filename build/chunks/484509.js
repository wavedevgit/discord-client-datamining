/** chunk id: 484509 params = (module,exports,require) **/
l.d(n, {
    A: () => d
});
var t = l(64700),
    i = l(311907),
    s = l(573648),
    a = l(681819),
    r = l(622543);
let o = [];

function d(e) {
    let n = (0, a.dq)({
            forUserProfile: !0
        }),
        l = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, t.useMemo)(() => l?.connectedAccounts == null ? o : l.connectedAccounts.filter(e => {
        let {
            type: l
        } = e, t = s.A.get(l);
        return null != t && s.A.isSupported(l) && n(t)
    }), [l?.connectedAccounts, n])
}