/** chunk id: 625841 params = (module,exports,require) **/
i.d(e, {
    U: () => C
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
    A = i(688810),
    m = i(544028),
    p = i(825468),
    h = i(347481),
    g = i(430452),
    f = i(74848),
    T = i(731854),
    S = i(985018),
    E = i(784463);

function C(t) {
    let {
        deviceType: e,
        location: r,
        selectedDeviceId: C,
        onSelectDevice: v,
        hideDeviceTypeIcon: _ = !1,
        label: x,
        ...y
    } = t, {
        setDevice: I,
        Icon: N,
        getCanSetDevice: j,
        getWarningMessage: D,
        getLocation: P
    } = {
        [T.oh.AUDIO_INPUT]: {
            setDevice: c.A.setInputDevice,
            Icon: u.cNw,
            getCanSetDevice: t => t.supports(T.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => S.intl.format(S.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Input Devices")
            }),
            getLocation: t => `${t}.SingleSelectInputDevices`
        },
        [T.oh.AUDIO_OUTPUT]: {
            setDevice: c.A.setOutputDevice,
            Icon: u.LoC,
            getCanSetDevice: t => t.supports(T.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => S.intl.format(S.t.Ow0dbF, {
                onDownloadClick: () => (0, p._)("Help Text Output Devices")
            }),
            getLocation: t => `${t}.SingleSelectOutputDevices`
        },
        [T.oh.VIDEO_INPUT]: {
            setDevice: c.A.setVideoDevice,
            Icon: u.xpe,
            getCanSetDevice: t => t.isVideoAvailable() || !t.hasVideoDevice(),
            getWarningMessage: () => S.intl.format(S.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Video Devices")
            }),
            getLocation: t => `${t}.SingleSelectVideoDevices`
        }
    } [e], {
        analyticsLocations: O
    } = (0, A.Ay)(), U = (0, a.bG)([m.A], () => m.A.theme), L = P(r), b = (0, f.tR)(e), {
        id: M
    } = (0, f.x5)(e), R = (0, a.bG)([g.Ay], () => j(g.Ay)), G = (0, n.jsx)(u.po8, {
        messageType: u.YCn.WARNING,
        children: D()
    }), V = l.useCallback(t => {
        (v?.(t) ?? !0) && I(t, {
            location: L,
            analyticsLocations: O
        })
    }, [L, O, v, I]);

    function w(t) {
        let e, l, {
                label: r,
                value: a
            } = t,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            c = r,
            A = (0, f.d)(r);
        null != A && (c = A.prefix, e = A.subName);
        let m = h.A.getCertifiedDeviceName(a, c);
        if (h.A.isCertified(a)) {
            let t = (0, d.qB)(U) ? i(961392) : i(848672);
            l = (0, n.jsx)("img", {
                src: t,
                alt: S.intl.string(S.t.smSKsj)
            })
        }
        return (0, n.jsxs)("div", {
            className: s()(E.Mg, {
                [E.S2]: o && null != e,
                [E.Sy]: !_
            }),
            children: [!_ && (0, n.jsx)("div", {
                className: E.Kt,
                children: (0, n.jsx)(N, {
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
                children: m
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
            label: x,
            value: C ?? M,
            onChange: V,
            options: b.map(t => {
                let {
                    id: e,
                    name: i
                } = t;
                return {
                    value: e,
                    label: i
                }
            }),
            isDisabled: !R,
            popoutPosition: "bottom",
            renderOptionLabel: t => w(t, !0),
            renderOptionValue: t => {
                let [e] = t;
                return w(e)
            },
            optionClassName: E.OS,
            ...y,
            "data-migration-pending": !0
        }), !R && G]
    })
}