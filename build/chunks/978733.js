/** Chunk was on 46875 **/
/** chunk id: 978733, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ee
}), n(321073), n(896048), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(108531),
    d = n(942381),
    u = n(136722),
    m = n(311907),
    h = n(827734),
    g = n(397927),
    x = n(435183),
    f = n(417454),
    p = n(964486),
    b = n(148719),
    j = n(504842),
    v = n(376708),
    _ = n(207336),
    y = n(933917),
    A = n(34457),
    C = n(317525),
    T = n(71393),
    O = n(44234),
    S = n(203982),
    N = n(927813),
    w = n(661191),
    E = n(947094),
    I = n(919577),
    P = n(387255),
    R = n(422844),
    k = n(435470),
    M = n(853742),
    D = n(892110),
    L = n(633148),
    U = n(218152),
    F = n(253913),
    G = n(652215),
    z = n(985018),
    H = n(524445);

function B(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            B(e, t, n[t])
        })
    }
    return e
}

function K(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let W = {
        width: 28,
        height: 28
    },
    q = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    J = e => {
        (0, M.bh)({
            onboardingCTA: e
        })
    };
class X {
    addStep(e) {
        ++this.currentIndex, this.steps.push(V({
            index: this.currentIndex
        }, e)), e.isDone && this.completedSteps++
    }
    getSteps() {
        return this.steps
    }
    isAllDone() {
        return this.steps.every(e => e.isDone)
    }
    constructor() {
        B(this, "currentIndex", 0), B(this, "steps", []), B(this, "completedSteps", 0)
    }
}
let Q = e => {
        let {
            guild: t,
            roles: n
        } = e;
        return (0, l.jsx)("div", {
            className: H.Ei,
            "aria-label": z.intl.formatToPlainString(z.t.PCs0oo, {
                numRoles: n.length
            }),
            children: n.map(e => (0, l.jsx)(f.b_, {
                role: e,
                canRemove: !1,
                onRemove: G.FXj,
                guildId: t.id,
                className: H.Yq
            }, e.id))
        })
    },
    Y = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    Z = e => {
        let {
            handleHide: t
        } = e;
        return (0, l.jsx)(g.DUT, {
            onClick: t,
            className: H.b,
            "aria-label": z.intl.string(z.t.WAI6xu),
            children: (0, l.jsx)(g.PGe, {
                size: "md",
                color: "currentColor",
                className: H.ut
            })
        })
    },
    $ = e => {
        let {
            expanded: t,
            onClick: n
        } = e;
        return (0, l.jsx)(g.DUT, {
            onClick: n,
            className: H.b,
            "aria-label": t ? z.intl.string(z.t.iTcuma) : z.intl.string(z.t.dcl9MQ),
            children: t ? (0, l.jsx)(g.gR, {
                size: "xs",
                color: "currentColor",
                className: H.ut
            }) : (0, l.jsx)(g._Xm, {
                size: "xs",
                color: "currentColor",
                className: H.ut
            })
        })
    },
    ee = e => {
        let t, {
                hasAnyThread: i,
                hasActiveThreads: s,
                channel: f
            } = e,
            {
                onboardingExpanded: B
            } = (0, U.kU)(e => {
                let {
                    onboardingExpanded: t
                } = e;
                return {
                    onboardingExpanded: t
                }
            }, d.x),
            {
                tagFilter: ee
            } = (0, R.R)(f.id),
            et = (0, m.bG)([T.A], () => T.A.getGuild(f.getGuildId())),
            en = (0, k.S4)(f),
            {
                transitions: el,
                setVisible: er
            } = (() => {
                let [e, t] = r.useState(!0);
                return {
                    transitions: (0, g.pnh)(e, {
                        keys: e => e ? "shown" : "hidden",
                        config: Y,
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        },
                        unique: !0
                    }),
                    setVisible: t
                }
            })(),
            ei = (0, g.pnh)(B, {
                from: {
                    maxHeight: 0
                },
                enter: {
                    maxHeight: 500
                },
                leave: {
                    maxHeight: 0
                },
                config: {
                    duration: 200
                }
            }),
            ea = r.useCallback(e => {
                var t;
                null == (t = e.clickHandler) || t.call(e)
            }, []),
            es = (t = f.id, r.useCallback(() => (er(!1), I.A.hideAdminOnboarding(t, !0)), [t, er])),
            {
                onboardingSteps: eo,
                isDismissed: ec,
                isHidden: ed,
                isAllDone: eu
            } = (e => {
                var t;
                let i, a, s, c, {
                        guild: d,
                        channel: h,
                        hasAnyThread: f,
                        handleHide: p
                    } = e,
                    [j, v] = r.useState(!1),
                    _ = (0, D.l)(h.id),
                    y = (0, m.bG)([E.A], () => E.A.hasHidden(h.id)),
                    T = (i = null == d ? void 0 : d.id, a = (0, m.bG)([C.A], () => null != i ? C.A.getSortedRoles(i) : void 0), r.useMemo(() => {
                        let e, t, r, i, s, o, c, m, p = new X,
                            j = (null == h ? void 0 : h.isMediaChannel()) === !0;
                        return null == d || null == h || j || null == a || p.addStep((e = (0, b.A)(h) ? u.kg(G.xBc.VIEW_CHANNEL, G.xBc.SEND_MESSAGES) : G.xBc.SEND_MESSAGES, r = (t = null != d ? (0, P.N)(a, h, e).filter(e => h.permissionOverwrites.hasOwnProperty(e.id) || (0, A.Oy)(e)) : []).length > 0, i = t.some(e => (0, A.Oy)(e)), {
                            name: z.intl.string(z.t["/Ax2gs"]),
                            description: z.intl.string(z.t.gAIOfg),
                            isDone: r && i,
                            shouldWarn: r && !i,
                            children: r ? (0, l.jsx)(Q, {
                                guild: d,
                                roles: t
                            }) : null,
                            clickHandler: () => {
                                J(F._G.PERMISSIONS), (0, g.mMO)(async () => {
                                    let {
                                        default: r
                                    } = await n.e("17110").then(n.bind(n, 698325));
                                    return v(!0), n => (0, l.jsx)(r, K(V({}, n), {
                                        channel: h,
                                        guild: d,
                                        permission: e,
                                        currentSelectedRoles: t
                                    }))
                                }, {
                                    modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                    onCloseRequest: G.FXj,
                                    onCloseCallback: () => v(!1)
                                })
                            }
                        })), j || p.addStep((s = null != h.topic && h.topic.length > 0, {
                            name: z.intl.string(z.t.UgJu1e),
                            description: z.intl.string(z.t["3C6/G1"]),
                            clickHandler: () => {
                                J(F._G.GUIDELINES), x.Ay.open(h.id, void 0, G.b7d.TOPIC)
                            },
                            isDone: s
                        })), p.addStep((o = null != h.availableTags && h.availableTags.length > 0, {
                            name: z.intl.string(z.t.xiBFCi),
                            description: z.intl.string(z.t.wCv4Oz),
                            clickHandler: () => {
                                J(F._G.TAGS), x.Ay.open(h.id), (0, g.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await n.e("47326").then(n.bind(n, 950989));
                                    return t => (0, l.jsx)(e, K(V({}, t), {
                                        channelId: h.id,
                                        guildId: h.guild_id
                                    }))
                                })
                            },
                            isDone: o
                        })), p.addStep((c = null != h.defaultReactionEmoji, {
                            name: z.intl.string(z.t.QlyC9s),
                            description: z.intl.string(z.t["+50LJg"]),
                            clickHandler: () => {
                                J(F._G.DEFAULT_REACTION), (0, g.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await n.e("85157").then(n.bind(n, 939940));
                                    return t => (0, l.jsx)(e, K(V({}, t), {
                                        channel: h
                                    }))
                                })
                            },
                            isDone: c
                        })), p.addStep((m = null == d ? void 0 : d.id, {
                            name: z.intl.string(z.t["6A0O64"]),
                            description: j ? z.intl.string(z.t["8hI5vr"]) : z.intl.format(z.t.ysxcAw, {
                                onClick: e => {
                                    null != m && (e.preventDefault(), e.stopPropagation(), (0, M.zd)(), (0, g.mMO)(async () => {
                                        let {
                                            default: e
                                        } = await n.e("7937").then(n.bind(n, 420472));
                                        return t => (0, l.jsx)(e, K(V({}, t), {
                                            guildId: m
                                        }))
                                    }))
                                }
                            }),
                            clickHandler: () => {
                                J(F._G.CREATE_POST), S._.dispatch(G.jej.FOCUS_COMPOSER_TITLE)
                            },
                            isDone: f
                        })), p
                    }, [h, d, a, f, v])),
                    O = T.isAllDone(),
                    I = _ || y || (t = h.id, s = w.default.extractTimestamp(t), !o()().isBefore(o()(s).add(o().duration(15, "days"))));
                return c = r.useRef(0), r.useEffect(() => (j || !O || I ? clearTimeout(c.current) : c.current = setTimeout(() => {
                    p()
                }, 60 * N.A.Millis.SECOND), () => clearTimeout(c.current)), [O, I, p, j]), {
                    onboardingSteps: T,
                    isHidden: y,
                    isDismissed: _,
                    isAllDone: O
                }
            })({
                guild: et,
                channel: f,
                hasAnyThread: i,
                handleHide: es
            }),
            em = !ed && !ec,
            eh = (0, U.ST)(),
            eg = f.isMediaChannel(),
            ex = e => eh.getState().setOnboardingExpanded(e);
        return ((0, p.Ay)(() => {
            eu && em && es()
        }), (e => {
            let {
                isAllDone: t,
                isVisible: n,
                canManageChannel: l,
                guildId: i,
                channel: a
            } = e, s = (0, m.bG)([C.A], () => null != i ? C.A.partitionVersion(i) : void 0), o = r.useCallback(() => {
                S._.dispatch(G.jej.REMEASURE_TARGET)
            }, []);
            r.useEffect(() => {
                o()
            }, [o, t, n, l, s, a.id, a.permissionOverwrites])
        })({
            isAllDone: eu,
            isVisible: em,
            canManageChannel: en,
            guildId: null == et ? void 0 : et.id,
            channel: f
        }), r.useEffect(() => {
            ec || er(!ed)
        }, [ec, er, ed]), (0, p.Ay)(() => {
            i && em || ex(!0)
        }), null == et) ? null : (0, v.Fo)(f) ? s || 0 !== ee.size ? ee.size > 0 ? null : (0, l.jsx)(_.A, {
            guild: et
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(_.A, {
                guild: et
            }), (0, l.jsx)(y.D, {})]
        }) : em && en ? eg ? i ? null : (0, l.jsx)(j.A, {
            channel: f
        }) : (0, l.jsx)(l.Fragment, {
            children: el((e, t) => t ? (0, l.jsx)(c.animated.div, {
                style: e,
                className: H.kL,
                children: (0, l.jsxs)("div", {
                    className: H.iE,
                    children: [(0, l.jsx)("div", {
                        className: H.U1,
                        children: (0, l.jsxs)(g.Fmo, {
                            component: (0, l.jsx)(g.Heading, {
                                variant: "heading-md/semibold",
                                children: z.intl.string(z.t.LhlgY9)
                            }),
                            children: [(0, l.jsx)(g.Heading, {
                                variant: "heading-md/medium",
                                className: H.wx,
                                children: z.intl.format(z.t["9L+8bz"], {
                                    numCompleted: eo.completedSteps.toString(),
                                    numSteps: eo.steps.length.toString()
                                })
                            }), (0, l.jsxs)(g.Text, {
                                variant: "text-xs/normal",
                                className: H.l2,
                                children: [(0, l.jsx)(g.mir, {
                                    size: "xxs",
                                    color: "currentColor",
                                    className: H.Kk
                                }), z.intl.string(z.t.znhX2R)]
                            }), (0, l.jsx)($, {
                                expanded: B,
                                onClick: () => ex(!B)
                            }), (0, l.jsx)(Z, {
                                handleHide: es
                            })]
                        })
                    }), ei((e, t) => t ? (0, l.jsx)(c.animated.div, {
                        style: e,
                        className: H.qI,
                        children: (0, l.jsx)("ol", {
                            className: H.D4,
                            children: eo.getSteps().map(e => (0, l.jsxs)(g.DUT, {
                                tag: "li",
                                "aria-label": e.name,
                                onClick: () => ea(e),
                                className: a()(H._h, {
                                    [H.so]: e.isDone
                                }),
                                children: [e.shouldWarn ? (0, l.jsx)(g.EpV, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                                    className: H.FY
                                }) : e.isDone ? (0, l.jsx)(g.fkz, {
                                    color: h.A.colors.STATUS_POSITIVE_BACKGROUND.css,
                                    icon: g.A9s,
                                    style: q,
                                    className: H.FY
                                }) : (0, l.jsx)(g.fkz, {
                                    disableColor: !0,
                                    icon: (0, g.kHD)(O.A),
                                    style: W,
                                    className: a()(H.FY, H.so)
                                }), (0, l.jsxs)("div", {
                                    className: H.PM,
                                    children: [(0, l.jsx)(g.Text, {
                                        variant: "text-md/medium",
                                        color: e.isDone ? "text-default" : "text-strong",
                                        className: H.u,
                                        children: e.name
                                    }), (0, l.jsx)(g.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: H.XK,
                                        children: e.description
                                    }), e.children]
                                }), (0, l.jsx)(g._BQ, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 12,
                                    className: H.FY
                                })]
                            }, "onboard-step-".concat(e.index)))
                        })
                    }) : null)]
                })
            }) : null)
        }) : i ? null : (0, l.jsx)(L.A, {
            channelName: f.name,
            guildId: f.guild_id,
            tagFilter: ee,
            channel: f
        })
    }