/** chunk id: 429635 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(64700),
    l = n(311907),
    i = n(733391),
    s = n(832163);

function r(e) {
    let {
        guildId: t
    } = e, n = (0, l.bG)([s.A], () => null != t ? s.A.getStorefrontData(t) : void 0, [t]);
    return a.useEffect(() => {
        null != t && (0, i.Rw)(t, {
            eager: !1
        })
    }, [t]), n
}