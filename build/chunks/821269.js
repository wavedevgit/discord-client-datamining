/** Chunk was on 77870 **/
/** chunk id: 821269, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => c
});
var r = n(64700),
    l = n(311907),
    i = n(994500),
    s = n(287809),
    a = n(922590);
let o = [];

function c(e) {
    let {
        userId: t
    } = e, n = (0, l.bG)([i.A, s.default], () => {
        var e;
        return i.A.isFriend(t) || (null == (e = s.default.getUser(t)) ? void 0 : e.isProvisional)
    }), c = (0, a.f1)(t);
    return r.useMemo(() => n ? o : c.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [c, n])
}