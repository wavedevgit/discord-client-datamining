/** chunk id: 900179, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(915089),
    c = n(94343),
    u = n(716804),
    d = n(892007);

function f(e) {
    let {
        children: t,
        heading: n,
        headingIcon: a,
        introText: f,
        className: p,
        scrollTargetId: _,
        headingClassName: h,
        headingVariant: m = "text-xs/semibold",
        headingColor: g = "text-default"
    } = e, E = (0, l.GV)(), y = i.useRef(null), b = (0, u.g)(), O = null != _ && b === _;
    return (0, c.A)(y, O), (0, r.jsxs)("section", {
        ref: O ? y : void 0,
        className: o()(d.uW, p),
        "aria-labelledby": null != n ? E : void 0,
        children: [null != n && (0, r.jsxs)("div", {
            className: d.so,
            children: [(0, r.jsxs)("div", {
                className: d.wx,
                children: [(0, r.jsx)(s.Heading, {
                    variant: m,
                    color: g,
                    className: h,
                    id: E,
                    children: n
                }), a]
            }), null != f && (0, r.jsx)(s.Text, {
                variant: "text-xs/normal",
                children: f
            })]
        }), (0, r.jsx)(s.Fmo, {
            children: t
        })]
    })
}