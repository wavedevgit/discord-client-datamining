/** Chunk was on 2827 **/
/** chunk id: 699978, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => a
}), n(896048);
var r = n(735438),
    i = n.n(r),
    l = n(311907),
    s = n(787392);

function a(e) {
    return (0, l.yK)([s.A], () => i()(s.A.getUserVerifiedKeys(e)).entries().map(e => {
        let [t, n] = e;
        return {
            verifiedKey: t,
            timestamp: n
        }
    }).sortBy(e => -1 * e.timestamp).value())
}