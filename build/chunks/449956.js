/** Chunk was on 60667 **/
/** chunk id: 449956, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(311907),
    l = n(688810),
    s = n(625841),
    a = n(74848),
    o = n(204050),
    c = n(430452),
    d = n(954571),
    u = n(948641),
    _ = n(652215),
    p = n(731854),
    m = n(985018);

function g() {
    let e = (0, i.bG)([c.A], () => c.A.isVideoAvailable()),
        {
            id: t
        } = (0, a.x5)(p.oh.VIDEO_INPUT),
        {
            analyticsLocations: n
        } = (0, l.Ay)();
    return (0, r.jsx)(s.U, {
        label: m.intl.string(m.t.FsQ3OR),
        deviceType: p.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        showAllDevices: !0,
        helperText: (0, o.p)() ? m.intl.format(m.t.aJYgRt, {
            onCameraSettingsClick: () => {
                u.A.setState({
                    previewEnabled: !1
                }), window.open((0, o.i)(t)), d.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                    location_stack: n
                })
            }
        }) : void 0
    })
}