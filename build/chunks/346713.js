/** chunk id: 346713, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => r
});
var l = i(64700),
    n = i(311907),
    s = i(622543);
let a = [];

function r(e) {
    let t = (0, n.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, l.useMemo)(() => t?.applicationRoleConnections == null ? a : t.applicationRoleConnections, [t?.applicationRoleConnections])
}