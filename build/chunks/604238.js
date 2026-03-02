/** chunk id: 604238, original params: e,l,t (module,exports,require) **/
t.d(l, {
    E: () => f,
    e: () => E
});
var r = t(64700),
    o = t(735438),
    n = t(528226),
    a = t(427941),
    i = t(653793),
    d = t(118713),
    s = t(261225),
    c = t(970488),
    u = t(720462),
    h = t(673277),
    p = t(700263),
    m = t(304973),
    b = t(18769),
    _ = t(458306),
    C = t(282203),
    S = t(22519),
    A = t(607795),
    g = t(954644),
    k = t(930948),
    y = t(634791);
let f = {
        ContainedHero: n.A,
        BasicHero: e => {
            let {
                bannerSrc: l
            } = e;
            return null
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Carousel: d.A,
        Grid: s.A,
        GridItem: c.A,
        Section: h.A,
        Card: i.A,
        BackgroundImage: a.A,
        Skeleton: p.A,
        FeaturedChip: m.A,
        FeaturedCollection: b.A,
        FeaturedProduct: () => null,
        ShopProductCard: g.A,
        StorefrontProductCard: k.A,
        SkuList: C.A,
        SubLayout: S.A,
        SubTemplate: A.A,
        Button: _.ar,
        Heading: _.Oo,
        Stack: _.Kp,
        Text: _.t,
        Any1: y.A,
        Any2: y.A,
        Any3: y.A
    },
    E = function() {
        let {
            overrides: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(f);
            if (null != e)
                for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l
        }, [e])
    }