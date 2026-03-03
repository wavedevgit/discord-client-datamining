/** chunk id: 261225, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => m,
    M: () => u
});
var r = t(627968),
    o = t(64700),
    n = t(503698),
    i = t.n(n),
    a = t(732955),
    d = t(770178),
    c = t(458306),
    s = t(266341);
let u = 6,
    h = e => {
        let {
            index: l,
            active: t,
            setPage: o
        } = e;
        return (0, r.jsx)("div", {
            className: i()(s.page, {
                [s.active]: t
            }),
            children: (0, r.jsx)(a.QWc, {
                role: "button",
                variant: t ? "always-white" : "secondary",
                size: "sm",
                text: (l + 1).toString(),
                onClick: () => o(l)
            })
        })
    },
    p = e => {
        let {
            page: l,
            pages: t,
            setPage: n
        } = e, [i, u] = o.useState(0), p = (0, d.w)(e => {
            let {
                contentRect: l
            } = e;
            u(l.width)
        }), m = o.useMemo(() => {
            let e;
            if (null == t || t < 1) return null;
            let o = Math.min(8, Math.max(3, Math.floor((i - 160) / 32)));
            if (t <= o) e = Array.from({
                length: t
            }, (e, l) => l);
            else {
                let r = o - 2,
                    n = Math.max(1, l - Math.floor(r / 2)),
                    i = Math.min(t - 2, n + r - 1);
                n = Math.max(1, i - r + 1);
                let a = Array.from({
                    length: r
                }, (e, l) => n + l);
                n > 1 && (a[0] = "ellipsis"), i < t - 2 && (a[a.length - 1] = "ellipsis"), e = [0, ...a, t - 1]
            }
            return e.map((e, t) => "number" == typeof e ? (0, r.jsx)(h, {
                index: e,
                active: l === e,
                setPage: n
            }, e) : (0, r.jsx)("div", {
                className: s.page,
                children: (0, r.jsx)(c.t, {
                    variant: "text-md/bold",
                    content: "..."
                })
            }, `ellipsis-${t}`))
        }, [l, t, n, i]);
        return (0, r.jsx)("div", {
            ref: p,
            className: s.pagination,
            children: (0, r.jsxs)(c.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [(0, r.jsx)(a.QWc, {
                    variant: "secondary",
                    disabled: 0 === l,
                    text: "Back",
                    onClick: () => {
                        n(l - 1)
                    }
                }), (0, r.jsx)("div", {
                    className: s.pageNumbers,
                    children: (0, r.jsx)(c.Kp, {
                        direction: "horizontal",
                        justify: "center",
                        align: "center",
                        children: m
                    })
                }), (0, r.jsx)(a.QWc, {
                    variant: "secondary",
                    disabled: l === t - 1,
                    text: "Next",
                    onClick: () => {
                        n(l + 1)
                    }
                })]
            })
        })
    },
    m = e => {
        let {
            columns: l = 3,
            perPage: t,
            paginationPosition: n = "bottom",
            children: a
        } = e, d = Math.max(1, Math.min(u, Math.floor(l))), [c, h] = o.useState(0), [m, _] = o.useState(t), [b, S] = o.useState(o.Children.count(a)), C = o.Children.count(a), T = null == t || t < 1 ? 0 : Math.ceil(C / t), A = null != t && t > 0, g = A && T > 1;
        (m !== t || b !== C) && (_(t), S(C), h(0));
        let k = o.useMemo(() => A ? o.Children.toArray(a).slice(t * c, t * (c + 1)) : a, [c, t, a, A]);
        return (0, r.jsxs)(r.Fragment, {
            children: [g && "top" === n && (0, r.jsx)(p, {
                page: c,
                pages: T,
                setPage: h
            }), (0, r.jsx)("div", {
                className: i()(s.grid, s[`columns${d}`]),
                children: k
            }), g && "bottom" === n && (0, r.jsx)(p, {
                page: c,
                pages: T,
                setPage: h
            })]
        })
    }