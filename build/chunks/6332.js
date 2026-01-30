/** chunk id: 6332, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(985018),
    s = n(893330);
let l = function(e) {
    let {
        onAccountHolderNameChange: t,
        billingAddressInfo: n
    } = e, l = i.useRef(null);
    return (0, r.jsx)("div", {
        className: s.r,
        children: (0, r.jsx)(a.ksK, {
            label: o.intl.string(o.t.sN3wrd),
            inputRef: l,
            name: o.intl.string(o.t.sN3wrd),
            placeholder: o.intl.string(o.t.sN3wrd),
            onChange: e => t(e),
            value: n.name
        })
    })
}