/** chunk id: 298305 params = (module,exports,require) **/
i.d(t, {
    A: () => T
});
var r = i(627968);
i(64700);
var n = i(311907),
    a = i(397927),
    s = i(775602),
    l = i(580314),
    o = i(674658),
    c = i(898461),
    d = i(287809),
    m = i(504721),
    u = i(513653),
    C = i(180391);

function x(e) {
    let {
        skuId: t,
        size: i,
        src: m,
        className: u
    } = e, C = (0, n.bG)([d.default], () => d.default.getCurrentUser()), x = (0, n.bG)([s.A], () => s.A.useReducedMotion), {
        product: T,
        isFetching: p
    } = (0, o.q)(t);
    if (p || null == T) return (0, r.jsx)(a.y$y, {
        type: a.tVU.PULSING_ELLIPSIS
    });
    let g = T.items[0];
    if (null == g || !(0, c.T)(g)) return null;
    let I = (0, l.A)({
        legacyAssetId: g.asset,
        skuId: g.skuId,
        size: i,
        canAnimate: !x
    });
    return (0, r.jsx)(a.JsQ, {
        "aria-label": C?.username,
        size: i,
        className: u,
        src: m ?? C?.getAvatarURL(void 0, (0, a.FT9)(i), !x),
        avatarDecoration: I
    })
}

function T(e) {
    let {
        maxRewardImageSrc: t,
        claimableRewards: i,
        size: l,
        imageScaling: o = 1.5
    } = e, c = (0, n.bG)([d.default], () => d.default.getCurrentUser()), T = (0, n.bG)([s.A], () => s.A.useReducedMotion), p = (0, a.FT9)(l);
    return i.length > 0 ? (0, r.jsx)("img", {
        alt: "",
        src: t,
        style: {
            height: p * o
        }
    }) : (0, r.jsxs)("div", {
        className: m.kL,
        children: [(1 === i.length || 2 === i.length) && (0, r.jsx)(x, {
            skuId: i[0],
            size: l,
            className: m.M8,
            src: 1 === i.length ? c?.getAvatarURL(void 0, (0, a.FT9)(l), !T) : C
        }), 2 === i.length && (0, r.jsx)("div", {
            style: {
                marginRight: -Math.round(.321 * p)
            },
            children: (0, r.jsx)(x, {
                skuId: i[1],
                size: l,
                src: u
            })
        })]
    })
}