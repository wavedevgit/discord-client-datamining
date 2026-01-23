/** Chunk was on web.js **/
/** chunk id: 957785, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435371),
    l = n(397927),
    c = n(594832),
    u = n(183555),
    d = n(524380),
    f = n(733557);
let p = i.forwardRef(function(e, t) {
    var n, i, a;
    let {
        onCardClick: p,
        tooltipConfig: _,
        shouldScalePreview: h = !0,
        renderPreview: m,
        moreCount: g,
        isSingleCard: E = !1,
        wishlistId: y,
        wishlistItem: b,
        cardSize: O = d.Y.MEDIUM,
        itemSource: v
    } = e, {
        skuId: A,
        skuProductLine: I
    } = b, {
        trackUserProfileWishlistAction: S
    } = (0, u.NJ)(), T = h ? f.ho : f.C8, C = E ? f.pr : f.Nr, N = null != g && g > 0, w = (0, r.jsxs)(l.DUT, {
        onClick: () => {
            p(), S({
                action: N ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                skuId: N ? null : A,
                wishlistId: y,
                productLines: new Set([I])
            })
        },
        className: s()(C, {
            [f.ax]: O === d.Y.SMALL
        }),
        "aria-label": null != (n = _.title) ? n : "",
        innerRef: t,
        children: [(0, r.jsx)("div", {
            className: T,
            children: m()
        }), N && (0, r.jsx)("div", {
            className: f.sv,
            children: (0, r.jsxs)(l.Text, {
                variant: "text-xs/medium",
                color: "always-white",
                children: ["+", g]
            })
        })]
    }), R = !N && null != v;
    return (0, r.jsxs)("div", {
        className: s()({
            [f.r4]: R
        }),
        children: [R && (0, r.jsx)("div", {
            className: f.RL,
            children: v === c.uS.POPULAR ? (0, r.jsx)(l.Y3C, {
                className: s()(f.fd, f.I$),
                size: "xxs",
                color: "currentColor"
            }) : (0, r.jsx)(l.C3E, {
                className: s()(f.fd, f.O1),
                size: "xxs",
                color: "currentColor"
            })
        }), (0, r.jsx)(o.un, {
            asContainer: !0,
            asset: null == (a = _.renderIcon) ? void 0 : a.call(_, b),
            assetSize: c.Q8,
            title: _.title,
            body: null != (i = _.body) ? i : "",
            children: w
        })]
    })
})