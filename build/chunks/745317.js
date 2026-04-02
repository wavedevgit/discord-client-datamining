/** chunk id: 745317 params = (module,exports,require) **/
s.d(t, {
    A: () => O,
    k: () => j
});
var n = s(627968),
    i = s(64700),
    l = s(311907),
    a = s(451988),
    o = s(397927),
    r = s(827343),
    c = s(688810),
    d = s(625841),
    u = s(74848),
    m = s(253932),
    x = s(520999),
    p = s(430452),
    g = s(954571),
    A = s(204050),
    v = s(652215),
    f = s(731854),
    N = s(985018),
    h = s(764251);

function j() {
    let [e, t] = i.useState(!1), s = (0, l.bG)([p.Ay], () => p.Ay.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
        let e = new a.Ep;
        return s ? e.start(150, () => {
            t(!0)
        }) : (e.stop(), t(!1)), () => e.stop()
    }, [s]), e) ? (0, n.jsx)("div", {
        className: h.mB,
        children: (0, n.jsx)(o.y$y, {})
    }) : null
}

function O(e) {
    let {
        hideDeviceSelector: t = !1,
        hideDeviceHeader: s = !1,
        hideCameraSettingsLink: i = !1,
        onLearnMore: a,
        selectedBackgroundOption: j,
        onSelectBackgroundOption: O,
        renderCamera: _,
        hidePreviewToggle: D = !1,
        onCancelPreview: I
    } = e, {
        analyticsLocations: C
    } = (0, c.Ay)(), {
        id: T
    } = (0, u.x5)(f.oh.VIDEO_INPUT), E = (0, l.bG)([p.Ay], () => p.Ay.isVideoAvailable()), b = m.bm.useSetting();
    return (0, n.jsxs)(o.BJc, {
        gap: 20,
        children: [_(T), p.Ay.isEnabled() ? null : (0, n.jsx)(o.Text, {
            className: h.u5,
            color: "interactive-text-default",
            variant: "text-sm/normal",
            children: N.intl.format(N.t.stagfJ, {
                onEnableClick: () => r.A.enable(!0)
            })
        }), D ? null : (0, n.jsx)(o.dOG, {
            label: N.intl.string(N.t["3Ppr1h"]),
            description: N.intl.string(N.t.WNbX4O),
            checked: b,
            onChange: e => {
                m.bm.updateSetting(e), g.default.track(v.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                    always_preview_video: e
                })
            }
        }), !t && (0, n.jsx)(d.U, {
            label: s ? void 0 : N.intl.string(N.t.FsQ3OR),
            helperText: !i && (0, A.p)() ? N.intl.format(N.t.aJYgRt, {
                onCameraSettingsClick: () => {
                    I?.(), window.open((0, A.i)(T)), g.default.track(v.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                        location_stack: C
                    })
                }
            }) : void 0,
            deviceType: f.oh.VIDEO_INPUT,
            location: "CameraSettings",
            isDisabled: !E
        }), (0, n.jsx)(x.A, {
            className: h.Jp,
            onLearnMore: a,
            selectedBackgroundOption: j,
            onSelectBackgroundOption: O,
            currentDeviceId: T
        })]
    })
}