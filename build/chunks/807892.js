/** Chunk was on web.js **/
/** chunk id: 807892, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(97260),
    u = n(117178),
    d = n(773669),
    f = n(801264),
    p = n(430452),
    _ = n(532624),
    h = n(723702),
    m = n(734066),
    g = n(274372),
    E = n(372684),
    y = n(915618),
    b = n(572164),
    O = n(399925),
    v = n(696016),
    A = n(652215),
    I = n(753070),
    S = n(985018),
    T = n(203194);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function P() {
    let e = (0, b.XT)(),
        t = (0, b.Et)(),
        n = (0, h.isWindows)(),
        {
            remindersEnabled: a,
            clipsLength: C,
            clipsQuality: w
        } = (0, o.cf)([g.A], () => g.A.getSettings()),
        P = (0, o.bG)([g.A], () => g.A.getHardwareClassification()),
        D = (0, o.bG)([_.Ay], () => _.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0)),
        x = (0, o.bG)([_.Ay], () => _.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, !0)),
        L = (0, y.A)(p.A),
        {
            showClipsHeaderEntrypoint: j
        } = m.L_.useExperiment({
            location: "clips_recording_settings"
        }, {
            autoTrackExposure: !1
        }),
        M = (0, m.BW)();
    s()(null != D, "Save clip keybind unset"), s()(null != x, "Save screenshot keybind unset");
    let k = (0, o.bG)([d.default], () => d.default.locale),
        U = i.useMemo(() => [{
            id: "30sec",
            value: v.LX.SECONDS_30,
            label: S.intl.formatToPlainString(S.t["bTFv/3"], {
                count: 30
            })
        }, {
            id: "1min",
            value: v.LX.MINUTES_1,
            label: S.intl.formatToPlainString(S.t.ICo9Nk, {
                count: 1
            })
        }, {
            id: "2min",
            value: v.LX.MINUTES_2,
            label: S.intl.formatToPlainString(S.t.ICo9Nk, {
                count: 2
            })
        }], [k]),
        G = i.useMemo(() => [{
            id: "480p",
            value: I.on.RESOLUTION_480,
            label: S.intl.formatToPlainString(S.t.TEOC0I, {
                resolution: I.on.RESOLUTION_480
            })
        }, {
            id: "720p",
            value: I.on.RESOLUTION_720,
            label: S.intl.formatToPlainString(S.t.TEOC0I, {
                resolution: I.on.RESOLUTION_720
            })
        }, {
            id: "1080p",
            value: I.on.RESOLUTION_1080,
            label: S.intl.formatToPlainString(S.t.TEOC0I, {
                resolution: I.on.RESOLUTION_1080
            })
        }, {
            id: "1440p",
            value: I.on.RESOLUTION_1440,
            label: S.intl.formatToPlainString(S.t.TEOC0I, {
                resolution: I.on.RESOLUTION_1440
            })
        }, {
            id: "source",
            value: I.on.RESOLUTION_SOURCE,
            label: S.intl.string(S.t.XjXqzh)
        }], [k]),
        V = i.useMemo(() => [{
            id: "15fps",
            value: I.kn.FPS_15,
            label: S.intl.formatToPlainString(S.t.Qb44XH, {
                fps: I.kn.FPS_15
            })
        }, {
            id: "30fps",
            value: I.kn.FPS_30,
            label: S.intl.formatToPlainString(S.t.Qb44XH, {
                fps: I.kn.FPS_30
            })
        }, {
            id: "60fps",
            value: I.kn.FPS_60,
            label: S.intl.formatToPlainString(S.t.Qb44XH, {
                fps: I.kn.FPS_60
            })
        }], [k]),
        F = i.useCallback(e => {
            c.A.setKeybind(R(N({}, D), {
                shortcut: e
            }))
        }, [D]),
        B = i.useCallback(e => {
            c.A.setKeybind(R(N({}, x), {
                shortcut: e
            }))
        }, [x]);
    return (0, r.jsxs)(l.nVY, {
        children: [(0, r.jsx)(f.A, {
            children: S.intl.string(S.t["Z+MfqT"])
        }), P === E.k9.BELOW_MINIMUM ? (0, r.jsx)(f.A, {
            look: f.k.WARNING,
            children: S.intl.string(S.t.SIxrIF)
        }) : null, (0, r.jsx)(l.dOG, {
            label: S.intl.string(S.t.h8rgrK),
            description: S.intl.string(S.t["4Qw3NO"]),
            checked: t,
            onChange: e => O.yO({
                clipsEnabled: e,
                trackAnalytics: !0
            })
        }), n && L && (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(l.dOG, {
                label: S.intl.string(S.t.yXvykv),
                description: S.intl.string(S.t.YP3ujk),
                checked: e,
                onChange: e => O.fd({
                    enabled: e,
                    trackAnalytics: !0
                })
            })
        }), j && (0, r.jsx)(l.dOG, {
            label: S.intl.string(S.t["3zwNf6"]),
            description: S.intl.string(S.t.m4Cjj9),
            checked: a,
            onChange: e => O.Mt(e)
        }), (0, r.jsx)(l.l6P, {
            onSelectionChange: O.h$,
            label: S.intl.string(S.t.OgfUio),
            description: S.intl.string(S.t.H7j4tY),
            value: C,
            options: U,
            selectionMode: "single",
            fullWidth: !0
        }), (0, r.jsx)(l.l6P, {
            onSelectionChange: e => {
                O.GS({
                    resolution: e,
                    frameRate: w.frameRate
                })
            },
            label: S.intl.string(S.t.aFudZJ),
            description: S.intl.string(S.t.nIrkW5),
            value: w.resolution,
            options: G,
            selectionMode: "single",
            fullWidth: !0
        }), (0, r.jsx)(l.l6P, {
            onSelectionChange: e => {
                O.GS({
                    resolution: w.resolution,
                    frameRate: e
                })
            },
            label: S.intl.string(S.t["2wScL1"]),
            description: S.intl.string(S.t["Rf9+fy"]),
            value: w.frameRate,
            options: V,
            selectionMode: "single",
            fullWidth: !0
        }), (0, r.jsx)(l.D0$, {
            label: S.intl.string(S.t.pf54EU),
            description: S.intl.string(S.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, r.jsx)("div", {
                className: T.g,
                children: (0, r.jsx)(u.A, {
                    defaultValue: D.shortcut,
                    onChange: F
                })
            })
        }), M && (0, r.jsx)(l.D0$, {
            label: S.intl.string(S.t["0U/hj7"]),
            description: S.intl.string(S.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, r.jsx)("div", {
                className: T.g,
                children: (0, r.jsx)(u.A, {
                    defaultValue: x.shortcut,
                    onChange: B
                })
            })
        })]
    })
}