/** Chunk was on web.js **/
/** chunk id: 173678, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    M: () => y,
    z: () => b
});
var r = n(627968),
    i = n(575593),
    a = n(635358),
    o = n(397927),
    s = n(576030),
    l = n(245068),
    c = n(44120),
    u = n(594832),
    d = n(353157),
    f = n(957785),
    p = n(788868),
    _ = n(985018),
    h = n(733557),
    m = n(101616);

function g(e, t, n) {
    (0, c.A)({
        skuId: e.skuId,
        isGift: !0,
        giftingOrigin: p.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: n,
        giftRecipient: t,
        variantsReturnStyle: a.g.VARIANTS_GROUP
    })
}

function E(e) {
    switch (e.collectiblesItem.type) {
        case i.R.AVATAR_DECORATION:
            return _.intl.string(_.t["7v0T9P"]);
        case i.R.PROFILE_EFFECT:
            return _.intl.string(_.t.wR5wOo);
        case i.R.NAMEPLATE:
            return _.intl.string(_.t.x5CoXR);
        default:
            return ""
    }
}

function y(e, t) {
    let {
        moreCount: n,
        profileOwner: a,
        analyticsLocations: o,
        onViewWishlist: c,
        isSingleCard: p = !1,
        wishlistId: m,
        showTypeTooltip: E = !1,
        cardSize: y,
        itemSource: b
    } = t, O = null != e.bundleItems && e.bundleItems.length > 0, v = null != n && n > 0, A = E && !v, I = v ? _.intl.string(_.t.TxBQzD) : _.intl.string(_.t.pLPjsb), S = b === u.uS.POPULAR ? _.intl.string(_.t.Ig6VDH) : _.intl.string(_.t.ilhtIa), T = {
        title: A ? _.intl.string(_.t.HFhcqh) : I,
        body: A ? S : void 0,
        renderIcon: A ? s.GM : void 0,
        shouldShow: !0
    }, C = () => {
        v ? c() : g(e, a, o)
    }, N = () => {
        if (O) {
            let t = {
                items: e.bundleItems
            };
            return (0, r.jsx)("div", {
                className: h.hT,
                children: (0, r.jsx)(l.X, {
                    product: t,
                    isHighlighted: !1,
                    user: a
                })
            })
        }
        return (0, r.jsx)(d.A, {
            item: e,
            profileOwner: a,
            isHighlighted: !1
        })
    }, w = !O && e.collectiblesItem.type === i.R.PROFILE_EFFECT, R = O || !w;
    return (0, r.jsx)(f.A, {
        onCardClick: C,
        tooltipConfig: T,
        shouldScalePreview: R,
        renderPreview: N,
        moreCount: n,
        isSingleCard: p,
        wishlistItem: e,
        wishlistId: m,
        cardSize: y,
        itemSource: b
    }, e.skuId)
}

function b(e, t) {
    let {
        profileOwner: n,
        analyticsLocations: i,
        wishlistId: a,
        onViewWishlist: s
    } = t, l = null != e.bundleItems && e.bundleItems.length > 0, c = () => {
        g(e, n, i)
    }, u = y(e, {
        profileOwner: n,
        analyticsLocations: i,
        onViewWishlist: s,
        isSingleCard: !0,
        wishlistId: a,
        index: 0
    }), d = l ? _.intl.string(_.t.Zr5tjn) : E(e);
    return (0, r.jsxs)("div", {
        className: m.D5,
        children: [u, (0, r.jsxs)("div", {
            className: m.S7,
            children: [(0, r.jsx)(o.DUT, {
                onClick: c,
                className: m.Hh,
                "aria-label": _.intl.string(_.t.pLPjsb),
                children: (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: e.skuName
                })
            }), (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: d
            })]
        })]
    })
}