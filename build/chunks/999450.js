/** chunk id: 999450 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(627968),
    l = n(64700),
    i = n(877227),
    r = n(793574),
    s = n(688810),
    c = n(44724),
    o = n(317560),
    d = n(563988),
    u = n(409626),
    m = n(305080),
    x = n(954506),
    h = n(652215),
    g = n(985018);

function f(e) {
    let {
        trackAction: t
    } = e, {
        socialLayerStorefrontRecommendationsData: n,
        closeModal: f
    } = (0, m.c)(), {
        analyticsLocations: _
    } = (0, s.Ay)([r.A.GAME_PROFILE]), p = l.useCallback(() => {
        n?.guildId != null && (t(u.Ws.GameShop), f(), (0, c.default)({
            guildId: n.guildId
        }))
    }, [n, t, f]), v = l.useCallback((e, a) => {
        let l = n?.guildId;
        null != l && (t(u.Ws.GameShopItem), f(), (0, o.R)({
            skuId: e,
            applicationId: a,
            isStorefront: !1,
            analyticsLocations: _,
            onClose: () => {
                (0, i.JK)().location.pathname.indexOf(h.BVt.CHANNELS_GAME_SHOP(l)) >= 0 && f()
            }
        }))
    }, [t, f, _, n]);
    if (null == n) return null;
    let {
        skuIds: A
    } = n;
    return (0, a.jsx)(x.A, {
        title: g.intl.string(g.t.WDdlUb),
        onClickViewAll: p,
        children: (0, a.jsx)(d.R, {
            skuIds: A,
            analyticsLocations: _,
            onCardClick: v
        })
    })
}