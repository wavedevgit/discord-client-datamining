/** chunk id: 301518 params = (module,exports,require) **/
a.d(t, {
    S: () => i
});
var r = a(123633),
    n = a(624210),
    o = a(26279);
async function i(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let a = r.A.currentOrder;
    if (a?.id != null && a.status === o.Re.DRAFT) try {
        await (0, n.Nl)(a.id)
    } catch (e) {}
}