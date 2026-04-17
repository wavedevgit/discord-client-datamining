/** chunk id: 429635 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(64700),
    a = n(311907),
    s = n(733391),
    i = n(832163);

function r(e) {
    let {
        guildId: t
    } = e, n = (0, a.bG)([i.A], () => null != t ? i.A.getStorefrontData(t) : void 0, [t]);
    return l.useEffect(() => {
        null != t && (0, s.Rw)(t, {
            eager: !1
        })
    }, [t]), n
}