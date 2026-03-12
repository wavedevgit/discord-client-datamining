/** chunk id: 416426 params = (module,exports,require) **/
n.d(t, {
    V: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(574381),
    r = n(158954),
    a = n(314116),
    o = n(419954),
    d = n(837921),
    c = n(780964),
    u = n(358776),
    _ = n(801264),
    m = n(985018);
let g = (0, o.E2)(c.X.ADVANCED_HARDWARE_ACCELERATION, {
    usePredicate: () => l.Av && !(0, l.cX)(),
    useSearchTerms: () => [m.intl.string(m.t["/HIxyY"]), m.intl.string(m.t.B0hqpb)],
    Component: function() {
        let [e] = s.useState(() => d.Ay.getEnableHardwareAcceleration()), t = (0, u.bp)("HardwareAccelerationSetting"), n = t ? m.intl.string(m.t["/HIxyY"]) : m.intl.string(m.t["eOC/F2"]), l = t ? m.intl.string(m.t.B0hqpb) : m.intl.string(m.t.Afc7l6);
        return (0, i.jsxs)(r.BJc, {
            children: [(0, i.jsx)(r.dOG, {
                label: n,
                description: l,
                checked: e,
                onChange: A
            }), !e && (0, i.jsx)(_.A, {
                look: _.k.WARNING,
                children: m.intl.string(m.t.j7S6IX)
            })]
        })
    }
});

function A(e) {
    let t = e ? m.intl.format(m.t.LYXRxL, {}) : m.intl.format(m.t.uDP3Kz, {});
    (0, a.A)({
        title: m.intl.string(m.t.aqpAvn),
        subtitle: t,
        confirmText: m.intl.string(m.t.vT7ckk),
        onConfirm: () => {
            d.Ay.setEnableHardwareAcceleration(e)
        }
    })
}