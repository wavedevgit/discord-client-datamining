/** chunk id: 301518 params = (module,exports,require) **/
n.d(t, {
    S: () => _
});
var r = n(224771),
    a = n(624210),
    o = n(224949);
async function _(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = o.A.currentOrder;
    if (n?.id != null && n.status === r.Re.DRAFT) try {
        await (0, a.Nl)(n.id)
    } catch (e) {}
}