/** chunk id: 699978 params = (module,exports,require) **/
n.d(t, {
    k: () => a
});
var i = n(735438),
    s = n.n(i),
    l = n(311907),
    r = n(787392);

function a(e) {
    return (0, l.yK)([r.A], () => s()(r.A.getUserVerifiedKeys(e)).entries().map(e => {
        let [t, n] = e;
        return {
            verifiedKey: t,
            timestamp: n
        }
    }).sortBy(e => -1 * e.timestamp).value())
}