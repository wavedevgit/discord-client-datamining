/** chunk id: 301518 params = (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => i
});
var r = n(224771),
    a = n(624210),
    s = n(224949);
async function i(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = s.A.currentOrder;
    if (n?.id != null && n.status === r.Re.DRAFT) try {
        await (0, a.Nl)(n.id)
    } catch (e) {}
}