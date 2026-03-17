/** chunk id: 346713 params = (module,exports,require) **/
t.d(l, {
    A: () => r
});
var i = t(64700),
    n = t(311907),
    s = t(622543);
let a = [];

function r(e) {
    let l = (0, n.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, i.useMemo)(() => l?.applicationRoleConnections == null ? a : l.applicationRoleConnections, [l?.applicationRoleConnections])
}