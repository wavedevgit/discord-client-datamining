/** chunk id: 844330 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(397927),
    o = n(147925),
    d = n(485965);

function c(e) {
    let {
        icon: t,
        title: n,
        subtitle: s,
        children: c,
        className: u,
        isExpanded: m,
        onExpandedChange: h,
        defaultExpanded: x = !1,
        onOpen: p,
        maxHeight: g
    } = e, [f, v] = i.useState(x), _ = i.useRef(null), [b, j] = i.useState(null), A = void 0 !== m, C = A ? m : f;
    i.useEffect(() => {
        C && null != _.current && j(_.current.scrollHeight)
    }, [C, c]);
    let y = i.useCallback(() => {
            let e = !C;
            A || v(e), h?.(e), e && null != p && p()
        }, [C, A, h, p]),
        S = i.useMemo(() => {
            if (C) {
                if (null != g) return {
                    maxHeight: "number" == typeof g ? `${g}px` : g
                };
                if (null != b) return {
                    maxHeight: `${b}px`
                }
            }
        }, [g, C, b]);
    return (0, a.jsxs)("div", {
        className: l()(d.Yt, u, {
            [d.Sg]: C
        }),
        children: [(0, a.jsxs)(r.DUT, {
            className: d.wx,
            onClick: y,
            children: [null != t && (0, a.jsx)("div", {
                className: d.Y5,
                children: t
            }), (0, a.jsxs)("div", {
                className: d.DD,
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: n
                }), null != s && "" !== s && (0, a.jsx)(r.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: s
                })]
            }), (0, a.jsx)("div", {
                className: l()(d.OW, {
                    [d.Sg]: C
                }),
                children: (0, a.jsx)(o.A, {
                    width: 20,
                    height: 20,
                    direction: o.A.Directions.RIGHT
                })
            })]
        }), (0, a.jsx)("div", {
            ref: _,
            className: l()(d.Qs, {
                [d.Sg]: C
            }),
            style: S,
            children: c
        })]
    })
}