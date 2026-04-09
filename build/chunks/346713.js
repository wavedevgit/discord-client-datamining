/** chunk id: 346713 params = (module,exports,require) **/
n.d(l, {
    A: () => r
});
var t = n(64700),
    i = n(311907),
    s = n(622543);
let a = [];

function r(e) {
    let l = (0, i.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, t.useMemo)(() => l?.applicationRoleConnections == null ? a : l.applicationRoleConnections, [l?.applicationRoleConnections])
}