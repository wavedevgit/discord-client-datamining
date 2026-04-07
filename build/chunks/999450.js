/** chunk id: 999450 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    i = n(64700),
    l = n(793574),
    r = n(688810),
    s = n(44724),
    o = n(317560),
    c = n(563988),
    d = n(409626),
    u = n(305080),
    m = n(954506),
    x = n(652215),
    g = n(985018);

function h(e) {
    let {
        trackAction: t
    } = e, {
        socialLayerStorefrontRecommendationsData: n,
        closeModal: h
    } = (0, u.c)(), {
        analyticsLocations: f
    } = (0, r.Ay)([l.A.GAME_PROFILE]), p = i.useCallback(() => {
        n?.guildId != null && (t(d.Ws.GameShop), h(), (0, s.default)({
            guildId: n.guildId
        }))
    }, [n, t, h]), _ = i.useCallback((e, a) => {
        let i = n?.guildId;
        null != i && (t(d.Ws.GameShopItem), (0, o.R)({
            skuId: e,
            applicationId: a,
            isStorefront: !1,
            analyticsLocations: f,
            onClose: () => {
                location.pathname.indexOf(x.BVt.CHANNELS_GAME_SHOP(i)) >= 0 && h()
            }
        }))
    }, [t, h, f, n]);
    if (null == n) return null;
    let {
        skuIds: v
    } = n;
    return (0, a.jsx)(m.A, {
        title: g.intl.string(g.t.WDdlUb),
        onClickViewAll: p,
        children: (0, a.jsx)(c.R, {
            skuIds: v,
            analyticsLocations: f,
            onCardClick: _
        })
    })
}