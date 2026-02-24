/** chunk id: 631784, original params: e,t,i (module,exports,require) **/
i.d(t, {
    r: () => I
});
var n = i(64700),
    s = i(311907),
    r = i(20424),
    l = i(622543),
    o = i(950191),
    a = i(927813),
    d = i(403362),
    c = i(808247),
    u = i(133025),
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
    } = (0, s.cf)([l.A], () => ({
        defaultWishlistId: l.A.getFirstWishlistId(t)
    })), C = (0, r.A)({
        displayProfile: S,
        location: I
    }), {
        wishlistAndRecommendations: x,
        skusToUserAndReason: A,
        status: w
    } = function(e) {
        let {
            userIdsAndWishlistIds: t,
            numItems: i,
            applicationIds: r,
            source: l = _.B5.USER_PROFILE
        } = e, o = function(e) {
            let {
                userIds: t,
                numItems: i,
                applicationIds: r
            } = e, l = (0, s.bG)([u.A], () => u.A.getRecommendations(t, r));
            return n.useEffect(() => {
                let e = u.A.getRecommendations(t, r);
                null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - p) || c.A.fetchWishlistRecommendations(r, t, i)
            }, [t, r, i]), l
        }({
            userIds: n.useMemo(() => t.map(e => {
                let {
                    userId: t
                } = e;
                return t
            }), [t]),
            numItems: i,
            applicationIds: r
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
                isFetching: r,
                errors: l
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
                wishlistsAreFetching: r,
                wishlistErrors: l
            }
        }({
            userIdsAndWishlistIds: t,
            source: l
        }), {
            filteredRecommendations: g,
            skusToUserAndReasonRecommendations: C
        } = n.useMemo(() => null == o || "success" !== o.state ? {
            filteredRecommendations: [],
            skusToUserAndReasonRecommendations: {}
        } : {
            filteredRecommendations: o.data.skus.filter(e => !(e.id in f)),
            skusToUserAndReasonRecommendations: o.data.skusToUserAndReason
        }, [o, f]), {
            combinedSkus: x,
            combinedSkusToUserAndReason: A
        } = n.useMemo(() => {
            let e = {
                ...C
            };
            for (let [t, i] of Object.entries(h)) e[t] = {
                ...e[t],
                ...i
            };
            return {
                combinedSkus: [...a, ...g],
                combinedSkusToUserAndReason: e
            }
        }, [a, g, h, C]);
        return {
            wishlistAndRecommendations: x,
            skusToUserAndReason: A,
            status: n.useMemo(() => I || null == o || null != o && "loading" === o.state ? "loading" : S.filter(d.Vq).length > 0 || "error" === o.state ? "error" : "success", [I, o, S])
        }
    }({
        userIdsAndWishlistIds: n.useMemo(() => [{
            userId: t,
            wishlistId: g
        }], [t, g]),
        applicationIds: n.useMemo(() => C ? [f.FYj, h.XR] : [f.FYj], [C]),
        numItems: i,
        source: a
    }), j = n.useMemo(() => x.filter(e => null != A[e.id] && A[e.id][t] === m.j.WISHLIST).length, [x, t, A]);
    return {
        wishlistAndRecommendations: n.useMemo(() => x.slice(0, i), [x, i]),
        skusToUserAndReason: A,
        status: w,
        defaultWishlistId: g,
        totalUnownedWishlistItemCount: j
    }
}