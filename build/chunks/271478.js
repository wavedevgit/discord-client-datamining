/** Chunk was on web.js **/
/** chunk id: 271478, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    g: () => s
}), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(100392),
    o = n(102609);

function s(e) {
    let {
        label: t,
        description: n,
        experiment: s,
        experimentId: l,
        overrideInfo: c
    } = e;
    return (0, r.jsx)(i.l6P, {
        label: t,
        description: n,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, a.hp)(s),
        onSelectionChange: e => (0, o.t$)(s.system, l, e),
        selectionMode: "single",
        fullWidth: !0
    })
}