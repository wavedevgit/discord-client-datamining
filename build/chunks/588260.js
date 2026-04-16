/** chunk id: 588260 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(979286),
    s = n(674658),
    o = n(751304),
    c = n(561769),
    d = n(951707),
    u = n(409626),
    m = n(84904),
    f = n(954506),
    x = n(758836),
    h = n(985018),
    g = n(804163);
let p = l.createContext({
        closeModal: () => {},
        trackAction: () => {}
    }),
    _ = e => {
        let {
            skuId: t,
            aspectRatio: n
        } = e, {
            product: d
        } = (0, s.q)(t, !0), m = l.useContext(c.v3), {
            closeModal: f,
            trackAction: h
        } = l.useContext(p), _ = l.useCallback(() => {
            h(u.Ws.DiscordCollectiblesShopItem), f(), (0, r.Cz)({
                analyticsLocations: [i.A.GAME_PROFILE],
                analyticsSource: i.A.GAME_PROFILE,
                initialProductSkuId: t,
                tab: x.G2.CATALOG
            })
        }, [h, f, t]);
        if (null == d) return null;
        let {
            flattenProductVariants: v,
            ...A
        } = m;
        return (0, a.jsx)(c.v3.Provider, {
            value: {
                flattenProductVariants: v ?? !0,
                ...A
            },
            children: (0, a.jsx)(o.A, {
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
    } = e, o = t.shopCollectionIds?.[0], c = (0, m.j)(o), g = l.useCallback(() => {
        s(u.Ws.DiscordCollectiblesShop), n(), (0, r.Cz)({
            analyticsLocations: [i.A.GAME_PROFILE],
            analyticsSource: i.A.GAME_PROFILE,
            tab: x.G2.CATALOG
        })
    }, [s, n]), v = l.useMemo(() => ({
        closeModal: n,
        trackAction: s
    }), [n, s]);
    return 0 === c.length ? null : (0, a.jsx)(p.Provider, {
        value: v,
        children: (0, a.jsx)(f.A, {
            title: h.intl.string(h.t["5DYPT8"]),
            onClickViewAll: g,
            children: (0, a.jsx)(d.A, {
                gap: "md",
                children: c.map(e => (0, a.jsx)(_, {
                    skuId: e
                }, e))
            })
        })
    })
}