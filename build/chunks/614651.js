/** Chunk was on 60449 **/
/** chunk id: 614651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $p: () => Z,
    Ay: () => et,
    IE: () => z,
    Ys: () => q,
    ac: () => X,
    y2: () => $
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(873298),
    c = n(582754),
    d = n(397927),
    u = n(817281),
    g = n(964486),
    h = n(775121),
    x = n(955572),
    A = n(775602),
    p = n(502229),
    m = n(47671),
    j = n(920603),
    O = n(915089),
    E = n(141468),
    b = n(963852),
    S = n(763754),
    v = n(20851),
    C = n(195043),
    f = n(97469),
    T = n(287809),
    N = n(723702),
    _ = n(544028),
    I = n(964404),
    y = n(253932),
    D = n(780964),
    G = n(70040),
    P = n(961154),
    R = n(790174),
    V = n(840065),
    L = n(531525),
    k = n(652215),
    M = n(381941),
    w = n(985018),
    U = n(944255),
    H = n(473169);

function B(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            B(e, t, n[t])
        })
    }
    return e
}

function F(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let z = {
        COZY: "cozy",
        COMPACT: "compact"
    },
    W = (0, O.Ld)(),
    K = (0, O.Ld)(),
    J = "1337",
    Q = e => {
        let t = 0;
        return [(0, E.rh)(F(Y({}, (0, b.Ay)({
            channelId: J,
            content: w.intl.string(w.t.oZxkEq)
        })), {
            state: k.cmJ.SENT,
            id: "".concat(t++)
        })), (0, E.rh)(F(Y({}, (0, b.Ay)({
            channelId: J,
            content: (0, c.Mw)(e) ? w.intl.string(w.t["WGb/v7"]) : w.intl.string(w.t["62m4mz"])
        })), {
            state: k.cmJ.SENT,
            id: "".concat(t++)
        })), (0, E.rh)(F(Y({}, (0, b.Ay)({
            channelId: J,
            content: w.intl.string(w.t.a0Byo5)
        })), {
            state: k.cmJ.SENT,
            id: "".concat(t++)
        })), (0, E.rh)(F(Y({}, (0, b.Ay)({
            channelId: J,
            content: w.intl.string(w.t.bmwEWJ)
        })), {
            state: k.cmJ.SENT,
            id: "".concat(t++)
        })), (0, E.rh)(F(Y({}, (0, b.Ay)({
            channelId: J,
            content: w.intl.string(w.t["hK9QW/"])
        })), {
            state: k.cmJ.SENT,
            id: "".concat(t)
        }))]
    },
    X = () => (0, i.jsxs)("div", {
        className: U.cF,
        children: [(0, i.jsxs)("div", {
            className: U.ZT,
            children: [(0, i.jsxs)(d.Text, {
                variant: "text-md/medium",
                children: [" ", w.intl.string(w.t["0EzVst"])]
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: w.intl.string(w.t.PV3dGX)
            })]
        }), (0, i.jsx)(G.Q, {})]
    }),
    q = () => w.intl.format(w.t.Jae48E, {
        onClick: () => {
            (0, V.openUserSettings)(D.X.SYNC_FORCED_COLORS, {
                section: k.nc_.ACCESSIBILITY
            })
        }
    }),
    Z = () => w.intl.format(w.t["5LEQdc"], {
        onAccessibilityClick: () => {
            (0, V.openUserSettings)(D.X.ACCESSIBILITY_PANEL, {
                section: k.nc_.ACCESSIBILITY
            })
        }
    }),
    $ = () => {
        let e = y.hH.useSetting(),
            t = y.hD.useSetting(),
            n = y.rs.useSetting(),
            {
                theme: l,
                messageGroupSpacing: o
            } = (0, a.cf)([_.A, A.A], () => ({
                theme: _.A.theme,
                messageGroupSpacing: A.A.messageGroupSpacing
            })),
            [u] = s.useState(() => Q(k.NJ8.DARK)),
            [g] = s.useState(() => Q(k.NJ8.LIGHT)),
            h = t && n,
            x = (0, c.Mw)(l) ? u : g;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: r()(U.VH, H.C2, e ? U.Me : void 0, "group-spacing-".concat(null != o ? o : e ? M.y5 : M.ES)),
                outline: !0,
                "aria-hidden": !0,
                children: x.map((t, n) => (0, i.jsx)(v.A, {
                    author: (0, S.p_)(t),
                    message: t,
                    compact: e,
                    isGroupStart: n % 2 == 0,
                    className: 0 === n ? U.Ck : void 0,
                    hideSimpleEmbedContent: h
                }, t.id))
            })
        })
    };
class ee extends s.Component {
    renderZoomSlider() {
        return N.isPlatformEmbedded ? (0, i.jsx)(d.Apm, {
            label: w.intl.string(w.t.i19n5L),
            description: w.intl.string(w.t.ip0uSf),
            helperText: w.intl.format(w.t.OMkSUo, {
                modKey: h.A.modKey
            }),
            initialValue: this.props.zoom,
            defaultValue: k.hH7.ZOOM_DEFAULT,
            markers: k.hH7.ZOOM_SCALES,
            stickToMarkers: !0,
            onValueChange: this.handleZoomChange,
            onValueRender: this.handleSliderRender,
            "aria-labelledby": W
        }) : null
    }
    renderFontScaleSlider() {
        return (0, i.jsx)(d.Apm, {
            label: w.intl.string(w.t.qPOqoK),
            description: w.intl.string(w.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: k.hH7.FONT_SIZE_DEFAULT,
            markers: k.hH7.FONT_SIZES,
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
        return (0, i.jsx)(d.Apm, {
            label: w.intl.string(w.t.Q6lKkg),
            description: w.intl.string(w.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? M.y5 : M.ES,
            markers: M.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": K
        })
    }
    renderPreview() {
        return (0, i.jsx)($, {})
    }
    renderTheme() {
        let {
            useForcedColors: e
        } = this.props;
        return e ? (0, i.jsx)(d.nVY, {
            label: w.intl.string(w.t.Ksh3ik),
            children: (0, i.jsx)(d.po8, {
                messageType: d.YCn.INFO,
                children: (0, p.D)() ? (0, i.jsx)(q, {}) : w.intl.string(w.t.AUMSZP)
            })
        }) : (0, i.jsx)(d.nVY, {
            label: w.intl.string(w.t.Ksh3ik),
            children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(X, {}), (0, i.jsx)(G.I, {})]
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
        return w.intl.formatToPlainString(w.t["0hpvOV"], {
            value: e
        })
    }
    handleFontSizeChange(e) {
        (0, x.XS)(e)
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, x.AC)(e)
        }
    }
    handleZoomChange(e) {
        (0, x.Qp)(e)
    }
    render() {
        let {
            density: e
        } = this.props, t = (0, i.jsxs)(C.x, {
            setting: L.H.APPEARANCE_THEME,
            children: [this.renderPreview(), this.renderTheme()]
        }), n = (0, i.jsx)(C.x, {
            setting: L.H.APPEARANCE_ICON,
            children: (0, i.jsx)(P.y, {})
        }), s = [{
            name: w.intl.string(w.t["7iegX4"]),
            value: o.NS.COMPACT
        }, {
            name: w.intl.string(w.t.bBvAEH),
            value: o.NS.DEFAULT
        }, {
            name: w.intl.string(w.t["4cuYHx"]),
            value: o.NS.COZY
        }], l = (0, i.jsxs)(C.x, {
            setting: L.H.APPEARANCE_LIST_SPACING,
            children: [(0, i.jsx)(d.z6M, {
                label: w.intl.string(w.t["C/5V0A"]),
                description: w.intl.string(w.t.QLZhYk),
                options: s,
                onChange: e => this.handleUIDensityChange({
                    value: e
                }),
                value: e
            }), (0, i.jsx)(d.cGx, {
                className: U.yF
            })]
        }), r = (0, i.jsxs)(C.x, {
            setting: L.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
            children: [(0, i.jsxs)(d.nVY, {
                label: w.intl.string(w.t["2ed/sA"]),
                description: w.intl.string(w.t.u9N6Qh),
                children: [(0, i.jsx)(d.z6M, {
                    label: w.intl.string(w.t.nKRoPv),
                    description: w.intl.string(w.t.QntEEG),
                    options: [{
                        name: w.intl.string(w.t.Jqj4cZ),
                        value: z.COZY
                    }, {
                        name: w.intl.string(w.t["1JNcPS"]),
                        value: z.COMPACT
                    }],
                    onChange: e => this.handleMessageDisplayModeChange({
                        value: e
                    }),
                    value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY
                }), this.props.messageDisplayCompact && (0, i.jsx)(d.dOG, {
                    label: w.intl.string(w.t["//vhWi"]),
                    checked: !this.props.displayCompactAvatars,
                    onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
                }), this.renderMessageGroupSpacingSlider()]
            }), (0, i.jsx)(d.cGx, {
                className: U.yF
            })]
        }), a = (0, i.jsxs)(C.x, {
            setting: L.H.APPEARANCE_SCALING_SPACING,
            children: [(0, i.jsxs)(d.nVY, {
                label: w.intl.string(w.t["0Yh+ZX"]),
                children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
            }), (0, i.jsx)(d.cGx, {
                className: U.yF
            })]
        }), c = (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            className: U.fK,
            children: (0, i.jsx)(Z, {})
        });
        return (0, i.jsxs)(R.A, {
            title: w.intl.string(w.t["iHH+ky"]),
            children: [t, n, l, r, a, c]
        })
    }
    constructor(...e) {
        super(...e), B(this, "darkMessages", Q(k.NJ8.DARK)), B(this, "lightMessages", Q(k.NJ8.LIGHT)), B(this, "handleDisplayCompactAvatarsChanged", e => {
            u.Ay.updatedUnsyncedSettings({
                displayCompactAvatars: e
            })
        }), B(this, "handleDesktopRefreshEnabledChanged", e => {
            u.Ay.updatedUnsyncedSettings({
                disableVisualRefresh: !e
            })
        }), B(this, "handleMessageDisplayModeChange", e => {
            let {
                value: t
            } = e;
            y.hH.updateSetting(t === z.COMPACT), (0, x.AC)()
        }), B(this, "handleUIDensityChange", e => {
            let {
                value: t
            } = e;
            t !== o.NS.UNSET_UI_DENSITY && y.Xi.updateSetting(t)
        })
    }
}

function et() {
    let e = y.hH.useSetting(),
        t = y.hD.useSetting(),
        n = y.rs.useSetting(),
        s = y.eh.useSetting(),
        l = y.Xi.useSetting();
    (0, g.Ay)(() => {
        (0, j.v)()
    });
    let r = (0, f.qo)(),
        o = (0, a.cf)([_.A, I.Ay, A.A, T.default, m.A], () => {
            var e, t;
            return {
                theme: _.A.theme,
                useForcedColors: A.A.useForcedColors,
                useSystemTheme: I.Ay.useSystemTheme,
                fontSize: A.A.fontSize,
                zoom: A.A.zoom,
                messageGroupSpacing: A.A.messageGroupSpacing,
                displayCompactAvatars: I.Ay.displayCompactAvatars,
                isStaff: null != (e = null == (t = T.default.getCurrentUser()) ? void 0 : t.isStaff) && e,
                gradientPreset: m.A.gradientPreset
            }
        });
    return (0, i.jsx)(ee, Y({
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: s,
        density: l,
        darkSidebar: r
    }, o))
}