/** Chunk was on 78528 **/
/** chunk id: 957785, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    c = n(594832),
    u = n(183555),
    d = n(524380),
    p = n(733557);
let h = l.forwardRef(function(e, t) {
    var n, l, i;
    let {
        onCardClick: h,
        tooltipConfig: f,
        shouldScalePreview: g = !0,
        renderPreview: m,
        moreCount: b,
        isSingleCard: A = !1,
        wishlistId: y,
        wishlistItem: _,
        cardSize: O = d.Y.MEDIUM,
        itemSource: j
    } = e, {
        skuId: v,
        skuProductLine: x
    } = _, {
        trackUserProfileWishlistAction: E
    } = (0, u.NJ)(), C = g ? p.ho : p.C8, S = A ? p.pr : p.Nr, I = null != b && b > 0, N = (0, r.jsxs)(o.DUT, {
        onClick: () => {
            h(), E({
                action: I ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                skuId: I ? null : v,
                wishlistId: y,
                productLines: new Set([x])
            })
        },
        className: s()(S, {
            [p.ax]: O === d.Y.SMALL
        }),
        "aria-label": null != (n = f.title) ? n : "",
        innerRef: t,
        children: [(0, r.jsx)("div", {
            className: C,
            children: m()
        }), I && (0, r.jsx)("div", {
            className: p.sv,
            children: (0, r.jsxs)(o.Text, {
                variant: "text-xs/medium",
                color: "always-white",
                children: ["+", b]
            })
        })]
    }), T = !I && null != j;
    return (0, r.jsxs)("div", {
        className: s()({
            [p.r4]: T
        }),
        children: [T && (0, r.jsx)("div", {
            className: p.RL,
            children: j === c.uS.POPULAR ? (0, r.jsx)(o.Y3C, {
                className: s()(p.fd, p.I$),
                size: "xxs",
                color: "currentColor"
            }) : (0, r.jsx)(o.C3E, {
                className: s()(p.fd, p.O1),
                size: "xxs",
                color: "currentColor"
            })
        }), (0, r.jsx)(a.un, {
            asContainer: !0,
            asset: null == (i = f.renderIcon) ? void 0 : i.call(f, _),
            assetSize: c.Q8,
            title: f.title,
            body: null != (l = f.body) ? l : "",
            children: N
        })]
    })
})