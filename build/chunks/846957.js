/** chunk id: 846957, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => l
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    o = n(132198),
    s = n(587301);
let l = e => {
    let {
        product: t,
        animationState: n,
        className: i
    } = e, l = o.m[t.skuId];
    return null != l ? (0, r.jsx)("div", {
        className: a()(s.W, i),
        children: null != l.render && l.render({
            animationState: n,
            alt: t.name
        })
    }) : null
}