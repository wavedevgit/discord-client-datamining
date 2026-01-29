/** Chunk was on 32502 **/
/** chunk id: 805577, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => en,
    YD: () => ei,
    iI: () => eA
}), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(311907),
    o = n(554146),
    c = n(397927),
    d = n(964486),
    u = n(100767),
    h = n(955572),
    g = n(775602),
    x = n(536199),
    p = n(502229),
    m = n(406360),
    A = n(688810),
    b = n(652525),
    j = n(915089),
    O = n(614738),
    E = n(379848),
    S = n(259065),
    f = n(141468),
    C = n(963852),
    v = n(763754),
    y = n(20851),
    T = n(652961),
    _ = n(195043),
    N = n(54570),
    I = n(8880),
    P = n(954571),
    R = n(975571),
    L = n(964404),
    G = n(253932),
    D = n(780964),
    k = n(397438),
    w = n(193658),
    V = n(790174),
    M = n(840065),
    U = n(355097),
    H = n(531525),
    B = n(652215),
    Y = n(823894),
    F = n(75804),
    z = n(985018),
    K = n(927961),
    W = n(630765),
    J = n(513653);

function Q(e) {
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
}

function Z(e, t) {
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
let X = (0, j.Ld)(),
    q = (0, j.Ld)(),
    $ = (0, j.Ld)(),
    ee = r().debounce(e => {
        (0, h.HU)(e)
    }, 250),
    et = r().debounce(e => {
        (0, N.zU)(e)
    }, 250);

function en(e) {
    x.z.useExperiment({
        location: "useAccessibilityItems"
    }, {
        autoTrackExposure: !0
    }).enabled;
    let t = (0, b.t)("UserSettingsAccessibility"),
        n = (0, O.y)("UserSettingsAccessibility"),
        l = (0, m.i)("UserSettingsAccessibility");
    return (0, i.jsx)(V.A, {
        title: z.intl.string(z.t.G0neg7),
        children: (0, i.jsxs)(c.BJc, {
            gap: 16,
            children: [(0, i.jsx)(ei, {}), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(er, {}), (0, i.jsx)(c.cGx, {})]
            }), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_LINK_DECORATIONS,
                children: [(0, i.jsx)(ea, {}), (0, i.jsx)(c.cGx, {})]
            }), t ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.x, {
                    setting: H.H.ACCESSIBILITY_CUSTOM_CURSOR,
                    children: (0, i.jsx)(eo, {})
                }), (0, i.jsx)(c.cGx, {})]
            }) : null, (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_ROLE_STYLE,
                children: [(0, i.jsx)(ed, {}), (0, i.jsx)(c.cGx, {})]
            }), l && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(ec, {}), (0, i.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                children: [(0, i.jsx)(eu, {}), (0, i.jsx)(c.cGx, {})]
            }), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_PROFILE_COLORS,
                children: [(0, i.jsx)(eh, {}), (0, i.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_CONTRAST,
                children: [(0, i.jsx)(eg, {}), (0, i.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION,
                children: [(0, i.jsx)(ex, {}), (0, i.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_MESSAGES,
                children: [(0, i.jsx)(em, {}), (0, i.jsx)(c.cGx, {
                    gap: 4
                })]
            }), n && (0, i.jsxs)(_.x, {
                setting: H.H.ACCESSIBILITY_SWITCH_ICON,
                children: [(0, i.jsx)(es, {}), (0, i.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, i.jsx)(ej, {}), (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: (0, i.jsx)("div", {
                    className: W.oq,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: z.intl.format(z.t.DHpTjT, {
                            onAppearanceClick() {
                                (0, M.openUserSettings)(D.X.APPEARANCE_PANEL, {
                                    section: B.nc_.APPEARANCE
                                })
                            }
                        })
                    })
                })
            })]
        })
    })
}

function ei() {
    let e = G.hH.useSetting(),
        [t] = l.useState(() => {
            let e = (0, f.rh)(Z(Q({}, (0, C.Ay)({
                channelId: "1337",
                content: z.intl.formatToPlainString(z.t.bB80LC, {
                    previewLink: "https://discord.com/accessibility"
                })
            })), {
                state: B.cmJ.SENT,
                id: "".concat(0)
            }));
            return e.colorString = "green", e
        });
    return (0, i.jsx)(c.M1G, {
        children: (0, i.jsxs)(c.ZpM, {
            className: W.VH,
            "aria-hidden": !0,
            children: [(0, i.jsxs)("div", {
                className: W.yl,
                children: [(0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: z.intl.string(z.t["2RHHgz"])
                }), (0, i.jsx)("div", {
                    className: W.hD,
                    children: [B.clD.ONLINE, B.clD.DND, B.clD.IDLE].map(e => (0, i.jsx)(c.JsQ, {
                        "aria-label": z.intl.string(z.t.lqaIxI),
                        src: J,
                        size: c._3J.SIZE_32,
                        status: e
                    }, e))
                })]
            }), (0, i.jsx)("div", {
                className: W.QS,
                children: (0, i.jsx)(y.A, {
                    compact: e,
                    author: Z(Q({}, (0, v.p_)(t)), {
                        colorString: "#DD80F4"
                    }),
                    message: t
                })
            })]
        })
    })
}

function el() {
    let e = (0, a.bG)([g.A], () => g.A.isHighContrastModeEnabled);

    function t(e) {
        (0, h.uh)(e ? g._.HIGH : g._.DEFAULT)
    }
    return (0, i.jsx)(E.Ay, {
        contentTypes: [o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: n => {
            let {
                visibleContent: l
            } = n;
            return (0, i.jsx)(c.dOG, {
                label: z.intl.string(z.t.aZlePv),
                description: z.intl.string(z.t["v2qF8+"]),
                badge: l === o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t
            })
        }
    })
}

function es() {
    let e = (0, a.bG)([g.A], () => g.A.isSwitchIconsEnabled);
    return (0, i.jsx)(c.dOG, {
        label: z.intl.string(z.t["S3z+pV"]),
        description: z.intl.string(z.t["3QuI9+"]),
        checked: e,
        onChange: e => (0, h.Gm)(e),
        hasIcon: !0
    })
}

function er() {
    let {
        saturation: e,
        desaturateUserColors: t
    } = (0, a.cf)([g.A], () => ({
        saturation: g.A.saturation,
        desaturateUserColors: g.A.desaturateUserColors
    }));
    return (0, i.jsxs)(c.BJc, {
        gap: 16,
        children: [(0, i.jsx)(c.Apm, {
            label: z.intl.string(z.t["5PWWCY"]),
            description: z.intl.string(z.t["0PbE/H"]),
            "aria-labelledby": X,
            "aria-describedby": q,
            markers: B.hH7.SATURATION_INCREMENTS,
            equidistant: !0,
            stickToMarkers: !0,
            maxValue: 1,
            minValue: 0,
            initialValue: e,
            onValueChange: ee,
            onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
        }), (0, i.jsx)(_.x, {
            setting: H.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
            children: (0, i.jsx)(c.dOG, {
                label: z.intl.string(z.t.bQCodD),
                description: z.intl.string(z.t.nlAOEW),
                checked: t,
                onChange: h.YV
            })
        })]
    })
}

function ea() {
    let e = (0, a.bG)([g.A], () => g.A.alwaysShowLinkDecorations);
    return (0, i.jsx)(c.dOG, {
        label: z.intl.string(z.t.OLZFB8),
        description: z.intl.string(z.t["72i5GI"]),
        checked: e,
        onChange: function() {
            (0, h.kI)(!e)
        }
    })
}

function eo() {
    let e = (0, a.bG)([g.A], () => {
        var e;
        return null == (e = g.A.enableCustomCursor) || e
    });
    return (0, i.jsx)(c.dOG, {
        label: z.intl.string(z.t["+Isihb"]),
        description: z.intl.string(z.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, h.ts)(!e)
    })
}

function ec() {
    let e = (0, a.bG)([L.Ay], () => L.Ay.hdrDynamicRange);
    return (0, i.jsx)(_.x, {
        setting: H.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, i.jsx)(c.z6M, {
            label: z.intl.string(z.t.nemtgW),
            badge: "beta",
            description: z.intl.string(z.t["O/Gjvn"]),
            options: [{
                name: z.intl.string(z.t.D5Fma9),
                desc: z.intl.string(z.t.Qj75ck),
                value: "no-limit"
            }, {
                name: z.intl.string(z.t.ldcGIH),
                desc: z.intl.string(z.t["+V/bDk"]),
                value: "standard"
            }],
            onChange: function(e) {
                (0, h.FU)(e)
            },
            value: e
        })
    })
}

function ed() {
    let e = (0, a.bG)([g.A], () => g.A.roleStyle);
    return (0, i.jsx)(c.z6M, {
        label: z.intl.string(z.t.uSOPWm),
        description: z.intl.string(z.t["86hjzQ"]),
        options: [{
            name: z.intl.string(z.t.YEOEi6),
            value: "username"
        }, {
            name: z.intl.string(z.t.mQaro3),
            value: "dot"
        }, {
            name: z.intl.string(z.t.Ji2EVJ),
            value: "hidden"
        }],
        onChange: function(e) {
            (0, h.IX)(e)
        },
        value: e
    })
}

function eu() {
    let e = (0, a.bG)([g.A], () => g.A.displayNameStylesEnabled),
        {
            analyticsLocations: t
        } = (0, A.Ay)();
    return (0, i.jsx)(c.dOG, {
        label: z.intl.string(K.default["2gFUEw"]),
        description: z.intl.format(K.default.L8U56h, {
            onClickOpenModal() {
                (0, S.L)({
                    analyticsLocations: t
                })
            }
        }),
        checked: e,
        onChange: function(e) {
            (0, h.Dm)(e), P.default.track(B.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
                enabled: e
            })
        }
    })
}

function eh() {
    let e = (0, a.bG)([g.A], () => g.A.syncProfileThemeWithUserTheme);
    return (0, i.jsx)(c.nVY, {
        label: z.intl.string(z.t.BT8Bmp),
        children: (0, i.jsx)(_.x, {
            setting: H.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, i.jsx)(c.dOG, {
                label: z.intl.string(z.t["sSY+mD"]),
                description: z.intl.format(z.t.u6UjrL, {
                    onThemeClick() {
                        (0, M.openUserSettings)(D.X.APPEARANCE_PANEL, {
                            section: B.nc_.APPEARANCE
                        })
                    }
                }),
                checked: e,
                onChange: h.M1
            })
        })
    })
}

function eg() {
    let [e] = (0, a.yK)([g.A], () => [g.A.syncForcedColors, g.A.systemForcedColors]), [t, n] = l.useState(e);
    l.useEffect(() => {
        n(e)
    }, [e]);
    let s = l.useRef(null);
    l.useEffect(() => {
        null != s.current && (clearTimeout(s.current), s.current = null), t !== e && (s.current = setTimeout(() => (0, h.D3)(t), 150))
    }, [t, e]);
    let r = z.intl.format(z.t.GwEVE2, {
        learnMoreLink: R.A.getArticleURL(B.MVz.FORCED_COLORS)
    });
    return (0, i.jsxs)(c.nVY, {
        label: z.intl.string(z.t["TYyfO/"]),
        children: [(0, i.jsx)(_.x, {
            setting: H.H.ACCESSIBILITY_HIGH_CONTRAST,
            children: (0, i.jsx)(el, {})
        }), (0, p.D)() ? (0, i.jsx)(_.x, {
            setting: H.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(c.dOG, {
                label: z.intl.string(z.t.cguiec),
                description: r,
                checked: t,
                onChange: n
            })
        }) : null]
    })
}

function ex() {
    let e = G.kt.useSetting(),
        t = G.Sf.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: r,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: d
        } = (0, a.cf)([g.A, k.A], () => ({
            systemPrefersReducedMotion: g.A.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.A.rawPrefersReducedMotion,
            useReducedMotion: g.A.useReducedMotion,
            gifAutoPlayOverrideReason: k.A.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: k.A.getAppliedOverrideReasonKey("animateEmoji")
        })),
        u = l.useCallback(e => {
            (0, h.qz)(e ? "auto" : r)
        }, [r]),
        x = l.useCallback(e => {
            (0, h.qz)(e ? "reduce" : "no-preference")
        }, []);
    return (0, i.jsx)("div", {
        title: z.intl.string(z.t.e3TR1b),
        className: W.VN,
        children: (0, i.jsxs)(c.nVY, {
            label: z.intl.string(z.t.e3TR1b),
            description: z.intl.format(z.t["2l9U2j"], {
                helpdeskArticle: R.A.getArticleURL(B.MVz.REDUCED_MOTION)
            }),
            children: [(0, i.jsx)(c.dOG, {
                label: z.intl.string(z.t["+Dx+HD"]),
                checked: "auto" === s,
                onChange: u
            }), (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(c.dOG, {
                    label: z.intl.string(z.t.b3XBzg),
                    checked: n,
                    onChange: x
                })
            }), (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(c.dOG, {
                    label: z.intl.string(z.t.Iayoh5),
                    description: null != o ? (0, T.A)(o) : void 0,
                    checked: e,
                    onChange: G.kt.updateSetting
                })
            }), (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(c.dOG, {
                    label: z.intl.string(z.t.iIaOlc),
                    description: null != d ? (0, T.A)(d) : void 0,
                    checked: t,
                    onChange: G.Sf.updateSetting
                })
            }), (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ep, {})
            })]
        })
    })
}

function ep() {
    let e = G.S0.useSetting(),
        t = (0, a.bG)([k.A], () => k.A.getAppliedOverrideReasonKey("animateStickers")),
        n = l.useCallback(e => {
            G.S0.updateSetting(e)
        }, []);
    return (0, i.jsx)(c.z6M, {
        label: z.intl.string(z.t["6NtAuJ"]),
        description: null != t ? (0, T.A)(t) : z.intl.string(z.t.GRa6U7),
        options: [{
            name: z.intl.string(z.t["Xp+X2U"]),
            value: Y.BJ.ALWAYS_ANIMATE
        }, {
            name: z.intl.string(z.t.IlLT7e),
            desc: z.intl.string(z.t.bIW9Tl),
            value: Y.BJ.ANIMATE_ON_INTERACTION
        }, {
            name: z.intl.string(z.t.IGu8x3),
            value: Y.BJ.NEVER_ANIMATE
        }],
        onChange: e => n(e),
        value: e
    })
}

function em() {
    let e = (0, a.bG)([g.A], () => g.A.isSubmitButtonEnabled),
        t = G.D_.useSetting(),
        n = l.useRef(null);
    return (0, w.A)(n, U.Yu.LEGACY_CHAT_INPUT), (0, i.jsx)("div", {
        ref: n,
        children: (0, i.jsxs)(c.nVY, {
            label: z.intl.string(z.t.onqU6o),
            children: [(0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                children: (0, i.jsx)(c.dOG, {
                    label: z.intl.string(z.t["3Fztn5"]),
                    checked: e,
                    onChange: h.Xt
                })
            }), (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                children: (0, i.jsx)(c.dOG, {
                    label: z.intl.string(z.t.TZ2hZH),
                    description: z.intl.string(z.t.Q7wgHc),
                    checked: t,
                    onChange: e => {
                        P.default.track(B.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                            enabled: e,
                            location: {
                                section: B.JJy.SETTINGS_ACCESSIBILITY
                            }
                        }), G.D_.updateSetting(e)
                    }
                })
            })]
        })
    })
}

function eA() {
    let e = (0, a.bG)([I.A], () => I.A.speechRate);
    return (0, i.jsxs)(c.BJc, {
        gap: 16,
        children: [(0, i.jsx)(c.Apm, {
            label: z.intl.string(z.t.lsW5Ev),
            markers: F.P,
            initialValue: e,
            defaultValue: 1,
            stickToMarkers: !0,
            onValueChange: et,
            onValueRender: e => "x".concat(e.toFixed(2)),
            onMarkerRender: e => 0 === e ? (0, i.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: z.intl.string(z.t["493lwX"])
            }) : 10 === e ? (0, i.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: z.intl.string(z.t.ZSZEdS)
            }) : 1 === e ? (0, i.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: "x1.0"
            }) : e % 1 == 0 ? "" : void 0,
            "aria-labelledby": $
        }), (0, i.jsx)(eb, {})]
    })
}

function eb() {
    let [e, t] = l.useState(!1);
    return (0, d.l0)(() => (0, N.pr)()), (0, i.jsx)(c.Button, {
        text: z.intl.string(z.t.SKNnqq),
        icon: e ? c.E$n : c.udU,
        size: "sm",
        onClick: () => {
            if (e) {
                (0, N.pr)(), t(!1);
                return
            }(0, N.AU)(z.intl.string(z.t.PKaNJL), !0, void 0, () => t(!0), () => t(!1)), t(!0)
        }
    })
}

function ej() {
    return u.$j ? (0, i.jsx)(_.x, {
        setting: H.H.ACCESSIBILITY_TEXT_TO_SPEECH,
        children: (0, i.jsx)(c.nVY, {
            label: z.intl.string(z.t.VpSKeO),
            children: (0, i.jsx)(_.x, {
                setting: H.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, i.jsx)(eA, {})
            })
        })
    }) : null
}