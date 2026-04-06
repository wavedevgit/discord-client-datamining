/** chunk id: 346713 params = (module,exports,require) **/
i.d(l, {
    A: () => r
});
var t = i(64700),
    n = i(311907),
    s = i(622543);
let a = [];

function r(e) {
    let l = (0, n.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, t.useMemo)(() => l?.applicationRoleConnections == null ? a : l.applicationRoleConnections, [l?.applicationRoleConnections])
}