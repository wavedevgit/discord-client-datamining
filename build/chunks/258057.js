/** chunk id: 258057 params = (module,exports,require) **/
n.d(t, {
    z: () => s
});
var i = n(397927),
    l = n(587895),
    r = n(626584),
    a = n(92077);

function s(e, t, s) {
    var o;
    let d;
    o = () => (0, a.NQ)(e, t, s), null == (d = l.A.getApplication(e)) ? new r.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`) : (0, i.mMO)(async () => {
        let {
            default: e
        } = await n.e("60745").then(n.bind(n, 831120));
        return t => e({
            game: d,
            onConfirmUninstall: o,
            ...t
        })
    })
}