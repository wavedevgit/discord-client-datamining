/** chunk id: 301518 params = (module,exports,require) **/
i.d(t, {
    S: () => s
});
var r = i(123633),
    l = i(624210),
    n = i(26279);
async function s(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let i = r.A.currentOrder;
    if (i?.id != null && i.status === n.Re.DRAFT) try {
        await (0, l.Nl)(i.id)
    } catch (e) {}
}