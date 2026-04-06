/** chunk id: 484509 params = (module,exports,require) **/
i.d(l, {
    A: () => d
});
var t = i(64700),
    n = i(311907),
    s = i(573648),
    a = i(681819),
    r = i(622543);
let o = [];

function d(e) {
    let l = (0, a.dq)({
            forUserProfile: !0
        }),
        i = (0, n.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, t.useMemo)(() => i?.connectedAccounts == null ? o : i.connectedAccounts.filter(e => {
        let {
            type: i
        } = e, t = s.A.get(i);
        return null != t && s.A.isSupported(i) && l(t)
    }), [i?.connectedAccounts, l])
}