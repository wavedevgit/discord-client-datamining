/** chunk id: 346713 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(64700),
    i = n(311907),
    s = n(622543);
let a = [];

function r(e) {
    let t = (0, i.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, l.useMemo)(() => t?.applicationRoleConnections == null ? a : t.applicationRoleConnections, [t?.applicationRoleConnections])
}