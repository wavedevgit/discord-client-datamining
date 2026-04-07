/** chunk id: 939764 params = (module,exports,require) **/
n.d(t, {
    V: () => d
});
var a = n(64700),
    i = n(311907),
    l = n(429913),
    r = n(832163),
    s = n(594832),
    o = n(631784),
    c = n(287809);

function d(e) {
    let t = c.default.getCurrentUser()?.id,
        n = a.useMemo(() => null != t ? [t] : [], [t]),
        d = (0, i.bG)([r.A], () => null != e ? r.A.getApplicationIdFromDetectableId(e.id) : void 0),
        u = (0, l.h)(d),
        m = a.useMemo(() => null != d ? [d] : [], [d]),
        {
            recommendations: x,
            status: g
        } = (0, o.XQ)({
            applicationIds: m,
            userIds: n,
            numItems: 6,
            source: s.B5.USER_PROFILE
        });
    return {
        socialLayerStorefrontRecommendationsData: a.useMemo(() => null == u || null == u.guildId || "success" !== g || 0 === x.length ? null : {
            application: u,
            skuIds: x.map(e => e.id),
            guildId: u.guildId
        }, [u, g, x])
    }
}