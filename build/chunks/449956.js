/** chunk id: 449956, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => E
});
var n = i(627968),
    l = i(311907),
    s = i(688810),
    r = i(625841),
    u = i(74848),
    a = i(204050),
    o = i(430452),
    d = i(954571),
    T = i(948641),
    A = i(652215),
    S = i(731854),
    c = i(985018);

function E() {
    let t = (0, l.bG)([o.A], () => o.A.isVideoAvailable()),
        {
            id: e
        } = (0, u.x5)(S.oh.VIDEO_INPUT),
        {
            analyticsLocations: i
        } = (0, s.Ay)();
    return (0, n.jsx)(r.U, {
        label: c.intl.string(c.t.FsQ3OR),
        deviceType: S.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !t,
        showAllDevices: !0,
        helperText: (0, a.p)() ? c.intl.format(c.t.aJYgRt, {
            onCameraSettingsClick: () => {
                T.A.setState({
                    previewEnabled: !1
                }), window.open((0, a.i)(e)), d.default.track(A.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                    location_stack: i
                })
            }
        }) : void 0
    })
}