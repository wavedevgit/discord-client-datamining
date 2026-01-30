/** chunk id: 821269, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => d
});
var l = n(64700),
    i = n(311907),
    r = n(994500),
    s = n(287809),
    o = n(922590);
let a = [];

function d(e) {
    let {
        userId: t
    } = e, n = (0, i.bG)([r.A, s.default], () => {
        var e;
        return r.A.isFriend(t) || (null == (e = s.default.getUser(t)) ? void 0 : e.isProvisional)
    }), d = (0, o.f1)(t);
    return l.useMemo(() => n ? a : d.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [d, n])
}