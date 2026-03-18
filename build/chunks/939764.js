/** chunk id: 939764 params = (module,exports,require) **/
n.d(t, {
    V: () => u
});
var l = n(64700),
    a = n(311907),
    i = n(223273),
    r = n(832163),
    s = n(594832),
    c = n(631784),
    o = n(287809),
    d = n(705751);

function u(e) {
    let t = o.default.getCurrentUser()?.id,
        n = l.useMemo(() => null != t ? [t] : [], [t]),
        u = (0, a.bG)([r.A], () => r.A.getStorefrontDetectableGameAndApplicationIds()),
        m = l.useMemo(() => {
            if (null != e && e.type === d.S7.GAME) return e.linkedGames?.find(e => e.type === i.Mh.OFFICIAL && null != e.application && u.has(e.application.id))?.application
        }, [e, u]),
        x = l.useMemo(() => m?.id != null ? [m.id] : [], [m]),
        {
            recommendations: h,
            status: f
        } = (0, c.XQ)({
            applicationIds: x,
            userIds: n,
            numItems: 6,
            source: s.B5.USER_PROFILE
        });
    return {
        socialLayerStorefrontRecommendationsData: l.useMemo(() => null == m || null == m.guildId || "success" !== f || 0 === h.length ? null : {
            application: m,
            skuIds: h.map(e => e.id),
            guildId: m.guildId
        }, [m, f, h])
    }
}