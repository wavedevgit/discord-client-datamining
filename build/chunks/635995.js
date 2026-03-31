/** chunk id: 635995 params = (module,exports,require) **/
n.d(t, {
    In: () => u,
    T0: () => A,
    fY: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(732955),
    r = n(397927),
    o = n(818348),
    c = n(985018),
    d = n(843194);
let u = e => {
        let {
            children: t
        } = e;
        return (0, i.jsx)(r.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: d.ut,
            children: t
        })
    },
    h = e => {
        let {
            text: t,
            onClick: n
        } = e;
        return (0, i.jsx)(a.$nd, {
            onClick: n,
            text: t,
            size: "sm",
            icon: r.tvc,
            variant: "secondary"
        })
    };

function A(e) {
    let {
        className: t,
        ref: n,
        children: l,
        onClick: a
    } = e;
    return (0, i.jsx)(r.NPJ, {
        theme: o.NJ.DARKER,
        children: e => (0, i.jsxs)("div", {
            ref: n,
            className: s()(d.lm, e, t),
            children: [(0, i.jsx)("div", {
                className: d.qZ,
                children: l
            }), (0, i.jsx)(r.DUT, {
                focusProps: {
                    offset: 6
                },
                className: d.b,
                onClick: a,
                "aria-label": c.intl.string(c.t.WAI6xu),
                children: (0, i.jsx)(r.PGe, {
                    size: "sm"
                })
            })]
        })
    })
}