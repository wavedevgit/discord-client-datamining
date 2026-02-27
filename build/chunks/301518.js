/** chunk id: 301518, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    S: () => i
});
var r = l(224771),
    a = l(624210),
    n = l(224949);
async function i(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let l = n.A.currentOrder;
    if (l?.id != null && l.status === r.Re.DRAFT) try {
        await (0, a.Nl)(l.id)
    } catch (e) {}
}