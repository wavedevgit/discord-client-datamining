/** chunk id: 258057, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => s
});
var i = n(397927),
    r = n(587895),
    l = n(626584),
    a = n(92077);

function s(e, t, s) {
    var o;
    let d;
    o = () => (0, a.NQ)(e, t, s), null == (d = r.A.getApplication(e)) ? new l.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`) : (0, i.mMO)(async () => {
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