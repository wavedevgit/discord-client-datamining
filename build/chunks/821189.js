/** chunk id: 821189, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s,
    f: () => o
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(976114);

function o(e) {
    let {
        currencies: t,
        className: n,
        children: i
    } = e;
    return t.length < 2 ? null : (0, r.jsx)("div", {
        className: n,
        children: i
    })
}
let s = function(e) {
    let {
        label: t,
        currencies: n,
        onChange: o,
        selectedCurrency: s,
        disabled: l = !1
    } = e;
    if (n.length < 2) return null;
    let c = n.map((e, t) => ({
            id: t.toString(),
            value: e,
            label: "".concat(e.toUpperCase(), " - ").concat((0, a.Q)(e))
        })),
        u = e => {
            null != e && o(e)
        };
    return (0, r.jsx)(i.l6P, {
        selectionMode: "single",
        label: t,
        value: s,
        options: c,
        onSelectionChange: u,
        disabled: l
    })
}