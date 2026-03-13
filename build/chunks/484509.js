/** chunk id: 484509 params = (module,exports,require) **/
i.d(l, {
    A: () => d
});
var n = i(64700),
    t = i(311907),
    s = i(573648),
    a = i(681819),
    r = i(622543);
let o = [];

function d(e) {
    let l = (0, a.dq)({
            forUserProfile: !0
        }),
        i = (0, t.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, n.useMemo)(() => i?.connectedAccounts == null ? o : i.connectedAccounts.filter(e => {
        let {
            type: i
        } = e, n = s.A.get(i);
        return null != n && s.A.isSupported(i) && l(n)
    }), [i?.connectedAccounts, l])
}