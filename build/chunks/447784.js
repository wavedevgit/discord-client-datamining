/** Chunk was on 2824 **/
/** chunk id: 447784, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(397927),
    u = n(713517),
    c = n(68545),
    d = n(929283),
    p = n(761365),
    m = n(985018),
    g = n(836314);
let f = e => {
    let t, n, {
            skuId: i,
            assetId: f,
            user: y,
            claimed: j,
            onSelect: b,
            productName: h,
            a11yLabel: v,
            selectedSkuId: O,
            category: P,
            type: E,
            palette: x
        } = e,
        S = l.useRef(null),
        {
            isHoveringOrFocusing: T
        } = (0, u.A)(S),
        I = !j && T;
    return E === a.R.AVATAR_DECORATION ? (t = {
        type: a.R.AVATAR_DECORATION,
        label: v,
        asset: f
    }, n = (0, r.jsx)(d.i, {
        item: t,
        user: y,
        isHighlighted: I,
        avatarSize: o._3J.SIZE_96
    })) : E === a.R.NAMEPLATE && (t = {
        type: a.R.NAMEPLATE,
        label: v,
        asset: f,
        palette: null != x ? x : "none"
    }, n = (0, r.jsx)(p.A, {
        nameplate: t,
        user: y,
        isHighlighted: I,
        size: "small"
    })), (0, r.jsx)(o.vN3, {
        children: (0, r.jsxs)(o.sqX, {
            ref: S,
            "aria-label": null != h ? h : "",
            onClick: () => {
                null == i || null == b || j || b(i)
            },
            className: s()(g._x, {
                [g.Vp]: !j,
                [g.mr]: I,
                [g.md]: O === i
            }),
            children: [(0, r.jsx)("div", {
                className: s()(g.VH, {
                    [g._Q]: E === a.R.AVATAR_DECORATION,
                    [g.M4]: E === a.R.NAMEPLATE,
                    [g.S1]: P === c.Sm.Trick,
                    [g.LX]: P === c.Sm.Treat
                }),
                children: null != t ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(g.i1, {
                            [g.Sf]: j
                        }),
                        children: n
                    }), j && (0, r.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: g.j0
                    })]
                }) : null
            }), (0, r.jsxs)("div", {
                className: g.tZ,
                children: [(0, r.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: h
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: j ? m.intl.string(m.t["6cfuDj"]) : m.intl.string(m.t.QQsaCc)
                })]
            })]
        })
    })
}