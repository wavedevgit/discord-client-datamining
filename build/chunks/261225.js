/** chunk id: 261225 params = (module,exports,require) **/
t.d(l, {
    A: () => p,
    M: () => u
});
var r = t(627968),
    n = t(64700),
    o = t(503698),
    i = t.n(o),
    a = t(732955),
    s = t(770178),
    d = t(458306),
    c = t(973207);
let u = 6,
    h = e => {
        let {
            index: l,
            active: t,
            setPage: n
        } = e;
        return (0, r.jsx)("div", {
            className: i()(c.page, {
                [c.active]: t
            }),
            children: (0, r.jsx)(a.QWc, {
                role: "button",
                variant: t ? "always-white" : "secondary",
                size: "sm",
                text: (l + 1).toString(),
                onClick: () => n(l)
            })
        })
    },
    m = e => {
        let {
            page: l,
            pages: t,
            setPage: o
        } = e, [i, u] = n.useState(0), m = (0, s.w)(e => {
            let {
                contentRect: l
            } = e;
            u(l.width)
        }), p = n.useMemo(() => {
            let e;
            if (null == t || t < 1) return null;
            let n = Math.min(8, Math.max(3, Math.floor((i - 160) / 32)));
            if (t <= n) e = Array.from({
                length: t
            }, (e, l) => l);
            else {
                let r = n - 2,
                    o = Math.max(1, l - Math.floor(r / 2)),
                    i = Math.min(t - 2, o + r - 1);
                o = Math.max(1, i - r + 1);
                let a = Array.from({
                    length: r
                }, (e, l) => o + l);
                o > 1 && (a[0] = "ellipsis"), i < t - 2 && (a[a.length - 1] = "ellipsis"), e = [0, ...a, t - 1]
            }
            return e.map((e, t) => "number" == typeof e ? (0, r.jsx)(h, {
                index: e,
                active: l === e,
                setPage: o
            }, e) : (0, r.jsx)("div", {
                className: c.page,
                children: (0, r.jsx)(d.t, {
                    variant: "text-md/bold",
                    content: "..."
                })
            }, `ellipsis-${t}`))
        }, [l, t, o, i]);
        return (0, r.jsx)("div", {
            ref: m,
            className: c.pagination,
            children: (0, r.jsxs)(d.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [(0, r.jsx)(a.QWc, {
                    variant: "secondary",
                    disabled: 0 === l,
                    text: "Back",
                    onClick: () => {
                        o(l - 1)
                    }
                }), (0, r.jsx)("div", {
                    className: c.pageNumbers,
                    children: (0, r.jsx)(d.Kp, {
                        direction: "horizontal",
                        justify: "center",
                        align: "center",
                        children: p
                    })
                }), (0, r.jsx)(a.QWc, {
                    variant: "secondary",
                    disabled: l === t - 1,
                    text: "Next",
                    onClick: () => {
                        o(l + 1)
                    }
                })]
            })
        })
    },
    p = e => {
        let {
            columns: l = 3,
            perPage: t,
            paginationPosition: o = "bottom",
            children: a
        } = e, s = Math.max(1, Math.min(u, Math.floor(l))), [d, h] = n.useState(0), [p, _] = n.useState(t), [T, E] = n.useState(n.Children.count(a)), S = n.Children.count(a), A = null == t || t < 1 ? 0 : Math.ceil(S / t), b = null != t && t > 0, C = b && A > 1;
        (p !== t || T !== S) && (_(t), E(S), h(0));
        let g = n.useMemo(() => b ? n.Children.toArray(a).slice(t * d, t * (d + 1)) : a, [d, t, a, b]);
        return (0, r.jsxs)(r.Fragment, {
            children: [C && "top" === o && (0, r.jsx)(m, {
                page: d,
                pages: A,
                setPage: h
            }), (0, r.jsx)("div", {
                className: i()(c.grid, c[`columns${s}`]),
                children: g
            }), C && "bottom" === o && (0, r.jsx)(m, {
                page: d,
                pages: A,
                setPage: h
            })]
        })
    }