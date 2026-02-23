/** chunk id: 928873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var l = n(390544);
let r = new Set([l.M.SLEEPING, l.M.OFFLINE, l.M.ONLINE]);

function a(e) {
    return null == e || null != e.status && r.has(e.status)
}