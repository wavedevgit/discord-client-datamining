/** Chunk was on 70690 **/
/** chunk id: 308229, original params: e,t,o (module,exports,require) **/
o.d(t, {
    default: () => S
}), o(896048);
var n = o(627968),
    a = o(64700),
    r = o(158954),
    i = o(397927),
    _ = o(827343),
    c = o(820284),
    d = o(212245),
    l = o(793574),
    b = o(688810),
    s = o(253932),
    u = o(329551),
    m = o(987384),
    f = o(413339),
    p = o(430452),
    g = o(287809),
    C = o(954571),
    h = o(745317),
    x = o(652215),
    k = o(985018),
    A = o(682225);

function S(e) {
    let {
        transitionState: t,
        videoEnabled: o,
        onEnable: S,
        onClose: w
    } = e, y = p.A.getCameraComponent(), v = s.bm.useSetting(), [T, I] = a.useState((0, u.i)(g.default.getCurrentUser())), B = (0, d.p)(), {
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
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(o);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(o, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = o[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        page: x.liQ.PREVIEW_CAMERA_MODAL
                    }, B.location)
                })
            } catch (e) {}
            await w(), (0, m._C)(T)
        }, [T, B.location, w]),
        E = a.useCallback(async () => {
            await O(), _.A.setVideoEnabled(!0), null == S || S()
        }, [O, S]),
        L = a.useMemo(() => [{
            variant: "primary",
            text: o ? k.intl.string(k.t.KQENhq) : k.intl.string(k.t.kgIe9a),
            onClick: o ? O : E
        }], [O, E, o]);
    return (0, n.jsx)(b.f5, {
        value: R,
        children: (0, n.jsx)(c.A, {
            page: x.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsx)(r.Modal, {
                size: "md",
                title: o ? k.intl.string(k.t.LAwwbQ) : k.intl.string(k.t["/HITVD"]),
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
                onClose: w,
                transitionState: t,
                children: (0, n.jsx)(h.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: T,
                    onSelectBackgroundOption: I,
                    hideDeviceSelector: o,
                    renderCamera: e => (0, n.jsxs)("div", {
                        className: A.S,
                        children: [(0, n.jsx)("div", {
                            className: A.U,
                            children: (0, n.jsx)(y, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, n.jsx)(h.k, {})]
                    }),
                    onLearnMore: w
                })
            })
        })
    })
}