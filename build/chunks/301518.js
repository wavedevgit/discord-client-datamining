/** chunk id: 301518, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    S: () => o
});
var r = a(224771),
    n = a(624210),
    i = a(224949);
async function o(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let a = i.A.currentOrder;
    if (a?.id != null && a.status === r.Re.DRAFT) try {
        await (0, n.Nl)(a.id)
    } catch (e) {}
}