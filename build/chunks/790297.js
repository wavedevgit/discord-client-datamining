/** chunk id: 790297, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N0: () => h,
    lC: () => _,
    uS: () => m
});
var s = n(64700),
    l = n(311907),
    r = n(793574),
    a = n(688810),
    i = n(954571),
    o = n(927578),
    c = n(870216),
    d = n(758836),
    u = n(652215),
    g = n(788868);
let _ = e => {
        let {
            analyticsSource: t,
            analyticsLocations: n
        } = (0, l.cf)([c.A], () => c.A.getAnalytics()), s = (e => {
            switch (e) {
                case d.G2.ORBS:
                    return r.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case d.G2.HOME:
                    return r.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case d.G2.BUNDLES:
                    return r.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case d.G2.AVATAR_DECORATIONS:
                    return r.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case d.G2.PROFILE_EFFECTS:
                    return r.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case d.G2.NAMEPLATES:
                    return r.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case d.G2.CATALOG:
                case d.G2.LAYOUT:
                    return r.A.COLLECTIBLES_SHOP
            }
        })(e), {
            analyticsLocations: i,
            newestAnalyticsLocation: o
        } = (0, a.Ay)([...n, r.A.COLLECTIBLES_SHOP, s]);
        return {
            analyticsSource: t,
            analyticsLocations: i,
            newestAnalyticsLocation: o,
            currentTabLocation: s
        }
    },
    m = (e, t, n, l, r) => {
        let {
            analyticsLocations: a,
            analyticsSource: o,
            currentTabLocation: c,
            newestAnalyticsLocation: g
        } = _(t);
        s.useEffect(() => {
            if (l !== d.Pf.VISIBLE || g !== c) return;
            let s = t === d.G2.CATALOG ? r : o;
            i.default.track(u.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: s,
                page_session_id: e,
                page_type: t === d.G2.CATALOG ? "full" : t,
                category: t === d.G2.HOME ? void 0 : n
            })
        }, [a, e, t, n, c, l, r, o, g])
    },
    h = (e, t) => {
        let {
            analyticsLocations: n
        } = _(e);
        s.useEffect(() => {
            null == t || o.Ay.canUseCollectibles(t) || i.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, {
                type: g.e.COLLECTIBLES_SHOP,
                location_stack: n
            })
        }, [n, t])
    }