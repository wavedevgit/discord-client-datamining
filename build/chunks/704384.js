/** chunk id: 704384 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var s = n(175203),
    l = n(430452),
    a = n(408148);

function r(e) {
    let {
        aspectRatio: t,
        className: n,
        children: r,
        width: o,
        ...c
    } = e, d = l.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: {
            width: o
        },
        className: a.A,
        children: (0, i.jsxs)("div", {
            className: a.e,
            style: {
                aspectRatio: t
            },
            children: [(0, i.jsx)(s.Ay, {
                className: n,
                videoComponent: d,
                width: o,
                ...c
            }), r]
        })
    })
}