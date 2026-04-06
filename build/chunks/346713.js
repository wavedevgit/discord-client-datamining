/** chunk id: 346713 params = (module,exports,require) **/
t.d(l, {
    A: () => r
});
var n = t(64700),
    i = t(311907),
    s = t(622543);
let a = [];

function r(e) {
    let l = (0, i.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, n.useMemo)(() => l?.applicationRoleConnections == null ? a : l.applicationRoleConnections, [l?.applicationRoleConnections])
}