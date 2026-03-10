/** chunk id: 805577 params = (module,exports,require) **/
n.d(t, {
    Ay: () => ee,
    YD: () => et,
    iI: () => eA
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(964486),
    u = n(100767),
    _ = n(955572),
    g = n(775602),
    m = n(536199),
    A = n(502229),
    h = n(406360),
    p = n(688810),
    x = n(652525),
    E = n(915089),
    T = n(614738),
    S = n(379848),
    C = n(259065),
    f = n(141468),
    I = n(963852),
    b = n(763754),
    N = n(20851),
    v = n(652961),
    j = n(195043),
    O = n(54570),
    R = n(8880),
    y = n(954571),
    P = n(975571),
    L = n(964404),
    D = n(253932),
    G = n(780964),
    M = n(397438),
    U = n(193658),
    k = n(790174),
    V = n(840065),
    w = n(355097),
    H = n(531525),
    B = n(652215),
    F = n(823894),
    Y = n(75804),
    z = n(985018),
    X = n(927961),
    W = n(630765),
    K = n(513653);
let Z = (0, E.Ld)(),
    q = (0, E.Ld)(),
    J = (0, E.Ld)(),
    Q = a().debounce(e => {
        (0, _.HU)(e)
    }, 250),
    $ = a().debounce(e => {
        (0, O.zU)(e)
    }, 250);

function ee(e) {
    m.z.useExperiment({
        location: "useAccessibilityItems"
    }, {
        autoTrackExposure: !0
    }).enabled;
    let t = (0, x.t)("UserSettingsAccessibility"),
        n = (0, T.y)("UserSettingsAccessibility"),
        s = (0, h.i)("UserSettingsAccessibility");
    return (0, i.jsx)(k.A, {
        title: z.intl.string(z.t.G0neg7),
        children: (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [(0, i.jsx)(et, {}), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(es, {}), (0, i.jsx)(d.cGx, {})]
            }), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_LINK_DECORATIONS,
                children: [(0, i.jsx)(el, {}), (0, i.jsx)(d.cGx, {})]
            }), t ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.x, {
                    setting: H.H.ACCESSIBILITY_CUSTOM_CURSOR,
                    children: (0, i.jsx)(ea, {})
                }), (0, i.jsx)(d.cGx, {})]
            }) : null, (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_ROLE_STYLE,
                children: [(0, i.jsx)(eo, {}), (0, i.jsx)(d.cGx, {})]
            }), s && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(er, {}), (0, i.jsx)(d.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                children: [(0, i.jsx)(ed, {}), (0, i.jsx)(d.cGx, {})]
            }), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_PROFILE_COLORS,
                children: [(0, i.jsx)(ec, {}), (0, i.jsx)(d.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_CONTRAST,
                children: [(0, i.jsx)(eu, {}), (0, i.jsx)(d.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION,
                children: [(0, i.jsx)(e_, {}), (0, i.jsx)(d.cGx, {
                    gap: 4
                })]
            }), (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_MESSAGES,
                children: [(0, i.jsx)(em, {}), (0, i.jsx)(d.cGx, {
                    gap: 4
                })]
            }), n && (0, i.jsxs)(j.x, {
                setting: H.H.ACCESSIBILITY_SWITCH_ICON,
                children: [(0, i.jsx)(ei, {}), (0, i.jsx)(d.cGx, {
                    gap: 4
                })]
            }), (0, i.jsx)(ep, {}), (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: (0, i.jsx)("div", {
                    className: W.oq,
                    children: (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: z.intl.format(z.t.DHpTjT, {
                            onAppearanceClick() {
                                (0, V.openUserSettings)(G.X.APPEARANCE_PANEL, {
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

function et() {
    let e = D.hH.useSetting(),
        [t] = s.useState(() => {
            let e = (0, f.rh)({
                ...(0, I.Ay)({
                    channelId: "1337",
                    content: z.intl.formatToPlainString(z.t.bB80LC, {
                        previewLink: "https://discord.com/accessibility"
                    })
                }),
                state: B.cmJ.SENT,
                id: "0"
            });
            return e.colorString = "green", e
        });
    return (0, i.jsx)(d.M1G, {
        children: (0, i.jsxs)(d.ZpM, {
            className: W.VH,
            "aria-hidden": !0,
            children: [(0, i.jsxs)("div", {
                className: W.yl,
                children: [(0, i.jsx)(d.Button, {
                    variant: "primary",
                    size: "sm",
                    text: z.intl.string(z.t["2RHHgz"])
                }), (0, i.jsx)("div", {
                    className: W.hD,
                    children: [B.clD.ONLINE, B.clD.DND, B.clD.IDLE].map(e => (0, i.jsx)(d.JsQ, {
                        "aria-label": z.intl.string(z.t.lqaIxI),
                        src: K,
                        size: d._3J.SIZE_32,
                        status: e
                    }, e))
                })]
            }), (0, i.jsx)("div", {
                className: W.QS,
                children: (0, i.jsx)(N.A, {
                    compact: e,
                    author: {
                        ...(0, b.p_)(t),
                        colorString: "#DD80F4"
                    },
                    message: t
                })
            })]
        })
    })
}

function en() {
    let e = (0, r.bG)([g.A], () => g.A.isHighContrastModeEnabled);

    function t(e) {
        (0, _.uh)(e ? g._.HIGH : g._.DEFAULT)
    }
    return (0, i.jsx)(S.Ay, {
        contentTypes: [o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: n => {
            let {
                visibleContent: s
            } = n;
            return (0, i.jsx)(d.dOG, {
                label: z.intl.string(z.t.aZlePv),
                description: z.intl.string(z.t["v2qF8+"]),
                badge: s === o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t
            })
        }
    })
}

function ei() {
    let e = (0, r.bG)([g.A], () => g.A.isSwitchIconsEnabled);
    return (0, i.jsx)(d.dOG, {
        label: z.intl.string(z.t["S3z+pV"]),
        description: z.intl.string(z.t["3QuI9+"]),
        checked: e,
        onChange: e => (0, _.Gm)(e),
        hasIcon: !0
    })
}

function es() {
    let {
        saturation: e,
        desaturateUserColors: t
    } = (0, r.cf)([g.A], () => ({
        saturation: g.A.saturation,
        desaturateUserColors: g.A.desaturateUserColors
    }));
    return (0, i.jsxs)(d.BJc, {
        gap: 16,
        children: [(0, i.jsx)(d.Apm, {
            label: z.intl.string(z.t["5PWWCY"]),
            description: z.intl.string(z.t["0PbE/H"]),
            "aria-labelledby": Z,
            "aria-describedby": q,
            markers: B.hH7.SATURATION_INCREMENTS,
            equidistant: !0,
            stickToMarkers: !0,
            maxValue: 1,
            minValue: 0,
            initialValue: e,
            onValueChange: Q,
            onMarkerRender: e => 100 * e % 2 == 0 ? `${100*e}%` : void 0
        }), (0, i.jsx)(j.x, {
            setting: H.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
            children: (0, i.jsx)(d.dOG, {
                label: z.intl.string(z.t.bQCodD),
                description: z.intl.string(z.t.nlAOEW),
                checked: t,
                onChange: _.YV
            })
        })]
    })
}

function el() {
    let e = (0, r.bG)([g.A], () => g.A.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.dOG, {
        label: z.intl.string(z.t.OLZFB8),
        description: z.intl.string(z.t["72i5GI"]),
        checked: e,
        onChange: function() {
            (0, _.kI)(!e)
        }
    })
}

function ea() {
    let e = (0, r.bG)([g.A], () => g.A.enableCustomCursor ?? !0);
    return (0, i.jsx)(d.dOG, {
        label: z.intl.string(z.t["+Isihb"]),
        description: z.intl.string(z.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, _.ts)(!e)
    })
}

function er() {
    let e = (0, r.bG)([L.Ay], () => L.Ay.hdrDynamicRange);
    return (0, i.jsx)(j.x, {
        setting: H.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, i.jsx)(d.z6M, {
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
                (0, _.FU)(e)
            },
            value: e
        })
    })
}

function eo() {
    let e = (0, r.bG)([g.A], () => g.A.roleStyle);
    return (0, i.jsx)(d.z6M, {
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
            (0, _.IX)(e)
        },
        value: e
    })
}

function ed() {
    let e = (0, r.bG)([g.A], () => g.A.displayNameStylesEnabled),
        {
            analyticsLocations: t
        } = (0, p.Ay)();
    return (0, i.jsx)(d.dOG, {
        label: z.intl.string(X.default["2gFUEw"]),
        description: z.intl.format(X.default.L8U56h, {
            onClickOpenModal() {
                (0, C.L)({
                    analyticsLocations: t
                })
            }
        }),
        checked: e,
        onChange: function(e) {
            (0, _.Dm)(e), y.default.track(B.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
                enabled: e
            })
        }
    })
}

function ec() {
    let e = (0, r.bG)([g.A], () => g.A.syncProfileThemeWithUserTheme);
    return (0, i.jsx)(d.nVY, {
        label: z.intl.string(z.t.BT8Bmp),
        children: (0, i.jsx)(j.x, {
            setting: H.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, i.jsx)(d.dOG, {
                label: z.intl.string(z.t["sSY+mD"]),
                description: z.intl.format(z.t.u6UjrL, {
                    onThemeClick() {
                        (0, V.openUserSettings)(G.X.APPEARANCE_PANEL, {
                            section: B.nc_.APPEARANCE
                        })
                    }
                }),
                checked: e,
                onChange: _.M1
            })
        })
    })
}

function eu() {
    let [e] = (0, r.yK)([g.A], () => [g.A.syncForcedColors, g.A.systemForcedColors]), [t, n] = s.useState(e);
    s.useEffect(() => {
        n(e)
    }, [e]);
    let l = s.useRef(null);
    s.useEffect(() => {
        null != l.current && (clearTimeout(l.current), l.current = null), t !== e && (l.current = setTimeout(() => (0, _.D3)(t), 150))
    }, [t, e]);
    let a = z.intl.format(z.t.GwEVE2, {
        learnMoreLink: P.A.getArticleURL(B.MVz.FORCED_COLORS)
    });
    return (0, i.jsxs)(d.nVY, {
        label: z.intl.string(z.t["TYyfO/"]),
        children: [(0, i.jsx)(j.x, {
            setting: H.H.ACCESSIBILITY_HIGH_CONTRAST,
            children: (0, i.jsx)(en, {})
        }), (0, A.D)() ? (0, i.jsx)(j.x, {
            setting: H.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.dOG, {
                label: z.intl.string(z.t.cguiec),
                description: a,
                checked: t,
                onChange: n
            })
        }) : null]
    })
}

function e_() {
    let e = D.kt.useSetting(),
        t = D.Sf.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: l,
            systemPrefersReducedMotion: a,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: c
        } = (0, r.cf)([g.A, M.A], () => ({
            systemPrefersReducedMotion: g.A.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.A.rawPrefersReducedMotion,
            useReducedMotion: g.A.useReducedMotion,
            gifAutoPlayOverrideReason: M.A.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: M.A.getAppliedOverrideReasonKey("animateEmoji")
        })),
        u = s.useCallback(e => {
            (0, _.qz)(e ? "auto" : a)
        }, [a]),
        m = s.useCallback(e => {
            (0, _.qz)(e ? "reduce" : "no-preference")
        }, []);
    return (0, i.jsx)("div", {
        title: z.intl.string(z.t.e3TR1b),
        className: W.VN,
        children: (0, i.jsxs)(d.nVY, {
            label: z.intl.string(z.t.e3TR1b),
            description: z.intl.format(z.t["2l9U2j"], {
                helpdeskArticle: P.A.getArticleURL(B.MVz.REDUCED_MOTION)
            }),
            children: [(0, i.jsx)(d.dOG, {
                label: z.intl.string(z.t["+Dx+HD"]),
                checked: "auto" === l,
                onChange: u
            }), (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t.b3XBzg),
                    checked: n,
                    onChange: m
                })
            }), (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t.Iayoh5),
                    description: null != o ? (0, v.A)(o) : void 0,
                    checked: e,
                    onChange: D.kt.updateSetting
                })
            }), (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t.iIaOlc),
                    description: null != c ? (0, v.A)(c) : void 0,
                    checked: t,
                    onChange: D.Sf.updateSetting
                })
            }), (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(eg, {})
            })]
        })
    })
}

