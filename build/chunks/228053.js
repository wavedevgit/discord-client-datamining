/** Chunk was on 21738 **/
/** chunk id: 228053, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(688810),
    p = n(429913),
    h = n(576030),
    g = n(713517),
    f = n(492518),
    m = n(242640),
    A = n(808247),
    _ = n(594832),
    b = n(287809),
    E = n(871123),
    O = n(592356),
    y = n(366523),
    I = n(235218),
    v = n(188275),
    S = n(518477),
    C = n(985018),
    N = n(30621);

function T(e) {
    let {
        application: t,
        sku: n,
        handleOpenUserProfileModal: l,
        analyticsLocations: a
    } = e, o = i.useRef(null), {
        analyticsLocations: p
    } = (0, d.Ay)(null != a ? a : []), {
        isHoveringOrFocusing: m
    } = (0, g.A)(o), [b, E] = i.useState(!1), O = i.useCallback(async e => {
        if (e.stopPropagation(), !b) {
            E(!0);
            try {
                await A.A.addSkuToWishlist(n.id, p), null == l || l({
                    tabSection: S.RP.WISHLIST
                })
            } catch (e) {
                (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.F8FvUy), u.ToastType.FAILURE)), s.ORC.announce(C.intl.string(C.t.F8FvUy))
            } finally {
                E(!1)
            }
        }
    }, [n.id, p, l, b]);
    return (0, r.jsx)(c.un, {
        title: C.intl.string(C.t["8DkMEQ"]),
        body: n.name,
        asset: (0, r.jsx)(h.mW, {
            application: t
        }),
        assetSize: _.Q8,
        children: (0, r.jsxs)(s.sqX, {
            className: N.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: O,
            children: [(0, r.jsx)(y.e, {
                shape: "custom",
                containerClassName: N.Nr,
                foregroundImageClassName: N.wP,
                backgroundImageClassName: N.GC,
                sku: n
            }, n.id), (m || b) && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: N.p0
                }), (0, r.jsx)("div", {
                    className: N.R$,
                    children: b ? (0, r.jsx)(f.k, {}) : (0, r.jsx)(s.pa$, {
                        size: "lg",
                        color: u.LU0.unsafe_rawColors.WHITE_500
                    })
                })]
            })]
        })
    })
}

function j(e) {
    let {
        wishlist: t,
        handleOpenUserProfileModal: n,
        analyticsLocations: l,
        numWishlistItemsToRecommend: s,
        maxWishlistItemsToShow: c = s,
        className: u
    } = e, d = (0, p.h)(v.XR), h = (0, o.bG)([b.default], () => b.default.getCurrentUser()), g = (0, o.bG)([b.default], () => b.default.getUser(null == t ? void 0 : t.userId)), A = null == t || null != h && null != t && t.userId === h.id, _ = i.useMemo(() => null == t ? null != h ? [h.id] : void 0 : [t.userId], [t, h]), y = (0, O.A)({
        guildId: (0, E.zf)(),
        numWishlistItems: s,
        location: "SocialLayerAddToWishlistGrid",
        applicationId: v.XR,
        userIds: _,
        includeWishlists: !1
    }), S = i.useMemo(() => {
        var e;
        return new Set(null != (e = null == t ? void 0 : t.items.map(e => e.skuId)) ? e : [])
    }, [t]), C = y.recommendations.filter(e => !S.has(e.skuId)).slice(0, c);
    return "success" !== y.state ? (0, r.jsx)("div", {
        className: N.g4,
        children: (0, r.jsx)(f.k, {})
    }) : 0 === C.length ? null : (0, r.jsx)("ul", {
        className: a()(N.Vg, u),
        children: C.map(e => A ? (0, r.jsx)(T, {
            application: d,
            sku: e.sku,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.skuId) : (0, r.jsx)(I.A, {
            item: e,
            wishlistId: t.id,
            isOwner: !1,
            profileOwner: g,
            cardSize: m.Y.FLEX,
            showOverlayButton: !0,
            hideButtonIcon: !0,
            isDragging: !1
        }, e.skuId))
    })
}