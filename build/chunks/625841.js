/** chunk id: 625841 params = (module,exports,require) **/
i.d(t, {
    U: () => I
});
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(311907),
    o = i(843282),
    c = i(582754),
    d = i(397927),
    u = i(827343),
    m = i(688810),
    _ = i(544028),
    p = i(944993),
    h = i(347481),
    A = i(430452),
    g = i(74848),
    f = i(731854),
    v = i(985018),
    S = i(789520);

function I(e) {
    let {
        deviceType: t,
        location: l,
        selectedDeviceId: I,
        onSelectDevice: T,
        hideDeviceTypeIcon: C = !1,
        label: E,
        ...y
    } = e, {
        setDevice: x,
        Icon: N,
        getCanSetDevice: b,
        getWarningMessage: L,
        getLocation: P
    } = {
        [f.oh.AUDIO_INPUT]: {
            setDevice: u.A.setInputDevice,
            Icon: d.cNw,
            getCanSetDevice: e => e.supports(f.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => v.intl.format(v.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Input Devices")
            }),
            getLocation: e => `${e}.SingleSelectInputDevices`
        },
        [f.oh.AUDIO_OUTPUT]: {
            setDevice: u.A.setOutputDevice,
            Icon: d.LoC,
            getCanSetDevice: e => e.supports(f.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => v.intl.format(v.t.Ow0dbF, {
                onDownloadClick: () => (0, p._)("Help Text Output Devices")
            }),
            getLocation: e => `${e}.SingleSelectOutputDevices`
        },
        [f.oh.VIDEO_INPUT]: {
            setDevice: u.A.setVideoDevice,
            Icon: d.xpe,
            getCanSetDevice: e => e.isVideoAvailable() || !e.hasVideoDevice(),
            getWarningMessage: () => v.intl.format(v.t["1iK6UW"], {
                onDownloadClick: () => (0, p._)("Help Text Video Devices")
            }),
            getLocation: e => `${e}.SingleSelectVideoDevices`
        }
    } [t], {
        analyticsLocations: j
    } = (0, m.Ay)(), D = (0, r.bG)([_.A], () => _.A.theme), U = P(l), O = (0, g.tR)(t), {
        id: R
    } = (0, g.x5)(t), M = (0, r.bG)([A.Ay], () => b(A.Ay)), w = (0, n.jsx)(d.po8, {
        messageType: d.YCn.WARNING,
        children: L()
    }), V = a.useCallback(e => {
        (T?.(e) ?? !0) && x(e, {
            location: U,
            analyticsLocations: j
        })
    }, [U, j, T, x]);

    function G(e) {
        let t, a, {
                label: l,
                value: r
            } = e,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            u = l,
            m = (0, g.d)(l);
        null != m && (u = m.prefix, t = m.subName);
        let _ = h.A.getCertifiedDeviceName(r, u);
        if (h.A.isCertified(r)) {
            let e = (0, c.qB)(D) ? i(961392) : i(848672);
            a = (0, n.jsx)("img", {
                src: e,
                alt: v.intl.string(v.t.smSKsj)
            })
        }
        return (0, n.jsxs)("div", {
            className: s()(S.Mg, {
                [S.S2]: o && null != t,
                [S.Sy]: !C
            }),
            children: [!C && (0, n.jsx)("div", {
                className: S.Kt,
                children: (0, n.jsx)(N, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor"
                })
            }), (0, n.jsx)(d.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: o ? "text-subtle" : "text-default",
                className: S.hV,
                children: _
            }), null != t && (0, n.jsx)(d.Text, {
                lineClamp: 2,
                variant: o ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: S.VT,
                children: t
            }), null != a && (0, n.jsx)("div", {
                className: S.pN,
                children: a
            })]
        })
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Te, {
            label: E,
            value: I ?? R,
            onChange: V,
            options: O.map(e => {
                let {
                    id: t,
                    name: i
                } = e;
                return {
                    value: t,
                    label: i
                }
            }),
            isDisabled: !M,
            popoutPosition: "bottom",
            renderOptionLabel: e => G(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return G(t)
            },
            optionClassName: S.OS,
            ...y,
            "data-migration-pending": !0
        }), !M && w]
    })
}