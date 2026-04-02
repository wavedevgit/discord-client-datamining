/** chunk id: 301518 params = (module,exports,require) **/
a.d(t, {
    S: () => s
});
var l = a(123633),
    n = a(624210),
    r = a(26279);
async function s(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let a = l.A.currentOrder;
    if (a?.id != null && a.status === r.Re.DRAFT) try {
        await (0, n.Nl)(a.id)
    } catch (e) {}
}