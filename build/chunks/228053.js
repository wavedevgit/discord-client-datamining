/** Chunk was on 42944 **/
/** chunk id: 228053, original params: e,a,n (module,exports,require) **/
n.d(a, {
    A: () => P
}), n(896048);
var t = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(688810),
    m = n(429913),
    p = n(576030),
    f = n(713517),
    v = n(492518),
    x = n(242640),
    g = n(808247),
    A = n(594832),
    j = n(287809),
    h = n(871123),
    I = n(592356),
    N = n(366523),
    b = n(235218),
    E = n(188275),
    O = n(518477),
    y = n(985018),
    L = n(30621);

function R(e) {
    let {
        application: a,
        sku: n,
        handleOpenUserProfileModal: i,
        analyticsLocations: r
    } = e, o = l.useRef(null), {
        analyticsLocations: m
    } = (0, u.Ay)(null != r ? r : []), {
        isHoveringOrFocusing: x
    } = (0, f.A)(o), [j, h] = l.useState(!1), I = l.useCallback(async e => {
        if (e.stopPropagation(), !j) {
            h(!0);
            try {
                await g.A.addSkuToWishlist(n.id, m), null == i || i({
                    tabSection: O.RP.WISHLIST
                })
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(y.intl.string(y.t.F8FvUy), d.ToastType.FAILURE)), s.ORC.announce(y.intl.string(y.t.F8FvUy))
            } finally {
                h(!1)
            }
        }
    }, [n.id, m, i, j]);
    return (0, t.jsx)(c.un, {
        title: y.intl.string(y.t["8DkMEQ"]),
        body: n.name,
        asset: (0, t.jsx)(p.mW, {
            application: a
        }),
        assetSize: A.Q8,
        children: (0, t.jsxs)(s.sqX, {
            className: L.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: I,
            children: [(0, t.jsx)(N.e, {
                shape: "custom",
                containerClassName: L.Nr,
                foregroundImageClassName: L.wP,
                backgroundImageClassName: L.GC,
                sku: n
            }, n.id), (x || j) && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: L.p0
                }), (0, t.jsx)("div", {
                    className: L.R$,
                    children: j ? (0, t.jsx)(v.k, {}) : (0, t.jsx)(s.pa$, {
                        size: "lg",
                        color: d.LU0.unsafe_rawColors.WHITE_500
                    })
                })]
            })]
        })
    })
}

function P(e) {
    let {
        wishlist: a,
        handleOpenUserProfileModal: n,
        analyticsLocations: i,
        numWishlistItemsToRecommend: s,
        maxWishlistItemsToShow: c = s,
        className: d
    } = e, u = (0, m.h)(E.XR), p = (0, o.bG)([j.default], () => j.default.getCurrentUser()), f = (0, o.bG)([j.default], () => j.default.getUser(null == a ? void 0 : a.userId)), g = null == a || null != p && null != a && a.userId === p.id, A = l.useMemo(() => null == a ? null != p ? [p.id] : void 0 : [a.userId], [a, p]), N = (0, I.A)({
        guildId: (0, h.zf)(),
        numWishlistItems: s,
        location: "SocialLayerAddToWishlistGrid",
        applicationId: E.XR,
        userIds: A,
        includeWishlists: !1
    }), O = l.useMemo(() => {
        var e;
        return new Set(null != (e = null == a ? void 0 : a.items.map(e => e.skuId)) ? e : [])
    }, [a]), y = N.recommendations.filter(e => !O.has(e.skuId)).slice(0, c);
    return "success" !== N.state ? (0, t.jsx)("div", {
        className: L.g4,
        children: (0, t.jsx)(v.k, {})
    }) : 0 === y.length ? null : (0, t.jsx)("ul", {
        className: r()(L.Vg, d),
        children: y.map(e => g ? (0, t.jsx)(R, {
            application: u,
            sku: e.sku,
            handleOpenUserProfileModal: n,
            analyticsLocations: i
        }, e.skuId) : (0, t.jsx)(b.A, {
            item: e,
            wishlistId: a.id,
            isOwner: !1,
            profileOwner: f,
            cardSize: x.Y.FLEX,
            showOverlayButton: !0,
            hideButtonIcon: !0,
            isDragging: !1
        }, e.skuId))
    })
}