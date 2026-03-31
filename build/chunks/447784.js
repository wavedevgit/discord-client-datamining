/** chunk id: 447784 params = (module,exports,require) **/
t.d(n, {
    k: () => x
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
    S = t(846405);
let x = e => {
    let n, t, {
            skuId: r,
            user: x,
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
            product: C
        } = (0, d.q)(r);
    if (null == C) return null;
    let M = C.items[0];
    return null == M ? null : ((0, c.T)(M) ? (t = a.R.AVATAR_DECORATION, n = (0, l.jsx)(m.i, {
        item: M,
        user: x,
        isHighlighted: R,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(M) && (t = a.R.NAMEPLATE, n = (0, l.jsx)(E.A, {
        nameplate: M,
        user: x,
        isHighlighted: R,
        size: "small"
    })), (0, l.jsx)(o.vN3, {
        children: (0, l.jsxs)(o.sqX, {
            ref: A,
            "aria-label": C.name ?? "",
            onClick: () => {
                null == r || null == T || P || T(r)
            },
            className: s()(S._x, {
                [S.Vp]: !P,
                [S.mr]: R,
                [S.md]: I === r
            }),
            children: [(0, l.jsx)("div", {
                className: s()(S.VH, {
                    [S._Q]: t === a.R.AVATAR_DECORATION,
                    [S.M4]: t === a.R.NAMEPLATE
                }),
                children: null != n ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s()(S.i1, {
                            [S.Sf]: P
                        }),
                        children: n
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
                    children: C.name
                }), (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: P ? _.intl.string(_.t["6cfuDj"]) : _.intl.string(_.t.QQsaCc)
                })]
            })]
        })
    }))
}