/** Chunk was on 83759 **/
/** chunk id: 754302, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => u,
    q: () => s
}), n(228524);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    o = n(385104);

function s(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: o.MD,
        children: (0, r.jsx)("div", {
            className: o.Qs,
            children: t
        })
    })
}

function u(e) {
    let {
        icon: t,
        title: n,
        description: l,
        iconClassName: s,
        color: u,
        listType: c = "icon",
        completed: d = !1,
        index: p
    } = e;
    return (0, r.jsxs)("div", {
        className: o.Hn,
        children: [(() => {
            if ("numbered" === c && null != p)
                if (d) return (0, r.jsx)("div", {
                    className: o.ai,
                    children: (0, r.jsx)(a.rOg, {
                        color: "green",
                        className: i()(o.Kk, s)
                    })
                });
                else return (0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: o.ai,
                    children: p + 1
                });
            if (null != t) return (0, r.jsx)("div", {
                className: o.zc,
                children: (0, r.jsx)(t, {
                    color: null != u ? u : "currentColor",
                    className: i()(o.Kk, s)
                })
            })
        })(), (0, r.jsxs)("div", {
            className: o.FS,
            children: [(0, r.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: i()({
                    [o.VA]: d
                }),
                children: n
            }), null != l && (0, r.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: i()({
                    [o.VA]: d
                }),
                children: l
            })]
        })]
    })
}