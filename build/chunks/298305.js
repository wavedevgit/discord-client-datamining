/** chunk id: 298305 params = (module,exports,require) **/
r.d(t, {
    A: () => x
});
var n = r(627968);
r(64700);
var i = r(311907),
    a = r(397927),
    s = r(775602),
    l = r(580314),
    o = r(674658),
    c = r(898461),
    d = r(287809),
    u = r(633023),
    m = r(513653),
    T = r(180391);

function g(e) {
    let {
        skuId: t,
        size: r,
        src: u,
        className: m
    } = e, T = (0, i.bG)([d.default], () => d.default.getCurrentUser()), g = (0, i.bG)([s.A], () => s.A.useReducedMotion), {
        product: x,
        isFetching: p
    } = (0, o.q)(t);
    if (p || null == x) return (0, n.jsx)(a.y$y, {
        type: a.tVU.PULSING_ELLIPSIS
    });
    let I = x.items[0];
    if (null == I || !(0, c.T)(I)) return null;
    let _ = (0, l.A)({
        legacyAssetId: I.asset,
        skuId: I.skuId,
        size: r,
        canAnimate: !g
    });
    return (0, n.jsx)(a.JsQ, {
        "aria-label": T?.username,
        size: r,
        className: m,
        src: u ?? T?.getAvatarURL(void 0, (0, a.FT9)(r), !g),
        avatarDecoration: _
    })
}

function x(e) {
    let {
        maxRewardImageSrc: t,
        claimableRewards: r,
        size: l,
        imageScaling: o = 1.5
    } = e, c = (0, i.bG)([d.default], () => d.default.getCurrentUser()), x = (0, i.bG)([s.A], () => s.A.useReducedMotion), p = (0, a.FT9)(l);
    return r.length > 0 ? (0, n.jsx)("img", {
        alt: "",
        src: t,
        style: {
            height: p * o
        }
    }) : (0, n.jsxs)("div", {
        className: u.kL,
        children: [(1 === r.length || 2 === r.length) && (0, n.jsx)(g, {
            skuId: r[0],
            size: l,
            className: u.M8,
            src: 1 === r.length ? c?.getAvatarURL(void 0, (0, a.FT9)(l), !x) : T
        }), 2 === r.length && (0, n.jsx)("div", {
            style: {
                marginRight: -Math.round(.321 * p)
            },
            children: (0, n.jsx)(g, {
                skuId: r[1],
                size: l,
                src: m
            })
        })]
    })
}