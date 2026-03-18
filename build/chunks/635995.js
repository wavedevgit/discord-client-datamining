/** chunk id: 635995 params = (module,exports,require) **/
"use strict";
n.d(e, {
    In: () => d,
    T0: () => _,
    fY: () => E
});
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(732955),
    a = n(397927),
    o = n(818348),
    c = n(985018),
    u = n(659039);
let d = t => {
        let {
            children: e
        } = t;
        return (0, i.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: u.ut,
            children: e
        })
    },
    E = t => {
        let {
            text: e,
            onClick: n
        } = t;
        return (0, i.jsx)(l.$nd, {
            onClick: n,
            text: e,
            size: "sm",
            icon: a.tvc,
            variant: "secondary"
        })
    };

function _(t) {
    let {
        className: e,
        ref: n,
        children: r,
        onClick: l
    } = t;
    return (0, i.jsx)(a.NPJ, {
        theme: o.NJ.DARKER,
        children: t => (0, i.jsxs)("div", {
            ref: n,
            className: s()(u.lm, t, e),
            children: [(0, i.jsx)("div", {
                className: u.qZ,
                children: r
            }), (0, i.jsx)(a.DUT, {
                focusProps: {
                    offset: 6
                },
                className: u.b,
                onClick: l,
                "aria-label": c.intl.string(c.t.WAI6xu),
                children: (0, i.jsx)(a.PGe, {
                    size: "sm"
                })
            })]
        })
    })
}