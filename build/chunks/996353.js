/** Chunk was on 91075 **/
/** chunk id: 996353, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Ay: () => _,
    aO: () => p,
    h: () => f
});
var n = i(64700),
    r = i(871123),
    a = i(20424),
    l = i(592356),
    s = i(166492),
    o = i(950191),
    d = i(721932),
    u = i(594832),
    c = i(188275),
    m = i(985018);
let f = 4;

function _(e) {
    let {
        user: t,
        numItems: i = u.pl,
        location: m,
        source: f
    } = e, _ = (0, o.Ay)(t.id), p = (0, s.a)({
        location: m
    }), g = n.useMemo(() => f !== u.mQ.DM_SIDE_PANEL || p, [f, p]), {
        defaultWishlistId: h,
        wishlist: I,
        popularCollectiblesProducts: C,
        isFetchingWishlist: S,
        isValidatingPopularProducts: x,
        isFetchingPopularProducts: b,
        wishlistError: T
    } = (0, u.eT)({
        giftRecipient: t,
        minNumItems: g ? i : 0,
        source: u.B5.USER_PROFILE
    }), A = (0, a.A)({
        displayProfile: _,
        location: m
    }), O = n.useMemo(() => [t.id], [t.id]), {
        recommendations: j
    } = (0, l.A)({
        guildId: (0, r.zf)(),
        numWishlistItems: g ? Math.max(i, u.pl) : 0,
        location: m,
        applicationId: c.XR,
        userIds: O,
        includeWishlists: !0
    }), v = n.useMemo(() => {
        var e;
        return g && ((null != (e = null == I ? void 0 : I.items) ? e : []).filter(e => !0 !== e.isOwned && (0, d.$)(e)).length > 0 || A) ? j : []
    }, [null == I ? void 0 : I.items, A, g, j]), {
        displayItems: N,
        hasMoreItems: P,
        totalWishlistItemCount: L,
        wishlistItemCountToBeDisplayed: w
    } = (0, u.mk)({
        wishlist: I,
        popularCollectiblesProducts: C,
        popularSocialLayerStorefrontItems: v,
        wishlistError: T,
        numItems: i
    });
    return {
        displayItems: N,
        hasMoreItems: P,
        totalWishlistItemCount: L,
        wishlistItemCountToBeDisplayed: w,
        fetchState: n.useMemo(() => S || x || b ? {
            status: "loading"
        } : null != T ? {
            status: "error",
            error: T
        } : {
            status: "success"
        }, [S, x, b, T]),
        defaultWishlistId: h,
        wishlist: I
    }
}

function p(e) {
    let {
        user: t,
        numItems: i = u.pl,
        source: r,
        location: a
    } = e, {
        displayItems: l,
        defaultWishlistId: s,
        wishlist: o
    } = _({
        user: t,
        numItems: i,
        source: r,
        location: a
    }), {
        displayedWishlistItems: d,
        title: c
    } = n.useMemo(() => {
        let e = null == o ? void 0 : o.items.filter(e => !0 !== e.isOwned);
        return null == e || 0 === e.length ? {
            displayedWishlistItems: null,
            title: null
        } : e.length > 1 && e.length < i && l.length > e.length ? {
            displayedWishlistItems: l,
            title: m.intl.string(m.t.BCi1gT)
        } : {
            displayedWishlistItems: e.map(e => ({
                item: e,
                source: u.uS.WISHLIST
            })),
            title: m.intl.string(m.t["7lZ31J"])
        }
    }, [l, o, i]);
    return {
        defaultWishlistId: s,
        displayedWishlistItems: d,
        title: c
    }
}