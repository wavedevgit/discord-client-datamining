/** chunk id: 449956, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => _
});
var n = i(627968),
    l = i(311907),
    s = i(688810),
    r = i(625841),
    a = i(74848),
    u = i(204050),
    o = i(430452),
    d = i(954571),
    T = i(948641),
    c = i(652215),
    A = i(731854),
    S = i(985018);

function _() {
    let e = (0, l.bG)([o.A], () => o.A.isVideoAvailable()),
        {
            id: t
        } = (0, a.x5)(A.oh.VIDEO_INPUT),
        {
            analyticsLocations: i
        } = (0, s.Ay)();
    return (0, n.jsx)(r.U, {
        label: S.intl.string(S.t.FsQ3OR),
        deviceType: A.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        showAllDevices: !0,
        helperText: (0, u.p)() ? S.intl.format(S.t.aJYgRt, {
            onCameraSettingsClick: () => {
                T.A.setState({
                    previewEnabled: !1
                }), window.open((0, u.i)(t)), d.default.track(c.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                    location_stack: i
                })
            }
        }) : void 0
    })
}