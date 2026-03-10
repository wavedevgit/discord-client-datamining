/** chunk id: 447784 params = (module,exports,require) **/
t.d(n, {
    k: () => P
});
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(575593),
    o = t(397927),
    u = t(713517),
    d = t(674658),
    c = t(898461),
    p = t(837015),
    m = t(929283),
    E = t(761365),
    _ = t(985018),
    x = t(836314);
let P = e => {
    let n, t, {
            skuId: r,
            user: P,
            claimed: T,
            onSelect: S,
            selectedSkuId: I
        } = e,
        [h, g] = l.useState(null),
        A = l.useCallback(e => {
            g(e)
        }, []),
        f = l.useMemo(() => ({
            current: h
        }), [h]),
        {
            isHoveringOrFocusing: j
        } = (0, u.A)(f),
        M = !T && j,
        {
            product: R
        } = (0, d.q)(r);
    if (null == R) return null;
    let C = R.items[0];
    return null == C ? null : ((0, c.T)(C) ? (t = a.R.AVATAR_DECORATION, n = (0, i.jsx)(m.i, {
        item: C,
        user: P,
        isHighlighted: M,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(C) && (t = a.R.NAMEPLATE, n = (0, i.jsx)(E.A, {
        nameplate: C,
        user: P,
        isHighlighted: M,
        size: "small"
    })), (0, i.jsx)(o.vN3, {
        children: (0, i.jsxs)(o.sqX, {
            ref: A,
            "aria-label": R.name ?? "",
            onClick: () => {
                null == r || null == S || T || S(r)
            },
            className: s()(x._x, {
                [x.Vp]: !T,
                [x.mr]: M,
                [x.md]: I === r
            }),
            children: [(0, i.jsx)("div", {
                className: s()(x.VH, {
                    [x._Q]: t === a.R.AVATAR_DECORATION,
                    [x.M4]: t === a.R.NAMEPLATE
                }),
                children: null != n ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: s()(x.i1, {
                            [x.Sf]: T
                        }),
                        children: n
                    }), T && (0, i.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: x.j0
                    })]
                }) : null
            }), (0, i.jsxs)("div", {
                className: x.tZ,
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: R.name
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: T ? _.intl.string(_.t["6cfuDj"]) : _.intl.string(_.t.QQsaCc)
                })]
            })]
        })
    }))
}