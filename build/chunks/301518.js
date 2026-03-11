/** chunk id: 301518 params = (module,exports,require) **/
"use strict";
r.d(t, {
    S: () => o
});
var n = r(224771),
    i = r(624210),
    a = r(224949);
async function o(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let r = a.A.currentOrder;
    if (r?.id != null && r.status === n.Re.DRAFT) try {
        await (0, i.Nl)(r.id)
    } catch (e) {}
}