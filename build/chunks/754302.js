/** chunk id: 754302 params = (module,exports,require) **/
n.d(t, {
    B: () => _,
    q: () => s
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    l = n(397927),
    o = n(348953);

function s(e) {
    let {
        children: t
    } = e;
    return (0, a.jsx)("div", {
        className: o.MD,
        children: (0, a.jsx)("div", {
            className: o.Qs,
            children: t
        })
    })
}

function _(e) {
    let {
        icon: t,
        title: n,
        description: r,
        iconClassName: s,
        color: _,
        listType: u = "icon",
        completed: c = !1,
        index: d
    } = e;
    return (0, a.jsxs)("div", {
        className: o.Hn,
        children: [(() => {
            if ("numbered" === u && null != d)
                if (c) return (0, a.jsx)("div", {
                    className: o.ai,
                    children: (0, a.jsx)(l.rOg, {
                        color: "green",
                        className: i()(o.Kk, s)
                    })
                });
                else return (0, a.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: o.ai,
                    children: d + 1
                });
            if (null != t) return (0, a.jsx)("div", {
                className: o.zc,
                children: (0, a.jsx)(t, {
                    color: _ ?? "currentColor",
                    className: i()(o.Kk, s)
                })
            })
        })(), (0, a.jsxs)("div", {
            className: o.FS,
            children: [(0, a.jsx)(l.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: i()({
                    [o.VA]: c
                }),
                children: n
            }), null != r && (0, a.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: i()({
                    [o.VA]: c
                }),
                children: r
            })]
        })]
    })
}