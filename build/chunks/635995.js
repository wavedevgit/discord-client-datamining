/** Chunk was on 93140 **/
/** chunk id: 635995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    In: () => E,
    T0: () => _,
    fY: () => d
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    o = n(732955),
    a = n(397927),
    s = n(818348),
    c = n(985018),
    u = n(659039);
let E = e => {
        let {
            children: t
        } = e;
        return (0, r.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: u.ut,
            children: t
        })
    },
    d = e => {
        let {
            text: t,
            onClick: n
        } = e;
        return (0, r.jsx)(o.$nd, {
            onClick: n,
            text: t,
            size: "sm",
            icon: a.tvc,
            variant: "secondary"
        })
    };

function _(e) {
    let {
        className: t,
        ref: n,
        children: i,
        onClick: o
    } = e;
    return (0, r.jsx)(a.NPJ, {
        theme: s.NJ.DARKER,
        children: e => (0, r.jsxs)("div", {
            ref: n,
            className: l()(u.lm, e, t),
            children: [(0, r.jsx)("div", {
                className: u.qZ,
                children: i
            }), (0, r.jsx)(a.DUT, {
                focusProps: {
                    offset: 6
                },
                className: u.b,
                onClick: o,
                "aria-label": c.intl.string(c.t.WAI6xu),
                children: (0, r.jsx)(a.PGe, {
                    size: "sm"
                })
            })]
        })
    })
}