/** chunk id: 28495, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => ee
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(317097),
    d = n(311907),
    u = n(554146),
    g = n(582754),
    m = n(397927),
    p = n(398590),
    f = n(736653),
    h = n(775602),
    b = n(793574),
    x = n(268218),
    j = n(379848),
    _ = n(201275),
    O = n(20851),
    v = n(176201),
    y = n(676608),
    A = n(828162),
    E = n(801264),
    N = n(34457),
    S = n(576705),
    I = n(636042),
    C = n(396816),
    T = n(545567),
    P = n(785312),
    w = n(319805),
    R = n(316506),
    D = n(486619),
    G = n(631103),
    L = n(927573),
    k = n(512031),
    M = n(652215),
    U = n(178758),
    B = n(985018),
    F = n(333354),
    H = n(617375),
    V = n(261223),
    K = n(598227),
    z = n(406853);
let W = (0, x.Fe)({
        createPromise: () => n.e("66147").then(n.bind(n, 48736)),
        webpackId: 48736
    }),
    Y = o().debounce((e, t) => (0, I.nK)(e, t), 200);

function X(e) {
    let {
        role: t,
        disabled: n
    } = e, [l, s] = i.useState(t.name);
    return i.useEffect(() => {
        s(t.name)
    }, [t.name]), (0, r.jsx)(m.ksK, {
        label: B.intl.string(B.t.dLbkBk),
        required: !0,
        type: "text",
        value: l,
        maxLength: M.fHV,
        onChange: function(e) {
            s(e), Y(t.id, e)
        },
        disabled: n
    })
}

function J(e) {
    let {
        role: t,
        guildId: n,
        selectedStyle: i,
        disabled: l,
        shouldShowUpsell: a
    } = e, o = (0, T.$)(B.intl.string(B.t.Mi9Kbe)), d = (0, f.Ay)(), h = (0, _.qE)(n, t), x = {
        dark: {
            src: K,
            name: t.name
        },
        light: {
            src: z,
            name: t.name
        }
    };

    function y() {
        (0, A.A)(n, b.A.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.jH)()
    }
    return (0, r.jsx)(j.Ay, {
        contentTypes: [u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: e => {
            let {
                visibleContent: p
            } = e;
            return (0, r.jsxs)(m.D0$, {
                label: B.intl.string(B.t["9wVJRB"]),
                badge: p === u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : void 0,
                children: [(0, r.jsx)("div", {
                    className: H.p6,
                    children: k.wE.map(e => {
                        let {
                            id: u,
                            colors: p,
                            labelString: f
                        } = e;
                        return (0, r.jsxs)("button", {
                            className: s()(H.ZQ, {
                                [H.wH]: i === u,
                                [H.r9]: l || a && [C.y.HOLOGRAPHIC, C.y.GRADIENT].includes(u)
                            }),
                            onClick: () => {
                                (0, I.C5)(t.id, u)
                            },
                            children: [(0, r.jsx)(m.M1G, {
                                children: (0, r.jsx)("div", {
                                    className: H.Al,
                                    children: (0, r.jsx)(O.A, {
                                        author: {
                                            nick: o.author.username,
                                            guildId: n,
                                            authorId: o.author.id,
                                            colorRoleId: t.id,
                                            colorStrings: (0, v.K3)(p),
                                            colorString: (0, c.Hl)(p.primary_color)
                                        },
                                        message: o,
                                        preview: !0,
                                        roleIcon: null != h ? h : (0, g.qB)(d) ? x.light : x.dark,
                                        isGroupStart: !0,
                                        disableInteraction: !0,
                                        previewGuildId: n
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: H.C2,
                                children: B.intl.string(f)
                            })]
                        }, u)
                    })
                }), a && (0, r.jsxs)("div", {
                    className: H.FB,
                    children: [(0, r.jsxs)("div", {
                        className: H.Md,
                        children: [(0, r.jsx)(m.Text, {
                            variant: "text-sm/semibold",
                            color: "button-outline-primary-text",
                            children: B.intl.format(F.default.VpEDJc, {
                                magical: (0, r.jsx)(Z, {})
                            })
                        }), (0, r.jsx)(m.Text, {
                            variant: "text-xs/medium",
                            color: "button-outline-primary-text",
                            children: B.intl.string(F.default.FJZeZF)
                        })]
                    }), (0, r.jsx)(m.Button, {
                        onClick: y,
                        variant: "expressive",
                        icon: m._Jp,
                        text: B.intl.string(B.t["+7XY31"])
                    })]
                })]
            })
        }
    })
}

function Z() {
    let e = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        {
            gradientStyle: t,
            gradientClassname: n
        } = (0, m.WqX)({
            colorStrings: (0, v.K3)(U.jl),
            useReducedMotion: e,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)("span", {
        style: function(e) {
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
        }({}, t),
        className: n,
        "data-text": B.intl.string(F.default["+/IHLl"]),
        children: B.intl.string(F.default["+/IHLl"])
    })
}

function Q(e) {
    var t, n;
    let {
        role: i,
        disabled: l,
        currentStyle: s,
        hasEnhancedRoleColors: a
    } = e;
    return (0, r.jsx)("div", {
        className: H.Ei,
        children: (0, r.jsx)(m.D0$, {
            label: B.intl.string(B.t["1F6FzL"]),
            description: B.intl.string(B.t["9UCxlf"]),
            required: !0,
            children: (0, r.jsx)(W, {
                defaultColor: M.TGz,
                colors: s === C.y.GRADIENT && a ? U.Oz : M._tK,
                value: i.color,
                disabled: l,
                onChange: e => {
                    var t;
                    return t = e, void(i.color !== t && (t !== M.TGz || 0 !== i.color) && (t === M.TGz && (t = 0), (0, I.ZH)(i.id, t)))
                },
                secondaryValue: s === C.y.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? null == (n = i.colors) ? void 0 : n.secondary_color : void 0,
                onChangeGradientColors: e => {
                    (0, I.uc)(i.id, {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: null
                    }, C.y.GRADIENT)
                },
                isGradient: s === C.y.GRADIENT,
                customPickerPosition: "right"
            })
        })
    })
}

function q(e) {
    let {
        role: t,
        guildId: n,
        selectedStyle: i,
        disableInteraction: l
    } = e, a = (0, T.$)(B.intl.string(B.t.Mi9Kbe)), o = {
        nick: a.author.username,
        guildId: n,
        authorId: a.author.id,
        colorRoleId: t.id,
        colorStrings: t.colorStrings,
        colorString: t.colorString
    }, c = {
        src: K,
        name: t.name
    }, d = {
        src: z,
        name: t.name
    }, u = (0, _.qE)(n, t), p = [M.NJ8.DARK, M.NJ8.DARKER, M.NJ8.MIDNIGHT, M.NJ8.LIGHT];
    return (0, r.jsx)(m.M1G, {
        children: (0, r.jsx)("div", {
            className: s()(H.i1, {
                [H.XN]: l
            }),
            "aria-hidden": !0,
            children: p.map(e => (0, r.jsx)(m.NPJ, {
                theme: e,
                disableAdaptiveTheme: !0,
                children: t => (0, r.jsxs)("div", {
                    className: s()(t, H.$O),
                    children: [(0, r.jsx)("div", {
                        className: H.zC,
                        children: (0, r.jsx)(O.A, {
                            author: o,
                            message: a,
                            roleIcon: null != u ? u : (0, g.qB)(e) ? d : c,
                            previewGuildId: n,
                            isGroupStart: !0
                        })
                    }), e === M.NJ8.LIGHT && i !== C.y.SOLID && (0, r.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        className: H.W_,
                        children: B.intl.string(B.t.nxwm3I)
                    })]
                })
            }, e))
        })
    })
}

function $(e) {
    let {
        role: t,
        disabled: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.dOG, {
            label: B.intl.string(B.t.vceJPk),
            checked: t.hoist,
            onChange: e => (0, I.E9)(t.id, e, t.mentionable),
            disabled: n
        }), (0, r.jsx)(m.cGx, {
            className: H.yF
        }), (0, r.jsx)(m.dOG, {
            label: B.intl.formatToPlainString(B.t.DTXoJQ, {}),
            description: B.intl.string(B.t.kRg5W5),
            checked: t.mentionable,
            onChange: e => (0, I.E9)(t.id, t.hoist, e),
            disabled: n
        })]
    })
}

function ee(e) {
    let {
        guild: t,
        role: n,
        locked: i,
        setSelectedSection: l
    } = e, a = (0, y.jV)(t.id, n), o = (0, d.bG)([C.A], () => C.A.getRoleStyleData(n.id)), c = !a, u = null != o && a ? o.currentStyle : C.y.SOLID, g = (0, N.Oy)(n), p = i || g, f = (0, d.bG)([S.A], () => S.A.canImpersonateRole(t, n)), {
        headerHeight: h,
        headerRef: b
    } = (0, P.A)(0), {
        scrolledToTop: x,
        handleScroll: j
    } = (0, R.u)();
    return (0, r.jsx)(m.GtU, {
        className: H.XG,
        style: {
            scrollPaddingTop: h
        },
        onScroll: j,
        children: (0, r.jsxs)("div", {
            className: V.Q,
            children: [(0, r.jsx)("div", {
                className: s()(V.wx, V.ln, {
                    [V.l6]: !x
                }),
                ref: b,
                children: (0, r.jsx)(R.A, {
                    guild: t,
                    role: n,
                    selectedSection: L.T$.DISPLAY,
                    setSelectedSection: l
                })
            }), (0, r.jsx)(X, {
                role: n,
                disabled: p
            }), (0, r.jsx)("div", {
                className: H.U9,
                children: (0, r.jsx)(G.A, {
                    role: n
                })
            }), (0, r.jsx)(m.cGx, {
                className: H.yF
            }), (a || c) && null != u && (0, r.jsx)(J, {
                role: n,
                guildId: t.id,
                selectedStyle: u,
                disabled: p,
                shouldShowUpsell: c
            }), u !== C.y.HOLOGRAPHIC && null != u && (0, r.jsx)(Q, {
                role: n,
                disabled: p,
                currentStyle: u,
                hasEnhancedRoleColors: a
            }), u === C.y.HOLOGRAPHIC && (0, r.jsx)(E.A, {
                className: H.u,
                children: (0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    children: B.intl.string(F.default.tBhCyr)
                })
            }), (0, r.jsx)(w.A, {
                guild: t,
                disabled: p,
                role: n
            }), (0, r.jsx)(q, {
                role: n,
                guildId: t.id,
                selectedStyle: u,
                disableInteraction: !a
            }), (0, r.jsx)(m.cGx, {
                className: H.yF
            }), (0, r.jsx)($, {
                role: n,
                disabled: p
            }), f ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(m.cGx, {
                    className: H.yF
                }), (0, r.jsx)(D.G, {
                    guildId: t.id,
                    role: n
                })]
            }) : null]
        })
    })
}