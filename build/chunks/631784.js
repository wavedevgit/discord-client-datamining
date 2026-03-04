/** chunk id: 631784, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => f
});
var i = n(64700),
    s = n(311907),
    r = n(20424),
    a = n(622543),
    l = n(950191),
    o = n(927813),
    c = n(403362),
    d = n(808247),
    u = n(133025),
    _ = n(310209),
    I = n(321902),
    g = n(594832),
    A = n(746081);
let S = 30 * o.A.Millis.MINUTE;

function f(e) {
    let {
        userId: t,
        numItems: n,
        source: o = g.B5.USER_PROFILE,
        location: f
    } = e, m = (0, l.Ay)(t), {
        defaultWishlistId: p
    } = (0, s.cf)([a.A], () => ({
        defaultWishlistId: a.A.getFirstWishlistId(t)
    })), T = (0, r.A)({
        displayProfile: m,
        location: f
    }), {
        wishlistAndRecommendations: E,
        skusToUserAndReason: L,
        status: R
    } = function(e) {
        let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: r,
            source: a = g.B5.USER_PROFILE
        } = e, l = function(e) {
            let {
                userIds: t,
                numItems: n,
                applicationIds: r
            } = e, a = (0, s.bG)([u.A], () => u.A.getRecommendations(t, r));
            return i.useEffect(() => {
                let e = u.A.getRecommendations(t, r);
                null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - S) || d.A.fetchWishlistRecommendations(r, t, n)
            }, [t, r, n]), a
        }({
            userIds: i.useMemo(() => t.map(e => {
                let {
                    userId: t
                } = e;
                return t
            }), [t]),
            numItems: n,
            applicationIds: r
        }), {
            sortedWishlistSkus: o,
            wishlistSkuIdToSku: I,
            wishlistSkusToUserAndReasonMap: A,
            wishlistsAreFetching: f,
            wishlistErrors: m
        } = function(e) {
            let {
                userIdsAndWishlistIds: t,
                source: n
            } = e, {
                wishlists: s,
                isFetching: r,
                errors: a
            } = (0, g.sv)({
                wishlistIdsAndUsers: t,
                source: n
            }), l = i.useMemo(() => {
                let e = s.filter(c.Vq),
                    t = {};
                for (let n of e)
                    for (let e of n.items) null == e.sku || e.isOwned || (t[e.skuId] = {
                        ...null != t[e.skuId] ? t[e.skuId] : {},
                        [n.userId]: _.j.WISHLIST
                    });
                return t
            }, [s]), o = i.useMemo(() => Object.fromEntries(s.filter(c.Vq).flatMap(e => e.items).filter(e => null != e && null != e.sku && !e.isOwned).map(e => [e.skuId, e.sku])), [s]);
            return {
                sortedWishlistSkus: i.useMemo(() => Object.keys(o).sort((e, t) => Object.keys(l[t] ?? {}).length - Object.keys(l[e] ?? {}).length).map(e => o[e]), [o, l]),
                wishlistSkuIdToSku: o,
                wishlistSkusToUserAndReasonMap: l,
                wishlistsAreFetching: r,
                wishlistErrors: a
            }
        }({
            userIdsAndWishlistIds: t,
            source: a
        }), {
            filteredRecommendations: p,
            skusToUserAndReasonRecommendations: T
        } = i.useMemo(() => null == l || "success" !== l.state ? {
            filteredRecommendations: [],
            skusToUserAndReasonRecommendations: {}
        } : {
            filteredRecommendations: l.data.skus.filter(e => !(e.id in I)),
            skusToUserAndReasonRecommendations: l.data.skusToUserAndReason
        }, [l, I]), {
            combinedSkus: E,
            combinedSkusToUserAndReason: L
        } = i.useMemo(() => {
            let e = {
                ...T
            };
            for (let [t, n] of Object.entries(A)) e[t] = {
                ...e[t],
                ...n
            };
            return {
                combinedSkus: [...o, ...p],
                combinedSkusToUserAndReason: e
            }
        }, [o, p, A, T]);
        return {
            wishlistAndRecommendations: E,
            skusToUserAndReason: L,
            status: i.useMemo(() => f || null == l || null != l && "loading" === l.state ? "loading" : m.filter(c.Vq).length > 0 || "error" === l.state ? "error" : "success", [f, l, m])
        }
    }({
        userIdsAndWishlistIds: i.useMemo(() => [{
            userId: t,
            wishlistId: p
        }], [t, p]),
        applicationIds: (0, I.T)(T),
        numItems: n,
        source: o
    }), {
        totalUnownedWishlistItemCount: O,
        slicedWishlistAndRecommendations: h
    } = (0, A.m)({
        wishlistAndRecommendations: E,
        skusToUserAndReason: L,
        userId: t,
        numItems: n
    });
    return {
        wishlistAndRecommendations: h,
        skusToUserAndReason: L,
        status: R,
        defaultWishlistId: p,
        totalUnownedWishlistItemCount: O
    }
}