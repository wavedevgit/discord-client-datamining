/** chunk id: 261225, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => m,
    M: () => u
});
var r = t(627968),
    o = t(64700),
    n = t(503698),
    a = t.n(n),
    i = t(732955),
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
            className: a()(c.page, {
                [c.active]: t
            }),
            children: (0, r.jsx)(i.QWc, {
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
        } = e, [a, u] = o.useState(0), p = (0, d.w)(e => {
            let {
                contentRect: l
            } = e;
            u(l.width)
        }), m = o.useMemo(() => {
            let e;
            if (null == t || t < 1) return null;
            let o = Math.min(8, Math.max(3, Math.floor((a - 160) / 32)));
            if (t <= o) e = Array.from({
                length: t
            }, (e, l) => l);
            else {
                let r = o - 2,
                    n = Math.max(1, l - Math.floor(r / 2)),
                    a = Math.min(t - 2, n + r - 1);
                n = Math.max(1, a - r + 1);
                let i = Array.from({
                    length: r
                }, (e, l) => n + l);
                n > 1 && (i[0] = "ellipsis"), a < t - 2 && (i[i.length - 1] = "ellipsis"), e = [0, ...i, t - 1]
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
        }, [l, t, n, a]);
        return (0, r.jsx)("div", {
            ref: p,
            className: c.pagination,
            children: (0, r.jsxs)(s.Kp, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                children: [(0, r.jsx)(i.QWc, {
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
                }), (0, r.jsx)(i.QWc, {
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
            children: i
        } = e, d = Math.max(1, Math.min(u, Math.floor(l))), [s, h] = o.useState(0), [m, b] = o.useState(t), [C, _] = o.useState(o.Children.count(i)), g = o.Children.count(i), A = null == t || t < 1 ? 0 : Math.ceil(g / t), k = null != t && t > 0, S = k && A > 1;
        (m !== t || C !== g) && (b(t), _(g), h(0));
        let y = o.useMemo(() => k ? o.Children.toArray(i).slice(t * s, t * (s + 1)) : i, [s, t, i, k]);
        return (0, r.jsxs)(r.Fragment, {
            children: [S && "top" === n && (0, r.jsx)(p, {
                page: s,
                pages: A,
                setPage: h
            }), (0, r.jsx)("div", {
                className: a()(c.grid, c[`columns${d}`]),
                children: y
            }), S && "bottom" === n && (0, r.jsx)(p, {
                page: s,
                pages: A,
                setPage: h
            })]
        })
    }