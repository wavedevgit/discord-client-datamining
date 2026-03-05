/** chunk id: 625841 params = (module,exports,require) **/
i.d(e, {
    U: () => _
});
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(311907),
    o = i(843282),
    d = i(582754),
    u = i(397927),
    c = i(827343),
    m = i(688810),
    p = i(544028),
    h = i(825468),
    A = i(347481),
    g = i(430452),
    f = i(954571),
    T = i(74848),
    v = i(652215),
    C = i(731854),
    S = i(985018),
    E = i(784463);
let x = "SHOW_MORE";

function _(t) {
    let {
        deviceType: e,
        location: r,
        showAllDevices: _ = !1,
        selectedDeviceId: y,
        onSelectDevice: N,
        hideDeviceTypeIcon: I = !1,
        label: j,
        ...D
    } = t, {
        setDevice: P,
        Icon: U,
        getCanSetDevice: O,
        getWarningMessage: b,
        getLocation: L
    } = {
        [C.oh.AUDIO_INPUT]: {
            setDevice: c.A.setInputDevice,
            Icon: u.cNw,
            getCanSetDevice: t => t.supports(C.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => S.intl.format(S.t["1iK6UW"], {
                onDownloadClick: () => (0, h._)("Help Text Input Devices")
            }),
            getLocation: t => `${t}.SingleSelectInputDevices`
        },
        [C.oh.AUDIO_OUTPUT]: {
            setDevice: c.A.setOutputDevice,
            Icon: u.LoC,
            getCanSetDevice: t => t.supports(C.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => S.intl.format(S.t.Ow0dbF, {
                onDownloadClick: () => (0, h._)("Help Text Output Devices")
            }),
            getLocation: t => `${t}.SingleSelectOutputDevices`
        },
        [C.oh.VIDEO_INPUT]: {
            setDevice: c.A.setVideoDevice,
            Icon: u.xpe,
            getCanSetDevice: t => t.isVideoAvailable() || !t.hasVideoDevice(),
            getWarningMessage: () => S.intl.format(S.t["1iK6UW"], {
                onDownloadClick: () => (0, h._)("Help Text Video Devices")
            }),
            getLocation: t => `${t}.SingleSelectVideoDevices`
        }
    } [e], {
        analyticsLocations: M
    } = (0, m.Ay)(), R = (0, a.bG)([p.A], () => p.A.theme), [V, w] = l.useState(_), H = L(r), [G, W] = (0, T.tR)(e, {
        location: H
    }), {
        id: F
    } = (0, T.x5)(e), k = (0, a.bG)([g.Ay], () => O(g.Ay)), B = (0, n.jsx)(u.po8, {
        messageType: u.YCn.WARNING,
        children: b()
    }), Y = l.useCallback(t => {
        t === x ? (w(!0), f.default.track(v.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
            device_type: e,
            location: H,
            location_stack: M,
            shown_device_count: G.length,
            hidden_device_count: W.length
        })) : (N?.(t) ?? !0) && P(t, {
            location: H,
            analyticsLocations: M
        })
    }, [e, H, G.length, W.length, M, N, P]);

    function z(t) {
        let e, l, {
                label: r,
                value: a
            } = t,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            c = r,
            m = (0, T.d)(r);
        null != m && (c = m.prefix, e = m.subName);
        let p = A.A.getCertifiedDeviceName(a, c);
        if (A.A.isCertified(a)) {
            let t = (0, d.qB)(R) ? i(961392) : i(848672);
            l = (0, n.jsx)("img", {
                src: t,
                alt: S.intl.string(S.t.smSKsj)
            })
        }
        return (0, n.jsxs)("div", {
            className: s()(E.Mg, {
                [E.S2]: o && null != e,
                [E.Sy]: !I
            }),
            children: [!I && (0, n.jsx)("div", {
                className: E.Kt,
                children: (0, n.jsx)(U, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: u.LU0.colors.ICON_MUTED
                })
            }), (0, n.jsx)(u.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: o ? "text-subtle" : "text-default",
                className: E.hV,
                children: p
            }), null != e && (0, n.jsx)(u.Text, {
                lineClamp: 2,
                variant: o ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: E.VT,
                children: e
            }), null != l && (0, n.jsx)("div", {
                className: E.pN,
                children: l
            })]
        })
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Te, {
            label: j,
            value: y ?? F,
            onChange: Y,
            options: function() {
                let t = t => {
                        let {
                            id: e,
                            name: i
                        } = t;
                        return {
                            value: e,
                            label: i
                        }
                    },
                    e = G.map(t);
                if (V || 0 === W.length) {
                    let i = W.map(t);
                    return e.concat(i)
                } {
                    let t = {
                        value: x,
                        label: S.intl.string(S.t.E99UMh),
                        preventCloseOnSelect: !0
                    };
                    return e.concat(t)
                }
            }(),
            isDisabled: !k,
            popoutPosition: "bottom",
            renderOptionLabel: t => z(t, !0),
            renderOptionValue: t => {
                let [e] = t;
                return z(e)
            },
            optionClassName: E.OS,
            ...D,
            "data-migration-pending": !0
        }), !k && B]
    })
}