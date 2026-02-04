/** chunk id: 447784, original params: e,n,t (module,exports,require) **/
t.d(n, {
    k: () => P
}), t(896048);
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
    E = t(761365),
    g = t(985018),
    f = t(836314);
let P = e => {
    var n;
    let t, i, {
            skuId: P,
            user: j,
            claimed: h,
            onSelect: _,
            selectedSkuId: x
        } = e,
        [T, S] = l.useState(null),
        b = l.useCallback(e => {
            S(e)
        }, []),
        O = l.useMemo(() => ({
            current: T
        }), [T]),
        {
            isHoveringOrFocusing: y
        } = (0, u.A)(O),
        A = !h && y,
        {
            product: I
        } = (0, c.q)(P);
    if (null == I) return null;
    let v = I.items[0];
    return null == v ? null : ((0, d.T)(v) ? (i = a.R.AVATAR_DECORATION, t = (0, r.jsx)(m.i, {
        item: v,
        user: j,
        isHighlighted: A,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(v) && (i = a.R.NAMEPLATE, t = (0, r.jsx)(E.A, {
        nameplate: v,
        user: j,
        isHighlighted: A,
        size: "small"
    })), (0, r.jsx)(o.vN3, {
        children: (0, r.jsxs)(o.sqX, {
            ref: b,
            "aria-label": null != (n = I.name) ? n : "",
            onClick: () => {
                null == P || null == _ || h || _(P)
            },
            className: s()(f._x, {
                [f.Vp]: !h,
                [f.mr]: A,
                [f.md]: x === P
            }),
            children: [(0, r.jsx)("div", {
                className: s()(f.VH, {
                    [f._Q]: i === a.R.AVATAR_DECORATION,
                    [f.M4]: i === a.R.NAMEPLATE
                }),
                children: null != t ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(f.i1, {
                            [f.Sf]: h
                        }),
                        children: t
                    }), h && (0, r.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: f.j0
                    })]
                }) : null
            }), (0, r.jsxs)("div", {
                className: f.tZ,
                children: [(0, r.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: I.name
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: h ? g.intl.string(g.t["6cfuDj"]) : g.intl.string(g.t.QQsaCc)
                })]
            })]
        })
    }))
}