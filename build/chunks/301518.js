/** chunk id: 301518 params = (module,exports,require) **/
a.d(t, {
    S: () => s
});
var l = a(224771),
    n = a(624210),
    r = a(224949);
async function s(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let a = r.A.currentOrder;
    if (a?.id != null && a.status === l.Re.DRAFT) try {
        await (0, n.Nl)(a.id)
    } catch (e) {}
}