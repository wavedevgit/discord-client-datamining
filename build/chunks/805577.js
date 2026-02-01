/** chunk id: 805577, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => en,
    YD: () => er,
    iI: () => eb
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(397927),
    u = n(964486),
    d = n(100767),
    p = n(955572),
    h = n(775602),
    g = n(536199),
    f = n(502229),
    m = n(406360),
    b = n(688810),
    A = n(652525),
    y = n(915089),
    O = n(614738),
    j = n(379848),
    x = n(259065),
    _ = n(141468),
    v = n(963852),
    E = n(763754),
    C = n(20851),
    S = n(652961),
    I = n(195043),
    N = n(54570),
    T = n(8880),
    P = n(954571),
    w = n(975571),
    R = n(964404),
    D = n(253932),
    L = n(780964),
    M = n(397438),
    G = n(193658),
    k = n(790174),
    U = n(840065),
    V = n(355097),
    B = n(531525),
    H = n(652215),
    F = n(823894),
    Y = n(75804),
    K = n(985018),
    W = n(927961),
    z = n(630765),
    X = n(513653);

function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function J(e, t) {
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
let Q = (0, y.Ld)(),
    Z = (0, y.Ld)(),
    $ = (0, y.Ld)(),
    ee = s().debounce(e => {
        (0, p.HU)(e)
    }, 250),
    et = s().debounce(e => {
        (0, N.zU)(e)
    }, 250);

function en(e) {
    g.z.useExperiment({
        location: "useAccessibilityItems"
    }, {
        autoTrackExposure: !0
    }).enabled;
    let t = (0, A.t)("UserSettingsAccessibility"),
        n = (0, O.y)("UserSettingsAccessibility"),
        l = (0, m.i)("UserSettingsAccessibility");
    return (0, r.jsx)(k.A, {
        title: K.intl.string(K.t.G0neg7),
        children: (0, r.jsxs)(c.BJc, {
            gap: 16,
            children: [(0, r.jsx)(er, {}), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(es, {}), (0, r.jsx)(c.cGx, {})]
            }), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_LINK_DECORATIONS,
                children: [(0, r.jsx)(ea, {}), (0, r.jsx)(c.cGx, {})]
            }), t ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(I.x, {
                    setting: B.H.ACCESSIBILITY_CUSTOM_CURSOR,
                    children: (0, r.jsx)(eo, {})
                }), (0, r.jsx)(c.cGx, {})]
            }) : null, (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_ROLE_STYLE,
                children: [(0, r.jsx)(eu, {}), (0, r.jsx)(c.cGx, {})]
            }), l && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.cGx, {})]
            }), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_PROFILE_COLORS,
                children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_CONTRAST,
                children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_REDUCED_MOTION,
                children: [(0, r.jsx)(eg, {}), (0, r.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_MESSAGES,
                children: [(0, r.jsx)(em, {}), (0, r.jsx)(c.cGx, {
                    gap: 4
                })]
            }), n && (0, r.jsxs)(I.x, {
                setting: B.H.ACCESSIBILITY_SWITCH_ICON,
                children: [(0, r.jsx)(ei, {}), (0, r.jsx)(c.cGx, {
                    gap: 4
                })]
            }), (0, r.jsx)(ey, {}), (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: (0, r.jsx)("div", {
                    className: z.oq,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: K.intl.format(K.t.DHpTjT, {
                            onAppearanceClick() {
                                (0, U.openUserSettings)(L.X.APPEARANCE_PANEL, {
                                    section: H.nc_.APPEARANCE
                                })
                            }
                        })
                    })
                })
            })]
        })
    })
}

function er() {
    let e = D.hH.useSetting(),
        [t] = l.useState(() => {
            let e = (0, _.rh)(J(q({}, (0, v.Ay)({
                channelId: "1337",
                content: K.intl.formatToPlainString(K.t.bB80LC, {
                    previewLink: "https://discord.com/accessibility"
                })
            })), {
                state: H.cmJ.SENT,
                id: "".concat(0)
            }));
            return e.colorString = "green", e
        });
    return (0, r.jsx)(c.M1G, {
        children: (0, r.jsxs)(c.ZpM, {
            className: z.VH,
            "aria-hidden": !0,
            children: [(0, r.jsxs)("div", {
                className: z.yl,
                children: [(0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: K.intl.string(K.t["2RHHgz"])
                }), (0, r.jsx)("div", {
                    className: z.hD,
                    children: [H.clD.ONLINE, H.clD.DND, H.clD.IDLE].map(e => (0, r.jsx)(c.JsQ, {
                        "aria-label": K.intl.string(K.t.lqaIxI),
                        src: X,
                        size: c._3J.SIZE_32,
                        status: e
                    }, e))
                })]
            }), (0, r.jsx)("div", {
                className: z.QS,
                children: (0, r.jsx)(C.A, {
                    compact: e,
                    author: J(q({}, (0, E.p_)(t)), {
                        colorString: "#DD80F4"
                    }),
                    message: t
                })
            })]
        })
    })
}

function el() {
    let e = (0, a.bG)([h.A], () => h.A.isHighContrastModeEnabled);

    function t(e) {
        (0, p.uh)(e ? h._.HIGH : h._.DEFAULT)
    }
    return (0, r.jsx)(j.Ay, {
        contentTypes: [o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: n => {
            let {
                visibleContent: l
            } = n;
            return (0, r.jsx)(c.dOG, {
                label: K.intl.string(K.t.aZlePv),
                description: K.intl.string(K.t["v2qF8+"]),
                badge: l === o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t
            })
        }
    })
}

function ei() {
    let e = (0, a.bG)([h.A], () => h.A.isSwitchIconsEnabled);
    return (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t["S3z+pV"]),
        description: K.intl.string(K.t["3QuI9+"]),
        checked: e,
        onChange: e => (0, p.Gm)(e),
        hasIcon: !0
    })
}

function es() {
    let {
        saturation: e,
        desaturateUserColors: t
    } = (0, a.cf)([h.A], () => ({
        saturation: h.A.saturation,
        desaturateUserColors: h.A.desaturateUserColors
    }));
    return (0, r.jsxs)(c.BJc, {
        gap: 16,
        children: [(0, r.jsx)(c.Apm, {
            label: K.intl.string(K.t["5PWWCY"]),
            description: K.intl.string(K.t["0PbE/H"]),
            "aria-labelledby": Q,
            "aria-describedby": Z,
            markers: H.hH7.SATURATION_INCREMENTS,
            equidistant: !0,
            stickToMarkers: !0,
            maxValue: 1,
            minValue: 0,
            initialValue: e,
            onValueChange: ee,
            onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
        }), (0, r.jsx)(I.x, {
            setting: B.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
            children: (0, r.jsx)(c.dOG, {
                label: K.intl.string(K.t.bQCodD),
                description: K.intl.string(K.t.nlAOEW),
                checked: t,
                onChange: p.YV
            })
        })]
    })
}

function ea() {
    let e = (0, a.bG)([h.A], () => h.A.alwaysShowLinkDecorations);
    return (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t.OLZFB8),
        description: K.intl.string(K.t["72i5GI"]),
        checked: e,
        onChange: function() {
            (0, p.kI)(!e)
        }
    })
}

function eo() {
    let e = (0, a.bG)([h.A], () => {
        var e;
        return null == (e = h.A.enableCustomCursor) || e
    });
    return (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t["+Isihb"]),
        description: K.intl.string(K.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, p.ts)(!e)
    })
}

function ec() {
    let e = (0, a.bG)([R.Ay], () => R.Ay.hdrDynamicRange);
    return (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, r.jsx)(c.z6M, {
            label: K.intl.string(K.t.nemtgW),
            badge: "beta",
            description: K.intl.string(K.t["O/Gjvn"]),
            options: [{
                name: K.intl.string(K.t.D5Fma9),
                desc: K.intl.string(K.t.Qj75ck),
                value: "no-limit"
            }, {
                name: K.intl.string(K.t.ldcGIH),
                desc: K.intl.string(K.t["+V/bDk"]),
                value: "standard"
            }],
            onChange: function(e) {
                (0, p.FU)(e)
            },
            value: e
        })
    })
}

function eu() {
    let e = (0, a.bG)([h.A], () => h.A.roleStyle);
    return (0, r.jsx)(c.z6M, {
        label: K.intl.string(K.t.uSOPWm),
        description: K.intl.string(K.t["86hjzQ"]),
        options: [{
            name: K.intl.string(K.t.YEOEi6),
            value: "username"
        }, {
            name: K.intl.string(K.t.mQaro3),
            value: "dot"
        }, {
            name: K.intl.string(K.t.Ji2EVJ),
            value: "hidden"
        }],
        onChange: function(e) {
            (0, p.IX)(e)
        },
        value: e
    })
}

function ed() {
    let e = (0, a.bG)([h.A], () => h.A.displayNameStylesEnabled),
        {
            analyticsLocations: t
        } = (0, b.Ay)();
    return (0, r.jsx)(c.dOG, {
        label: K.intl.string(W.default["2gFUEw"]),
        description: K.intl.format(W.default.L8U56h, {
            onClickOpenModal() {
                (0, x.L)({
                    analyticsLocations: t
                })
            }
        }),
        checked: e,
        onChange: function(e) {
            (0, p.Dm)(e), P.default.track(H.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
                enabled: e
            })
        }
    })
}

function ep() {
    let e = (0, a.bG)([h.A], () => h.A.syncProfileThemeWithUserTheme);
    return (0, r.jsx)(c.nVY, {
        label: K.intl.string(K.t.BT8Bmp),
        children: (0, r.jsx)(I.x, {
            setting: B.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, r.jsx)(c.dOG, {
                label: K.intl.string(K.t["sSY+mD"]),
                description: K.intl.format(K.t.u6UjrL, {
                    onThemeClick() {
                        (0, U.openUserSettings)(L.X.APPEARANCE_PANEL, {
                            section: H.nc_.APPEARANCE
                        })
                    }
                }),
                checked: e,
                onChange: p.M1
            })
        })
    })
}

function eh() {
    let [e] = (0, a.yK)([h.A], () => [h.A.syncForcedColors, h.A.systemForcedColors]), [t, n] = l.useState(e);
    l.useEffect(() => {
        n(e)
    }, [e]);
    let i = l.useRef(null);
    l.useEffect(() => {
        null != i.current && (clearTimeout(i.current), i.current = null), t !== e && (i.current = setTimeout(() => (0, p.D3)(t), 150))
    }, [t, e]);
    let s = K.intl.format(K.t.GwEVE2, {
        learnMoreLink: w.A.getArticleURL(H.MVz.FORCED_COLORS)
    });
    return (0, r.jsxs)(c.nVY, {
        label: K.intl.string(K.t["TYyfO/"]),
        children: [(0, r.jsx)(I.x, {
            setting: B.H.ACCESSIBILITY_HIGH_CONTRAST,
            children: (0, r.jsx)(el, {})
        }), (0, f.D)() ? (0, r.jsx)(I.x, {
            setting: B.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(c.dOG, {
                label: K.intl.string(K.t.cguiec),
                description: s,
                checked: t,
                onChange: n
            })
        }) : null]
    })
}

function eg() {
    let e = D.kt.useSetting(),
        t = D.Sf.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: i,
            systemPrefersReducedMotion: s,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, a.cf)([h.A, M.A], () => ({
            systemPrefersReducedMotion: h.A.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.A.rawPrefersReducedMotion,
            useReducedMotion: h.A.useReducedMotion,
            gifAutoPlayOverrideReason: M.A.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: M.A.getAppliedOverrideReasonKey("animateEmoji")
        })),
        d = l.useCallback(e => {
            (0, p.qz)(e ? "auto" : s)
        }, [s]),
        g = l.useCallback(e => {
            (0, p.qz)(e ? "reduce" : "no-preference")
        }, []);
    return (0, r.jsx)("div", {
        title: K.intl.string(K.t.e3TR1b),
        className: z.VN,
        children: (0, r.jsxs)(c.nVY, {
            label: K.intl.string(K.t.e3TR1b),
            description: K.intl.format(K.t["2l9U2j"], {
                helpdeskArticle: w.A.getArticleURL(H.MVz.REDUCED_MOTION)
            }),
            children: [(0, r.jsx)(c.dOG, {
                label: K.intl.string(K.t["+Dx+HD"]),
                checked: "auto" === i,
                onChange: d
            }), (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(c.dOG, {
                    label: K.intl.string(K.t.b3XBzg),
                    checked: n,
                    onChange: g
                })
            }), (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(c.dOG, {
                    label: K.intl.string(K.t.Iayoh5),
                    description: null != o ? (0, S.A)(o) : void 0,
                    checked: e,
                    onChange: D.kt.updateSetting
                })
            }), (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(c.dOG, {
                    label: K.intl.string(K.t.iIaOlc),
                    description: null != u ? (0, S.A)(u) : void 0,
                    checked: t,
                    onChange: D.Sf.updateSetting
                })
            }), (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(ef, {})
            })]
        })
    })
}

function ef() {
    let e = D.S0.useSetting(),
        t = (0, a.bG)([M.A], () => M.A.getAppliedOverrideReasonKey("animateStickers")),
        n = l.useCallback(e => {
            D.S0.updateSetting(e)
        }, []);
    return (0, r.jsx)(c.z6M, {
        label: K.intl.string(K.t["6NtAuJ"]),
        description: null != t ? (0, S.A)(t) : K.intl.string(K.t.GRa6U7),
        options: [{
            name: K.intl.string(K.t["Xp+X2U"]),
            value: F.BJ.ALWAYS_ANIMATE
        }, {
            name: K.intl.string(K.t.IlLT7e),
            desc: K.intl.string(K.t.bIW9Tl),
            value: F.BJ.ANIMATE_ON_INTERACTION
        }, {
            name: K.intl.string(K.t.IGu8x3),
            value: F.BJ.NEVER_ANIMATE
        }],
        onChange: e => n(e),
        value: e
    })
}

function em() {
    let e = (0, a.bG)([h.A], () => h.A.isSubmitButtonEnabled),
        t = D.D_.useSetting(),
        n = l.useRef(null);
    return (0, G.A)(n, V.Yu.LEGACY_CHAT_INPUT), (0, r.jsx)("div", {
        ref: n,
        children: (0, r.jsxs)(c.nVY, {
            label: K.intl.string(K.t.onqU6o),
            children: [(0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                children: (0, r.jsx)(c.dOG, {
                    label: K.intl.string(K.t["3Fztn5"]),
                    checked: e,
                    onChange: p.Xt
                })
            }), (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                children: (0, r.jsx)(c.dOG, {
                    label: K.intl.string(K.t.TZ2hZH),
                    description: K.intl.string(K.t.Q7wgHc),
                    checked: t,
                    onChange: e => {
                        P.default.track(H.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                            enabled: e,
                            location: {
                                section: H.JJy.SETTINGS_ACCESSIBILITY
                            }
                        }), D.D_.updateSetting(e)
                    }
                })
            })]
        })
    })
}

function eb() {
    let e = (0, a.bG)([T.A], () => T.A.speechRate);
    return (0, r.jsxs)(c.BJc, {
        gap: 16,
        children: [(0, r.jsx)(c.Apm, {
            label: K.intl.string(K.t.lsW5Ev),
            markers: Y.P,
            initialValue: e,
            defaultValue: 1,
            stickToMarkers: !0,
            onValueChange: et,
            onValueRender: e => "x".concat(e.toFixed(2)),
            onMarkerRender: e => 0 === e ? (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: K.intl.string(K.t["493lwX"])
            }) : 10 === e ? (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: K.intl.string(K.t.ZSZEdS)
            }) : 1 === e ? (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: "x1.0"
            }) : e % 1 == 0 ? "" : void 0,
            "aria-labelledby": $
        }), (0, r.jsx)(eA, {})]
    })
}

function eA() {
    let [e, t] = l.useState(!1);
    return (0, u.l0)(() => (0, N.pr)()), (0, r.jsx)(c.Button, {
        text: K.intl.string(K.t.SKNnqq),
        icon: e ? c.E$n : c.udU,
        size: "sm",
        onClick: () => {
            if (e) {
                (0, N.pr)(), t(!1);
                return
            }(0, N.AU)(K.intl.string(K.t.PKaNJL), !0, void 0, () => t(!0), () => t(!1)), t(!0)
        }
    })
}

function ey() {
    return d.$j ? (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_TEXT_TO_SPEECH,
        children: (0, r.jsx)(c.nVY, {
            label: K.intl.string(K.t.VpSKeO),
            children: (0, r.jsx)(I.x, {
                setting: B.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsx)(eb, {})
            })
        })
    }) : null
}