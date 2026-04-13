/** chunk id: 484509 params = (module,exports,require) **/
t.d(l, {
    A: () => d
});
var n = t(64700),
    i = t(311907),
    s = t(573648),
    a = t(681819),
    r = t(622543);
let o = [];

function d(e) {
    let l = (0, a.dq)({
            forUserProfile: !0
        }),
        t = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, n.useMemo)(() => t?.connectedAccounts == null ? o : t.connectedAccounts.filter(e => {
        let {
            type: t
        } = e, n = s.A.get(t);
        return null != n && s.A.isSupported(t) && l(n)
    }), [t?.connectedAccounts, l])
}