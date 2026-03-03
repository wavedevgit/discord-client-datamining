/** chunk id: 301518, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    S: () => o
});
var n = a(224771),
    r = a(624210),
    i = a(224949);
async function o(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let a = i.A.currentOrder;
    if (a?.id != null && a.status === n.Re.DRAFT) try {
        await (0, r.Nl)(a.id)
    } catch (e) {}
}