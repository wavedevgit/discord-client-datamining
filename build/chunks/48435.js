/** Chunk was on web.js **/
/** chunk id: 48435, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(827343),
    s = n(954571),
    l = n(74848),
    c = n(652215),
    u = n(731854),
    d = n(985018);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function m(e) {
    return ({
        [u.oh.AUDIO_INPUT]: {
            setDevice: o.A.setInputDevice,
            getLabel: () => d.intl.string(d.t.ElbIXN),
            getLocation: e => "".concat(e, ".useInputDeviceMenuItems")
        },
        [u.oh.AUDIO_OUTPUT]: {
            setDevice: o.A.setOutputDevice,
            getLabel: () => d.intl.string(d.t["6Ww0iH"]),
            getLocation: e => "".concat(e, ".useOutputDeviceMenuItems")
        },
        [u.oh.VIDEO_INPUT]: {
            setDevice: o.A.setVideoDevice,
            getLabel: () => d.intl.string(d.t.F122Gz),
            getLocation: e => "".concat(e, ".useVideoDeviceMenuItems")
        }
    })[e]
}

function g(e) {
    var t;
    let {
        deviceType: n,
        analyticsLocations: o,
        asSubmenu: u = !1,
        onDeviceSelect: f,
        showAllDevices: _ = !1,
        selectedDeviceId: g,
        menuGroupOverrideProps: E,
        menuItemOverrideProps: y,
        computeMenuRadioItemOverrideProps: b
    } = e, {
        setDevice: O,
        getLabel: v,
        getLocation: A
    } = m(n), [I, S] = i.useState(_), T = A(o[o.length - 1]), [C, N] = (0, l.tR)(n, {
        location: T
    }), w = I ? C.concat(N) : C, {
        id: R,
        name: P
    } = (0, l.x5)(n), D = null != g ? g : R, L = i.useMemo(() => C.concat(N).find(e => {
        let {
            id: t
        } = e;
        return t === D
    }), [C, N, D]), x = w.map(e => {
        let t, {
                id: i,
                disabled: s,
                name: c
            } = e,
            u = c,
            d = (0, l.d)(c);
        return null != d && (u = d.prefix, t = d.subName), (0, r.jsx)(a.iDA, p({
            id: "".concat(n, "-").concat(i),
            group: "".concat(n, "-devices"),
            disabled: s,
            label: u,
            subtext: t,
            checked: i === D,
            action: () => {
                var e;
                (null == (e = null == f ? void 0 : f(i)) || e) && O(i, {
                    analyticsLocations: o
                })
            }
        }, null == b ? void 0 : b(i)), "".concat(n, "-").concat(i))
    }), M = (0, r.jsx)(a.Drp, {
        id: "SHOW_MORE",
        label: d.intl.string(d.t.E99UMh),
        dontCloseOnAction: !0,
        action: () => {
            S(!0), s.default.track(c.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                device_type: n,
                location: T,
                shown_device_count: C.length,
                hidden_device_count: N.length,
                location_stack: o
            })
        }
    }), j = !I && (null == N ? void 0 : N.length) > 0;
    return u ? (0, r.jsxs)(a.Drp, h(p({
        id: "".concat(n, "-devices"),
        label: v(),
        subtext: null != (t = null == L ? void 0 : L.name) ? t : P
    }, y), {
        children: [x, j && M]
    })) : (0, r.jsxs)(a.rXV, h(p({
        label: v()
    }, E), {
        children: [x, j && M]
    }))
}