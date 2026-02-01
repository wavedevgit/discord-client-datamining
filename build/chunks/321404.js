/** chunk id: 321404, original params: e,n,t (module,exports,require) **/
t.d(n, {
    O: () => s,
    c: () => a
});
var l = t(311907),
    r = t(380335),
    i = t(157550);

function s(e) {
    return (0, l.bG)([r.A], () => r.A.isMessageRequest(e), [e])
}

function a(e) {
    return (0, l.bG)([r.A, i.A], () => null != e && (r.A.isMessageRequest(e) || i.A.isSpam(e)))
}