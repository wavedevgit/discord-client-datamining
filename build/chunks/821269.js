/** chunk id: 821269 params = (module,exports,require) **/
n.d(t, {
    q: () => d
});
var i = n(64700),
    s = n(311907),
    r = n(994500),
    l = n(287809),
    a = n(922590);
let o = [];

function d(e) {
    let {
        userId: t
    } = e, n = (0, s.bG)([r.A, l.default], () => r.A.isFriend(t) || l.default.getUser(t)?.isProvisional), d = (0, a.f1)(t);
    return i.useMemo(() => n ? o : d.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [d, n])
}