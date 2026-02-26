/** chunk id: 301518, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => a
});
var i = n(224771),
    s = n(624210),
    l = n(224949);
async function a(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = l.A.currentOrder;
    if (n?.id != null && n.status === i.Re.DRAFT) try {
        await (0, s.Nl)(n.id)
    } catch (e) {}
}