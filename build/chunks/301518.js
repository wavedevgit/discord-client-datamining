/** chunk id: 301518 params = (module,exports,require) **/
i.d(t, {
    S: () => s
});
var r = i(224771),
    l = i(624210),
    n = i(224949);
async function s(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let i = n.A.currentOrder;
    if (i?.id != null && i.status === r.Re.DRAFT) try {
        await (0, l.Nl)(i.id)
    } catch (e) {}
}