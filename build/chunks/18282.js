/** chunk id: 18282, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    o = n(785620);

function s(e) {
    let {
        onClick: t,
        Icon: n,
        "aria-label": s
    } = e, l = (0, a.rdh)(a.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), c = (0, r.jsx)(n, {
        color: l.hex(),
        size: "custom",
        width: 16,
        height: 16
    });
    return null == t ? (0, r.jsx)("div", {
        className: o.k,
        "aria-label": s,
        children: c
    }) : (0, r.jsx)(i.m, {
        asContainer: !0,
        text: s,
        children: (0, r.jsx)(a.DUT, {
            className: o.k,
            onClick: t,
            children: c
        })
    })
}