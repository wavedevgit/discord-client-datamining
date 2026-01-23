/** Chunk was on 59275 **/
/** chunk id: 790297, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N0: () => p,
    lC: () => f,
    uS: () => m
}), n(896048);
var r = n(64700),
    l = n(311907),
    s = n(793574),
    a = n(688810),
    i = n(954571),
    o = n(927578),
    c = n(870216),
    u = n(758836),
    d = n(652215),
    g = n(788868);
let f = e => {
        let {
            analyticsSource: t,
            analyticsLocations: n
        } = (0, l.cf)([c.A], () => c.A.getAnalytics()), r = (e => {
            switch (e) {
                case u.G2.ORBS:
                    return s.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case u.G2.HOME:
                    return s.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case u.G2.BUNDLES:
                    return s.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case u.G2.AVATAR_DECORATIONS:
                    return s.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case u.G2.PROFILE_EFFECTS:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case u.G2.NAMEPLATES:
                    return s.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case u.G2.CATALOG:
                    return s.A.COLLECTIBLES_SHOP
            }
        })(e), {
            analyticsLocations: i,
            newestAnalyticsLocation: o
        } = (0, a.Ay)([...n, s.A.COLLECTIBLES_SHOP, r]);
        return {
            analyticsSource: t,
            analyticsLocations: i,
            newestAnalyticsLocation: o,
            currentTabLocation: r
        }
    },
    m = (e, t, n, l, s) => {
        let {
            analyticsLocations: a,
            analyticsSource: o,
            currentTabLocation: c,
            newestAnalyticsLocation: g
        } = f(t);
        r.useEffect(() => {
            if (l !== u.Pf.VISIBLE || g !== c) return;
            let r = t === u.G2.CATALOG ? s : o;
            i.default.track(d.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: r,
                page_session_id: e,
                page_type: t === u.G2.CATALOG ? "full" : t,
                category: t === u.G2.HOME ? void 0 : n
            })
        }, [a, e, t, n, c, l, s, o, g])
    },
    p = (e, t) => {
        let {
            analyticsLocations: n
        } = f(e);
        r.useEffect(() => {
            null == t || o.Ay.canUseCollectibles(t) || i.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, {
                type: g.e.COLLECTIBLES_SHOP,
                location_stack: n
            })
        }, [n, t])
    }