/** chunk id: 999450 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(44724),
    o = n(317560),
    c = n(563988),
    d = n(305080),
    u = n(954506),
    m = n(985018);

function x() {
    let {
        socialLayerStorefrontRecommendationsData: e
    } = (0, d.c)(), {
        analyticsLocations: t
    } = (0, r.Ay)([i.A.GAME_PROFILE]), n = l.useCallback(() => {
        e?.guildId != null && (0, s.default)({
            guildId: e.guildId
        })
    }, [e]), x = l.useCallback(n => {
        e?.guildId != null && (0, o.R)({
            skuId: n,
            applicationId: e.application.id,
            guildId: e.guildId,
            isStorefront: !1,
            analyticsLocations: t
        })
    }, [e, t]);
    if (null == e) return null;
    let {
        skuIds: _
    } = e;
    return (0, a.jsx)(u.A, {
        title: m.intl.string(m.t.WDdlUb),
        onClickViewAll: n,
        children: (0, a.jsx)(c.R, {
            skuIds: _,
            analyticsLocations: t,
            onCardClick: x
        })
    })
}