/** chunk id: 851023, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(990078),
    l = n(101555),
    c = n(238855);

function u(e) {
    let {
        onClick: t,
        children: n,
        tooltip: a,
        dangerous: u = !1,
        className: d,
        "aria-label": f
    } = e;
    return (0, r.jsx)(s.m, {
        text: a,
        children: (0, r.jsx)(l.$n, {
            onClick: e => {
                e.stopPropagation(), t(e)
            },
            dangerous: u,
            "aria-label": null != f ? f : a,
            className: d,
            children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, {
                className: o()(e.props.className, c.l)
            }) : e)
        })
    })
}