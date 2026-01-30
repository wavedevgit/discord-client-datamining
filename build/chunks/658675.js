/** chunk id: 658675, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => s
});
var r = n(627968);
n(64700);
var i = n(460890),
    a = n(568385),
    o = n(27192);

function s(e) {
    let {
        checked: t,
        disabled: n,
        size: s
    } = e;
    return (0, i.y6)("CheckboxIndicator") ? (0, r.jsx)(a.J, {
        checked: t,
        disabled: n,
        displayOnly: !0,
        usageVariant: "indicator",
        "aria-hidden": !0
    }) : (0, r.jsx)(o.Lc, {
        value: t,
        disabled: n,
        size: null != s ? s : 20
    })
}