/** chunk id: 631784 params = (module,exports,require) **/
n.d(t, {
    U: () => M,
    r: () => L
});
var s = n(64700),
    i = n(311907),
    l = n(20424),
    r = n(622543),
    o = n(950191),
    u = n(927813),
    a = n(403362),
    d = n(808247),
    c = n(133025),
    h = n(310209),
    m = n(321902),
    I = n(594832),
    f = n(746081);
let S = 30 * u.A.Millis.MINUTE;

function A(e) {
    let {
        userIdsAndWishlistIds: t,
        numItems: n,
        applicationIds: l,
        source: r = I.B5.USER_PROFILE
    } = e, o = function(e) {
        let {
            userIds: t,
            numItems: n,
            applicationIds: l
        } = e, r = (0, i.bG)([c.A], () => c.A.getRecommendations(t, l));
        return s.useEffect(() => {
            let e = c.A.getRecommendations(t, l);
            null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - S) || d.A.fetchWishlistRecommendations(l, t, n)
        }, [t, l, n]), r
    }({
        userIds: s.useMemo(() => t.map(e => {
            let {
                userId: t
            } = e;
            return t
        }), [t]),
        numItems: n,
        applicationIds: l
    }), {
        sortedWishlistSkus: u,
        wishlistSkuIdToSku: m,
        wishlistSkusToUserAndReasonMap: f,
        wishlistsAreFetching: A,
        wishlistErrors: g
    } = function(e) {
        let {
            userIdsAndWishlistIds: t,
            source: n
        } = e, {
            wishlists: i,
            isFetching: l,
            errors: r
        } = (0, I.sv)({
            wishlistIdsAndUsers: t,
            source: n
        }), o = s.useMemo(() => {
            let e = i.filter(a.Vq),
                t = {};
            for (let n of e)
                for (let e of n.items) null == e.sku || e.isOwned || (t[e.skuId] = {
                    ...null != t[e.skuId] ? t[e.skuId] : {},
                    [n.userId]: h.j.WISHLIST
                });
            return t
        }, [i]), u = s.useMemo(() => Object.fromEntries(i.filter(a.Vq).flatMap(e => e.items).filter(e => null != e && null != e.sku && !e.isOwned).map(e => [e.skuId, e.sku])), [i]);
        return {
            sortedWishlistSkus: s.useMemo(() => Object.keys(u).sort((e, t) => Object.keys(o[t] ?? {}).length - Object.keys(o[e] ?? {}).length).map(e => u[e]), [u, o]),
            wishlistSkuIdToSku: u,
            wishlistSkusToUserAndReasonMap: o,
            wishlistsAreFetching: l,
            wishlistErrors: r
        }
    }({
        userIdsAndWishlistIds: t,
        source: r
    }), {
        filteredRecommendations: E,
        skusToUserAndReasonRecommendations: L
    } = s.useMemo(() => null == o || "success" !== o.state ? {
        filteredRecommendations: [],
        skusToUserAndReasonRecommendations: {}
    } : {
        filteredRecommendations: o.data.skus.filter(e => !(e.id in m)),
        skusToUserAndReasonRecommendations: o.data.skusToUserAndReason
    }, [o, m]), {
        combinedSkus: M,
        combinedSkusToUserAndReason: R
    } = s.useMemo(() => {
        let e = {
            ...L
        };
        for (let [t, n] of Object.entries(f)) e[t] = {
            ...e[t],
            ...n
        };
        return {
            combinedSkus: [...u, ...E],
            combinedSkusToUserAndReason: e
        }
    }, [u, E, f, L]);
    return {
        recommendations: E,
        wishlistAndRecommendations: M,
        skusToUserAndReason: R,
        status: s.useMemo(() => A || null == o || null != o && "loading" === o.state ? "loading" : g.filter(a.Vq).length > 0 || "error" === o.state ? "error" : "success", [A, o, g])
    }
}

function g(e) {
    let t = (0, o.Ay)(e),
        n = (0, l.A)({
            displayProfile: t
        });
    return (0, m.T)(n)
}

function E(e) {
    let {
        defaultWishlistId: t
    } = (0, i.cf)([r.A], () => ({
        defaultWishlistId: r.A.getFirstWishlistId(e)
    }));
    return {
        userIdsAndWishlistIds: s.useMemo(() => [{
            userId: e,
            wishlistId: t
        }], [e, t]),
        defaultWishlistId: t
    }
}

function L(e) {
    let {
        userId: t,
        numItems: n,
        source: s = I.B5.USER_PROFILE
    } = e, {
        userIdsAndWishlistIds: i,
        defaultWishlistId: l
    } = E(t), {
        wishlistAndRecommendations: r,
        skusToUserAndReason: o,
        status: u
    } = A({
        userIdsAndWishlistIds: i,
        applicationIds: g(t),
        numItems: n,
        source: s
    }), {
        totalUnownedWishlistItemCount: a,
        slicedWishlistAndRecommendations: d
    } = (0, f.m)({
        wishlistAndRecommendations: r,
        skusToUserAndReason: o,
        userId: t,
        numItems: n
    });
    return {
        wishlistAndRecommendations: d,
        skusToUserAndReason: o,
        status: u,
        defaultWishlistId: l,
        totalUnownedWishlistItemCount: a
    }
}

function M(e) {
    let {
        userId: t,
        numItems: n,
        source: i = I.B5.USER_PROFILE
    } = e, {
        userIdsAndWishlistIds: l
    } = E(t), {
        recommendations: r,
        skusToUserAndReason: o,
        status: u
    } = A({
        userIdsAndWishlistIds: l,
        applicationIds: g(t),
        numItems: n,
        source: i
    });
    return {
        recommendations: s.useMemo(() => r.slice(0, n), [r, n]),
        skusToUserAndReason: o,
        status: u
    }
}