/** chunk id: 569626, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(511612);
let l = e => {
    let {
        className: t,
        onDismiss: n,
        "aria-label": i
    } = e;
    return (0, r.jsx)(o.DUT, {
        role: "button",
        onClick: n,
        className: a()(s.r, t),
        "aria-label": i,
        children: (0, r.jsx)(o.PGe, {
            size: "xs",
            color: "currentColor",
            colorClass: s.M
        })
    })
};
l.displayName = "DismissButton";
let c = l