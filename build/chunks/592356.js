/** chunk id: 592356, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m,
    o: () => f
}), n(114821), n(339614), n(896048), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(52133),
    o = n(721932),
    s = n(67480),
    l = n(733391),
    c = n(832163),
    u = n(916023),
    d = n(652215);
let f = 6;

function p(e) {
    return new o.A({
        sku_id: e.id,
        sku_product_line: d.EZt.SOCIAL_LAYER_GAME_ITEM,
        sku_name: e.name,
        sku: e
    })
}

function _(e) {
    let {
        applicationId: t,
        numItems: n,
        userIds: a,
        isEligible: o,
        includeWishlists: s
    } = e, u = null == a ? void 0 : a.slice(0, l.g9), d = (0, i.bG)([c.A], () => null != t ? c.A.recommendationsByApplicationsAndUsers(t, u) : void 0);
    return r.useEffect(() => {
        o && null != t && null != u && 0 !== u.length && 0 !== n && (0, l.Xg)({
            applicationId: t,
            userIds: u,
            maxRecommendations: n,
            includeWishlists: s
        })
    }, [t, u, o, n, s]), r.useMemo(() => {
        let e = null == d ? "loading" : d.state;
        return null == d || "success" !== d.state ? {
            state: e,
            recommendations: [],
            skuIdToUserIdsReasons: {}
        } : {
            state: e,
            recommendations: d.data.skus.slice(0, n).map(e => p(e)),
            skuIdToUserIdsReasons: d.data.skusToRecommendationReasons
        }
    }, [d, n])
}

function h(e) {
    let {
        guildId: t,
        numItems: n,
        isEligible: a
    } = e, o = (0, i.bG)([c.A], () => null != t ? c.A.getStorefrontData(t) : void 0);
    r.useEffect(() => {
        a && null != t && null == c.A.getStorefrontData(t) && 0 !== n && (0, l.Rw)(t, {
            eager: !1
        })
    }, [t, n, a]);
    let u = r.useMemo(() => {
            if (null == o || null == o.storefront || "loading" === o.state || "partially-fetched" === o.state) return [];
            let e = o.storefront.pages.flatMap(e => {
                    var t, n;
                    return [...e.skuIds, ...null != (t = null == (n = e.sections) ? void 0 : n.flatMap(e => e.skuIds)) ? t : []]
                }),
                t = [],
                r = new Set;
            for (let i of e)
                if (!r.has(i) && (t.push(i), r.add(i), t.length >= n)) break;
            return t
        }, [o, n]),
        d = (0, i.yK)([s.A], () => u.map(e => s.A.get(e)).filter(e => null != e), [u]),
        f = r.useMemo(() => d.map(e => p(e)), [d]);
    return {
        state: r.useMemo(() => null == o || "loading" === o.state || "partially-fetched" === o.state || 0 === n ? "loading" : "error" === o.state ? "error" : "success", [o, n]),
        recommendations: f,
        skuIdToUserIdsReasons: {}
    }
}

function m(e) {
    let {
        guildId: t,
        numWishlistItems: n = f,
        location: i,
        applicationId: o,
        userIds: s,
        includeWishlists: l = !1
    } = e, c = (0, u.kt)({
        location: i
    }), d = null != s && s.length > 0, [p, m] = r.useState(s);
    r.useEffect(() => {
        m(e => null == e ? s : (0, a.v)(e, s) ? e : s)
    }, [s]);
    let {
        state: g,
        recommendations: E,
        skuIdToUserIdsReasons: y
    } = _({
        applicationId: o,
        userIds: p,
        numItems: n,
        isEligible: d && c,
        includeWishlists: l
    }), b = d && "error" !== g, {
        state: O,
        recommendations: v
    } = h({
        guildId: t,
        numItems: n,
        isEligible: !b && c
    });
    return c && 0 !== n ? b ? {
        state: g,
        recommendations: E,
        skuIdToUserIdsReasons: y
    } : {
        state: O,
        recommendations: v,
        skuIdToUserIdsReasons: {}
    } : {
        state: "success",
        recommendations: [],
        skuIdToUserIdsReasons: {}
    }
}