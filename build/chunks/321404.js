/** Chunk was on 96430 **/
/** chunk id: 321404, original params: t,e,n (module,exports,require) **/
n.d(e, {
    O: () => l,
    c: () => o
});
var r = n(311907),
    i = n(380335),
    a = n(157550);

function l(t) {
    return (0, r.bG)([i.A], () => i.A.isMessageRequest(t), [t])
}

function o(t) {
    return (0, r.bG)([i.A, a.A], () => null != t && (i.A.isMessageRequest(t) || a.A.isSpam(t)))
}