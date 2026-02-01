/** chunk id: 619036, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    l = n.n(i),
    a = n(397927),
    s = n(347481),
    o = n(430452),
    c = n(868162),
    u = n(731854);
let d = new Set(["DisplayPort"]),
    p = "connected-device-modal";

function h() {
    let e;
    if ((0, a.kBI)(p)) return;
    let t = o.A.getInputDeviceId(),
        i = o.A.getOutputDeviceId();
    if (c.A.getState().neverShowModal || l().isEmpty(c.A.lastDeviceConnected)) return;
    let h = (0, c.x)(o.A.getInputDevices()[t]),
        g = (0, c.x)(o.A.getOutputDevices()[i]);
    if (l().some(c.A.lastDeviceConnected, e => d.has(e.displayName) || e.displayName === h || e.displayName === g)) return;
    let m = l().some(c.A.lastDeviceConnected, e => s.A.isCertified(c.A.inputDevices[e.displayName]) || s.A.isCertified(c.A.outputDevices[e.displayName]));
    if ((t === u.dx && c.A.lastInputSystemDevice.justChanged || i === u.dx && c.A.lastOutputSystemDevice.justChanged) && !m) return;
    let f = l().first(Object.keys(c.A.lastDeviceConnected)),
        A = null != f && "" !== f ? c.A.lastDeviceConnected[f] : null;
    null == A || c.A.getState().ignoredDevices[A.displayName] || (c.A.initialized && null != f && (s.A.isCertified(c.A.inputDevices[f]) ? e = s.A.getCertifiedDevice(c.A.inputDevices[f]) : s.A.isCertified(c.A.outputDevices[f]) && (e = s.A.getCertifiedDevice(c.A.outputDevices[f]))), (0, a.mMO)(async () => {
        let {
            default: t
        } = await n.e("68386").then(n.bind(n, 347961));
        return n => {
            let {
                transitionState: i,
                onClose: l
            } = n;
            return (0, r.jsx)(t, {
                device: A,
                certifiedDeviceMetadata: e,
                transitionState: i,
                onClose: l
            })
        }
    }, {
        modalKey: p
    }))
}
let g = {
    init() {
        c.A.addChangeListener(h)
    }
}