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
    s = t(458306),
    c = t(266341);
let u = 6,
    h = e => {
        let {
            index: l,
            active: t,
            setPage: o
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
                className: c.page,
                children: (0, r.jsx)(s.t, {
                    variant: "text-md/bold",
                    content: "..."
                })
            }, `ellipsis-${t}`))
        }, [l, t, n, i]);
        return (0, r.jsx)("div", {
            ref: p,
            className: c.pagination,
            children: (0, r.jsxs)(s.Kp, {
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
                    className: c.pageNumbers,
                    children: (0, r.jsx)(s.Kp, {
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
        } = e, d = Math.max(1, Math.min(u, Math.floor(l))), [s, h] = o.useState(0), [m, b] = o.useState(t), [_, S] = o.useState(o.Children.count(a)), A = o.Children.count(a), g = null == t || t < 1 ? 0 : Math.ceil(A / t), C = null != t && t > 0, k = C && g > 1;
        (m !== t || _ !== A) && (b(t), S(A), h(0));
        let T = o.useMemo(() => C ? o.Children.toArray(a).slice(t * s, t * (s + 1)) : a, [s, t, a, C]);
        return (0, r.jsxs)(r.Fragment, {
            children: [k && "top" === n && (0, r.jsx)(p, {
                page: s,
                pages: g,
                setPage: h
            }), (0, r.jsx)("div", {
                className: i()(c.grid, c[`columns${d}`]),
                children: T
            }), k && "bottom" === n && (0, r.jsx)(p, {
                page: s,
                pages: g,
                setPage: h
            })]
        })
    }