function eg() {
    let e = D.S0.useSetting(),
        t = (0, r.bG)([M.A], () => M.A.getAppliedOverrideReasonKey("animateStickers")),
        n = s.useCallback(e => {
            D.S0.updateSetting(e)
        }, []);
    return (0, i.jsx)(d.z6M, {
        label: z.intl.string(z.t["6NtAuJ"]),
        description: null != t ? (0, v.A)(t) : z.intl.string(z.t.GRa6U7),
        options: [{
            name: z.intl.string(z.t["Xp+X2U"]),
            value: F.BJ.ALWAYS_ANIMATE
        }, {
            name: z.intl.string(z.t.IlLT7e),
            desc: z.intl.string(z.t.bIW9Tl),
            value: F.BJ.ANIMATE_ON_INTERACTION
        }, {
            name: z.intl.string(z.t.IGu8x3),
            value: F.BJ.NEVER_ANIMATE
        }],
        onChange: e => n(e),
        value: e
    })
}

function em() {
    let e = (0, r.bG)([g.A], () => g.A.isSubmitButtonEnabled),
        t = D.D_.useSetting(),
        n = s.useRef(null);
    return (0, U.A)(n, w.Yu.LEGACY_CHAT_INPUT), (0, i.jsx)("div", {
        ref: n,
        children: (0, i.jsxs)(d.nVY, {
            label: z.intl.string(z.t.onqU6o),
            children: [(0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t["3Fztn5"]),
                    checked: e,
                    onChange: _.Xt
                })
            }), (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t.TZ2hZH),
                    description: z.intl.string(z.t.Q7wgHc),
                    checked: t,
                    onChange: e => {
                        y.default.track(B.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                            enabled: e,
                            location: {
                                section: B.JJy.SETTINGS_ACCESSIBILITY
                            }
                        }), D.D_.updateSetting(e)
                    }
                })
            })]
        })
    })
}

