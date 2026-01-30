/** chunk id: 919706, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(235986),
    a = n(200749),
    o = n(49876);

function s(e) {
    let {
        mainText: t,
        supportingText: n,
        errorCodeText: s,
        children: l,
        size: c
    } = e;
    return (0, r.jsxs)(i.A, {
        className: o.z,
        justify: i.A.Justify.CENTER,
        align: i.A.Align.CENTER,
        direction: i.A.Direction.VERTICAL,
        children: [(0, r.jsx)(a.A, {
            header: t,
            description: n,
            errorCodeMessage: s,
            size: c
        }), l]
    })
}