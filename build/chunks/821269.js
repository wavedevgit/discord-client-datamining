/** chunk id: 821269, original params: e,t,l (module,exports,require) **/
l.d(t, {
    q: () => o
});
var s = l(64700),
    n = l(311907),
    a = l(994500),
    i = l(287809),
    r = l(922590);
let u = [];

function o(e) {
    let {
        userId: t
    } = e, l = (0, n.bG)([a.A, i.default], () => a.A.isFriend(t) || i.default.getUser(t)?.isProvisional), o = (0, r.f1)(t);
    return s.useMemo(() => l ? u : o.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [o, l])
}