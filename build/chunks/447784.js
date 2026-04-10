/** chunk id: 447784 params = (module,exports,require) **/
n.d(t, {
    k: () => x
});
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(575593),
    o = n(397927),
    u = n(713517),
    d = n(674658),
    c = n(898461),
    p = n(837015),
    m = n(929283),
    E = n(761365),
    _ = n(985018),
    S = n(846405);
let x = e => {
    let t, n, {
            skuId: r,
            user: x,
            claimed: P,
            onSelect: T,
            selectedSkuId: A
        } = e,
        [h, g] = i.useState(null),
        I = i.useCallback(e => {
            g(e)
        }, []),
        f = i.useMemo(() => ({
            current: h
        }), [h]),
        {
            isHoveringOrFocusing: j
        } = (0, u.A)(f),
        R = !P && j,
        {
            product: M
        } = (0, d.q)(r);
    if (null == M) return null;
    let C = M.items[0];
    return null == C ? null : ((0, c.T)(C) ? (n = a.R.AVATAR_DECORATION, t = (0, l.jsx)(m.i, {
        item: C,
        user: x,
        isHighlighted: R,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(C) && (n = a.R.NAMEPLATE, t = (0, l.jsx)(E.A, {
        nameplate: C,
        user: x,
        isHighlighted: R,
        size: "small"
    })), (0, l.jsx)(o.vN3, {
        children: (0, l.jsxs)(o.sqX, {
            ref: I,
            "aria-label": M.name ?? "",
            onClick: () => {
                null == r || null == T || P || T(r)
            },
            className: s()(S._x, {
                [S.Vp]: !P,
                [S.mr]: R,
                [S.md]: A === r
            }),
            children: [(0, l.jsx)("div", {
                className: s()(S.VH, {
                    [S._Q]: n === a.R.AVATAR_DECORATION,
                    [S.M4]: n === a.R.NAMEPLATE
                }),
                children: null != t ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s()(S.i1, {
                            [S.Sf]: P
                        }),
                        children: t
                    }), P && (0, l.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: S.j0
                    })]
                }) : null
            }), (0, l.jsxs)("div", {
                className: S.tZ,
                children: [(0, l.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: M.name
                }), (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: P ? _.intl.string(_.t["6cfuDj"]) : _.intl.string(_.t.QQsaCc)
                })]
            })]
        })
    }))
}