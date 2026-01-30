/** chunk id: 787455, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(580630),
    a = n(735164),
    o = n(985018);

function s(e) {
    let {
        invoice: t
    } = e;
    return t.taxInclusive || t.tax <= 0 ? null : (0, r.jsx)(a.oR, {
        label: o.intl.string(o.t.jiRvC7),
        value: (0, i.$g)(t.tax, t.currency)
    })
}