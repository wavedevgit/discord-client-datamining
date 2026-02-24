/** chunk id: 625841, original params: e,t,i (module,exports,require) **/
i.d(t, {
    U: () => C
});
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    o = i(311907),
    c = i(843282),
    r = i(582754),
    u = i(397927),
    d = i(827343),
    h = i(688810),
    m = i(544028),
    p = i(825468),
    v = i(347481),
    g = i(430452),
    _ = i(954571),
    x = i(74848),
    A = i(652215),
    T = i(731854),
    D = i(985018),
    f = i(784463);
let S = "SHOW_MORE";

function C(e) {
    let {
        deviceType: t,
        location: l,
        showAllDevices: C = !1,
        selectedDeviceId: I,
        onSelectDevice: b,
        hideDeviceTypeIcon: y = !1,
        label: M,
        ...O
    } = e, {
        setDevice: j,
        Icon: N,
        getCanSetDevice: w,
        getWarningMessage: E,
        getLocation: V
    } = {
        [T.oh.AUDIO_INPUT]: {
            setDevice: d.A.setInputDevice,
            Icon: u.cNw,
            getCanSetDevice: e => e.supports(T.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => D.intl.format(D.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Input Devices")
            }),
            getLocation: e => `${e}.SingleSelectInputDevices`
        },
        [T.oh.AUDIO_OUTPUT]: {
            setDevice: d.A.setOutputDevice,
            Icon: u.LoC,
            getCanSetDevice: e => e.supports(T.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => D.intl.format(D.t.Ow0dbF, {
                onDownloadClick: () => (0, p._)("Help Text Output Devices")
            }),
            getLocation: e => `${e}.SingleSelectOutputDevices`
        },
        [T.oh.VIDEO_INPUT]: {
            setDevice: d.A.setVideoDevice,
            Icon: u.xpe,
            getCanSetDevice: e => e.isVideoAvailable(),
            getWarningMessage: () => D.intl.format(D.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Video Devices")
            }),
            getLocation: e => `${e}.SingleSelectVideoDevices`
        }
    } [t], {
        analyticsLocations: U
    } = (0, h.Ay)(), k = (0, o.bG)([m.A], () => m.A.theme), [L, $] = n.useState(C), R = V(l), [W, P] = (0, x.tR)(t, {
        location: R
    }), {
        id: K
    } = (0, x.x5)(t), B = (0, o.bG)([g.Ay], () => w(g.Ay)), G = (0, s.jsx)(u.po8, {
        messageType: u.YCn.WARNING,
        children: E()
    }), H = n.useCallback(e => {
        e === S ? ($(!0), _.default.track(A.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
            device_type: t,
            location: R,
            location_stack: U,
            shown_device_count: W.length,
            hidden_device_count: P.length
        })) : (b?.(e) ?? !0) && j(e, {
            location: R,
            analyticsLocations: U
        })
    }, [t, R, W.length, P.length, U, b, j]);

    function z(e) {
        let t, n, {
                label: l,
                value: o
            } = e,
            c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = l,
            h = (0, x.d)(l);
        null != h && (d = h.prefix, t = h.subName);
        let m = v.A.getCertifiedDeviceName(o, d);
        if (v.A.isCertified(o)) {
            let e = (0, r.qB)(k) ? i(961392) : i(848672);
            n = (0, s.jsx)("img", {
                src: e,
                alt: D.intl.string(D.t.smSKsj)
            })
        }
        return (0, s.jsxs)("div", {
            className: a()(f.Mg, {
                [f.S2]: c && null != t,
                [f.Sy]: !y
            }),
            children: [!y && (0, s.jsx)("div", {
                className: f.Kt,
                children: (0, s.jsx)(N, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: u.LU0.colors.ICON_MUTED
                })
            }), (0, s.jsx)(u.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: c ? "text-subtle" : "text-default",
                className: f.hV,
                children: m
            }), null != t && (0, s.jsx)(u.Text, {
                lineClamp: 2,
                variant: c ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: f.VT,
                children: t
            }), null != n && (0, s.jsx)("div", {
                className: f.pN,
                children: n
            })]
        })
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.Te, {
            label: M,
            value: I ?? K,
            onChange: H,
            options: function() {
                let e = e => {
                        let {
                            id: t,
                            name: i
                        } = e;
                        return {
                            value: t,
                            label: i
                        }
                    },
                    t = W.map(e);
                if (L || 0 === P.length) {
                    let i = P.map(e);
                    return t.concat(i)
                } {
                    let e = {
                        value: S,
                        label: D.intl.string(D.t.E99UMh),
                        preventCloseOnSelect: !0
                    };
                    return t.concat(e)
                }
            }(),
            isDisabled: !B,
            popoutPosition: "bottom",
            renderOptionLabel: e => z(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return z(t)
            },
            optionClassName: f.OS,
            ...O,
            "data-migration-pending": !0
        }), !B && G]
    })
}