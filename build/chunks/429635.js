/** chunk id: 429635 params = (module,exports,require) **/
t.d(l, {
    A: () => r
});
var n = t(64700),
    s = t(311907),
    a = t(733391),
    i = t(832163);

function r(e) {
    let {
        guildId: l
    } = e, t = (0, s.bG)([i.A], () => null != l ? i.A.getStorefrontData(l) : void 0, [l]);
    return n.useEffect(() => {
        null != l && (0, a.Rw)(l, {
            eager: !1
        })
    }, [l]), t
}