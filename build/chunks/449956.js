/** chunk id: 449956 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(311907),
    l = n(688810),
    a = n(625841),
    r = n(74848),
    o = n(204050),
    d = n(430452),
    c = n(954571),
    u = n(948641),
    _ = n(652215),
    g = n(731854),
    A = n(985018);

function m() {
    let e = (0, s.bG)([d.Ay], () => d.Ay.isVideoAvailable()),
        {
            id: t
        } = (0, r.x5)(g.oh.VIDEO_INPUT),
        {
            analyticsLocations: n
        } = (0, l.Ay)();
    return (0, i.jsx)(a.U, {
        label: A.intl.string(A.t.FsQ3OR),
        deviceType: g.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        helperText: (0, o.p)() ? A.intl.format(A.t.aJYgRt, {
            onCameraSettingsClick: () => {
                u.A.setState({
                    previewEnabled: !1
                }), window.open((0, o.i)(t)), c.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                    location_stack: n
                })
            }
        }) : void 0
    })
}