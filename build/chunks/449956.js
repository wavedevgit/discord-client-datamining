/** Chunk was on 60449 **/
/** chunk id: 449956, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(311907),
    l = n(688810),
    r = n(625841),
    a = n(74848),
    o = n(204050),
    c = n(430452),
    d = n(954571),
    u = n(948641),
    g = n(652215),
    h = n(731854),
    x = n(985018);

function A() {
    let e = (0, s.bG)([c.A], () => c.A.isVideoAvailable()),
        {
            id: t
        } = (0, a.x5)(h.oh.VIDEO_INPUT),
        {
            analyticsLocations: n
        } = (0, l.Ay)();
    return (0, i.jsx)(r.U, {
        label: x.intl.string(x.t.FsQ3OR),
        deviceType: h.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        showAllDevices: !0,
        helperText: (0, o.p)() ? x.intl.format(x.t.aJYgRt, {
            onCameraSettingsClick: () => {
                u.A.setState({
                    previewEnabled: !1
                }), window.open((0, o.i)(t)), d.default.track(g.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                    location_stack: n
                })
            }
        }) : void 0
    })
}