/** chunk id: 308229, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => w
}), n(896048);
var o = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(397927),
    l = n(827343),
    c = n(820284),
    s = n(212245),
    u = n(793574),
    d = n(688810),
    p = n(253932),
    g = n(329551),
    _ = n(987384),
    b = n(413339),
    O = n(430452),
    f = n(287809),
    m = n(954571),
    v = n(745317),
    y = n(652215),
    h = n(985018),
    k = n(682225);

function w(e) {
    let {
        transitionState: t,
        videoEnabled: n,
        onEnable: w,
        onClose: I
    } = e, j = O.A.getCameraComponent(), D = p.bm.useSetting(), [C, S] = r.useState((0, g.i)(f.default.getCurrentUser())), x = (0, s.p)(), {
        analyticsLocations: P
    } = (0, d.Ay)(u.A.CAMERA_PREVIEW);
    r.useEffect(() => {
        m.default.track(y.HAw.OPEN_MODAL, {
            type: "Camera Preview Modal"
        })
    }, []);
    let A = r.useCallback(async () => {
            try {
                await (0, b.gB)(C, {
                    location: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), o.forEach(function(t) {
                                var o;
                                o = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = o
                            })
                        }
                        return e
                    }({
                        page: y.liQ.PREVIEW_CAMERA_MODAL
                    }, x.location)
                })
            } catch (e) {}
            await I(), (0, _._C)(C)
        }, [C, x.location, I]),
        E = r.useCallback(async () => {
            await A(), l.A.setVideoEnabled(!0), null == w || w()
        }, [A, w]),
        T = r.useMemo(() => [{
            variant: "primary",
            text: n ? h.intl.string(h.t.KQENhq) : h.intl.string(h.t.kgIe9a),
            onClick: n ? A : E
        }], [A, E, n]);
    return (0, o.jsx)(d.f5, {
        value: P,
        children: (0, o.jsx)(c.A, {
            page: y.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, o.jsx)(i.Modal, {
                size: "md",
                title: n ? h.intl.string(h.t.LAwwbQ) : h.intl.string(h.t["/HITVD"]),
                actionBarInput: (0, o.jsx)(a.Checkbox, {
                    label: h.intl.string(h.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: D,
                    onChange: () => {
                        p.bm.updateSetting(!D), m.default.track(y.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !D
                        })
                    }
                }),
                actions: T,
                onClose: I,
                transitionState: t,
                children: (0, o.jsx)(v.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: C,
                    onSelectBackgroundOption: S,
                    hideDeviceSelector: n,
                    renderCamera: e => (0, o.jsxs)("div", {
                        className: k.S,
                        children: [(0, o.jsx)("div", {
                            className: k.U,
                            children: (0, o.jsx)(j, {
                                disabled: !1,
                                deviceId: e,
                                width: 430,
                                height: 242
                            })
                        }), (0, o.jsx)(v.k, {})]
                    }),
                    onLearnMore: I
                })
            })
        })
    })
}