/** chunk id: 334595 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(964404),
    l = n(954571),
    s = n(723702),
    o = n(837921),
    d = n(845187),
    c = n(652215);
let u = "activity-hardware-acceleration-modal";

function A(e) {
    r.Ay.disableActivityHardwareAccelerationPrompt || !s.isPlatformEmbedded || o.Ay.getEnableHardwareAcceleration() || (0, a.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(n.bind(n, 845187));
        return n => (0, i.jsx)(t, {
            applicationId: e,
            ...n
        })
    }, {
        modalKey: u,
        onCloseRequest: () => {
            l.default.track(c.HAw.MODAL_DISMISSED, {
                type: d.a
            }), (0, a.OoC)(u)
        }
    })
}