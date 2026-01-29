/** Chunk was on 82277 **/
/** chunk id: 625841, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => I
}), n(896048);
var o = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(311907),
    c = n(843282),
    s = n(582754),
    u = n(397927),
    d = n(827343),
    p = n(688810),
    g = n(544028),
    _ = n(825468),
    b = n(347481),
    O = n(430452),
    f = n(954571),
    m = n(74848),
    v = n(652215),
    y = n(731854),
    h = n(985018),
    k = n(534393);
let w = "SHOW_MORE";

function I(e) {
    var t, i;
    let {
        deviceType: I,
        location: j,
        showAllDevices: D = !1,
        selectedDeviceId: C,
        onSelectDevice: S,
        hideDeviceTypeIcon: x = !1,
        label: P
    } = e, A = function(e, t) {
        if (null == e) return {};
        var n, o, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) o = n[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) o = n[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
        return i
    }(e, ["deviceType", "location", "showAllDevices", "selectedDeviceId", "onSelectDevice", "hideDeviceTypeIcon", "label"]), {
        setDevice: E,
        Icon: T,
        getCanSetDevice: U,
        getWarningMessage: N,
        getLocation: L
    } = {
        [y.oh.AUDIO_INPUT]: {
            setDevice: d.A.setInputDevice,
            Icon: u.cNw,
            getCanSetDevice: e => e.supports(y.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => h.intl.format(h.t["1iK6UW"], {
                onDownloadClick: () => (0, _._)("Help Text Input Devices")
            }),
            getLocation: e => "".concat(e, ".SingleSelectInputDevices")
        },
        [y.oh.AUDIO_OUTPUT]: {
            setDevice: d.A.setOutputDevice,
            Icon: u.LoC,
            getCanSetDevice: e => e.supports(y.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => h.intl.format(h.t.Ow0dbF, {
                onDownloadClick: () => (0, _._)("Help Text Output Devices")
            }),
            getLocation: e => "".concat(e, ".SingleSelectOutputDevices")
        },
        [y.oh.VIDEO_INPUT]: {
            setDevice: d.A.setVideoDevice,
            Icon: u.xpe,
            getCanSetDevice: e => e.isVideoAvailable(),
            getWarningMessage: () => h.intl.format(h.t["1iK6UW"], {
                onDownloadClick: () => (0, _._)("Help Text Video Devices")
            }),
            getLocation: e => "".concat(e, ".SingleSelectVideoDevices")
        }
    } [I], {
        analyticsLocations: M
    } = (0, p.Ay)(), V = (0, l.bG)([g.A], () => g.A.theme), [B, R] = r.useState(D), W = L(j), [H, K] = (0, m.tR)(I, {
        location: W
    }), {
        id: G
    } = (0, m.x5)(I), Q = (0, l.bG)([O.A], () => U(O.A)), J = (0, o.jsx)(u.po8, {
        messageType: u.YCn.WARNING,
        children: N()
    }), q = r.useCallback(e => {
        if (e === w) R(!0), f.default.track(v.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
            device_type: I,
            location: W,
            location_stack: M,
            shown_device_count: H.length,
            hidden_device_count: K.length
        });
        else {
            var t;
            (null == (t = null == S ? void 0 : S(e)) || t) && E(e, {
                location: W,
                analyticsLocations: M
            })
        }
    }, [I, W, H.length, K.length, M, S, E]);

    function z(e) {
        let t, r, {
                label: i,
                value: l
            } = e,
            c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = i,
            p = (0, m.d)(i);
        null != p && (d = p.prefix, t = p.subName);
        let g = b.A.getCertifiedDeviceName(l, d);
        if (b.A.isCertified(l)) {
            let e = (0, s.qB)(V) ? n(961392) : n(848672);
            r = (0, o.jsx)("img", {
                src: e,
                alt: h.intl.string(h.t.smSKsj)
            })
        }
        return (0, o.jsxs)("div", {
            className: a()(k.Mg, {
                [k.S2]: c && null != t,
                [k.Sy]: !x
            }),
            children: [!x && (0, o.jsx)("div", {
                className: k.Kt,
                children: (0, o.jsx)(T, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: u.LU0.colors.ICON_MUTED
                })
            }), (0, o.jsx)(u.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: c ? "text-subtle" : "text-default",
                className: k.hV,
                children: g
            }), null != t && (0, o.jsx)(u.Text, {
                lineClamp: 2,
                variant: c ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: k.VT,
                children: t
            }), null != r && (0, o.jsx)("div", {
                className: k.pN,
                children: r
            })]
        })
    }
    return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(c.Te, (t = function(e) {
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
            label: P,
            value: null != C ? C : G,
            onChange: q,
            options: function() {
                let e = e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            value: t,
                            label: n
                        }
                    },
                    t = H.map(e);
                if (B || 0 === K.length) {
                    let n = K.map(e);
                    return t.concat(n)
                } {
                    let e = {
                        value: w,
                        label: h.intl.string(h.t.E99UMh),
                        preventCloseOnSelect: !0
                    };
                    return t.concat(e)
                }
            }(),
            isDisabled: !Q,
            popoutPosition: "bottom",
            renderOptionLabel: e => z(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return z(t)
            },
            optionClassName: k.OS
        }, A), i = i = {
            "data-migration-pending": !0
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n.push.apply(n, o)
            }
            return n
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t)), !Q && J]
    })
}