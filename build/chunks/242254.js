/** chunk id: 242254, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(692051),
    c = n(985018),
    u = n(364584);

function d(e) {
    let {
        onPlay: t,
        className: n,
        inactive: a
    } = e, d = i.useRef(null), f = (0, r.jsx)("div", {
        className: u.P0,
        ref: d,
        children: (0, r.jsx)(s.udU, {
            size: "xs",
            color: "currentColor",
            className: u.Kk
        })
    });
    return (0, r.jsx)(l.Y.Consumer, {
        children: e => a || null == t ? (0, r.jsx)("div", {
            className: u.Iv,
            children: f
        }) : (0, r.jsx)(s.DUT, {
            className: o()(n, u.Iv, {
                [u.vu]: !e.disableInteractions
            }),
            onClick: t,
            tabIndex: 0,
            "aria-label": c.intl.string(c.t.RscU7I),
            focusProps: {
                ringTarget: d
            },
            children: f
        })
    })
}