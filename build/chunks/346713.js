/** chunk id: 346713 params = (module,exports,require) **/
l.d(n, {
    A: () => r
});
var i = l(64700),
    t = l(311907),
    s = l(622543);
let a = [];

function r(e) {
    let n = (0, t.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, i.useMemo)(() => n?.applicationRoleConnections == null ? a : n.applicationRoleConnections, [n?.applicationRoleConnections])
}