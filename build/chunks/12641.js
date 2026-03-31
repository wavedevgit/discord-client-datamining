/** chunk id: 12641 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(852881);

function o(e) {
    let {
        keybind: t,
        separator: n = "+",
        className: a
    } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, o) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)("span", {
                className: l()(r.E, a),
                children: e
            }), o === t.length - 1 ? void 0 : n]
        }, o))
    })
}