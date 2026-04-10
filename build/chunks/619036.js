/** chunk id: 619036 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(735438),
    r = n.n(l),
    a = n(397927),
    s = n(347481),
    o = n(430452),
    d = n(868162),
    c = n(731854);
let u = new Set(["DisplayPort"]),
    A = "connected-device-modal";

function h() {
    let e;
    if ((0, a.kBI)(A)) return;
    let t = o.Ay.getInputDeviceId(),
        l = o.Ay.getOutputDeviceId();
    if (d.A.getState().neverShowModal || r().isEmpty(d.A.lastDeviceConnected)) return;
    let h = (0, d.x)(o.Ay.getInputDevices()[t]),
        _ = (0, d.x)(o.Ay.getOutputDevices()[l]);
    if (r().some(d.A.lastDeviceConnected, e => u.has(e.displayName) || e.displayName === h || e.displayName === _)) return;
    let m = r().some(d.A.lastDeviceConnected, e => s.A.isCertified(d.A.inputDevices[e.displayName]) || s.A.isCertified(d.A.outputDevices[e.displayName]));
    if ((t === c.dx && d.A.lastInputSystemDevice.justChanged || l === c.dx && d.A.lastOutputSystemDevice.justChanged) && !m) return;
    let g = r().first(Object.keys(d.A.lastDeviceConnected)),
        p = null != g && "" !== g ? d.A.lastDeviceConnected[g] : null;
    null == p || d.A.getState().ignoredDevices[p.displayName] || (d.A.initialized && null != g && (s.A.isCertified(d.A.inputDevices[g]) ? e = s.A.getCertifiedDevice(d.A.inputDevices[g]) : s.A.isCertified(d.A.outputDevices[g]) && (e = s.A.getCertifiedDevice(d.A.outputDevices[g]))), (0, a.mMO)(async () => {
        let {
            default: t
        } = await n.e("68386").then(n.bind(n, 347961));
        return n => {
            let {
                transitionState: l,
                onClose: r
            } = n;
            return (0, i.jsx)(t, {
                device: p,
                certifiedDeviceMetadata: e,
                transitionState: l,
                onClose: r
            })
        }
    }, {
        modalKey: A
    }))
}
let _ = {
    init() {
        d.A.addChangeListener(h)
    }
}