/** chunk id: 754302, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => c,
    q: () => o
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(397927),
    a = n(385104);

function o(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: a.MD,
        children: (0, i.jsx)("div", {
            className: a.Qs,
            children: t
        })
    })
}

function c(e) {
    let {
        icon: t,
        title: n,
        description: r,
        iconClassName: o,
        color: c,
        listType: d = "icon",
        completed: A = !1,
        index: u
    } = e;
    return (0, i.jsxs)("div", {
        className: a.Hn,
        children: [(() => {
            if ("numbered" === d && null != u)
                if (A) return (0, i.jsx)("div", {
                    className: a.ai,
                    children: (0, i.jsx)(s.rOg, {
                        color: "green",
                        className: l()(a.Kk, o)
                    })
                });
                else return (0, i.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: a.ai,
                    children: u + 1
                });
            if (null != t) return (0, i.jsx)("div", {
                className: a.zc,
                children: (0, i.jsx)(t, {
                    color: c ?? "currentColor",
                    className: l()(a.Kk, o)
                })
            })
        })(), (0, i.jsxs)("div", {
            className: a.FS,
            children: [(0, i.jsx)(s.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: l()({
                    [a.VA]: A
                }),
                children: n
            }), null != r && (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: l()({
                    [a.VA]: A
                }),
                children: r
            })]
        })]
    })
}