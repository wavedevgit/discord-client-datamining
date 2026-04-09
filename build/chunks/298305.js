/** chunk id: 298305 params = (module,exports,require) **/
r.d(t, {
    A: () => T
});
var i = r(627968);
r(64700);
var n = r(311907),
    a = r(397927),
    s = r(775602),
    l = r(912140),
    o = r(674658),
    c = r(898461),
    d = r(287809),
    u = r(446790),
    m = r(513653),
    x = r(180391);

function g(e) {
    let {
        skuId: t,
        size: r,
        src: u,
        className: m
    } = e, x = (0, n.bG)([d.default], () => d.default.getCurrentUser()), g = (0, n.bG)([s.A], () => s.A.useReducedMotion), {
        product: T,
        isFetching: p
    } = (0, o.q)(t);
    if (p || null == T) return (0, i.jsx)(a.y$y, {
        type: a.tVU.PULSING_ELLIPSIS
    });
    let h = T.items[0];
    if (null == h || !(0, c.T)(h)) return null;
    let I = (0, l.A)({
        legacyAssetId: h.asset,
        skuId: h.skuId,
        size: r,
        canAnimate: !g
    });
    return (0, i.jsx)(a.JsQ, {
        "aria-label": x?.username,
        size: r,
        className: m,
        src: u ?? x?.getAvatarURL(void 0, (0, a.FT9)(r), !g),
        avatarDecoration: I
    })
}

function T(e) {
    let {
        maxRewardImageSrc: t,
        claimableRewards: r,
        size: l,
        imageScaling: o = 1.5
    } = e, c = (0, n.bG)([d.default], () => d.default.getCurrentUser()), T = (0, n.bG)([s.A], () => s.A.useReducedMotion), p = (0, a.FT9)(l);
    return r.length > 0 ? (0, i.jsx)("img", {
        alt: "",
        src: t,
        style: {
            height: p * o
        }
    }) : (0, i.jsxs)("div", {
        className: u.kL,
        children: [(1 === r.length || 2 === r.length) && (0, i.jsx)(g, {
            skuId: r[0],
            size: l,
            className: u.M8,
            src: 1 === r.length ? c?.getAvatarURL(void 0, (0, a.FT9)(l), !T) : x
        }), 2 === r.length && (0, i.jsx)("div", {
            style: {
                marginRight: -Math.round(.321 * p)
            },
            children: (0, i.jsx)(g, {
                skuId: r[1],
                size: l,
                src: m
            })
        })]
    })
}