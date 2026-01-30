/** chunk id: 418555, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968);
n(64700);
var i = n(993401),
    a = n(784886),
    o = n(985018),
    s = n(183959);

function l(e) {
    let {
        user: t,
        hideMessageInput: n,
        hideExampleButton: l
    } = e;
    return n ? l ? null : (0, r.jsx)("div", {
        className: s.qr,
        children: (0, r.jsx)(i.FD, {
            variant: "primary",
            text: o.intl.string(o.t.hZkfwY),
            onClick: () => {},
            fullWidth: !0
        })
    }) : (0, r.jsx)("div", {
        className: s.qr,
        inert: !0,
        children: (0, r.jsx)(a.A, {
            user: t
        })
    })
}