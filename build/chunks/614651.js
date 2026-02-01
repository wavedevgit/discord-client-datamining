/** chunk id: 614651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $p: () => Z,
    Ay: () => et,
    IE: () => K,
    Ys: () => Q,
    ac: () => J,
    y2: () => $
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(873298),
    c = n(582754),
    u = n(397927),
    d = n(817281),
    p = n(964486),
    h = n(775121),
    g = n(955572),
    f = n(775602),
    m = n(502229),
    b = n(47671),
    A = n(920603),
    y = n(915089),
    O = n(141468),
    j = n(963852),
    x = n(763754),
    _ = n(20851),
    v = n(195043),
    E = n(97469),
    C = n(287809),
    S = n(723702),
    I = n(544028),
    N = n(964404),
    T = n(253932),
    P = n(780964),
    w = n(70040),
    R = n(961154),
    D = n(790174),
    L = n(840065),
    M = n(531525),
    G = n(652215),
    k = n(381941),
    U = n(985018),
    V = n(944255),
    B = n(473169);

function H(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            H(e, t, n[t])
        })
    }
    return e
}

function Y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let K = {
        COZY: "cozy",
        COMPACT: "compact"
    },
    W = (0, y.Ld)(),
    z = (0, y.Ld)(),
    X = "1337",
    q = e => {
        let t = 0;
        return [(0, O.rh)(Y(F({}, (0, j.Ay)({
            channelId: X,
            content: U.intl.string(U.t.oZxkEq)
        })), {
            state: G.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(Y(F({}, (0, j.Ay)({
            channelId: X,
            content: (0, c.Mw)(e) ? U.intl.string(U.t["WGb/v7"]) : U.intl.string(U.t["62m4mz"])
        })), {
            state: G.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(Y(F({}, (0, j.Ay)({
            channelId: X,
            content: U.intl.string(U.t.a0Byo5)
        })), {
            state: G.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(Y(F({}, (0, j.Ay)({
            channelId: X,
            content: U.intl.string(U.t.bmwEWJ)
        })), {
            state: G.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(Y(F({}, (0, j.Ay)({
            channelId: X,
            content: U.intl.string(U.t["hK9QW/"])
        })), {
            state: G.cmJ.SENT,
            id: "".concat(t)
        }))]
    },
    J = () => (0, r.jsxs)("div", {
        className: V.cF,
        children: [(0, r.jsxs)("div", {
            className: V.ZT,
            children: [(0, r.jsxs)(u.Text, {
                variant: "text-md/medium",
                children: [" ", U.intl.string(U.t["0EzVst"])]
            }), (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: U.intl.string(U.t.PV3dGX)
            })]
        }), (0, r.jsx)(w.Q, {})]
    }),
    Q = () => U.intl.format(U.t.Jae48E, {
        onClick: () => {
            (0, L.openUserSettings)(P.X.SYNC_FORCED_COLORS, {
                section: G.nc_.ACCESSIBILITY
            })
        }
    }),
    Z = () => U.intl.format(U.t["5LEQdc"], {
        onAccessibilityClick: () => {
            (0, L.openUserSettings)(P.X.ACCESSIBILITY_PANEL, {
                section: G.nc_.ACCESSIBILITY
            })
        }
    }),
    $ = () => {
        let e = T.hH.useSetting(),
            t = T.hD.useSetting(),
            n = T.rs.useSetting(),
            {
                theme: i,
                messageGroupSpacing: o
            } = (0, a.cf)([I.A, f.A], () => ({
                theme: I.A.theme,
                messageGroupSpacing: f.A.messageGroupSpacing
            })),
            [d] = l.useState(() => q(G.NJ8.DARK)),
            [p] = l.useState(() => q(G.NJ8.LIGHT)),
            h = t && n,
            g = (0, c.Mw)(i) ? d : p;
        return (0, r.jsx)(u.M1G, {
            children: (0, r.jsx)(u.ZpM, {
                className: s()(V.VH, B.C2, e ? V.Me : void 0, "group-spacing-".concat(null != o ? o : e ? k.y5 : k.ES)),
                outline: !0,
                "aria-hidden": !0,
                children: g.map((t, n) => (0, r.jsx)(_.A, {
                    author: (0, x.p_)(t),
                    message: t,
                    compact: e,
                    isGroupStart: n % 2 == 0,
                    className: 0 === n ? V.Ck : void 0,
                    hideSimpleEmbedContent: h
                }, t.id))
            })
        })
    };
class ee extends l.Component {
    renderZoomSlider() {
        return S.isPlatformEmbedded ? (0, r.jsx)(u.Apm, {
            label: U.intl.string(U.t.i19n5L),
            description: U.intl.string(U.t.ip0uSf),
            helperText: U.intl.format(U.t.OMkSUo, {
                modKey: h.A.modKey
            }),
            initialValue: this.props.zoom,
            defaultValue: G.hH7.ZOOM_DEFAULT,
            markers: G.hH7.ZOOM_SCALES,
            stickToMarkers: !0,
            onValueChange: this.handleZoomChange,
            onValueRender: this.handleSliderRender,
            "aria-labelledby": W
        }) : null
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(u.Apm, {
            label: U.intl.string(U.t.qPOqoK),
            description: U.intl.string(U.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: G.hH7.FONT_SIZE_DEFAULT,
            markers: G.hH7.FONT_SIZES,
            stickToMarkers: !0,
            onValueChange: this.handleFontSizeChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText
        })
    }
    renderMessageGroupSpacingSlider() {
        let {
            messageDisplayCompact: e,
            messageGroupSpacing: t
        } = this.props;
        return (0, r.jsx)(u.Apm, {
            label: U.intl.string(U.t.Q6lKkg),
            description: U.intl.string(U.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? k.y5 : k.ES,
            markers: k.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": z
        })
    }
    renderPreview() {
        return (0, r.jsx)($, {})
    }
    renderTheme() {
        let {
            useForcedColors: e
        } = this.props;
        return e ? (0, r.jsx)(u.nVY, {
            label: U.intl.string(U.t.Ksh3ik),
            children: (0, r.jsx)(u.po8, {
                messageType: u.YCn.INFO,
                children: (0, m.D)() ? (0, r.jsx)(Q, {}) : U.intl.string(U.t.AUMSZP)
            })
        }) : (0, r.jsx)(u.nVY, {
            label: U.intl.string(U.t.Ksh3ik),
            children: (0, r.jsxs)("div", {
                children: [(0, r.jsx)(J, {}), (0, r.jsx)(w.I, {})]
            })
        })
    }
    handleSliderRender(e) {
        return "".concat(e.toFixed(0), "%")
    }
    handleSliderRenderPX(e) {
        return "".concat(e.toFixed(0), "px")
    }
    handleSliderValueText(e) {
        return U.intl.formatToPlainString(U.t["0hpvOV"], {
            value: e
        })
    }
    handleFontSizeChange(e) {
        (0, g.XS)(e)
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, g.AC)(e)
        }
    }
    handleZoomChange(e) {
        (0, g.Qp)(e)
    }
    render() {
        let {
            density: e
        } = this.props, t = (0, r.jsxs)(v.x, {
            setting: M.H.APPEARANCE_THEME,
            children: [this.renderPreview(), this.renderTheme()]
        }), n = (0, r.jsx)(v.x, {
            setting: M.H.APPEARANCE_ICON,
            children: (0, r.jsx)(R.y, {})
        }), l = [{
            name: U.intl.string(U.t["7iegX4"]),
            value: o.NS.COMPACT
        }, {
            name: U.intl.string(U.t.bBvAEH),
            value: o.NS.DEFAULT
        }, {
            name: U.intl.string(U.t["4cuYHx"]),
            value: o.NS.COZY
        }], i = (0, r.jsxs)(v.x, {
            setting: M.H.APPEARANCE_LIST_SPACING,
            children: [(0, r.jsx)(u.z6M, {
                label: U.intl.string(U.t["C/5V0A"]),
                description: U.intl.string(U.t.QLZhYk),
                options: l,
                onChange: e => this.handleUIDensityChange({
                    value: e
                }),
                value: e
            }), (0, r.jsx)(u.cGx, {
                className: V.yF
            })]
        }), s = (0, r.jsxs)(v.x, {
            setting: M.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
            children: [(0, r.jsxs)(u.nVY, {
                label: U.intl.string(U.t["2ed/sA"]),
                description: U.intl.string(U.t.u9N6Qh),
                children: [(0, r.jsx)(u.z6M, {
                    label: U.intl.string(U.t.nKRoPv),
                    description: U.intl.string(U.t.QntEEG),
                    options: [{
                        name: U.intl.string(U.t.Jqj4cZ),
                        value: K.COZY
                    }, {
                        name: U.intl.string(U.t["1JNcPS"]),
                        value: K.COMPACT
                    }],
                    onChange: e => this.handleMessageDisplayModeChange({
                        value: e
                    }),
                    value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY
                }), this.props.messageDisplayCompact && (0, r.jsx)(u.dOG, {
                    label: U.intl.string(U.t["//vhWi"]),
                    checked: !this.props.displayCompactAvatars,
                    onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
                }), this.renderMessageGroupSpacingSlider()]
            }), (0, r.jsx)(u.cGx, {
                className: V.yF
            })]
        }), a = (0, r.jsxs)(v.x, {
            setting: M.H.APPEARANCE_SCALING_SPACING,
            children: [(0, r.jsxs)(u.nVY, {
                label: U.intl.string(U.t["0Yh+ZX"]),
                children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
            }), (0, r.jsx)(u.cGx, {
                className: V.yF
            })]
        }), c = (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            className: V.fK,
            children: (0, r.jsx)(Z, {})
        });
        return (0, r.jsxs)(D.A, {
            title: U.intl.string(U.t["iHH+ky"]),
            children: [t, n, i, s, a, c]
        })
    }
    constructor(...e) {
        super(...e), H(this, "darkMessages", q(G.NJ8.DARK)), H(this, "lightMessages", q(G.NJ8.LIGHT)), H(this, "handleDisplayCompactAvatarsChanged", e => {
            d.Ay.updatedUnsyncedSettings({
                displayCompactAvatars: e
            })
        }), H(this, "handleDesktopRefreshEnabledChanged", e => {
            d.Ay.updatedUnsyncedSettings({
                disableVisualRefresh: !e
            })
        }), H(this, "handleMessageDisplayModeChange", e => {
            let {
                value: t
            } = e;
            T.hH.updateSetting(t === K.COMPACT), (0, g.AC)()
        }), H(this, "handleUIDensityChange", e => {
            let {
                value: t
            } = e;
            t !== o.NS.UNSET_UI_DENSITY && T.Xi.updateSetting(t)
        })
    }
}

function et() {
    let e = T.hH.useSetting(),
        t = T.hD.useSetting(),
        n = T.rs.useSetting(),
        l = T.eh.useSetting(),
        i = T.Xi.useSetting();
    (0, p.Ay)(() => {
        (0, A.v)()
    });
    let s = (0, E.qo)(),
        o = (0, a.cf)([I.A, N.Ay, f.A, C.default, b.A], () => {
            var e, t;
            return {
                theme: I.A.theme,
                useForcedColors: f.A.useForcedColors,
                useSystemTheme: N.Ay.useSystemTheme,
                fontSize: f.A.fontSize,
                zoom: f.A.zoom,
                messageGroupSpacing: f.A.messageGroupSpacing,
                displayCompactAvatars: N.Ay.displayCompactAvatars,
                isStaff: null != (e = null == (t = C.default.getCurrentUser()) ? void 0 : t.isStaff) && e,
                gradientPreset: b.A.gradientPreset
            }
        });
    return (0, r.jsx)(ee, F({
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: l,
        density: i,
        darkSidebar: s
    }, o))
}