/** chunk id: 844330, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    _ = n(397927),
    o = n(147925),
    s = n(463794);

function c(e) {
    let {
        icon: t,
        title: n,
        subtitle: r,
        children: c,
        className: f,
        isExpanded: p,
        onExpandedChange: d,
        defaultExpanded: u = !1,
        onOpen: x,
        maxHeight: b
    } = e, [m, h] = a.useState(u), v = a.useRef(null), [g, j] = a.useState(null), k = void 0 !== p, C = k ? p : m;
    a.useEffect(() => {
        C && null != v.current && j(v.current.scrollHeight)
    }, [C, c]);
    let S = a.useCallback(() => {
            let e = !C;
            k || h(e), d?.(e), e && null != x && x()
        }, [C, k, d, x]),
        N = a.useMemo(() => {
            if (C) {
                if (null != b) return {
                    maxHeight: "number" == typeof b ? `${b}px` : b
                };
                if (null != g) return {
                    maxHeight: `${g}px`
                }
            }
        }, [b, C, g]);
    return (0, i.jsxs)("div", {
        className: l()(s.Yt, f, {
            [s.Sg]: C
        }),
        children: [(0, i.jsxs)(_.DUT, {
            className: s.wx,
            onClick: S,
            children: [null != t && (0, i.jsx)("div", {
                className: s.Y5,
                children: t
            }), (0, i.jsxs)("div", {
                className: s.DD,
                children: [(0, i.jsx)(_.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: n
                }), null != r && "" !== r && (0, i.jsx)(_.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: r
                })]
            }), (0, i.jsx)("div", {
                className: l()(s.OW, {
                    [s.Sg]: C
                }),
                children: (0, i.jsx)(o.A, {
                    width: 20,
                    height: 20,
                    direction: o.A.Directions.RIGHT
                })
            })]
        }), (0, i.jsx)("div", {
            ref: v,
            className: l()(s.Qs, {
                [s.Sg]: C
            }),
            style: N,
            children: c
        })]
    })
}