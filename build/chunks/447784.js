/** chunk id: 447784 params = (module,exports,require) **/
t.d(n, {
    k: () => x
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
    S = t(374412);
let x = e => {
    let n, t, {
            skuId: r,
            user: x,
            claimed: T,
            onSelect: I,
            selectedSkuId: P
        } = e,
        [h, A] = l.useState(null),
        g = l.useCallback(e => {
            A(e)
        }, []),
        f = l.useMemo(() => ({
            current: h
        }), [h]),
        {
            isHoveringOrFocusing: j
        } = (0, u.A)(f),
        R = !T && j,
        {
            product: M
        } = (0, d.q)(r);
    if (null == M) return null;
    let C = M.items[0];
    return null == C ? null : ((0, c.T)(C) ? (t = a.R.AVATAR_DECORATION, n = (0, i.jsx)(m.i, {
        item: C,
        user: x,
        isHighlighted: R,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(C) && (t = a.R.NAMEPLATE, n = (0, i.jsx)(E.A, {
        nameplate: C,
        user: x,
        isHighlighted: R,
        size: "small"
    })), (0, i.jsx)(o.vN3, {
        children: (0, i.jsxs)(o.sqX, {
            ref: g,
            "aria-label": M.name ?? "",
            onClick: () => {
                null == r || null == I || T || I(r)
            },
            className: s()(S._x, {
                [S.Vp]: !T,
                [S.mr]: R,
                [S.md]: P === r
            }),
            children: [(0, i.jsx)("div", {
                className: s()(S.VH, {
                    [S._Q]: t === a.R.AVATAR_DECORATION,
                    [S.M4]: t === a.R.NAMEPLATE
                }),
                children: null != n ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: s()(S.i1, {
                            [S.Sf]: T
                        }),
                        children: n
                    }), T && (0, i.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: S.j0
                    })]
                }) : null
            }), (0, i.jsxs)("div", {
                className: S.tZ,
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: M.name
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: T ? _.intl.string(_.t["6cfuDj"]) : _.intl.string(_.t.QQsaCc)
                })]
            })]
        })
    }))
}