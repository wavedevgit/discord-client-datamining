/** chunk id: 308229 params = (module,exports,require) **/
a.d(n, {
    default: () => A
});
var t = a(627968),
    o = a(64700),
    i = a(158954),
    r = a(397927),
    _ = a(827343),
    c = a(820284),
    d = a(212245),
    l = a(793574),
    s = a(688810),
    u = a(253932),
    g = a(329551),
    p = a(987384),
    k = a(413339),
    b = a(430452),
    m = a(287809),
    C = a(954571),
    I = a(745317),
    f = a(652215),
    h = a(985018),
    O = a(980027);

function A(e) {
    let {
        transitionState: n,
        videoEnabled: a,
        onEnable: A,
        onClose: v
    } = e, w = b.Ay.getCameraComponent(), S = u.bm.useSetting(), [E, x] = o.useState((0, g.i)(m.default.getCurrentUser())), B = (0, d.p)(), {
        analyticsLocations: y
    } = (0, s.Ay)(l.A.CAMERA_PREVIEW);
    o.useEffect(() => {
        C.default.track(f.HAw.OPEN_MODAL, {
            type: "Camera Preview Modal"
        })
    }, []);
    let L = o.useCallback(async () => {
            try {
                await (0, k.gB)(E, {
                    location: {
                        page: f.liQ.PREVIEW_CAMERA_MODAL,
                        ...B.location
                    }
                })
            } catch (e) {}
            await v(), (0, p._C)(E)
        }, [E, B.location, v]),
        P = o.useCallback(async () => {
            await L(), _.A.setVideoEnabled(!0), A?.()
        }, [L, A]),
        T = o.useMemo(() => [{
            variant: "primary",
            text: a ? h.intl.string(h.t.KQENhq) : h.intl.string(h.t.kgIe9a),
            onClick: a ? L : P
        }], [L, P, a]);
    return (0, t.jsx)(s.f5, {
        value: y,
        children: (0, t.jsx)(c.A, {
            page: f.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, t.jsx)(i.Modal, {
                size: "md",
                title: a ? h.intl.string(h.t.LAwwbQ) : h.intl.string(h.t["/HITVD"]),
                actionBarInput: (0, t.jsx)(r.Checkbox, {
                    label: h.intl.string(h.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: S,
                    onChange: () => {
                        u.bm.updateSetting(!S), C.default.track(f.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !S
                        })
                    }
                }),
                actions: T,
                onClose: v,
                transitionState: n,
                children: (0, t.jsx)(I.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: E,
                    onSelectBackgroundOption: x,
                    hideDeviceSelector: a,
                    renderCamera: e => (0, t.jsxs)("div", {
                        className: O.S,
                        children: [(0, t.jsx)("div", {
                            className: O.U,
                            children: (0, t.jsx)(w, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, t.jsx)(I.k, {})]
                    }),
                    onLearnMore: v
                })
            })
        })
    })
}