/** chunk id: 754302 params = (module,exports,require) **/
a.d(t, {
    B: () => _,
    q: () => s
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    l = a(397927),
    o = a(348953);

function s(e) {
    let {
        children: t
    } = e;
    return (0, n.jsx)("div", {
        className: o.MD,
        children: (0, n.jsx)("div", {
            className: o.Qs,
            children: t
        })
    })
}

function _(e) {
    let {
        icon: t,
        title: a,
        description: r,
        iconClassName: s,
        color: _,
        listType: c = "icon",
        completed: d = !1,
        index: u
    } = e;
    return (0, n.jsxs)("div", {
        className: o.Hn,
        children: [(() => {
            if ("numbered" === c && null != u)
                if (d) return (0, n.jsx)("div", {
                    className: o.ai,
                    children: (0, n.jsx)(l.rOg, {
                        color: "green",
                        className: i()(o.Kk, s)
                    })
                });
                else return (0, n.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: o.ai,
                    children: u + 1
                });
            if (null != t) return (0, n.jsx)("div", {
                className: o.zc,
                children: (0, n.jsx)(t, {
                    color: _ ?? "currentColor",
                    className: i()(o.Kk, s)
                })
            })
        })(), (0, n.jsxs)("div", {
            className: o.FS,
            children: [(0, n.jsx)(l.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: i()({
                    [o.VA]: d
                }),
                children: a
            }), null != r && (0, n.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: i()({
                    [o.VA]: d
                }),
                children: r
            })]
        })]
    })
}