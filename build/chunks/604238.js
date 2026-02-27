/** chunk id: 604238, original params: e,t,l (module,exports,require) **/
l.d(t, {
    E: () => y,
    e: () => v
});
var r = l(64700),
    a = l(735438),
    d = l(528226),
    c = l(653793),
    n = l(118713),
    o = l(261225),
    s = l(970488),
    u = l(720462),
    i = l(673277),
    h = l(700263),
    m = l(304973),
    p = l(18769),
    k = l(458306),
    b = l(282203),
    S = l(22519),
    f = l(607795),
    A = l(954644),
    C = l(634791);
let y = {
        ContainedHero: d.A,
        BasicHero: e => {
            let {
                bannerSrc: t
            } = e;
            return null
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Carousel: n.A,
        Grid: o.A,
        GridItem: s.A,
        Section: i.A,
        Card: c.A,
        Skeleton: h.A,
        FeaturedChip: m.A,
        FeaturedCollection: p.A,
        FeaturedProduct: () => null,
        ShopProductCard: A.A,
        SkuList: b.A,
        SubLayout: S.A,
        SubTemplate: f.A,
        Button: k.ar,
        Heading: k.Oo,
        Stack: k.Kp,
        Text: k.t,
        Any1: C.A,
        Any2: C.A,
        Any3: C.A
    },
    v = function() {
        let {
            overrides: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, a.cloneDeep)(y);
            if (null != e)
                for (let [l, r] of Object.entries(e)) null != r && (t[l] = r);
            return t
        }, [e])
    }