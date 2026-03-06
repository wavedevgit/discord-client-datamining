/** chunk id: 939764 params = (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => u
});
var a = n(64700),
    l = n(311907),
    i = n(223273),
    r = n(871123),
    s = n(733391),
    c = n(832163),
    o = n(287809),
    d = n(705751);

function u(e) {
    let t = o.default.getCurrentUser()?.id,
        n = a.useMemo(() => (null != t ? [t] : []).slice(0, s.g9), [t]),
        u = a.useMemo(() => {
            if (null != e && e.type === d.S7.GAME) return e.linkedGames?.find(e => e.type === i.Mh.OFFICIAL && (0, r.Xg)(e.application))?.application
        }, [e]),
        m = (0, l.bG)([c.A], () => null != u ? c.A.recommendationsByApplicationsAndUsers(u.id, n) : void 0);
    return a.useEffect(() => {
        null != u && 0 !== n.length && (0, s.Xg)({
            applicationId: u.id,
            userIds: n,
            includeWishlists: !1
        })
    }, [u, n]), {
        socialLayerStorefrontRecommendationsData: a.useMemo(() => null == u || null == u.guildId || null == m || "success" !== m.state || 0 === m.data.skus.length ? null : {
            application: u,
            skuIds: m.data.skus.map(e => e.id),
            guildId: u.guildId
        }, [u, m])
    }
}