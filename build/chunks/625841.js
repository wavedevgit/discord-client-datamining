/** chunk id: 625841 params = (module,exports,require) **/
s.d(t, {
    U: () => j
});
var n = s(627968),
    i = s(64700),
    l = s(503698),
    a = s.n(l),
    o = s(311907),
    r = s(843282),
    c = s(582754),
    d = s(397927),
    u = s(827343),
    m = s(688810),
    x = s(544028),
    p = s(944993),
    g = s(347481),
    A = s(430452),
    v = s(74848),
    f = s(731854),
    N = s(985018),
    h = s(789520);

function j(e) {
    let {
        deviceType: t,
        location: l,
        selectedDeviceId: j,
        onSelectDevice: O,
        hideDeviceTypeIcon: _ = !1,
        label: D,
        ...I
    } = e, {
        setDevice: C,
        Icon: T,
        getCanSetDevice: E,
        getWarningMessage: b,
        getLocation: S
    } = {
        [f.oh.AUDIO_INPUT]: {
            setDevice: u.A.setInputDevice,
            Icon: d.cNw,
            getCanSetDevice: e => e.supports(f.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => N.intl.format(N.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Input Devices")
            }),
            getLocation: e => `${e}.SingleSelectInputDevices`
        },
        [f.oh.AUDIO_OUTPUT]: {
            setDevice: u.A.setOutputDevice,
            Icon: d.LoC,
            getCanSetDevice: e => e.supports(f.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => N.intl.format(N.t.Ow0dbF, {
                onDownloadClick: () => (0, p._)("Help Text Output Devices")
            }),
            getLocation: e => `${e}.SingleSelectOutputDevices`
        },
        [f.oh.VIDEO_INPUT]: {
            setDevice: u.A.setVideoDevice,
            Icon: d.xpe,
            getCanSetDevice: e => e.isVideoAvailable() || !e.hasVideoDevice(),
            getWarningMessage: () => N.intl.format(N.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Video Devices")
            }),
            getLocation: e => `${e}.SingleSelectVideoDevices`
        }
    } [t], {
        analyticsLocations: U
    } = (0, m.Ay)(), k = (0, o.bG)([x.A], () => x.A.theme), y = S(l), P = (0, v.tR)(t), {
        id: M
    } = (0, v.x5)(t), B = (0, o.bG)([A.Ay], () => E(A.Ay)), L = (0, n.jsx)(d.po8, {
        messageType: d.YCn.WARNING,
        children: b()
    }), w = i.useCallback(e => {
        (O?.(e) ?? !0) && C(e, {
            location: y,
            analyticsLocations: U
        })
    }, [y, U, O, C]);

    function V(e) {
        let t, i, {
                label: l,
                value: o
            } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            u = l,
            m = (0, v.d)(l);
        null != m && (u = m.prefix, t = m.subName);
        let x = g.A.getCertifiedDeviceName(o, u);
        if (g.A.isCertified(o)) {
            let e = (0, c.qB)(k) ? s(961392) : s(848672);
            i = (0, n.jsx)("img", {
                src: e,
                alt: N.intl.string(N.t.smSKsj)
            })
        }
        return (0, n.jsxs)("div", {
            className: a()(h.Mg, {
                [h.S2]: r && null != t,
                [h.Sy]: !_
            }),
            children: [!_ && (0, n.jsx)("div", {
                className: h.Kt,
                children: (0, n.jsx)(T, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor"
                })
            }), (0, n.jsx)(d.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: r ? "text-subtle" : "text-default",
                className: h.hV,
                children: x
            }), null != t && (0, n.jsx)(d.Text, {
                lineClamp: 2,
                variant: r ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: h.VT,
                children: t
            }), null != i && (0, n.jsx)("div", {
                className: h.pN,
                children: i
            })]
        })
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Te, {
            label: D,
            value: j ?? M,
            onChange: w,
            options: P.map(e => {
                let {
                    id: t,
                    name: s
                } = e;
                return {
                    value: t,
                    label: s
                }
            }),
            isDisabled: !B,
            popoutPosition: "bottom",
            renderOptionLabel: e => V(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return V(t)
            },
            optionClassName: h.OS,
            ...I,
            "data-migration-pending": !0
        }), !B && L]
    })
}