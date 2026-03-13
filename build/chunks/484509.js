/** chunk id: 484509 params = (module,exports,require) **/
n.d(l, {
    A: () => d
});
var i = n(64700),
    t = n(311907),
    s = n(573648),
    a = n(681819),
    r = n(622543);
let o = [];

function d(e) {
    let l = (0, a.dq)({
            forUserProfile: !0
        }),
        n = (0, t.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, i.useMemo)(() => n?.connectedAccounts == null ? o : n.connectedAccounts.filter(e => {
        let {
            type: n
        } = e, i = s.A.get(n);
        return null != i && s.A.isSupported(n) && l(i)
    }), [n?.connectedAccounts, l])
}