/** chunk id: 754302 params = (module,exports,require) **/
n.d(t, {
    B: () => c,
    q: () => o
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(397927),
    r = n(430345);

function o(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: r.MD,
        children: (0, i.jsx)("div", {
            className: r.Qs,
            children: t
        })
    })
}

function c(e) {
    let {
        icon: t,
        title: n,
        description: l,
        iconClassName: o,
        color: c,
        listType: d = "icon",
        completed: u = !1,
        index: h
    } = e;
    return (0, i.jsxs)("div", {
        className: r.Hn,
        children: [(() => {
            if ("numbered" === d && null != h)
                if (u) return (0, i.jsx)("div", {
                    className: r.ai,
                    children: (0, i.jsx)(s.rOg, {
                        color: "green",
                        className: a()(r.Kk, o)
                    })
                });
                else return (0, i.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: r.ai,
                    children: h + 1
                });
            if (null != t) return (0, i.jsx)("div", {
                className: r.zc,
                children: (0, i.jsx)(t, {
                    color: c ?? "currentColor",
                    className: a()(r.Kk, o)
                })
            })
        })(), (0, i.jsxs)("div", {
            className: r.FS,
            children: [(0, i.jsx)(s.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()({
                    [r.VA]: u
                }),
                children: n
            }), null != l && (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: a()({
                    [r.VA]: u
                }),
                children: l
            })]
        })]
    })
}