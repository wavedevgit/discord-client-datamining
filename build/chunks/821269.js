/** chunk id: 821269, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(64700),
    s = n(311907),
    l = n(994500),
    a = n(287809),
    r = n(922590);
let d = [];

function o(e) {
    let {
        userId: t
    } = e, n = (0, s.bG)([l.A, a.default], () => l.A.isFriend(t) || a.default.getUser(t)?.isProvisional), o = (0, r.f1)(t);
    return i.useMemo(() => n ? d : o.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [o, n])
}