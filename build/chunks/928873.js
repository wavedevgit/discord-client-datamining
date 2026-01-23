/** Chunk was on 14691 **/
/** chunk id: 928873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var r = n(390544);
let l = new Set([r.M.SLEEPING, r.M.OFFLINE, r.M.ONLINE]);

function i(e) {
    return null == e || null != e.status && l.has(e.status)
}