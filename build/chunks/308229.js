/** Chunk was on 10534 **/
/** chunk id: 308229, original params: e,t,a (module,exports,require) **/
a.d(t, {
    default: () => v
}), a(896048);
var n = a(627968),
    i = a(64700),
    r = a(158954),
    l = a(397927),
    c = a(827343),
    o = a(820284),
    s = a(212245),
    d = a(793574),
    u = a(688810),
    p = a(253932),
    g = a(329551),
    h = a(987384),
    b = a(413339),
    A = a(430452),
    w = a(287809),
    C = a(954571),
    _ = a(745317),
    f = a(652215),
    m = a(985018),
    k = a(682225);

function v(e) {
    let {
        transitionState: t,
        videoEnabled: a,
        onEnable: v,
        onClose: y
    } = e, E = A.A.getCameraComponent(), O = p.bm.useSetting(), [j, S] = i.useState((0, g.i)(w.default.getCurrentUser())), P = (0, s.p)(), {
        analyticsLocations: x
    } = (0, u.Ay)(d.A.CAMERA_PREVIEW);
    i.useEffect(() => {
        C.default.track(f.HAw.OPEN_MODAL, {
            type: "Camera Preview Modal"
        })
    }, []);
    let M = i.useCallback(async () => {
            try {
                await (0, b.gB)(j, {
                    location: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = a[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        page: f.liQ.PREVIEW_CAMERA_MODAL
                    }, P.location)
                })
            } catch (e) {}
            await y(), (0, h._C)(j)
        }, [j, P.location, y]),
        D = i.useCallback(async () => {
            await M(), c.A.setVideoEnabled(!0), null == v || v()
        }, [M, v]),
        I = i.useMemo(() => [{
            variant: "primary",
            text: a ? m.intl.string(m.t.KQENhq) : m.intl.string(m.t.kgIe9a),
            onClick: a ? M : D
        }], [M, D, a]);
    return (0, n.jsx)(u.f5, {
        value: x,
        children: (0, n.jsx)(o.A, {
            page: f.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsx)(r.Modal, {
                size: "md",
                title: a ? m.intl.string(m.t.LAwwbQ) : m.intl.string(m.t["/HITVD"]),
                actionBarInput: (0, n.jsx)(l.Checkbox, {
                    label: m.intl.string(m.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: O,
                    onChange: () => {
                        p.bm.updateSetting(!O), C.default.track(f.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !O
                        })
                    }
                }),
                actions: I,
                onClose: y,
                transitionState: t,
                children: (0, n.jsx)(_.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: j,
                    onSelectBackgroundOption: S,
                    hideDeviceSelector: a,
                    renderCamera: e => (0, n.jsxs)("div", {
                        className: k.S,
                        children: [(0, n.jsx)("div", {
                            className: k.U,
                            children: (0, n.jsx)(E, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, n.jsx)(_.k, {})]
                    }),
                    onLearnMore: y
                })
            })
        })
    })
}