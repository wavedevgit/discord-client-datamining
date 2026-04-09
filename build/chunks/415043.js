/** chunk id: 415043 params = (module,exports,require) **/
n.d(t, {
    A: () => u,
    H: () => m
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(342952),
    r = n(435371),
    o = n(397927),
    c = n(915089),
    d = n(577373);

function u(e) {
    let {
        label: t,
        className: n,
        size: l = o._3J.SIZE_16,
        maxUsers: r = 4,
        ...u
    } = e, m = (0, c.GV)();
    return (0, i.jsxs)("div", {
        className: a()(n, d.k),
        children: [(0, i.jsx)(s.I, {
            "aria-labelledby": m,
            overflowCountClassName: d.j,
            size: l,
            maxUsers: r,
            ...u
        }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            id: m,
            children: t
        })]
    })
}

function m(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: l,
        size: c = o._3J.SIZE_16,
        maxUsers: u = 4,
        onClick: m,
        ...g
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(r.m_, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: m,
                "aria-label": t,
                children: (0, i.jsx)(s.I, {
                    size: c,
                    maxUsers: u,
                    overflowCountClassName: a()(d.j, l),
                    "aria-hidden": !0,
                    ...g
                })
            })
        })
    })
}