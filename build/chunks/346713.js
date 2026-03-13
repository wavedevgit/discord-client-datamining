/** chunk id: 346713 params = (module,exports,require) **/
n.d(l, {
    A: () => r
});
var i = n(64700),
    t = n(311907),
    s = n(622543);
let a = [];

function r(e) {
    let l = (0, t.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, i.useMemo)(() => l?.applicationRoleConnections == null ? a : l.applicationRoleConnections, [l?.applicationRoleConnections])
}