/** chunk id: 604238, original params: e,l,t (module,exports,require) **/
t.d(l, {
    E: () => k,
    e: () => I
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
    _ = t(18769),
    S = t(458306),
    b = t(282203),
    T = t(22519),
    C = t(607795),
    A = t(954644),
    E = t(930948),
    g = t(634791);
let k = {
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
        FeaturedCollection: _.A,
        FeaturedProduct: () => null,
        ShopProductCard: A.A,
        StorefrontProductCard: E.A,
        SkuList: b.A,
        SubLayout: T.A,
        SubTemplate: C.A,
        Button: S.ar,
        Heading: S.Oo,
        Stack: S.Kp,
        Text: S.t,
        Tooltip: S.xY,
        Any1: g.A,
        Any2: g.A,
        Any3: g.A
    },
    I = function() {
        let {
            overrides: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(k);
            if (null != e)
                for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l
        }, [e])
    }