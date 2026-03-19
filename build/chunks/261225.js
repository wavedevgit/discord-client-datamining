/** chunk id: 261225 params = (module,exports,require) **/
l.d(t, {
    A: () => p,
    M: () => u
});
var r = l(627968),
    n = l(64700),
    i = l(503698),
    o = l.n(i),
    a = l(732955),
    s = l(770178),
    d = l(458306),
    c = l(973207);
let u = 6,
    h = e => {
        let {
            index: t,
            active: l,
            setPage: n
        } = e;
        return (0, r.jsx)("div", {
            className: o()(c.page, {
                [c.active]: l
            }),
            children: (0, r.jsx)(a.QWc, {
                role: "button",
                variant: l ? "always-white" : "secondary",
                size: "sm",
                text: (t + 1).toString(),
                onClick: () => n(t)
            })
        })
    },
    m = e => {
        let {
            page: t,
            pages: l,
            setPage: i
        } = e, [o, u] = n.useState(0), m = (0, s.w)(e => {
            let {
                contentRect: t
            } = e;
            u(t.width)
        }), p = n.useMemo(() => {
            let e;
            if (null == l || l < 1) return null;
            let n = Math.min(8, Math.max(3, Math.floor((o - 160) / 32)));
            if (l <= n) e = Array.from({
                length: l
            }, (e, t) => t);
            else {
                let r = n - 2,
                    i = Math.max(1, t - Math.floor(r / 2)),
                    o = Math.min(l - 2, i + r - 1);
                i = Math.max(1, o - r + 1);
                let a = Array.from({
                    length: r
                }, (e, t) => i + t);
                i > 1 && (a[0] = "ellipsis"), o < l - 2 && (a[a.length - 1] = "ellipsis"), e = [0, ...a, l - 1]
            }
            return e.map((e, l) => "number" == typeof e ? (0, r.jsx)(h, {
                index: e,
                active: t === e,
                setPage: i
            }, e) : (0, r.jsx)("div", {
                className: c.page,
                children: (0, r.jsx)(d.t, {
                    variant: "text-md/bold",
                    content: "..."
                })
            }, `ellipsis-${l}`))
        }, [t, l, i, o]);
        return (0, r.jsx)("div", {
            ref: m,
            className: c.pagination,
            children: (0, r.jsxs)(d.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [(0, r.jsx)(a.QWc, {
                    variant: "secondary",
                    disabled: 0 === t,
                    text: "Back",
                    onClick: () => {
                        i(t - 1)
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
                    disabled: t === l - 1,
                    text: "Next",
                    onClick: () => {
                        i(t + 1)
                    }
                })]
            })
        })
    },
    p = e => {
        let {
            columns: t = 3,
            perPage: l,
            paginationPosition: i = "bottom",
            children: a
        } = e, s = Math.max(1, Math.min(u, Math.floor(t))), [d, h] = n.useState(0), [p, _] = n.useState(l), [T, g] = n.useState(n.Children.count(a)), S = n.Children.count(a), A = null == l || l < 1 ? 0 : Math.ceil(S / l), E = null != l && l > 0, b = E && A > 1;
        (p !== l || T !== S) && (_(l), g(S), h(0));
        let f = n.useMemo(() => E ? n.Children.toArray(a).slice(l * d, l * (d + 1)) : a, [d, l, a, E]);
        return (0, r.jsxs)(r.Fragment, {
            children: [b && "top" === i && (0, r.jsx)(m, {
                page: d,
                pages: A,
                setPage: h
            }), (0, r.jsx)("div", {
                className: o()(c.grid, c[`columns${s}`]),
                children: f
            }), b && "bottom" === i && (0, r.jsx)(m, {
                page: d,
                pages: A,
                setPage: h
            })]
        })
    }