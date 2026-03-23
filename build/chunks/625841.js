/** chunk id: 625841 params = (module,exports,require) **/
n.d(t, {
    U: () => I
});
var i = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    s = n(311907),
    c = n(843282),
    r = n(582754),
    d = n(397927),
    _ = n(827343),
    u = n(688810),
    g = n(544028),
    p = n(944993),
    m = n(347481),
    b = n(430452),
    v = n(74848),
    k = n(731854),
    x = n(985018),
    C = n(534393);

function I(e) {
    let {
        deviceType: t,
        location: o,
        selectedDeviceId: I,
        onSelectDevice: h,
        hideDeviceTypeIcon: O = !1,
        label: D,
        ...f
    } = e, {
        setDevice: A,
        Icon: S,
        getCanSetDevice: T,
        getWarningMessage: w,
        getLocation: U
    } = {
        [k.oh.AUDIO_INPUT]: {
            setDevice: _.A.setInputDevice,
            Icon: d.cNw,
            getCanSetDevice: e => e.supports(k.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => x.intl.format(x.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Input Devices")
            }),
            getLocation: e => `${e}.SingleSelectInputDevices`
        },
        [k.oh.AUDIO_OUTPUT]: {
            setDevice: _.A.setOutputDevice,
            Icon: d.LoC,
            getCanSetDevice: e => e.supports(k.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => x.intl.format(x.t.Ow0dbF, {
                onDownloadClick: () => (0, p._)("Help Text Output Devices")
            }),
            getLocation: e => `${e}.SingleSelectOutputDevices`
        },
        [k.oh.VIDEO_INPUT]: {
            setDevice: _.A.setVideoDevice,
            Icon: d.xpe,
            getCanSetDevice: e => e.isVideoAvailable() || !e.hasVideoDevice(),
            getWarningMessage: () => x.intl.format(x.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Video Devices")
            }),
            getLocation: e => `${e}.SingleSelectVideoDevices`
        }
    } [t], {
        analyticsLocations: E
    } = (0, u.Ay)(), j = (0, s.bG)([g.A], () => g.A.theme), N = U(o), P = (0, v.tR)(t), {
        id: V
    } = (0, v.x5)(t), y = (0, s.bG)([b.Ay], () => T(b.Ay)), L = (0, i.jsx)(d.po8, {
        messageType: d.YCn.WARNING,
        children: w()
    }), B = a.useCallback(e => {
        (h?.(e) ?? !0) && A(e, {
            location: N,
            analyticsLocations: E
        })
    }, [N, E, h, A]);

    function M(e) {
        let t, a, {
                label: o,
                value: s
            } = e,
            c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            _ = o,
            u = (0, v.d)(o);
        null != u && (_ = u.prefix, t = u.subName);
        let g = m.A.getCertifiedDeviceName(s, _);
        if (m.A.isCertified(s)) {
            let e = (0, r.qB)(j) ? n(961392) : n(848672);
            a = (0, i.jsx)("img", {
                src: e,
                alt: x.intl.string(x.t.smSKsj)
            })
        }
        return (0, i.jsxs)("div", {
            className: l()(C.Mg, {
                [C.S2]: c && null != t,
                [C.Sy]: !O
            }),
            children: [!O && (0, i.jsx)("div", {
                className: C.Kt,
                children: (0, i.jsx)(S, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.LU0.colors.ICON_MUTED
                })
            }), (0, i.jsx)(d.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: c ? "text-subtle" : "text-default",
                className: C.hV,
                children: g
            }), null != t && (0, i.jsx)(d.Text, {
                lineClamp: 2,
                variant: c ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: C.VT,
                children: t
            }), null != a && (0, i.jsx)("div", {
                className: C.pN,
                children: a
            })]
        })
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Te, {
            label: D,
            value: I ?? V,
            onChange: B,
            options: P.map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return {
                    value: t,
                    label: n
                }
            }),
            isDisabled: !y,
            popoutPosition: "bottom",
            renderOptionLabel: e => M(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return M(t)
            },
            optionClassName: C.OS,
            ...f,
            "data-migration-pending": !0
        }), !y && L]
    })
}