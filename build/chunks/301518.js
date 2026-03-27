/** chunk id: 301518 params = (module,exports,require) **/
n.d(t, {
    S: () => r
});
var a = n(224771),
    i = n(624210),
    l = n(224949);
async function r(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = l.A.currentOrder;
    if (n?.id != null && n.status === a.Re.DRAFT) try {
        await (0, i.Nl)(n.id)
    } catch (e) {}
}