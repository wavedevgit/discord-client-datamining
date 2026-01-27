/** Chunk was on web.js **/
/** chunk id: 218075, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => s,
    j: () => l
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018),
    o = n(39919),
    s = function(e) {
        return e.SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD", e.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD", e
    }({});

function l(e) {
    let {
        paymentRestrictionBannerType: t
    } = e, n = "";
    if (!t) return null;
    switch (t) {
        case "SELECT_PAYMENT_METHOD":
            n = a.intl.string(a.t.Tdb5qb);
            break;
        case "ADD_NEW_PAYMENT_METHOD":
            n = a.intl.string(a.t["6d44F5"])
    }
    return (0, r.jsxs)("div", {
        className: o.Y4,
        children: [(0, r.jsxs)("div", {
            className: o.NX,
            children: [(0, r.jsx)(i.k9F, {
                size: "md",
                color: "white",
                className: o.Kk
            }), (0, r.jsx)(i.k9F, {
                size: "md",
                color: "currentColor",
                className: o.kV
            })]
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: n
        }), (0, r.jsx)("div", {
            className: o.u
        })]
    })
}