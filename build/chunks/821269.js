/** chunk id: 821269 params = (module,exports,require) **/
t.d(n, {
    q: () => d
});
var i = t(64700),
    s = t(311907),
    l = t(994500),
    a = t(287809),
    r = t(922590);
let o = [];

function d(e) {
    let {
        userId: n
    } = e, t = (0, s.bG)([l.A, a.default], () => l.A.isFriend(n) || a.default.getUser(n)?.isProvisional), d = (0, r.f1)(n);
    return i.useMemo(() => t ? o : d.map(e => {
        let {
            applicationId: n
        } = e;
        return n
    }), [d, t])
}