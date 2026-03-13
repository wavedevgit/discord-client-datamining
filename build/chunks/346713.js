/** chunk id: 346713 params = (module,exports,require) **/
i.d(l, {
    A: () => r
});
var n = i(64700),
    t = i(311907),
    s = i(622543);
let a = [];

function r(e) {
    let l = (0, t.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, n.useMemo)(() => l?.applicationRoleConnections == null ? a : l.applicationRoleConnections, [l?.applicationRoleConnections])
}