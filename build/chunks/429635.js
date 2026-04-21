/** chunk id: 429635 params = (module,exports,require) **/
l.d(t, {
    A: () => r
});
var n = l(64700),
    a = l(311907),
    s = l(733391),
    i = l(832163);

function r(e) {
    let {
        guildId: t
    } = e, l = (0, a.bG)([i.A], () => null != t ? i.A.getStorefrontData(t) : void 0, [t]);
    return n.useEffect(() => {
        null != t && (0, s.Rw)(t, {
            eager: !1
        })
    }, [t]), l
}