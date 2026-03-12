/** chunk id: 821269 params = (module,exports,require) **/
n.d(t, {
    q: () => u
});
var l = n(64700),
    s = n(311907),
    a = n(994500),
    i = n(287809),
    r = n(922590);
let o = [];

function u(e) {
    let {
        userId: t
    } = e, n = (0, s.bG)([a.A, i.default], () => a.A.isFriend(t) || i.default.getUser(t)?.isProvisional), u = (0, r.f1)(t);
    return l.useMemo(() => n ? o : u.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [u, n])
}