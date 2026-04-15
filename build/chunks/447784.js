/** chunk id: 447784 params = (module,exports,require) **/
n.d(t, {
    k: () => I
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
    S = n(985018),
    _ = n(846405);
let I = e => {
    let t, n, {
            skuId: r,
            user: I,
            claimed: P,
            onSelect: x,
            selectedSkuId: T
        } = e,
        [A, h] = i.useState(null),
        g = i.useCallback(e => {
            h(e)
        }, []),
        f = i.useMemo(() => ({
            current: A
        }), [A]),
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
        user: I,
        isHighlighted: R,
        avatarSize: o._3J.SIZE_96
    })) : (0, p.F)(C) && (n = a.R.NAMEPLATE, t = (0, l.jsx)(E.A, {
        nameplate: C,
        user: I,
        isHighlighted: R,
        size: "small"
    })), (0, l.jsx)(o.vN3, {
        children: (0, l.jsxs)(o.sqX, {
            ref: g,
            "aria-label": M.name ?? "",
            onClick: () => {
                null == r || null == x || P || x(r)
            },
            className: s()(_._x, {
                [_.Vp]: !P,
                [_.mr]: R,
                [_.md]: T === r
            }),
            children: [(0, l.jsx)("div", {
                className: s()(_.VH, {
                    [_._Q]: n === a.R.AVATAR_DECORATION,
                    [_.M4]: n === a.R.NAMEPLATE
                }),
                children: null != t ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s()(_.i1, {
                            [_.Sf]: P
                        }),
                        children: t
                    }), P && (0, l.jsx)(o.rOg, {
                        size: "custom",
                        width: 48,
                        height: 48,
                        color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                        className: _.j0
                    })]
                }) : null
            }), (0, l.jsxs)("div", {
                className: _.tZ,
                children: [(0, l.jsx)(o.Heading, {
                    variant: "heading-md/extrabold",
                    children: M.name
                }), (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: P ? S.intl.string(S.t["6cfuDj"]) : S.intl.string(S.t.QQsaCc)
                })]
            })]
        })
    }))
}