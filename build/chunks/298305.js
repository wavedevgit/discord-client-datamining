/** chunk id: 298305 params = (module,exports,require) **/
r.d(t, {
    A: () => I
});
var n = r(627968);
r(64700);
var i = r(311907),
    a = r(397927),
    s = r(775602),
    l = r(912140),
    o = r(674658),
    c = r(898461),
    d = r(287809),
    m = r(156655),
    u = r(513653),
    T = r(180391);

function g(e) {
    let {
        skuId: t,
        size: r,
        src: m,
        className: u
    } = e, T = (0, i.bG)([d.default], () => d.default.getCurrentUser()), g = (0, i.bG)([s.A], () => s.A.useReducedMotion), {
        product: I,
        isFetching: x
    } = (0, o.q)(t);
    if (x || null == I) return (0, n.jsx)(a.y$y, {
        type: a.tVU.PULSING_ELLIPSIS
    });
    let p = I.items[0];
    if (null == p || !(0, c.T)(p)) return null;
    let _ = (0, l.A)({
        legacyAssetId: p.asset,
        skuId: p.skuId,
        size: r,
        canAnimate: !g
    });
    return (0, n.jsx)(a.JsQ, {
        "aria-label": T?.username,
        size: r,
        className: u,
        src: m ?? T?.getAvatarURL(void 0, (0, a.FT9)(r), !g),
        avatarDecoration: _
    })
}

function I(e) {
    let {
        maxRewardImageSrc: t,
        claimableRewards: r,
        size: l,
        imageScaling: o = 1.5
    } = e, c = (0, i.bG)([d.default], () => d.default.getCurrentUser()), I = (0, i.bG)([s.A], () => s.A.useReducedMotion), x = (0, a.FT9)(l);
    return r.length > 0 ? (0, n.jsx)("img", {
        alt: "",
        src: t,
        style: {
            height: x * o
        }
    }) : (0, n.jsxs)("div", {
        className: m.kL,
        children: [(1 === r.length || 2 === r.length) && (0, n.jsx)(g, {
            skuId: r[0],
            size: l,
            className: m.M8,
            src: 1 === r.length ? c?.getAvatarURL(void 0, (0, a.FT9)(l), !I) : T
        }), 2 === r.length && (0, n.jsx)("div", {
            style: {
                marginRight: -Math.round(.321 * x)
            },
            children: (0, n.jsx)(g, {
                skuId: r[1],
                size: l,
                src: u
            })
        })]
    })
}