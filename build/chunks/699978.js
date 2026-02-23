/** chunk id: 699978, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => l
});
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    r = n(787392);

function l(e) {
    return (0, a.yK)([r.A], () => s()(r.A.getUserVerifiedKeys(e)).entries().map(e => {
        let [t, n] = e;
        return {
            verifiedKey: t,
            timestamp: n
        }
    }).sortBy(e => -1 * e.timestamp).value())
}