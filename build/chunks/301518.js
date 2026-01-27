/** Chunk was on web.js **/
/** chunk id: 301518, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => o
});
var r = n(224771),
    i = n(624210),
    a = n(224949);
async function o(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = a.A.currentOrder;
    if ((null == n ? void 0 : n.id) != null && n.status === r.Re.DRAFT) try {
        await (0, i.Nl)(n.id)
    } catch (e) {}
}