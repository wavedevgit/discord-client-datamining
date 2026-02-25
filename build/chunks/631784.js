/** chunk id: 631784, original params: e,t,i (module,exports,require) **/
i.d(t, {
    r: () => I
});
var n = i(64700),
    s = i(311907),
    l = i(20424),
    r = i(622543),
    o = i(950191),
    a = i(927813),
    d = i(403362),
    u = i(808247),
    c = i(133025),
    m = i(310209),
    _ = i(594832),
    f = i(652215),
    h = i(188275);
let p = 30 * a.A.Millis.MINUTE;

function I(e) {
    let {
        userId: t,
        numItems: i,
        source: a = _.B5.USER_PROFILE,
        location: I
    } = e, S = (0, o.Ay)(t), {
        defaultWishlistId: g
    } = (0, s.cf)([r.A], () => ({
        defaultWishlistId: r.A.getFirstWishlistId(t)
    })), A = (0, l.A)({
        displayProfile: S,
        location: I
    }), {
        wishlistAndRecommendations: C,
        skusToUserAndReason: x,
        status: w
    } = function(e) {
        let {
            userIdsAndWishlistIds: t,
            numItems: i,
            applicationIds: l,
            source: r = _.B5.USER_PROFILE
        } = e, o = function(e) {
            let {
                userIds: t,
                numItems: i,
                applicationIds: l
            } = e, r = (0, s.bG)([c.A], () => c.A.getRecommendations(t, l));
            return n.useEffect(() => {
                let e = c.A.getRecommendations(t, l);
                null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - p) || u.A.fetchWishlistRecommendations(l, t, i)
            }, [t, l, i]), r
        }({
            userIds: n.useMemo(() => t.map(e => {
                let {
                    userId: t
                } = e;
                return t
            }), [t]),
            numItems: i,
            applicationIds: l
        }), {
            sortedWishlistSkus: a,
            wishlistSkuIdToSku: f,
            wishlistSkusToUserAndReasonMap: h,
            wishlistsAreFetching: I,
            wishlistErrors: S
        } = function(e) {
            let {
                userIdsAndWishlistIds: t,
                source: i
            } = e, {
                wishlists: s,
                isFetching: l,
                errors: r
            } = (0, _.sv)({
                wishlistIdsAndUsers: t,
                source: i
            }), o = n.useMemo(() => {
                let e = s.filter(d.Vq),
                    t = {};
                for (let i of e)
                    for (let e of i.items) null == e.sku || e.isOwned || (t[e.skuId] = {
                        ...null != t[e.skuId] ? t[e.skuId] : {},
                        [i.userId]: m.j.WISHLIST
                    });
                return t
            }, [s]), a = n.useMemo(() => Object.fromEntries(s.filter(d.Vq).flatMap(e => e.items).filter(e => null != e && null != e.sku && !e.isOwned).map(e => [e.skuId, e.sku])), [s]);
            return {
                sortedWishlistSkus: n.useMemo(() => Object.keys(a).sort((e, t) => Object.keys(o[t] ?? {}).length - Object.keys(o[e] ?? {}).length).map(e => a[e]), [a, o]),
                wishlistSkuIdToSku: a,
                wishlistSkusToUserAndReasonMap: o,
                wishlistsAreFetching: l,
                wishlistErrors: r
            }
        }({
            userIdsAndWishlistIds: t,
            source: r
        }), {
            filteredRecommendations: g,
            skusToUserAndReasonRecommendations: A
        } = n.useMemo(() => null == o || "success" !== o.state ? {
            filteredRecommendations: [],
            skusToUserAndReasonRecommendations: {}
        } : {
            filteredRecommendations: o.data.skus.filter(e => !(e.id in f)),
            skusToUserAndReasonRecommendations: o.data.skusToUserAndReason
        }, [o, f]), {
            combinedSkus: C,
            combinedSkusToUserAndReason: x
        } = n.useMemo(() => {
            let e = {
                ...A
            };
            for (let [t, i] of Object.entries(h)) e[t] = {
                ...e[t],
                ...i
            };
            return {
                combinedSkus: [...a, ...g],
                combinedSkusToUserAndReason: e
            }
        }, [a, g, h, A]);
        return {
            wishlistAndRecommendations: C,
            skusToUserAndReason: x,
            status: n.useMemo(() => I || null == o || null != o && "loading" === o.state ? "loading" : S.filter(d.Vq).length > 0 || "error" === o.state ? "error" : "success", [I, o, S])
        }
    }({
        userIdsAndWishlistIds: n.useMemo(() => [{
            userId: t,
            wishlistId: g
        }], [t, g]),
        applicationIds: n.useMemo(() => A ? [f.FYj, h.XR] : [f.FYj], [A]),
        numItems: i,
        source: a
    }), T = n.useMemo(() => C.filter(e => null != x[e.id] && x[e.id][t] === m.j.WISHLIST).length, [C, t, x]);
    return {
        wishlistAndRecommendations: n.useMemo(() => C.slice(0, i), [C, i]),
        skusToUserAndReason: x,
        status: w,
        defaultWishlistId: g,
        totalUnownedWishlistItemCount: T
    }
}