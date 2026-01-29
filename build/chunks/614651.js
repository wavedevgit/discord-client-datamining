/** Chunk was on 32502 **/
/** chunk id: 614651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $p: () => q,
    Ay: () => et,
    IE: () => z,
    Ys: () => X,
    ac: () => Z,
    y2: () => $
}), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(873298),
    c = n(582754),
    d = n(397927),
    u = n(817281),
    h = n(964486),
    g = n(775121),
    x = n(955572),
    p = n(775602),
    m = n(502229),
    A = n(47671),
    b = n(920603),
    j = n(915089),
    O = n(141468),
    E = n(963852),
    S = n(763754),
    f = n(20851),
    C = n(195043),
    v = n(97469),
    y = n(287809),
    T = n(723702),
    _ = n(544028),
    N = n(964404),
    I = n(253932),
    P = n(780964),
    R = n(70040),
    L = n(961154),
    G = n(790174),
    D = n(840065),
    k = n(531525),
    w = n(652215),
    V = n(381941),
    M = n(985018),
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
    K = (0, j.Ld)(),
    W = (0, j.Ld)(),
    J = "1337",
    Q = e => {
        let t = 0;
        return [(0, O.rh)(F(Y({}, (0, E.Ay)({
            channelId: J,
            content: M.intl.string(M.t.oZxkEq)
        })), {
            state: w.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(F(Y({}, (0, E.Ay)({
            channelId: J,
            content: (0, c.Mw)(e) ? M.intl.string(M.t["WGb/v7"]) : M.intl.string(M.t["62m4mz"])
        })), {
            state: w.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(F(Y({}, (0, E.Ay)({
            channelId: J,
            content: M.intl.string(M.t.a0Byo5)
        })), {
            state: w.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(F(Y({}, (0, E.Ay)({
            channelId: J,
            content: M.intl.string(M.t.bmwEWJ)
        })), {
            state: w.cmJ.SENT,
            id: "".concat(t++)
        })), (0, O.rh)(F(Y({}, (0, E.Ay)({
            channelId: J,
            content: M.intl.string(M.t["hK9QW/"])
        })), {
            state: w.cmJ.SENT,
            id: "".concat(t)
        }))]
    },
    Z = () => (0, i.jsxs)("div", {
        className: U.cF,
        children: [(0, i.jsxs)("div", {
            className: U.ZT,
            children: [(0, i.jsxs)(d.Text, {
                variant: "text-md/medium",
                children: [" ", M.intl.string(M.t["0EzVst"])]
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: M.intl.string(M.t.PV3dGX)
            })]
        }), (0, i.jsx)(R.Q, {})]
    }),
    X = () => M.intl.format(M.t.Jae48E, {
        onClick: () => {
            (0, D.openUserSettings)(P.X.SYNC_FORCED_COLORS, {
                section: w.nc_.ACCESSIBILITY
            })
        }
    }),
    q = () => M.intl.format(M.t["5LEQdc"], {
        onAccessibilityClick: () => {
            (0, D.openUserSettings)(P.X.ACCESSIBILITY_PANEL, {
                section: w.nc_.ACCESSIBILITY
            })
        }
    }),
    $ = () => {
        let e = I.hH.useSetting(),
            t = I.hD.useSetting(),
            n = I.rs.useSetting(),
            {
                theme: s,
                messageGroupSpacing: o
            } = (0, a.cf)([_.A, p.A], () => ({
                theme: _.A.theme,
                messageGroupSpacing: p.A.messageGroupSpacing
            })),
            [u] = l.useState(() => Q(w.NJ8.DARK)),
            [h] = l.useState(() => Q(w.NJ8.LIGHT)),
            g = t && n,
            x = (0, c.Mw)(s) ? u : h;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: r()(U.VH, H.C2, e ? U.Me : void 0, "group-spacing-".concat(null != o ? o : e ? V.y5 : V.ES)),
                outline: !0,
                "aria-hidden": !0,
                children: x.map((t, n) => (0, i.jsx)(f.A, {
                    author: (0, S.p_)(t),
                    message: t,
                    compact: e,
                    isGroupStart: n % 2 == 0,
                    className: 0 === n ? U.Ck : void 0,
                    hideSimpleEmbedContent: g
                }, t.id))
            })
        })
    };
class ee extends l.Component {
    renderZoomSlider() {
        return T.isPlatformEmbedded ? (0, i.jsx)(d.Apm, {
            label: M.intl.string(M.t.i19n5L),
            description: M.intl.string(M.t.ip0uSf),
            helperText: M.intl.format(M.t.OMkSUo, {
                modKey: g.A.modKey
            }),
            initialValue: this.props.zoom,
            defaultValue: w.hH7.ZOOM_DEFAULT,
            markers: w.hH7.ZOOM_SCALES,
            stickToMarkers: !0,
            onValueChange: this.handleZoomChange,
            onValueRender: this.handleSliderRender,
            "aria-labelledby": K
        }) : null
    }
    renderFontScaleSlider() {
        return (0, i.jsx)(d.Apm, {
            label: M.intl.string(M.t.qPOqoK),
            description: M.intl.string(M.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: w.hH7.FONT_SIZE_DEFAULT,
            markers: w.hH7.FONT_SIZES,
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
            label: M.intl.string(M.t.Q6lKkg),
            description: M.intl.string(M.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? V.y5 : V.ES,
            markers: V.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": W
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
            label: M.intl.string(M.t.Ksh3ik),
            children: (0, i.jsx)(d.po8, {
                messageType: d.YCn.INFO,
                children: (0, m.D)() ? (0, i.jsx)(X, {}) : M.intl.string(M.t.AUMSZP)
            })
        }) : (0, i.jsx)(d.nVY, {
            label: M.intl.string(M.t.Ksh3ik),
            children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(Z, {}), (0, i.jsx)(R.I, {})]
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
        return M.intl.formatToPlainString(M.t["0hpvOV"], {
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
            setting: k.H.APPEARANCE_THEME,
            children: [this.renderPreview(), this.renderTheme()]
        }), n = (0, i.jsx)(C.x, {
            setting: k.H.APPEARANCE_ICON,
            children: (0, i.jsx)(L.y, {})
        }), l = [{
            name: M.intl.string(M.t["7iegX4"]),
            value: o.NS.COMPACT
        }, {
            name: M.intl.string(M.t.bBvAEH),
            value: o.NS.DEFAULT
        }, {
            name: M.intl.string(M.t["4cuYHx"]),
            value: o.NS.COZY
        }], s = (0, i.jsxs)(C.x, {
            setting: k.H.APPEARANCE_LIST_SPACING,
            children: [(0, i.jsx)(d.z6M, {
                label: M.intl.string(M.t["C/5V0A"]),
                description: M.intl.string(M.t.QLZhYk),
                options: l,
                onChange: e => this.handleUIDensityChange({
                    value: e
                }),
                value: e
            }), (0, i.jsx)(d.cGx, {
                className: U.yF
            })]
        }), r = (0, i.jsxs)(C.x, {
            setting: k.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
            children: [(0, i.jsxs)(d.nVY, {
                label: M.intl.string(M.t["2ed/sA"]),
                description: M.intl.string(M.t.u9N6Qh),
                children: [(0, i.jsx)(d.z6M, {
                    label: M.intl.string(M.t.nKRoPv),
                    description: M.intl.string(M.t.QntEEG),
                    options: [{
                        name: M.intl.string(M.t.Jqj4cZ),
                        value: z.COZY
                    }, {
                        name: M.intl.string(M.t["1JNcPS"]),
                        value: z.COMPACT
                    }],
                    onChange: e => this.handleMessageDisplayModeChange({
                        value: e
                    }),
                    value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY
                }), this.props.messageDisplayCompact && (0, i.jsx)(d.dOG, {
                    label: M.intl.string(M.t["//vhWi"]),
                    checked: !this.props.displayCompactAvatars,
                    onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
                }), this.renderMessageGroupSpacingSlider()]
            }), (0, i.jsx)(d.cGx, {
                className: U.yF
            })]
        }), a = (0, i.jsxs)(C.x, {
            setting: k.H.APPEARANCE_SCALING_SPACING,
            children: [(0, i.jsxs)(d.nVY, {
                label: M.intl.string(M.t["0Yh+ZX"]),
                children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
            }), (0, i.jsx)(d.cGx, {
                className: U.yF
            })]
        }), c = (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            className: U.fK,
            children: (0, i.jsx)(q, {})
        });
        return (0, i.jsxs)(G.A, {
            title: M.intl.string(M.t["iHH+ky"]),
            children: [t, n, s, r, a, c]
        })
    }
    constructor(...e) {
        super(...e), B(this, "darkMessages", Q(w.NJ8.DARK)), B(this, "lightMessages", Q(w.NJ8.LIGHT)), B(this, "handleDisplayCompactAvatarsChanged", e => {
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
            I.hH.updateSetting(t === z.COMPACT), (0, x.AC)()
        }), B(this, "handleUIDensityChange", e => {
            let {
                value: t
            } = e;
            t !== o.NS.UNSET_UI_DENSITY && I.Xi.updateSetting(t)
        })
    }
}

function et() {
    let e = I.hH.useSetting(),
        t = I.hD.useSetting(),
        n = I.rs.useSetting(),
        l = I.eh.useSetting(),
        s = I.Xi.useSetting();
    (0, h.Ay)(() => {
        (0, b.v)()
    });
    let r = (0, v.qo)(),
        o = (0, a.cf)([_.A, N.Ay, p.A, y.default, A.A], () => {
            var e, t;
            return {
                theme: _.A.theme,
                useForcedColors: p.A.useForcedColors,
                useSystemTheme: N.Ay.useSystemTheme,
                fontSize: p.A.fontSize,
                zoom: p.A.zoom,
                messageGroupSpacing: p.A.messageGroupSpacing,
                displayCompactAvatars: N.Ay.displayCompactAvatars,
                isStaff: null != (e = null == (t = y.default.getCurrentUser()) ? void 0 : t.isStaff) && e,
                gradientPreset: A.A.gradientPreset
            }
        });
    return (0, i.jsx)(ee, Y({
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: l,
        density: s,
        darkSidebar: r
    }, o))
}