function eA() {
    let e = (0, r.bG)([R.A], () => R.A.speechRate);
    return (0, i.jsxs)(d.BJc, {
        gap: 16,
        children: [(0, i.jsx)(d.Apm, {
            label: z.intl.string(z.t.lsW5Ev),
            description: z.intl.string(z.t.Ci4wMS),
            markers: Y.P,
            initialValue: e,
            defaultValue: 1,
            stickToMarkers: !0,
            onValueChange: $,
            onValueRender: e => `x${e.toFixed(2)}`,
            onMarkerRender: e => 0 === e ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: z.intl.string(z.t["493lwX"])
            }) : 10 === e ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: z.intl.string(z.t.ZSZEdS)
            }) : 1 === e ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: "x1.0"
            }) : e % 1 == 0 ? "" : void 0,
            "aria-labelledby": J
        }), (0, i.jsx)(eh, {})]
    })
}

function eh() {
    let [e, t] = s.useState(!1);
    return (0, c.l0)(() => (0, O.pr)()), (0, i.jsx)(d.Button, {
        text: z.intl.string(z.t.SKNnqq),
        icon: e ? d.E$n : d.udU,
        size: "sm",
        onClick: () => {
            if (e) {
                (0, O.pr)(), t(!1);
                return
            }(0, O.AU)(z.intl.string(z.t.PKaNJL), !0, void 0, () => t(!0), () => t(!1)), t(!0)
        }
    })
}

function ep() {
    return u.$j ? (0, i.jsx)(j.x, {
        setting: H.H.ACCESSIBILITY_TEXT_TO_SPEECH,
        children: (0, i.jsx)(d.nVY, {
            label: z.intl.string(z.t.VpSKeO),
            children: (0, i.jsx)(j.x, {
                setting: H.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, i.jsx)(eA, {})
            })
        })
    }) : null
}