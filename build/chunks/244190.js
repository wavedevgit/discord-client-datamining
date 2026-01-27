/** Chunk was on web.js **/
/** chunk id: 244190, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(674658),
    a = n(751304),
    o = n(561769);
let s = e => {
    let {
        skuId: t
    } = e, {
        product: n
    } = (0, i.q)(t, !0);
    return null == n ? null : (0, r.jsx)(o.v3.Provider, {
        value: {
            flattenProductVariants: !0
        },
        children: (0, r.jsx)(a.A, {
            skuId: t
        })
    })
}