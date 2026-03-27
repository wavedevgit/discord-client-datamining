/** chunk id: 588260 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(64700),
    l = n(793574),
    r = n(979286),
    s = n(674658),
    c = n(751304),
    o = n(561769),
    d = n(720462),
    u = n(409626),
    m = n(84904),
    x = n(954506),
    h = n(758836),
    g = n(985018),
    f = n(536083);
let _ = i.createContext({
        closeModal: () => {},
        trackAction: () => {}
    }),
    p = e => {
        let {
            skuId: t,
            aspectRatio: n
        } = e, {
            product: d
        } = (0, s.q)(t, !0), m = i.useContext(o.v3), {
            closeModal: x,
            trackAction: g
        } = i.useContext(_), p = i.useCallback(() => {
            g(u.Ws.DiscordCollectiblesShopItem), x(), (0, r.Cz)({
                analyticsLocations: [l.A.GAME_PROFILE],
                analyticsSource: l.A.GAME_PROFILE,
                initialProductSkuId: t,
                tab: h.G2.CATALOG
            })
        }, [g, x, t]);
        if (null == d) return null;
        let {
            flattenProductVariants: v,
            ...A
        } = m;
        return (0, a.jsx)(o.v3.Provider, {
            value: {
                flattenProductVariants: v ?? !0,
                ...A
            },
            children: (0, a.jsx)(c.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: f.N,
                onClickCard: p,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0
            })
        })
    };

function v(e) {
    let {
        detectedGame: t,
        closeModal: n,
        trackAction: s
    } = e, c = t.shopCollectionIds?.[0], o = (0, m.j)(c), f = i.useCallback(() => {
        s(u.Ws.DiscordCollectiblesShop), n(), (0, r.Cz)({
            analyticsLocations: [l.A.GAME_PROFILE],
            analyticsSource: l.A.GAME_PROFILE,
            tab: h.G2.CATALOG
        })
    }, [s, n]), v = i.useMemo(() => ({
        closeModal: n,
        trackAction: s
    }), [n, s]);
    return 0 === o.length ? null : (0, a.jsx)(_.Provider, {
        value: v,
        children: (0, a.jsx)(x.A, {
            title: g.intl.string(g.t["5DYPT8"]),
            onClickViewAll: f,
            children: (0, a.jsx)(d.A, {
                gap: "md",
                children: o.map(e => (0, a.jsx)(p, {
                    skuId: e
                }, e))
            })
        })
    })
}