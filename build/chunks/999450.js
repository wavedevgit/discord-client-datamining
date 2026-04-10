/** chunk id: 999450 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(44724),
    o = n(317560),
    c = n(563988),
    d = n(409626),
    u = n(305080),
    m = n(954506),
    f = n(652215),
    x = n(985018);

function h(e) {
    let {
        trackAction: t
    } = e, {
        socialLayerStorefrontRecommendationsData: n,
        closeModal: h
    } = (0, u.c)(), {
        analyticsLocations: g
    } = (0, r.Ay)([i.A.GAME_PROFILE]), p = l.useCallback(() => {
        n?.guildId != null && (t(d.Ws.GameShop), h(), (0, s.default)({
            guildId: n.guildId
        }))
    }, [n, t, h]), _ = l.useCallback((e, a) => {
        let l = n?.guildId;
        null != l && (t(d.Ws.GameShopItem), (0, o.R)({
            skuId: e,
            applicationId: a,
            isStorefront: !1,
            analyticsLocations: g,
            onClose: () => {
                location.pathname.indexOf(f.BVt.CHANNELS_GAME_SHOP(l)) >= 0 && h()
            }
        }))
    }, [t, h, g, n]);
    if (null == n) return null;
    let {
        skuIds: v
    } = n;
    return (0, a.jsx)(m.A, {
        title: x.intl.string(x.t.WDdlUb),
        onClickViewAll: p,
        children: (0, a.jsx)(c.R, {
            skuIds: v,
            analyticsLocations: g,
            onCardClick: _
        })
    })
}