/** chunk id: 607123, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => E
});
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(575593),
    u = r(474012),
    o = r(929283),
    c = r(245068),
    d = r(550111),
    f = r(331402),
    h = r(366523),
    m = r(403362),
    g = r(652215),
    I = r(778712),
    p = r(223555);

function S(e) {
    let {
        sku: t,
        isFocused: r,
        user: l,
        options: s
    } = e, h = i.useMemo(() => (0, u.T)(t), [t]);
    if (null == h) return null;
    if ("bundle" === h.type) return (0, n.jsx)("div", {
        className: p.hT,
        children: (0, n.jsx)(c.X, {
            product: h,
            isHighlighted: r,
            user: l
        })
    });
    switch (h.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, n.jsx)(o.i, {
                user: l,
                avatarSize: I._3.SIZE_80,
                item: h.item,
                isHighlighted: r
            });
        case a.R.PROFILE_EFFECT:
            return (0, n.jsx)("div", {
                className: p.xC,
                children: (0, n.jsx)(f.A, {
                    skuId: h.item.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0
                })
            });
        case a.R.NAMEPLATE:
            var m, g, S, O, E, j;
            return (0, n.jsxs)("div", {
                className: p.M4,
                children: [(0, n.jsx)("div", {
                    className: p.Qt,
                    children: (0, n.jsx)(d.A, {
                        user: l,
                        nameplate: h.item,
                        isHighlighted: r,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: "default",
                        width: null != (m = null == s || null == (O = s.collectibles) || null == (S = O.nameplate) ? void 0 : S.width) ? m : 200
                    })
                }), (0, n.jsx)("div", {
                    className: p.BM,
                    "aria-hidden": !0,
                    children: (0, n.jsx)(d.A, {
                        user: l,
                        nameplate: h.item,
                        isHighlighted: r,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: "default",
                        width: null != (g = null == s || null == (j = s.collectibles) || null == (E = j.nameplate) ? void 0 : E.width) ? g : 200
                    })
                })]
            });
        default:
            return null
    }
}

function O(e) {
    let {
        sku: t,
        isFocused: r
    } = e;
    return (0, n.jsx)(h.e, {
        shape: "custom",
        containerClassName: s()(p.JS, r && p.P3),
        backgroundImageClassName: p.m1,
        foregroundImageClassName: p.aF,
        sku: t
    })
}

function E(e) {
    let {
        sku: t,
        isFocused: r,
        user: i,
        options: l
    } = e;
    switch (t.productLine) {
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(S, {
                sku: t,
                isFocused: r,
                user: i,
                options: l
            });
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(O, {
                sku: t,
                isFocused: r
            });
        case g.EZt.APPLICATION:
        case g.EZt.BOOST:
        case g.EZt.GUILD_ROLE:
        case g.EZt.PREMIUM:
        case g.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, m.xb)(t.productLine)
    }
}