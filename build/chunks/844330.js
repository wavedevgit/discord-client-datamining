/** chunk id: 844330 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(147925),
    d = n(167554);

function c(e) {
    let {
        icon: t,
        title: n,
        subtitle: r,
        children: c,
        className: u,
        isExpanded: h,
        onExpandedChange: _,
        defaultExpanded: p = !1,
        onOpen: g,
        maxHeight: m
    } = e, [A, f] = s.useState(p), E = s.useRef(null), [x, I] = s.useState(null), N = void 0 !== h, v = N ? h : A;
    s.useEffect(() => {
        v && null != E.current && I(E.current.scrollHeight)
    }, [v, c]);
    let j = s.useCallback(() => {
            let e = !v;
            N || f(e), _?.(e), e && null != g && g()
        }, [v, N, _, g]),
        S = s.useMemo(() => {
            if (v) {
                if (null != m) return {
                    maxHeight: "number" == typeof m ? `${m}px` : m
                };
                if (null != x) return {
                    maxHeight: `${x}px`
                }
            }
        }, [m, v, x]);
    return (0, i.jsxs)("div", {
        className: l()(d.Yt, u, {
            [d.Sg]: v
        }),
        children: [(0, i.jsxs)(a.DUT, {
            className: d.wx,
            onClick: j,
            children: [null != t && (0, i.jsx)("div", {
                className: d.Y5,
                children: t
            }), (0, i.jsxs)("div", {
                className: d.DD,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: n
                }), null != r && "" !== r && (0, i.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: r
                })]
            }), (0, i.jsx)("div", {
                className: l()(d.OW, {
                    [d.Sg]: v
                }),
                children: (0, i.jsx)(o.A, {
                    width: 20,
                    height: 20,
                    direction: o.A.Directions.RIGHT
                })
            })]
        }), (0, i.jsx)("div", {
            ref: E,
            className: l()(d.Qs, {
                [d.Sg]: v
            }),
            style: S,
            children: c
        })]
    })
}