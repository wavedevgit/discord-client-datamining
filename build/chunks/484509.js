/** chunk id: 484509 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(64700),
    i = n(311907),
    s = n(573648),
    a = n(681819),
    r = n(622543);
let o = [];

function d(e) {
    let t = (0, a.dq)({
            forUserProfile: !0
        }),
        n = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, l.useMemo)(() => n?.connectedAccounts == null ? o : n.connectedAccounts.filter(e => {
        let {
            type: n
        } = e, l = s.A.get(n);
        return null != l && s.A.isSupported(n) && t(l)
    }), [n?.connectedAccounts, t])
}