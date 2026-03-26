/** chunk id: 301518 params = (module,exports,require) **/
n.d(t, {
    S: () => r
});
var a = n(224771),
    l = n(624210),
    i = n(224949);
async function r(e) {
    let {
        checkoutSucceeded: t
    } = e;
    if (t) return;
    let n = i.A.currentOrder;
    if (n?.id != null && n.status === a.Re.DRAFT) try {
        await (0, l.Nl)(n.id)
    } catch (e) {}
}