/** chunk id: 878244, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => C,
    O: () => N
});
var n = i(627968),
    s = i(64700),
    a = i(575593),
    r = i(311907),
    l = i(435371),
    o = i(587895),
    c = i(576030),
    d = i(954571),
    u = i(427262),
    _ = i(594832),
    I = i(146423),
    g = i(460442),
    p = i(754804),
    A = i(479026),
    S = i(699976),
    E = i(652215),
    T = i(788868),
    m = i(985018),
    f = i(804810);
let L = T.vQ.DM_CHANNEL_WISHLIST,
    h = S.Z.SIZE_133;

function N(t) {
    let {
        spec: e = h
    } = t;
    return (0, n.jsx)(I.$, {
        spec: e
    })
}

function G(t) {
    let {
        sku: e,
        onClick: i,
        onOpenWishlist: a,
        wishlistOwner: r,
        tooltipInfo: o,
        wishlistId: c,
        source: u,
        hasMultipleSources: A,
        totalUnownedWishlistItems: S,
        index: T,
        skuPreviewStyle: m,
        maxWishlistLength: f,
        spec: L = h
    } = t, N = s.useMemo(() => ({
        collectibles: {
            nameplate: {
                width: 136
            }
        }
    }), []), G = T === f - 1 && S > f, O = S - f + 1, b = s.useCallback(() => {
        if (G) return void a();
        let t = u === _.uS.WISHLIST ? "wishlist" : "shop";
        d.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: t,
            wishlist_id: u === _.uS.WISHLIST ? c : null,
            product_line: e.productLine
        }), i?.()
    }, [i, c, u, e.id, e.productLine, a, G]), C = s.useMemo(() => {
        let t = (0, n.jsxs)(I.A, {
            sku: e,
            user: r,
            spec: L,
            skuPreviewStyle: m,
            options: N,
            onClick: b,
            children: [A && u === _.uS.POPULAR && (0, n.jsx)(p.oX, {
                spec: L
            }), A && u === _.uS.WISHLIST && (0, n.jsx)(p.kp, {
                spec: L
            }), G && (0, n.jsx)(g.Yb, {
                count: O
            })]
        });
        return o.shouldShow ? null != o.title && null == o.body && null == o.icon ? (0, n.jsx)(l.m_, {
            text: o.title,
            position: "top",
            asContainer: !0,
            delay: _.Zh,
            children: t
        }) : (0, n.jsx)(l.un, {
            title: o.title,
            body: o.body ?? "",
            asset: o.icon,
            assetSize: _.Q8,
            position: "top",
            asContainer: !0,
            delay: _.Zh,
            children: t
        }) : t
    }, [e, r, b, u, A, N, o.shouldShow, o.title, o.body, o.icon, O, m, G, L]);
    return (0, n.jsx)("div", {
        children: C
    })
}

function O(t) {
    let {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onClick: l,
        hasMultipleTypes: d,
        hasMultipleSources: I,
        source: g,
        ...p
    } = t, S = (0, r.bG)([o.A], () => o.A.getApplication(e.applicationId)), E = s.useMemo(() => {
        let t = u.Ay.getName(i),
            e = g === _.uS.WISHLIST ? m.intl.formatToPlainString(m.t.p3RmJF, {
                username: t
            }) : m.intl.string(m.t.Ig6VDH);
        return d || I ? !d && I ? {
            title: e,
            icon: (0, n.jsx)(c.mW, {
                application: S
            }),
            shouldShow: !0
        } : d && !I ? {
            title: m.intl.string(m.t["4yiU7x"]),
            icon: (0, n.jsx)(c.mW, {
                application: S
            }),
            shouldShow: !0
        } : {
            title: m.intl.string(m.t["4yiU7x"]),
            body: e,
            icon: (0, n.jsx)(c.mW, {
                application: S
            }),
            shouldShow: !0
        } : {
            title: m.intl.string(m.t["4yiU7x"]),
            shouldShow: !1
        }
    }, [g, d, I, S, i]), T = s.useCallback(() => {
        l?.(), (0, A.T)({
            isOwner: !1,
            giftingOrigin: L,
            profileOwner: i,
            isItemOwned: !1,
            application: S ?? void 0,
            sku: e,
            analyticsLocations: a ?? []
        })
    }, [e, i, S, a, l]);
    return (0, n.jsx)(G, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onClick: T,
        hasMultipleTypes: d,
        hasMultipleSources: I,
        tooltipInfo: E,
        source: g,
        ...p
    })
}

function b(t) {
    let {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: l,
        hasMultipleTypes: o,
        hasMultipleSources: d,
        source: I,
        ...g
    } = t, p = s.useMemo(() => {
        let t = u.Ay.getName(i),
            e = I === _.uS.WISHLIST ? m.intl.formatToPlainString(m.t.p3RmJF, {
                username: t
            }) : m.intl.string(m.t.Ig6VDH);
        return o || d ? !o && d ? {
            title: e,
            shouldShow: !0
        } : o && !d ? {
            title: m.intl.string(m.t.HFhcqh),
            icon: (0, n.jsx)(c.mW, {}),
            shouldShow: !0
        } : {
            title: m.intl.string(m.t.HFhcqh),
            body: e,
            icon: (0, n.jsx)(c.mW, {}),
            shouldShow: !0
        } : {
            title: m.intl.string(m.t.HFhcqh),
            shouldShow: !1
        }
    }, [I, o, d, i]), S = s.useMemo(() => null != e.bundledSkus && e.bundledSkus.length > 0 ? f.E : e.tenantMetadata?.collectibles?.type === a.R.NAMEPLATE ? f.q : void 0, [e.bundledSkus, e.tenantMetadata?.collectibles?.type]), E = s.useMemo(() => () => {
        (0, A._)({
            isOwner: !1,
            isItemOwned: !1,
            onWishlistItemClick: l,
            profileOwner: i,
            sku: e,
            analyticsLocations: r ?? [],
            giftingOrigin: L
        })
    }, [e, i, l, r]);
    return (0, n.jsx)(G, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: E,
        hasMultipleTypes: o,
        hasMultipleSources: d,
        tooltipInfo: p,
        source: I,
        skuPreviewStyle: S,
        ...g
    })
}

function C(t) {
    let {
        sku: e,
        ...i
    } = t;
    switch (e.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(O, {
                sku: e,
                ...i
            });
        case E.EZt.COLLECTIBLES:
            return (0, n.jsx)(b, {
                sku: e,
                ...i
            });
        default:
            return null
    }
}