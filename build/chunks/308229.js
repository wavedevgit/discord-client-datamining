/** chunk id: 308229 params = (module,exports,require) **/
a.d(t, {
    default: () => b
});
var i = a(627968),
    n = a(64700),
    r = a(158954),
    s = a(397927),
    l = a(827343),
    c = a(820284),
    d = a(212245),
    o = a(793574),
    h = a(688810),
    u = a(253932),
    p = a(329551),
    g = a(987384),
    A = a(413339),
    C = a(430452),
    _ = a(287809),
    k = a(954571),
    E = a(745317),
    w = a(652215),
    m = a(985018),
    v = a(935499);

function b(e) {
    let {
        transitionState: t,
        videoEnabled: a,
        onEnable: b,
        onClose: x
    } = e, S = C.Ay.getCameraComponent(), y = u.bm.useSetting(), [M, j] = n.useState((0, p.i)(_.default.getCurrentUser())), P = (0, d.p)(), {
        analyticsLocations: f
    } = (0, h.Ay)(o.A.CAMERA_PREVIEW);
    n.useEffect(() => {
        k.default.track(w.HAw.OPEN_MODAL, {
            type: "Camera Preview Modal"
        })
    }, []);
    let I = n.useCallback(async () => {
            try {
                await (0, A.gB)(M, {
                    location: {
                        page: w.liQ.PREVIEW_CAMERA_MODAL,
                        ...P.location
                    }
                })
            } catch (e) {}
            await x(), (0, g._C)(M)
        }, [M, P.location, x]),
        L = n.useCallback(async () => {
            await I(), l.A.setVideoEnabled(!0), b?.()
        }, [I, b]),
        D = n.useMemo(() => [{
            variant: "primary",
            text: a ? m.intl.string(m.t.KQENhq) : m.intl.string(m.t.kgIe9a),
            onClick: a ? I : L
        }], [I, L, a]);
    return (0, i.jsx)(h.f5, {
        value: f,
        children: (0, i.jsx)(c.A, {
            page: w.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsx)(r.Modal, {
                size: "md",
                title: a ? m.intl.string(m.t.LAwwbQ) : m.intl.string(m.t["/HITVD"]),
                actionBarInput: (0, i.jsx)(s.Checkbox, {
                    label: m.intl.string(m.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: y,
                    onChange: () => {
                        u.bm.updateSetting(!y), k.default.track(w.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !y
                        })
                    }
                }),
                actions: D,
                onClose: x,
                transitionState: t,
                children: (0, i.jsx)(E.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: M,
                    onSelectBackgroundOption: j,
                    hideDeviceSelector: a,
                    renderCamera: e => (0, i.jsxs)("div", {
                        className: v.S,
                        children: [(0, i.jsx)("div", {
                            className: v.U,
                            children: (0, i.jsx)(S, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, i.jsx)(E.k, {})]
                    }),
                    onLearnMore: x
                })
            })
        })
    })
}