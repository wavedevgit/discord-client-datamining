/** chunk id: 697415, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(335419);

function o(e) {
    let {
        total: t,
        users: n,
        videoLimit: s
    } = e;
    return (0, i.jsxs)("div", {
        className: r.iE,
        children: [(0, i.jsxs)("span", {
            className: l()(r.VV, {
                [r.Ki]: s,
                [r.$G]: n >= 100
            }),
            children: [s ? (0, i.jsx)(a.npA, {
                size: "md",
                color: "currentColor",
                className: r.LB
            }) : null, n.toString().padStart(2, "0")]
        }), (0, i.jsx)("span", {
            className: l()(r.X5, {
                [r.$G]: t >= 100
            }),
            children: t.toString().padStart(2, "0")
        })]
    })
}