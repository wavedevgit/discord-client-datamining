/** chunk id: 429635, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var n = t(64700),
    s = t(311907),
    i = t(733391),
    a = t(832163),
    r = t(916023);

function d(e) {
    let {
        guildId: l,
        location: t
    } = e, d = (0, r.kt)({
        location: t
    }), o = (0, s.bG)([a.A], () => null != l ? a.A.getStorefrontData(l) : void 0, [l]);
    return n.useEffect(() => {
        null != l && d && (0, i.Rw)(l, {
            eager: !1
        })
    }, [l, o, d]), o
}