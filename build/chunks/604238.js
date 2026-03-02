/** chunk id: 604238, original params: e,l,t (module,exports,require) **/
t.d(l, {
    E: () => y,
    e: () => f
});
var r = t(64700),
    o = t(735438),
    n = t(528226),
    i = t(427941),
    a = t(653793),
    d = t(118713),
    s = t(261225),
    c = t(970488),
    u = t(720462),
    h = t(673277),
    p = t(700263),
    m = t(304973),
    b = t(18769),
    _ = t(458306),
    S = t(282203),
    A = t(22519),
    g = t(607795),
    C = t(954644),
    k = t(930948),
    T = t(634791);
let y = {
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
        Card: a.A,
        BackgroundImage: i.A,
        Skeleton: p.A,
        FeaturedChip: m.A,
        FeaturedCollection: b.A,
        FeaturedProduct: () => null,
        ShopProductCard: C.A,
        StorefrontProductCard: k.A,
        SkuList: S.A,
        SubLayout: A.A,
        SubTemplate: g.A,
        Button: _.ar,
        Heading: _.Oo,
        Stack: _.Kp,
        Text: _.t,
        Any1: T.A,
        Any2: T.A,
        Any3: T.A
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