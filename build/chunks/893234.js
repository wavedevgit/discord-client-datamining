/** chunk id: 893234, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => s
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(812745),
    o = n(985018);
let s = e => {
    let {
        className: t,
        submitting: n,
        stripePaymentMethod: s
    } = e, {
        card: l
    } = null != s ? s : {}, c = null != l ? a.Ay.getType(l.brand) : a.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.ksK, {
            label: o.intl.string(o.t["mmDvV+"]),
            leading: {
                type: "image",
                src: (0, a.Nj)(c)
            },
            value: n && null != l ? o.intl.formatToPlainString(o.t.bCynoK, l) : void 0,
            readOnly: !0,
            placeholder: o.intl.string(o.t.bWMH78)
        })
    })
}