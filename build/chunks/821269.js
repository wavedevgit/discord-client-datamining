/** chunk id: 821269, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(64700),
    s = n(311907),
    l = n(994500),
    r = n(287809),
    a = n(922590);
let d = [];

function o(e) {
    let {
        userId: t
    } = e, n = (0, s.bG)([l.A, r.default], () => l.A.isFriend(t) || r.default.getUser(t)?.isProvisional), o = (0, a.f1)(t);
    return i.useMemo(() => n ? d : o.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [o, n])
}