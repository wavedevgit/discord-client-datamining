/** chunk id: 301518 params = (module,exports,require) **/
a.d(t, {
    S: () => s
});
var l = a(123633),
    r = a(624210),
    n = a(26279);
async function s(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let a = l.A.currentOrder;
    if (a?.id != null && a.status === n.Re.DRAFT) try {
        await (0, r.Nl)(a.id)
    } catch (e) {}
}