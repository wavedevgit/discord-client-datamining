/** chunk id: 999450 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    i = n(877227),
    r = n(793574),
    s = n(688810),
    o = n(44724),
    c = n(317560),
    d = n(563988),
    u = n(409626),
    m = n(305080),
    x = n(954506),
    h = n(652215),
    f = n(985018);

function p(e) {
    let {
        trackAction: t
    } = e, {
        socialLayerStorefrontRecommendationsData: n,
        closeModal: p
    } = (0, m.c)(), {
        analyticsLocations: g
    } = (0, s.Ay)([r.A.GAME_PROFILE]), _ = l.useCallback(() => {
        n?.guildId != null && (t(u.Ws.GameShop), p(), (0, o.default)({
            guildId: n.guildId
        }))
    }, [n, t, p]), v = l.useCallback((e, a) => {
        let l = n?.guildId;
        null != l && (t(u.Ws.GameShopItem), p(), (0, c.R)({
            skuId: e,
            applicationId: a,
            isStorefront: !1,
            analyticsLocations: g,
            onClose: () => {
                (0, i.JK)().location.pathname.indexOf(h.BVt.CHANNELS_GAME_SHOP(l)) >= 0 && p()
            }
        }))
    }, [t, p, g, n]);
    if (null == n) return null;
    let {
        skuIds: A
    } = n;
    return (0, a.jsx)(x.A, {
        title: f.intl.string(f.t.WDdlUb),
        onClickViewAll: _,
        children: (0, a.jsx)(d.R, {
            skuIds: A,
            analyticsLocations: g,
            onCardClick: v
        })
    })
}