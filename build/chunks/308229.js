/** Chunk was on 69114 **/
/** chunk id: 308229, original params: e,o,t (module,exports,require) **/
t.d(o, {
    default: () => y
}), t(896048);
var n = t(627968),
    a = t(64700),
    r = t(158954),
    i = t(397927),
    _ = t(827343),
    c = t(820284),
    d = t(212245),
    l = t(793574),
    b = t(688810),
    s = t(253932),
    u = t(329551),
    m = t(987384),
    f = t(413339),
    p = t(430452),
    g = t(287809),
    C = t(954571),
    h = t(745317),
    x = t(652215),
    k = t(985018),
    A = t(682225);

function y(e) {
    let {
        transitionState: o,
        videoEnabled: t,
        onEnable: y,
        onClose: S
    } = e, w = p.A.getCameraComponent(), v = s.bm.useSetting(), [T, I] = a.useState((0, u.i)(g.default.getCurrentUser())), B = (0, d.p)(), {
        analyticsLocations: R
    } = (0, b.Ay)(l.A.CAMERA_PREVIEW);
    a.useEffect(() => {
        C.default.track(x.HAw.OPEN_MODAL, {
            type: "Camera Preview Modal"
        })
    }, []);
    let O = a.useCallback(async () => {
            try {
                await (0, f.gB)(T, {
                    location: function(e) {
                        for (var o = 1; o < arguments.length; o++) {
                            var t = null != arguments[o] ? arguments[o] : {},
                                n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.forEach(function(o) {
                                var n;
                                n = t[o], o in e ? Object.defineProperty(e, o, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[o] = n
                            })
                        }
                        return e
                    }({
                        page: x.liQ.PREVIEW_CAMERA_MODAL
                    }, B.location)
                })
            } catch (e) {}
            await S(), (0, m._C)(T)
        }, [T, B.location, S]),
        E = a.useCallback(async () => {
            await O(), _.A.setVideoEnabled(!0), null == y || y()
        }, [O, y]),
        L = a.useMemo(() => [{
            variant: "primary",
            text: t ? k.intl.string(k.t.KQENhq) : k.intl.string(k.t.kgIe9a),
            onClick: t ? O : E
        }], [O, E, t]);
    return (0, n.jsx)(b.f5, {
        value: R,
        children: (0, n.jsx)(c.A, {
            page: x.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsx)(r.Modal, {
                size: "md",
                title: t ? k.intl.string(k.t.LAwwbQ) : k.intl.string(k.t["/HITVD"]),
                actionBarInput: (0, n.jsx)(i.Checkbox, {
                    label: k.intl.string(k.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: v,
                    onChange: () => {
                        s.bm.updateSetting(!v), C.default.track(x.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !v
                        })
                    }
                }),
                actions: L,
                onClose: S,
                transitionState: o,
                children: (0, n.jsx)(h.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: T,
                    onSelectBackgroundOption: I,
                    hideDeviceSelector: t,
                    renderCamera: e => (0, n.jsxs)("div", {
                        className: A.S,
                        children: [(0, n.jsx)("div", {
                            className: A.U,
                            children: (0, n.jsx)(w, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, n.jsx)(h.k, {})]
                    }),
                    onLearnMore: S
                })
            })
        })
    })
}