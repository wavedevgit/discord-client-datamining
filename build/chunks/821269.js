/** chunk id: 821269, original params: e,t,l (module,exports,require) **/
l.d(t, {
    q: () => u
});
var n = l(64700),
    s = l(311907),
    a = l(994500),
    i = l(287809),
    r = l(922590);
let o = [];

function u(e) {
    let {
        userId: t
    } = e, l = (0, s.bG)([a.A, i.default], () => a.A.isFriend(t) || i.default.getUser(t)?.isProvisional), u = (0, r.f1)(t);
    return n.useMemo(() => l ? o : u.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [u, l])
}