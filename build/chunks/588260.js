/** chunk id: 588260 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    a = n(64700),
    i = n(793574),
    r = n(979286),
    s = n(674658),
    o = n(751304),
    c = n(561769),
    d = n(951707),
    u = n(409626),
    m = n(84904),
    f = n(954506),
    h = n(758836),
    x = n(985018),
    g = n(804163);
let p = a.createContext({
        closeModal: () => {},
        trackAction: () => {}
    }),
    _ = e => {
        let {
            skuId: t,
            aspectRatio: n
        } = e, {
            product: d
        } = (0, s.q)(t, !0), m = a.useContext(c.v3), {
            closeModal: f,
            trackAction: x
        } = a.useContext(p), _ = a.useCallback(() => {
            x(u.Ws.DiscordCollectiblesShopItem), f(), (0, r.Cz)({
                analyticsLocations: [i.A.GAME_PROFILE],
                analyticsSource: i.A.GAME_PROFILE,
                initialProductSkuId: t,
                tab: h.G2.CATALOG
            })
        }, [x, f, t]);
        if (null == d) return null;
        let {
            flattenProductVariants: v,
            ...A
        } = m;
        return (0, l.jsx)(c.v3.Provider, {
            value: {
                flattenProductVariants: v ?? !0,
                ...A
            },
            children: (0, l.jsx)(o.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: g.N,
                onClickCard: _,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0
            })
        })
    };

function v(e) {
    let {
        game: t,
        closeModal: n,
        trackAction: s
    } = e, o = t.shopCollectionIds?.[0], c = (0, m.j)(o), g = a.useCallback(() => {
        s(u.Ws.DiscordCollectiblesShop), n(), (0, r.Cz)({
            analyticsLocations: [i.A.GAME_PROFILE],
            analyticsSource: i.A.GAME_PROFILE,
            tab: h.G2.CATALOG
        })
    }, [s, n]), v = a.useMemo(() => ({
        closeModal: n,
        trackAction: s
    }), [n, s]);
    return 0 === c.length ? null : (0, l.jsx)(p.Provider, {
        value: v,
        children: (0, l.jsx)(f.A, {
            title: x.intl.string(x.t["5DYPT8"]),
            onClickViewAll: g,
            children: (0, l.jsx)(d.A, {
                gap: "md",
                children: c.map(e => (0, l.jsx)(_, {
                    skuId: e
                }, e))
            })
        })
    })
}