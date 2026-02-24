/** chunk id: 429635, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => o
});
var n = t(64700),
    s = t(311907),
    i = t(733391),
    a = t(832163),
    r = t(916023);

function o(e) {
    let {
        guildId: l,
        location: t
    } = e, o = (0, r.kt)({
        location: t
    }), d = (0, s.bG)([a.A], () => null != l ? a.A.getStorefrontData(l) : void 0, [l]);
    return n.useEffect(() => {
        null != l && o && (0, i.Rw)(l, {
            eager: !1
        })
    }, [l, d, o]), d
}