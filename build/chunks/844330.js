/** chunk id: 844330, original params: e,t,n (module,exports,require) **/
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
    d = n(314516);

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
    } = e, [f, A] = s.useState(p), x = s.useRef(null), [E, I] = s.useState(null), v = void 0 !== h, N = v ? h : f;
    s.useEffect(() => {
        N && null != x.current && I(x.current.scrollHeight)
    }, [N, c]);
    let j = s.useCallback(() => {
            let e = !N;
            v || A(e), _?.(e), e && null != g && g()
        }, [N, v, _, g]),
        S = s.useMemo(() => {
            if (N) {
                if (null != m) return {
                    maxHeight: "number" == typeof m ? `${m}px` : m
                };
                if (null != E) return {
                    maxHeight: `${E}px`
                }
            }
        }, [m, N, E]);
    return (0, i.jsxs)("div", {
        className: l()(d.Yt, u, {
            [d.Sg]: N
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
                    [d.Sg]: N
                }),
                children: (0, i.jsx)(o.A, {
                    width: 20,
                    height: 20,
                    direction: o.A.Directions.RIGHT
                })
            })]
        }), (0, i.jsx)("div", {
            ref: x,
            className: l()(d.Qs, {
                [d.Sg]: N
            }),
            style: S,
            children: c
        })]
    })
}