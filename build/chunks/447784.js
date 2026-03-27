/** chunk id: 447784 params = (module,exports,require) **/
t.d(n, {
    k: () => S
});
var l = t(627968),
    i = t(64700),
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
    x = t(846405);
let S = e => {
    let n, t, {
            skuId: r,
            user: S,
            claimed: P,
            onSelect: T,
            selectedSkuId: I
        } = e,
        [h, g] = i.useState(null),
        A = i.useCallback(e => {
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
    return null == C ? null : ((0, c.T)(C) ? (t = a.R.AVATAR_DECORATION, n = (0, l.jsx)(m.i, {
        item: C,
        user: S,
        isHighlighted: R,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(C) && (t = a.R.NAMEPLATE, n = (0, l.jsx)(E.A, {
        nameplate: C,
        user: S,
        isHighlighted: R,
        size: "small"
    })), (0, l.jsx)(o.vN3, {
        children: (0, l.jsxs)(o.sqX, {
            ref: A,
            "aria-label": M.name ?? "",
            onClick: () => {
                null == r || null == T || P || T(r)
            },
            className: s()(x._x, {
                [x.Vp]: !P,
                [x.mr]: R,
                [x.md]: I === r
            }),
            children: [(0, l.jsx)("div", {
                className: s()(x.VH, {
                    [x._Q]: t === a.R.AVATAR_DECORATION,
                    [x.M4]: t === a.R.NAMEPLATE
                }),
                children: null != n ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s()(x.i1, {
                            [x.Sf]: P
                        }),
                        children: n
                    }), P && (0, l.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: x.j0
                    })]
                }) : null
            }), (0, l.jsxs)("div", {
                className: x.tZ,
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