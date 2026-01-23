/** Chunk was on 97492 **/
/** chunk id: 321404, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => s,
    c: () => a
});
var r = n(311907),
    l = n(380335),
    i = n(157550);

function s(e) {
    return (0, r.bG)([l.A], () => l.A.isMessageRequest(e), [e])
}

function a(e) {
    return (0, r.bG)([l.A, i.A], () => null != e && (l.A.isMessageRequest(e) || i.A.isSpam(e)))
}