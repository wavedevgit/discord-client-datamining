/** chunk id: 447784, original params: e,n,t (module,exports,require) **/
t.d(n, {
    k: () => j
}), t(896048);
var l = t(627968),
    r = t(64700),
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
    E = t(985018),
    f = t(836314);
let j = e => {
    var n;
    let t, i, {
            skuId: j,
            user: h,
            claimed: x,
            onSelect: P,
            selectedSkuId: T
        } = e,
        [S, A] = r.useState(null),
        O = r.useCallback(e => {
            A(e)
        }, []),
        b = r.useMemo(() => ({
            current: S
        }), [S]),
        {
            isHoveringOrFocusing: y
        } = (0, u.A)(b),
        I = !x && y,
        {
            product: _
        } = (0, c.q)(j);
    if (null == _) return null;
    let v = _.items[0];
    return null == v ? null : ((0, d.T)(v) ? (i = a.R.AVATAR_DECORATION, t = (0, l.jsx)(m.i, {
        item: v,
        user: h,
        isHighlighted: I,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(v) && (i = a.R.NAMEPLATE, t = (0, l.jsx)(g.A, {
        nameplate: v,
        user: h,
        isHighlighted: I,
        size: "small"
    })), (0, l.jsx)(o.vN3, {
        children: (0, l.jsxs)(o.sqX, {
            ref: O,
            "aria-label": null != (n = _.name) ? n : "",
            onClick: () => {
                null == j || null == P || x || P(j)
            },
            className: s()(f._x, {
                [f.Vp]: !x,
                [f.mr]: I,
                [f.md]: T === j
            }),
            children: [(0, l.jsx)("div", {
                className: s()(f.VH, {
                    [f._Q]: i === a.R.AVATAR_DECORATION,
                    [f.M4]: i === a.R.NAMEPLATE
                }),
                children: null != t ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s()(f.i1, {
                            [f.Sf]: x
                        }),
                        children: t
                    }), x && (0, l.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: f.j0
                    })]
                }) : null
            }), (0, l.jsxs)("div", {
                className: f.tZ,
                children: [(0, l.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: _.name
                }), (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: x ? E.intl.string(E.t["6cfuDj"]) : E.intl.string(E.t.QQsaCc)
                })]
            })]
        })
    }))
}