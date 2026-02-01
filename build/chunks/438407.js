/** chunk id: 438407, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Hg: () => b,
    kW: () => D,
    ri: () => M
}), n(321073), n(228524);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n.n(s),
    u = n(989349),
    c = n.n(u),
    E = n(317097),
    _ = n(397927),
    d = n(565645),
    g = n(429913),
    A = n(376310),
    T = n(734057),
    I = n(317525),
    O = n(287809),
    h = n(147036),
    N = n(403362),
    m = n(240248),
    f = n(427262),
    S = n(276373),
    p = n(652215),
    G = n(985018),
    R = n(159529);

function D(e, t) {
    let n = S.Yj[e.targetType];
    return null != n && !0 === n[t.key]
}
let C = {
    [p.RWi.CREATE]: R.typeCreate,
    [p.RWi.UPDATE]: R.typeUpdate,
    [p.RWi.DELETE]: R.typeDelete
};

function L(e) {
    let {
        applicationId: t
    } = e, n = (0, g.h)(t);
    return null == n ? null : (0, l.jsx)(_.Text, {
        variant: "text-md/normal",
        children: n.name
    })
}

function x(e, t) {
    return (0, l.jsx)("div", {
        className: R.colorHook,
        style: {
            backgroundColor: t
        }
    }, e)
}
class b extends r.PureComponent {
    render() {
        let {
            actionType: e,
            targetType: t,
            action: n,
            themeOverride: r
        } = this.props, a = null != r ? R["themeOverride".concat((0, m.$G)(r))] : null, s = i()(R.icon, C[e], n === p.F_X.MESSAGE_DELETE ? R.targetMessage : n === p.F_X.AUTO_MODERATION_BLOCK_MESSAGE || n === p.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL || n === p.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === p.F_X.AUTO_MODERATION_QUARANTINE_USER ? R.autoModerationBlockMessage : ({
            [p.GaG.ALL]: R.targetAll,
            [p.GaG.GUILD]: R.targetGuild,
            [p.GaG.CHANNEL]: R.targetChannel,
            [p.GaG.CHANNEL_OVERWRITE]: R.targetChannel,
            [p.GaG.USER]: R.targetMember,
            [p.GaG.ROLE]: R.targetRole,
            [p.GaG.ONBOARDING_PROMPT]: R.targetOnboarding,
            [p.GaG.GUILD_ONBOARDING]: R.targetOnboarding,
            [p.GaG.HOME_SETTINGS]: R.targetOnboarding,
            [p.GaG.INTEGRATION]: R.targetIntegration,
            [p.GaG.INVITE]: R.targetInvite,
            [p.GaG.WEBHOOK]: R.targetWebhook,
            [p.GaG.EMOJI]: R.targetEmoji,
            [p.GaG.STICKER]: R.targetSticker,
            [p.GaG.STAGE_INSTANCE]: R.targetStageInstance,
            [p.GaG.GUILD_SCHEDULED_EVENT]: R.targetGuildScheduledEvent,
            [p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: R.targetGuildScheduledEvent,
            [p.GaG.THREAD]: R.thread,
            [p.GaG.APPLICATION_COMMAND]: R.applicationCommand,
            [p.GaG.AUTO_MODERATION_RULE]: R.autoModerationRule,
            [p.GaG.GUILD_HOME]: R.targetGuildHome,
            [p.GaG.GUILD_SOUNDBOARD]: R.targetGuildSoundboard,
            [p.GaG.VOICE_CHANNEL_STATUS]: R.targetChannel,
            [p.GaG.GUILD_MEMBER_VERIFICATION]: R.targetMember,
            [p.GaG.GUILD_PROFILE]: R.targetGuild
        })[t], a);
        return (0, l.jsx)("div", {
            className: s
        })
    }
}

function M(e) {
    let {
        log: t,
        guild: n,
        onContentClick: a,
        className: s
    } = e, u = r.useCallback(e => {
        if (null == t.changes) return null;
        let u = 0,
            g = o().flatten(t.changes.map(a => {
                if (D(t, a)) return null;
                let {
                    oldValue: i,
                    newValue: s
                } = (() => {
                    if ((t.action === p.F_X.CHANNEL_UPDATE || t.action === p.F_X.CHANNEL_CREATE) && a.key === p.gGk.TYPE) {
                        var e, n;
                        return {
                            oldValue: null != (e = a.oldValue) ? e : (0, h.Jg)({
                                type: a.oldValue
                            }),
                            newValue: null != (n = a.newValue) ? n : (0, h.Jg)({
                                type: a.newValue
                            })
                        }
                    }
                    if (t.action === p.F_X.MEMBER_UPDATE && a.key === p.gGk.COMMUNICATION_DISABLED_UNTIL) {
                        let e = c()(a.newValue);
                        return {
                            oldValue: a.oldValue,
                            newValue: e.isValid() ? e.calendar() : a.newValue
                        }
                    }
                    return t.action === p.F_X.GUILD_UPDATE && a.key === p.gGk.OWNER_ID ? {
                        oldValue: f.Ay.getUserTag(a.oldValue, {
                            mode: "username"
                        }),
                        newValue: f.Ay.getUserTag(a.newValue, {
                            mode: "username"
                        })
                    } : a
                })(), g = (() => {
                    if (t.action === p.F_X.MEMBER_ROLE_UPDATE) return function(e) {
                        let {
                            newValue: t
                        } = e;
                        return Array.isArray(t) ? t.map(e => (0, l.jsx)("div", {
                            className: R.subListItem,
                            children: e.name
                        }, e.id)) : null
                    }(a);
                    if (t.targetType === p.GaG.ROLE || t.action === p.F_X.CHANNEL_OVERWRITE_CREATE || t.action === p.F_X.CHANNEL_OVERWRITE_UPDATE) return function(e, t) {
                        let {
                            newValue: n
                        } = e;
                        return Array.isArray(n) ? n.map((e, n) => (0, l.jsx)("div", {
                            className: R.subListItem,
                            children: S.Sn(e, t)
                        }, n)) : null
                    }(a, t);
                    if ((t.action === p.F_X.CHANNEL_UPDATE || t.action === p.F_X.THREAD_UPDATE) && a.key === p.gGk.FLAGS) return function(e) {
                        let {
                            newValue: t,
                            oldValue: n
                        } = e, r = [];
                        return (Array.isArray(n) && (r = r.concat(n.map(e => (0, l.jsx)("div", {
                            className: R.subListItem,
                            children: S.eA(e)
                        }, e)))), Array.isArray(t) && (r = r.concat(t.map(e => (0, l.jsx)("div", {
                            className: R.subListItem,
                            children: S.sU(e)
                        }, e)))), r.length > 0) ? r : null
                    }(a);
                    if ((t.action === p.F_X.ONBOARDING_PROMPT_UPDATE || t.action === p.F_X.ONBOARDING_PROMPT_CREATE) && a.key === p.gGk.OPTIONS) return function(e, t, n) {
                        let {
                            newValue: r,
                            oldValue: a
                        } = e, i = e => {
                            var t;
                            let l = null != n ? null == (t = I.A.getRole(n.id, e)) ? void 0 : t.name : void 0;
                            return null == l ? null : "@".concat(l)
                        }, s = e => {
                            var t;
                            let n = null == (t = T.A.getChannel(e)) ? void 0 : t.name;
                            return null == n ? null : "#".concat(n)
                        }, u = o().keyBy(null != a ? a : [], "id"), c = o().keyBy(null != r ? r : [], "id"), E = o().difference(Object.keys(c), Object.keys(u)).map(e => c[e]), d = o().difference(Object.keys(u), Object.keys(c)).map(e => u[e]), g = o().intersection(Object.keys(c), Object.keys(u));
                        return (0, l.jsxs)("ul", {
                            className: R.onboardingChangeLogContainer,
                            children: [E.map(e => {
                                let {
                                    role_ids: n,
                                    channel_ids: r,
                                    title: a,
                                    id: o
                                } = e, u = (null != n ? n : []).map(i).filter(N.Vq), c = (null != r ? r : []).map(s).filter(N.Vq);
                                return (0, l.jsxs)("li", {
                                    children: [(0, l.jsxs)("div", {
                                        className: R.onboardingChangeLogItemTitle,
                                        children: [(0, l.jsx)(b, {
                                            actionType: p.RWi.CREATE,
                                            targetType: t.targetType,
                                            action: t.action
                                        }), (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t.CZ1tyo, {
                                                title: a
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: R.onboardingChangeLogItemChanges,
                                        children: [u.length > 0 && (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t["gt/5z1"], {
                                                roles: u.join(", ")
                                            })
                                        }), c.length > 0 && (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t["4q006W"], {
                                                channels: c.join(", ")
                                            })
                                        })]
                                    })]
                                }, o)
                            }), d.map(e => (0, l.jsx)("li", {
                                children: (0, l.jsxs)("div", {
                                    className: R.onboardingChangeLogItemTitle,
                                    children: [(0, l.jsx)(b, {
                                        actionType: p.RWi.DELETE,
                                        targetType: t.targetType,
                                        action: t.action
                                    }), (0, l.jsx)(_.Text, {
                                        variant: "text-md/normal",
                                        children: G.intl.format(G.t["m3dt+K"], {
                                            title: e.title
                                        })
                                    })]
                                })
                            }, e.id)), g.map(e => ((e, n) => {
                                let {
                                    title: r,
                                    id: a
                                } = n, u = e.role_ids.map(i).filter(N.Vq), c = e.channel_ids.map(s).filter(N.Vq), E = n.role_ids.map(i).filter(N.Vq), d = n.channel_ids.map(s).filter(N.Vq), g = o().difference(E, u), A = o().difference(u, E), T = o().difference(d, c), I = o().difference(c, d), O = [];
                                return (o().isEqual(e.title, n.title) || O.push("title"), o().isEqual(e.description, n.description) || O.push("description"), 0 === g.length && 0 === A.length && 0 === T.length && 0 === I.length && 0 === O.length) ? null : (0, l.jsxs)("li", {
                                    children: [(0, l.jsxs)("div", {
                                        className: R.onboardingChangeLogItemTitle,
                                        children: [(0, l.jsx)(b, {
                                            actionType: p.RWi.UPDATE,
                                            targetType: t.targetType,
                                            action: t.action
                                        }), (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t["WZO+ia"], {
                                                title: r
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: R.onboardingChangeLogItemChanges,
                                        children: [g.length > 0 && (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t["R+km+d"], {
                                                roles: g.join(", ")
                                            })
                                        }), A.length > 0 && (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t.xIVRoU, {
                                                roles: A.join(", ")
                                            })
                                        }), T.length > 0 && (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t.iYowX4, {
                                                channels: T.join(", ")
                                            })
                                        }), I.length > 0 && (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t.JLdJpL, {
                                                channels: I.join(", ")
                                            })
                                        }), O.map((t, r) => (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t["0698za"], {
                                                key: t,
                                                oldValue: e[t],
                                                newValue: n[t]
                                            })
                                        }, r))]
                                    })]
                                }, a)
                            })(u[e], c[e]))]
                        }, "options")
                    }(a, t, n);
                    if (t.action === p.F_X.HOME_SETTINGS_CREATE || t.action === p.F_X.HOME_SETTINGS_UPDATE) return function(e, t) {
                        var n, r, a, i, s, u, c;
                        let {
                            oldValue: E,
                            newValue: d,
                            key: g
                        } = e, {
                            targetType: A,
                            action: T
                        } = t;
                        switch (g) {
                            case p.gGk.WELCOME_MESSAGE:
                                let I, h, N, m;
                                return I = O.default.getUser(null == E || null == (i = E.author_ids) ? void 0 : i[0]), h = O.default.getUser(null == (s = d.author_ids) ? void 0 : s[0]), N = (null == I ? void 0 : I.id) !== (null == h ? void 0 : h.id) ? (0, l.jsx)("li", {
                                    children: (0, l.jsx)("div", {
                                        className: R.onboardingChangeLogItemTitle,
                                        children: (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t["PrOzA+"], {
                                                oldUser: null != (n = null == I ? void 0 : I.username) ? n : G.intl.string(G.t.PoWNfe),
                                                newUser: null != (r = null == h ? void 0 : h.username) ? r : G.intl.string(G.t.PoWNfe)
                                            })
                                        })
                                    })
                                }) : null, m = (null == E ? void 0 : E.message) !== d.message ? (0, l.jsx)("li", {
                                    children: (0, l.jsx)("div", {
                                        className: R.onboardingChangeLogItemTitle,
                                        children: (0, l.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            children: G.intl.format(G.t.oB7rBb, {
                                                oldMessage: null != (a = null == E ? void 0 : E.message) ? a : G.intl.string(G.t.PoWNfe),
                                                newMessage: d.message
                                            })
                                        })
                                    })
                                }) : null, (0, l.jsxs)("ul", {
                                    children: [N, m]
                                });
                            case p.gGk.NEW_MEMBER_ACTIONS:
                                let f, S, D, C, L, x;
                                return f = (u = null != E ? E : []).map(e => e.channel_id), S = d.map(e => e.channel_id), D = o().difference(S, f), C = o().difference(f, S), L = d.filter(e => D.includes(e.channel_id)), x = u.filter(e => C.includes(e.channel_id)), (0, l.jsxs)("ul", {
                                    children: [L.map(e => (0, l.jsx)("li", {
                                        children: (0, l.jsxs)("div", {
                                            className: R.onboardingChangeLogItemTitle,
                                            children: [(0, l.jsx)(b, {
                                                actionType: p.RWi.CREATE,
                                                targetType: A,
                                                action: T
                                            }), (0, l.jsx)(_.Text, {
                                                variant: "text-md/normal",
                                                children: G.intl.format(G.t.oFSu66, {
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id)), x.map(e => (0, l.jsx)("li", {
                                        children: (0, l.jsxs)("div", {
                                            className: R.onboardingChangeLogItemTitle,
                                            children: [(0, l.jsx)(b, {
                                                actionType: p.RWi.DELETE,
                                                targetType: A,
                                                action: T
                                            }), (0, l.jsx)(_.Text, {
                                                variant: "text-md/normal",
                                                children: G.intl.format(G.t.GssWar, {
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id))]
                                });
                            case p.gGk.RESOURCE_CHANNELS:
                                let M, v, U, j, y, k;
                                return M = (c = null != E ? E : []).map(e => e.channel_id), v = d.map(e => e.channel_id), U = o().difference(v, M), j = o().difference(M, v), y = d.filter(e => U.includes(e.channel_id)), k = c.filter(e => j.includes(e.channel_id)), (0, l.jsxs)("ul", {
                                    children: [y.map(e => (0, l.jsx)("li", {
                                        children: (0, l.jsxs)("div", {
                                            className: R.onboardingChangeLogItemTitle,
                                            children: [(0, l.jsx)(b, {
                                                actionType: p.RWi.CREATE,
                                                targetType: A,
                                                action: T
                                            }), (0, l.jsx)(_.Text, {
                                                variant: "text-md/normal",
                                                children: G.intl.format(G.t.HlGndE, {
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id)), k.map(e => (0, l.jsx)("li", {
                                        children: (0, l.jsxs)("div", {
                                            className: R.onboardingChangeLogItemTitle,
                                            children: [(0, l.jsx)(b, {
                                                actionType: p.RWi.DELETE,
                                                targetType: A,
                                                action: T
                                            }), (0, l.jsx)(_.Text, {
                                                variant: "text-md/normal",
                                                children: G.intl.format(G.t["7pysg6"], {
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id))]
                                });
                            default:
                                return null
                        }
                    }(a, t);
                    return null
                })(), m = e[a.key];
                return function(e) {
                    var t, n;
                    let {
                        changeItem: a,
                        subChanges: i,
                        changeNumber: s,
                        log: o,
                        oldValue: u,
                        newValue: c,
                        change: g
                    } = e;
                    if (null == a) return console.warn("No change string for", g), null;
                    let T = G.intl.format(a, {
                        oldValue: u,
                        newValue: c,
                        count: Array.isArray(c) ? c.length : 0,
                        subtarget: null != (t = null != (n = o.options.subtarget) ? n : g.subtarget) ? t : "",
                        newColorHook: (e, t) => x(t, g.newValue),
                        newColorsHook: (e, t) => {
                            let {
                                primary_color: n,
                                secondary_color: a,
                                tertiary_color: i
                            } = c;
                            return (0, l.jsx)("span", {
                                children: [n, a, i].filter(N.Vq).map((e, n) => (0, l.jsxs)(r.Fragment, {
                                    children: [(0, l.jsx)("span", {
                                        className: R.colorsHook,
                                        children: "".concat(n > 0 ? ", " : "").concat((0, E.Hl)(e).toUpperCase(), " ")
                                    }), x(t, (0, E.Hl)(e))]
                                }, n))
                            }, t)
                        },
                        oldColorHook: (e, t) => x(t, g.oldValue),
                        oldTagHook: (e, t) => (0, l.jsx)(A.A, {
                            tag: u,
                            size: A.A.Sizes.SMALL
                        }, t),
                        newTagHook: (e, t) => (0, l.jsx)(A.A, {
                            tag: c,
                            size: A.A.Sizes.SMALL
                        }, t),
                        oldEmojiHook: (e, t) => (0, l.jsx)(d.A, {
                            emojiId: u
                        }, t),
                        newEmojiHook: (e, t) => (0, l.jsx)(d.A, {
                            emojiId: c
                        }, t),
                        applicationHook: (e, t) => {
                            var n;
                            return (0, l.jsx)(L, {
                                applicationId: null != (n = null == u ? void 0 : u.application_id) ? n : null == c ? void 0 : c.application_id
                            }, t)
                        }
                    });
                    return null == T ? null : (0, l.jsxs)("div", {
                        className: R.detail,
                        style: {
                            position: "relative",
                            top: 1
                        },
                        children: [(0, l.jsxs)(_.Text, {
                            className: R.prefix,
                            variant: "code",
                            color: function(e) {
                                switch (e) {
                                    case p.RWi.CREATE:
                                        return "text-feedback-positive";
                                    case p.RWi.DELETE:
                                        return "text-feedback-critical";
                                    default:
                                        return "text-feedback-warning"
                                }
                            }(o.actionType),
                            children: [s < 10 ? "0".concat(s) : s, (0, l.jsx)("span", {
                                className: R.dash,
                                children: "—"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: R.change,
                            children: [(0, l.jsx)("div", {
                                className: R.changeStr,
                                children: T
                            }), null != i ? (0, l.jsx)("div", {
                                children: i
                            }) : null]
                        })]
                    }, s)
                }({
                    changeItem: "function" == typeof m ? m(a) : m,
                    subChanges: g,
                    changeNumber: ++u,
                    log: t,
                    oldValue: i,
                    newValue: s,
                    change: a
                })
            })).filter(N.Vq);
        return (0, l.jsx)(_.DUT, {
            onClick: a,
            className: i()(R.changeDetails, s),
            children: g
        })
    }, [t, n, a, s]);
    return r.useMemo(() => {
        switch (t.targetType) {
            case p.GaG.GUILD:
                return u(S.UM());
            case p.GaG.CHANNEL:
            case p.GaG.CHANNEL_OVERWRITE:
                return u(S.gW());
            case p.GaG.USER:
                return u(S.qM());
            case p.GaG.ROLE:
                return u(S.nt());
            case p.GaG.ONBOARDING_PROMPT:
                return u(S.Iv());
            case p.GaG.GUILD_ONBOARDING:
                return u(S.Kj());
            case p.GaG.HOME_SETTINGS:
                return u(S.D_());
            case p.GaG.INVITE:
                return u(S.gQ());
            case p.GaG.WEBHOOK:
                return u(S.CI());
            case p.GaG.EMOJI:
                return u(S.XB());
            case p.GaG.STICKER:
                return u(S.eN());
            case p.GaG.INTEGRATION:
                return u(S.rt());
            case p.GaG.STAGE_INSTANCE:
                return u(S.Yx());
            case p.GaG.GUILD_SCHEDULED_EVENT:
                return u(S.X9());
            case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return u(S.Sy());
            case p.GaG.THREAD:
                return u(S.pu());
            case p.GaG.APPLICATION_COMMAND:
                return u(S.$b(t.changes));
            case p.GaG.AUTO_MODERATION_RULE:
                return u(S.qd());
            case p.GaG.GUILD_SOUNDBOARD:
                return u(S.z3());
            case p.GaG.VOICE_CHANNEL_STATUS:
                return u(S.Kw());
            case p.GaG.GUILD_MEMBER_VERIFICATION:
                return u(S.Uq());
            case p.GaG.GUILD_PROFILE:
                return u(S.Df())
        }
    }, [t.targetType, t.changes, u])
}