/** chunk id: 484509 params = (module,exports,require) **/
t.d(l, {
    A: () => d
});
var i = t(64700),
    n = t(311907),
    s = t(573648),
    a = t(681819),
    r = t(622543);
let o = [];

function d(e) {
    let l = (0, a.dq)({
            forUserProfile: !0
        }),
        t = (0, n.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, i.useMemo)(() => t?.connectedAccounts == null ? o : t.connectedAccounts.filter(e => {
        let {
            type: t
        } = e, i = s.A.get(t);
        return null != i && s.A.isSupported(t) && l(i)
    }), [t?.connectedAccounts, l])
}