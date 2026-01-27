/** Chunk was on web.js **/
/** chunk id: 968975, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(688810),
    s = n(871123),
    l = n(3648),
    c = n(594832),
    u = n(872472),
    d = n(721932),
    f = n(183555),
    p = n(535089),
    _ = n(946356),
    h = n(173678),
    m = n(985018),
    g = n(250783);
let E = 4;

function y(e) {
    let {
        wishlistItems: t = [],
        profileOwner: n,
        onClick: y,
        wishlistId: b,
        cardSize: O,
        title: v
    } = e, {
        analyticsLocations: A
    } = (0, o.Ay)(), {
        trackUserProfileWishlistAction: I
    } = (0, f.NJ)(), S = (0, i.useCallback)(e => {
        let {
            wishlistId: t,
            action: n,
            productLines: r
        } = e;
        null != t && I({
            wishlistId: t,
            action: n,
            productLines: r
        })
    }, [I]), {
        cards: T,
        singleItem: C,
        productLines: N
    } = (0, i.useMemo)(() => {
        let e = [],
            r = null,
            i = new Set,
            a = [],
            o = !1,
            f = !1,
            p = !1,
            _ = !1;
        for (let e = 0; e < t.length && a.length < E; e++) {
            let n = t[e],
                r = n.item;
            r.isOwned || (a.push(n), (0, d.$)(r) && (0, s.bF)(r.sku) ? o = !0 : (0, u.L)(r) && (f = !0), n.source === c.uS.WISHLIST ? p = !0 : n.source === c.uS.POPULAR && (_ = !0))
        }
        let m = o && f,
            g = p && _;
        for (let r = 0; r < a.length; r++) {
            let {
                item: o,
                source: s
            } = a[r], c = r === E - 1 && t.length > E, f = g ? s : void 0;
            (0, u.L)(o) ? (i.add(o.skuProductLine), e.push((0, h.M)(o, {
                index: r,
                moreCount: c ? t.length - E + 1 : void 0,
                profileOwner: n,
                analyticsLocations: A,
                onViewWishlist: y,
                wishlistId: b,
                showTypeTooltip: m,
                cardSize: O,
                itemSource: f
            }))) : (0, d.$)(o) && (i.add(o.skuProductLine), e.push((0, l.Z)(o, {
                index: r,
                moreCount: c ? t.length - E + 1 : void 0,
                profileOwner: n,
                analyticsLocations: A,
                onViewWishlist: y,
                wishlistId: b,
                showTypeTooltip: m,
                cardSize: O,
                itemSource: f
            })))
        }
        return 1 === a.length && (r = a[0].item), {
            cards: e,
            singleItem: r,
            productLines: i
        }
    }, [t, n, A, y, b, O]), w = (0, p.A)({
        wishlistId: null != b ? b : null,
        onAction: S,
        productLines: N
    });
    if (0 === T.length) return null;
    let R = T;
    return null != C && ((0, u.L)(C) ? R = (0, h.z)(C, {
        profileOwner: n,
        analyticsLocations: A,
        wishlistId: b,
        onViewWishlist: y
    }) : (0, d.$)(C) && (R = (0, l.A)(C, {
        profileOwner: n,
        analyticsLocations: A,
        wishlistId: b,
        onViewWishlist: y
    }))), (0, r.jsxs)(_.A.Overlay, {
        ref: w,
        className: g.kL,
        children: [(0, r.jsx)("div", {
            className: g.wx,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                children: null != v ? v : m.intl.string(m.t["7lZ31J"])
            })
        }), (0, r.jsx)("div", {
            className: g.vY,
            children: R
        })]
    })
}