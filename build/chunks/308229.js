/** chunk id: 308229 params = (module,exports,require) **/
n.d(t, {
    default: () => O
});
var i = n(627968),
    a = n(64700),
    o = n(158954),
    l = n(397927),
    s = n(827343),
    r = n(820284),
    c = n(212245),
    d = n(793574),
    _ = n(688810),
    u = n(253932),
    g = n(329551),
    p = n(987384),
    m = n(413339),
    b = n(430452),
    v = n(287809),
    k = n(954571),
    x = n(745317),
    C = n(652215),
    h = n(985018),
    I = n(677066);

function O(e) {
    let {
        transitionState: t,
        videoEnabled: n,
        onEnable: O,
        onClose: D
    } = e, f = b.Ay.getCameraComponent(), A = u.bm.useSetting(), [S, T] = a.useState((0, g.i)(v.default.getCurrentUser())), w = (0, c.p)(), {
        analyticsLocations: U
    } = (0, _.Ay)(d.A.CAMERA_PREVIEW);
    a.useEffect(() => {
        k.default.track(C.HAw.OPEN_MODAL, {
            type: "Camera Preview Modal"
        })
    }, []);
    let E = a.useCallback(async () => {
            try {
                await (0, m.gB)(S, {
                    location: {
                        page: C.liQ.PREVIEW_CAMERA_MODAL,
                        ...w.location
                    }
                })
            } catch (e) {}
            await D(), (0, p._C)(S)
        }, [S, w.location, D]),
        j = a.useCallback(async () => {
            await E(), s.A.setVideoEnabled(!0), O?.()
        }, [E, O]),
        N = a.useMemo(() => [{
            variant: "primary",
            text: n ? h.intl.string(h.t.KQENhq) : h.intl.string(h.t.kgIe9a),
            onClick: n ? E : j
        }], [E, j, n]);
    return (0, i.jsx)(_.f5, {
        value: U,
        children: (0, i.jsx)(r.A, {
            page: C.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsx)(o.Modal, {
                size: "md",
                title: n ? h.intl.string(h.t.LAwwbQ) : h.intl.string(h.t["/HITVD"]),
                actionBarInput: (0, i.jsx)(l.Checkbox, {
                    label: h.intl.string(h.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: A,
                    onChange: () => {
                        u.bm.updateSetting(!A), k.default.track(C.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !A
                        })
                    }
                }),
                actions: N,
                onClose: D,
                transitionState: t,
                children: (0, i.jsx)(x.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: S,
                    onSelectBackgroundOption: T,
                    hideDeviceSelector: n,
                    renderCamera: e => (0, i.jsxs)("div", {
                        className: I.S,
                        children: [(0, i.jsx)("div", {
                            className: I.U,
                            children: (0, i.jsx)(f, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, i.jsx)(x.k, {})]
                    }),
                    onLearnMore: D
                })
            })
        })
    })
}