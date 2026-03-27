/** chunk id: 12641 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => o
});
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(337103);

function o(e) {
    let {
        keybind: t,
        separator: i = "+",
        className: a
    } = e;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e, o) => (0, n.jsxs)(s.Fragment, {
            children: [(0, n.jsx)("span", {
                className: l()(r.E, a),
                children: e
            }), o === t.length - 1 ? void 0 : i]
        }, o))
    })
}