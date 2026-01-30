/** chunk id: 467122, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(830382),
    o = n(771887),
    s = n(69494),
    l = n(482132),
    c = n(988912);

function u() {
    let [e, t] = i.useState(!1), n = async () => {
        t(!0), await (0, a.lo)()
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.A, {}), (0, r.jsx)(l.dZ, {
            children: (0, r.jsx)(o.$, {
                className: c.r,
                isEmailResent: e,
                resendEmail: n
            })
        }), (0, r.jsx)(l.UX, {
            children: (0, r.jsx)(o.A, {})
        })]
    })
}