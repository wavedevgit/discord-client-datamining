/** chunk id: 484509, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(64700),
    i = n(311907),
    r = n(573648),
    s = n(681819),
    o = n(622543);
let a = [];

function d(e) {
    let t = (0, s.dq)({
            forUserProfile: !0
        }),
        n = (0, i.bG)([o.A], () => o.A.getUserProfile(e));
    return (0, l.useMemo)(() => (null == n ? void 0 : n.connectedAccounts) == null ? a : n.connectedAccounts.filter(e => {
        let {
            type: n
        } = e, l = r.A.get(n);
        return null != l && r.A.isSupported(n) && t(l)
    }), [null == n ? void 0 : n.connectedAccounts, t])
}