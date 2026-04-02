/** chunk id: 754302 params = (module,exports,require) **/
n.d(t, {
    B: () => _,
    q: () => o
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(397927),
    s = n(348953);

function o(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: s.MD,
        children: (0, r.jsx)("div", {
            className: s.Qs,
            children: t
        })
    })
}

function _(e) {
    let {
        icon: t,
        title: n,
        description: a,
        iconClassName: o,
        color: _,
        listType: u = "icon",
        completed: c = !1,
        index: d
    } = e;
    return (0, r.jsxs)("div", {
        className: s.Hn,
        children: [(() => {
            if ("numbered" === u && null != d)
                if (c) return (0, r.jsx)("div", {
                    className: s.ai,
                    children: (0, r.jsx)(l.rOg, {
                        color: "green",
                        className: i()(s.Kk, o)
                    })
                });
                else return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: s.ai,
                    children: d + 1
                });
            if (null != t) return (0, r.jsx)("div", {
                className: s.zc,
                children: (0, r.jsx)(t, {
                    color: _ ?? "currentColor",
                    className: i()(s.Kk, o)
                })
            })
        })(), (0, r.jsxs)("div", {
            className: s.FS,
            children: [(0, r.jsx)(l.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: i()({
                    [s.VA]: c
                }),
                children: n
            }), null != a && (0, r.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: i()({
                    [s.VA]: c
                }),
                children: a
            })]
        })]
    })
}