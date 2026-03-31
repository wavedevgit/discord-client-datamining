/** chunk id: 301518 params = (module,exports,require) **/
n.d(t, {
    S: () => r
});
var a = n(123633),
    i = n(624210),
    l = n(26279);
async function r(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = a.A.currentOrder;
    if (n?.id != null && n.status === l.Re.DRAFT) try {
        await (0, i.Nl)(n.id)
    } catch (e) {}
}