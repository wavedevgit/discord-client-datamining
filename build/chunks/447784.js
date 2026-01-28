/** Chunk was on 2824 **/
/** chunk id: 447784, original params: e,n,t (module,exports,require) **/
t.d(n, {
    k: () => j
});
var r = t(627968),
    l = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(575593),
    o = t(397927),
    u = t(713517),
    c = t(674658),
    d = t(898461),
    p = t(837015),
    m = t(929283),
    g = t(761365),
    f = t(985018),
    E = t(836314);
let j = e => {
    var n;
    let t, i, {
            skuId: j,
            user: x,
            claimed: h,
            onSelect: T,
            selectedSkuId: P
        } = e,
        S = l.useRef(null),
        {
            isHoveringOrFocusing: A
        } = (0, u.A)(S),
        b = !h && A,
        {
            product: y
        } = (0, c.q)(j);
    if (null == y) return null;
    let I = y.items[0];
    return null == I ? null : ((0, d.T)(I) ? (i = a.R.AVATAR_DECORATION, t = (0, r.jsx)(m.i, {
        item: I,
        user: x,
        isHighlighted: b,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(I) && (i = a.R.NAMEPLATE, t = (0, r.jsx)(g.A, {
        nameplate: I,
        user: x,
        isHighlighted: b,
        size: "small"
    })), (0, r.jsx)(o.vN3, {
        children: (0, r.jsxs)(o.sqX, {
            ref: S,
            "aria-label": null != (n = y.name) ? n : "",
            onClick: () => {
                null == j || null == T || h || T(j)
            },
            className: s()(E._x, {
                [E.Vp]: !h,
                [E.mr]: b,
                [E.md]: P === j
            }),
            children: [(0, r.jsx)("div", {
                className: s()(E.VH, {
                    [E._Q]: i === a.R.AVATAR_DECORATION,
                    [E.M4]: i === a.R.NAMEPLATE
                }),
                children: null != t ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(E.i1, {
                            [E.Sf]: h
                        }),
                        children: t
                    }), h && (0, r.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: E.j0
                    })]
                }) : null
            }), (0, r.jsxs)("div", {
                className: E.tZ,
                children: [(0, r.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: y.name
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: h ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc)
                })]
            })]
        })
    }))
}