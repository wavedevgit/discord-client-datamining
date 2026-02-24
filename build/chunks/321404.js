/** chunk id: 321404, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => l,
    c: () => u
});
var r = n(311907),
    a = n(380335),
    i = n(157550);

function l(e) {
    return (0, r.bG)([a.A], () => a.A.isMessageRequest(e), [e])
}

function u(e) {
    return (0, r.bG)([a.A, i.A], () => null != e && (a.A.isMessageRequest(e) || i.A.isSpam(e)))
}