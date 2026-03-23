/** chunk id: 416426 params = (module,exports,require) **/
n.d(t, {
    V: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(158954),
    r = n(314116),
    o = n(419954),
    d = n(837921),
    c = n(780964),
    u = n(358776),
    m = n(801264),
    _ = n(985018);
let g = (0, o.E2)(c.X.ADVANCED_HARDWARE_ACCELERATION, {
    usePredicate: () => l.Av && !(0, l.cX)(),
    useSearchTerms: () => [_.intl.string(_.t["/HIxyY"]), _.intl.string(_.t.B0hqpb)],
    Component: function() {
        let [e] = s.useState(() => d.Ay.getEnableHardwareAcceleration()), t = (0, u.bp)("HardwareAccelerationSetting"), n = t ? _.intl.string(_.t["/HIxyY"]) : _.intl.string(_.t["eOC/F2"]), l = t ? _.intl.string(_.t.B0hqpb) : _.intl.string(_.t.Afc7l6);
        return (0, i.jsxs)(a.BJc, {
            children: [(0, i.jsx)(a.dOG, {
                label: n,
                description: l,
                checked: e,
                onChange: A
            }), !e && (0, i.jsx)(m.A, {
                look: m.k.WARNING,
                children: _.intl.string(_.t.j7S6IX)
            })]
        })
    }
});

function A(e) {
    let t = e ? _.intl.format(_.t.LYXRxL, {}) : _.intl.format(_.t.uDP3Kz, {});
    (0, r.A)({
        title: _.intl.string(_.t.aqpAvn),
        subtitle: t,
        confirmText: _.intl.string(_.t.vT7ckk),
        onConfirm: () => {
            d.Ay.setEnableHardwareAcceleration(e)
        }
    })
}