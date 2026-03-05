/** chunk id: 416426 params = (module,exports,require) **/
n.d(t, {
    V: () => d
});
var i = n(574381),
    s = n(314116),
    l = n(419954),
    a = n(837921),
    r = n(780964),
    o = n(985018);
let d = (0, l.zD)(r.X.ADVANCED_HARDWARE_ACCELERATION, {
    useTitle: () => o.intl.string(o.t["/HIxyY"]),
    useSubtitle: () => o.intl.string(o.t.B0hqpb),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => a.Ay.getEnableHardwareAcceleration(),
    setValue: e => {
        var t;
        let n;
        return n = (t = e) ? o.intl.format(o.t.LYXRxL, {}) : o.intl.format(o.t.uDP3Kz, {}), void(0, s.A)({
            title: o.intl.string(o.t.aqpAvn),
            subtitle: n,
            confirmText: o.intl.string(o.t.vT7ckk),
            onConfirm: () => {
                a.Ay.setEnableHardwareAcceleration(t)
            }
        })
    }
})