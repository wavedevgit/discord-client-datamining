/** chunk id: 484509 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var l = i(64700),
    n = i(311907),
    s = i(573648),
    a = i(681819),
    r = i(622543);
let o = [];

function d(e) {
    let t = (0, a.dq)({
            forUserProfile: !0
        }),
        i = (0, n.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, l.useMemo)(() => i?.connectedAccounts == null ? o : i.connectedAccounts.filter(e => {
        let {
            type: i
        } = e, l = s.A.get(i);
        return null != l && s.A.isSupported(i) && t(l)
    }), [i?.connectedAccounts, t])
}