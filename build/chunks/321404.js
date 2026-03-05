/** chunk id: 321404 params = (module,exports,require) **/
n.d(t, {
    O: () => a,
    c: () => o
});
var i = n(311907),
    r = n(380335),
    l = n(157550);

function a(e) {
    return (0, i.bG)([r.A], () => r.A.isMessageRequest(e), [e])
}

function o(e) {
    return (0, i.bG)([r.A, l.A], () => null != e && (r.A.isMessageRequest(e) || l.A.isSpam(e)))
}