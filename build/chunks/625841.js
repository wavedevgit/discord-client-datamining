/** Chunk was on 38660 **/
/** chunk id: 625841, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => f
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(843282),
    c = n(582754),
    d = n(397927),
    u = n(827343),
    g = n(688810),
    h = n(544028),
    x = n(825468),
    A = n(347481),
    p = n(430452),
    m = n(954571),
    j = n(74848),
    O = n(652215),
    b = n(731854),
    E = n(985018),
    S = n(534393);
let v = "SHOW_MORE";

function f(e) {
    var t, l;
    let {
        deviceType: f,
        location: C,
        showAllDevices: T = !1,
        selectedDeviceId: y,
        onSelectDevice: I,
        hideDeviceTypeIcon: N = !1,
        label: _
    } = e, D = function(e, t) {
        if (null == e) return {};
        var n, i, s, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, i, s = {},
                    l = Object.getOwnPropertyNames(e);
                for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s
            }(e, t), Object.getOwnPropertySymbols)
            for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }(e, ["deviceType", "location", "showAllDevices", "selectedDeviceId", "onSelectDevice", "hideDeviceTypeIcon", "label"]), {
        setDevice: P,
        Icon: G,
        getCanSetDevice: R,
        getWarningMessage: V,
        getLocation: L
    } = {
        [b.oh.AUDIO_INPUT]: {
            setDevice: u.A.setInputDevice,
            Icon: d.cNw,
            getCanSetDevice: e => e.supports(b.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () => E.intl.format(E.t["1iK6UW"], {
                onDownloadClick: () => (0, x._)("Help Text Input Devices")
            }),
            getLocation: e => "".concat(e, ".SingleSelectInputDevices")
        },
        [b.oh.AUDIO_OUTPUT]: {
            setDevice: u.A.setOutputDevice,
            Icon: d.LoC,
            getCanSetDevice: e => e.supports(b.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () => E.intl.format(E.t.Ow0dbF, {
                onDownloadClick: () => (0, x._)("Help Text Output Devices")
            }),
            getLocation: e => "".concat(e, ".SingleSelectOutputDevices")
        },
        [b.oh.VIDEO_INPUT]: {
            setDevice: u.A.setVideoDevice,
            Icon: d.xpe,
            getCanSetDevice: e => e.isVideoAvailable(),
            getWarningMessage: () => E.intl.format(E.t["1iK6UW"], {
                onDownloadClick: () => (0, x._)("Help Text Video Devices")
            }),
            getLocation: e => "".concat(e, ".SingleSelectVideoDevices")
        }
    } [f], {
        analyticsLocations: k
    } = (0, g.Ay)(), M = (0, a.bG)([h.A], () => h.A.theme), [w, U] = s.useState(T), H = L(C), [B, Y] = (0, j.tR)(f, {
        location: H
    }), {
        id: F
    } = (0, j.x5)(f), z = (0, a.bG)([p.A], () => R(p.A)), W = (0, i.jsx)(d.po8, {
        messageType: d.YCn.WARNING,
        children: V()
    }), K = s.useCallback(e => {
        if (e === v) U(!0), m.default.track(O.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
            device_type: f,
            location: H,
            location_stack: k,
            shown_device_count: B.length,
            hidden_device_count: Y.length
        });
        else {
            var t;
            (null == (t = null == I ? void 0 : I(e)) || t) && P(e, {
                location: H,
                analyticsLocations: k
            })
        }
    }, [f, H, B.length, Y.length, k, I, P]);

    function J(e) {
        let t, s, {
                label: l,
                value: a
            } = e,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            u = l,
            g = (0, j.d)(l);
        null != g && (u = g.prefix, t = g.subName);
        let h = A.A.getCertifiedDeviceName(a, u);
        if (A.A.isCertified(a)) {
            let e = (0, c.qB)(M) ? n(961392) : n(848672);
            s = (0, i.jsx)("img", {
                src: e,
                alt: E.intl.string(E.t.smSKsj)
            })
        }
        return (0, i.jsxs)("div", {
            className: r()(S.Mg, {
                [S.S2]: o && null != t,
                [S.Sy]: !N
            }),
            children: [!N && (0, i.jsx)("div", {
                className: S.Kt,
                children: (0, i.jsx)(G, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.LU0.colors.ICON_MUTED
                })
            }), (0, i.jsx)(d.Text, {
                lineClamp: 2,
                variant: "text-md/medium",
                color: o ? "text-subtle" : "text-default",
                className: S.hV,
                children: h
            }), null != t && (0, i.jsx)(d.Text, {
                lineClamp: 2,
                variant: o ? "text-xs/medium" : "text-md/medium",
                color: "text-muted",
                className: S.VT,
                children: t
            }), null != s && (0, i.jsx)("div", {
                className: S.pN,
                children: s
            })]
        })
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.Te, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                })
            }
            return e
        }({
            label: _,
            value: null != y ? y : F,
            onChange: K,
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
                    t = B.map(e);
                if (w || 0 === Y.length) {
                    let n = Y.map(e);
                    return t.concat(n)
                } {
                    let e = {
                        value: v,
                        label: E.intl.string(E.t.E99UMh),
                        preventCloseOnSelect: !0
                    };
                    return t.concat(e)
                }
            }(),
            isDisabled: !z,
            popoutPosition: "bottom",
            renderOptionLabel: e => J(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return J(t)
            },
            optionClassName: S.OS
        }, D), l = l = {
            "data-migration-pending": !0
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
            }
            return n
        })(Object(l)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t)), !z && W]
    })
}