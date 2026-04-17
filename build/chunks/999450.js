/** chunk id: 999450 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    a = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(44724),
    o = n(317560),
    c = n(563988),
    d = n(409626),
    u = n(305080),
    m = n(954506),
    f = n(652215),
    h = n(985018);

function x(e) {
    let {
        trackAction: t
    } = e, {
        socialLayerStorefrontRecommendationsData: n,
        closeModal: x
    } = (0, u.c)(), {
        analyticsLocations: g
    } = (0, r.Ay)([i.A.GAME_PROFILE]), p = a.useCallback(() => {
        n?.guildId != null && (t(d.Ws.GameShop), x(), (0, s.default)({
            guildId: n.guildId
        }))
    }, [n, t, x]), _ = a.useCallback((e, l) => {
        let a = n?.guildId;
        null != a && (t(d.Ws.GameShopItem), (0, o.R)({
            skuId: e,
            applicationId: l,
            isStorefront: !1,
            analyticsLocations: g,
            onClose: () => {
                location.pathname.indexOf(f.BVt.CHANNELS_GAME_SHOP(a)) >= 0 && x()
            }
        }))
    }, [t, x, g, n]);
    if (null == n) return null;
    let {
        skuIds: v
    } = n;
    return (0, l.jsx)(m.A, {
        title: h.intl.string(h.t.WDdlUb),
        onClickViewAll: p,
        children: (0, l.jsx)(c.R, {
            skuIds: v,
            analyticsLocations: g,
            onCardClick: _
        })
    })
}