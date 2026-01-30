/** chunk id: 754302, original params: e,n,a (module,exports,require) **/
a.d(n, {
    B: () => o,
    q: () => l
}), a(228524);
var s = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    c = a(397927),
    t = a(385104);

function l(e) {
    let {
        children: n
    } = e;
    return (0, s.jsx)("div", {
        className: t.MD,
        children: (0, s.jsx)("div", {
            className: t.Qs,
            children: n
        })
    })
}

function o(e) {
    let {
        icon: n,
        title: a,
        description: r,
        iconClassName: l,
        color: o,
        listType: d = "icon",
        completed: u = !1,
        index: x
    } = e;
    return (0, s.jsxs)("div", {
        className: t.Hn,
        children: [(() => {
            if ("numbered" === d && null != x)
                if (u) return (0, s.jsx)("div", {
                    className: t.ai,
                    children: (0, s.jsx)(c.rOg, {
                        color: "green",
                        className: i()(t.Kk, l)
                    })
                });
                else return (0, s.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: t.ai,
                    children: x + 1
                });
            if (null != n) return (0, s.jsx)("div", {
                className: t.zc,
                children: (0, s.jsx)(n, {
                    color: null != o ? o : "currentColor",
                    className: i()(t.Kk, l)
                })
            })
        })(), (0, s.jsxs)("div", {
            className: t.FS,
            children: [(0, s.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: i()({
                    [t.VA]: u
                }),
                children: a
            }), null != r && (0, s.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: i()({
                    [t.VA]: u
                }),
                children: r
            })]
        })]
    })
}