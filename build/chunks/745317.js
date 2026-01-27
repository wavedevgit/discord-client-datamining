/** Chunk was on 60667 **/
/** chunk id: 745317, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I,
    k: () => C
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(451988),
    a = n(397927),
    o = n(827343),
    c = n(688810),
    d = n(625841),
    u = n(74848),
    _ = n(195043),
    p = n(253932),
    m = n(520999),
    g = n(430452),
    A = n(954571),
    f = n(204050),
    h = n(652215),
    b = n(531525),
    E = n(731854),
    x = n(985018),
    O = n(602785);

function C() {
    let [e, t] = i.useState(!1), n = (0, l.bG)([g.A], () => g.A.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
        let e = new s.Ep;
        return n ? e.start(150, () => {
            t(!0)
        }) : (e.stop(), t(!1)), () => e.stop()
    }, [n]), e) ? (0, r.jsx)("div", {
        className: O.mB,
        children: (0, r.jsx)(a.y$y, {})
    }) : null
}

function I(e) {
    let {
        hideDeviceSelector: t = !1,
        hideDeviceHeader: n = !1,
        hideCameraSettingsLink: i = !1,
        onLearnMore: s,
        selectedBackgroundOption: C,
        onSelectBackgroundOption: I,
        renderCamera: T,
        hidePreviewToggle: S = !1,
        onCancelPreview: j
    } = e, {
        analyticsLocations: v
    } = (0, c.Ay)(), {
        id: N
    } = (0, u.x5)(E.oh.VIDEO_INPUT), y = (0, l.bG)([g.A], () => g.A.isVideoAvailable()), P = p.bm.useSetting();
    return (0, r.jsxs)(a.BJc, {
        gap: 20,
        children: [T(N), g.A.isEnabled() ? null : (0, r.jsx)(a.Text, {
            className: O.u5,
            color: "interactive-text-default",
            variant: "text-sm/normal",
            children: x.intl.format(x.t.stagfJ, {
                onEnableClick: () => o.A.enable(!0)
            })
        }), S ? null : (0, r.jsx)(a.dOG, {
            label: x.intl.string(x.t["3Ppr1h"]),
            description: x.intl.string(x.t.WNbX4O),
            checked: P,
            onChange: e => {
                p.bm.updateSetting(e), A.default.track(h.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                    always_preview_video: e
                })
            }
        }), !t && (0, r.jsx)(_.x, {
            setting: b.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
            children: (0, r.jsx)(d.U, {
                label: n ? void 0 : x.intl.string(x.t.FsQ3OR),
                helperText: !i && (0, f.p)() ? x.intl.format(x.t.aJYgRt, {
                    onCameraSettingsClick: () => {
                        null == j || j(), window.open((0, f.i)(N)), A.default.track(h.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                            location_stack: v
                        })
                    }
                }) : void 0,
                deviceType: E.oh.VIDEO_INPUT,
                location: "CameraSettings",
                isDisabled: !y,
                showAllDevices: !0
            })
        }), (0, r.jsx)(_.x, {
            setting: b.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, r.jsx)(m.A, {
                className: O.Jp,
                onLearnMore: s,
                selectedBackgroundOption: C,
                onSelectBackgroundOption: I,
                currentDeviceId: N
            })
        })]
    })
}