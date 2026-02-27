/** chunk id: 604238, original params: e,l,t (module,exports,require) **/
t.d(l, {
    E: () => y,
    e: () => f
});
var r = t(64700),
    o = t(735438),
    n = t(528226),
    a = t(653793),
    i = t(118713),
    d = t(261225),
    s = t(970488),
    c = t(720462),
    u = t(673277),
    h = t(700263),
    p = t(304973),
    m = t(18769),
    b = t(458306),
    C = t(282203),
    _ = t(22519),
    g = t(607795),
    A = t(954644),
    k = t(930948),
    S = t(634791);
let y = {
        ContainedHero: n.A,
        BasicHero: e => {
            let {
                bannerSrc: l
            } = e;
            return null
        },
        PromotionalHero: () => null,
        InteractiveHScroll: c.A,
        Carousel: i.A,
        Grid: d.A,
        GridItem: s.A,
        Section: u.A,
        Card: a.A,
        Skeleton: h.A,
        FeaturedChip: p.A,
        FeaturedCollection: m.A,
        FeaturedProduct: () => null,
        ShopProductCard: A.A,
        StorefrontProductCard: k.A,
        SkuList: C.A,
        SubLayout: _.A,
        SubTemplate: g.A,
        Button: b.ar,
        Heading: b.Oo,
        Stack: b.Kp,
        Text: b.t,
        Any1: S.A,
        Any2: S.A,
        Any3: S.A
    },
    f = function() {
        let {
            overrides: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(y);
            if (null != e)
                for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l
        }, [e])
    }