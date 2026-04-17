/** chunk id: 111549 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => et
}), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    c = n(80703),
    d = n(311907),
    u = n(362474),
    _ = n(397927),
    h = n(73153),
    g = n(846293),
    p = n(198982),
    m = n(964486),
    A = n(475743),
    f = n(17841),
    E = n(829691),
    x = n(854378),
    I = n(359438),
    N = n(383302),
    v = n(10088),
    T = n(921037),
    j = n(21599),
    C = n(942614),
    S = n(976860),
    y = n(210714),
    b = n(961350),
    R = n(650048),
    O = n(71393),
    L = n(299091),
    w = n(954571),
    k = n(975571),
    D = n(4274),
    U = n(877062),
    P = n(890698),
    B = n(129851),
    G = n(229),
    M = n(652215);
n(436317);
var F = n(172799),
    V = n(771016),
    W = n(396574),
    H = n(985018),
    K = n(818050);
d.Ay.initialize();
let z = "register",
    Q = "login";

function q(e) {
    let {
        message: t,
        onClick: n,
        invite: s
    } = e, r = s?.guild_scheduled_event != null;
    return W.VP ? (0, i.jsx)("div", {
        className: r ? K.QX : K.eT,
        children: (0, i.jsx)(_.Button, {
            text: t,
            onClick: n,
            variant: r ? "active" : "primary",
            fullWidth: !0
        })
    }) : (0, i.jsx)(x.KE, {
        className: K.eT
    })
}

function Y(e) {
    let {
        invite: t,
        handleAccept: n
    } = e, s = null != t.guild_scheduled_event ? (0, i.jsx)(I.X, {
        channel: t.channel,
        guildScheduledEvent: t.guild_scheduled_event
    }) : (0, i.jsx)("div", {
        className: K.S3,
        children: (0, i.jsx)(P.A, {
            invite: t
        })
    }), r = null != t.guild_scheduled_event && null != t.guild ? (0, i.jsx)(x.Ay, {
        className: K.QX,
        children: (0, i.jsx)(N.N, {
            guild: t.guild,
            onlineCount: t.approximate_presence_count
        })
    }) : null;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(x.Ay, {
            children: [s, (0, i.jsx)(q, {
                message: H.intl.string(H.t.ohMvm1),
                onClick: n,
                invite: t
            })]
        }), r]
    })
}

function X(e) {
    let {
        invite: t,
        onContinue: n
    } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [(0, i.jsx)(P.A, {
            invite: t
        }), W.VP ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: K.QX,
                children: (0, i.jsx)(_.Button, {
                    text: H.intl.string(H.t.UQvCf7),
                    onClick: () => {
                        w.default.track(M.HAw.INVITE_CTA_CLICKED, {
                            action: "open_app",
                            invite_code: t.code,
                            guild_id: t.guild?.id
                        }), g.Ay.openNativeAppModal(t.code)
                    },
                    variant: "primary",
                    fullWidth: !0
                })
            }), (0, i.jsx)("div", {
                className: K.Ot,
                children: (0, i.jsx)(_.Button, {
                    text: H.intl.string(H.t["2ixEBi"]),
                    onClick: () => {
                        w.default.track(M.HAw.INVITE_CTA_CLICKED, {
                            action: "continue_in_browser",
                            invite_code: t.code,
                            guild_id: t.guild?.id
                        }), n?.()
                    },
                    variant: "secondary",
                    fullWidth: !0
                })
            })]
        }) : (0, i.jsx)(x.KE, {
            className: K.eT
        })]
    })
}

function J(e) {
    let {
        title: t
    } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [(0, i.jsx)(x.hE, {
            children: t
        }), (0, i.jsx)(x.CK, {})]
    })
}

function $(e) {
    let {
        invite: t,
        error: n,
        handleAccept: s,
        handleDefaultTransition: r
    } = e;
    return (0, i.jsx)(x.Ay, {
        children: (0, i.jsxs)(_.BJc, {
            direction: "vertical",
            gap: 24,
            children: [(0, i.jsx)(P.A, {
                invite: t,
                error: n?.message
            }), n?.code === M.t02.INVALID_CANNOT_FRIEND_SELF ? (0, i.jsx)(q, {
                invite: t,
                message: H.intl.string(H.t.fIv16B),
                onClick: r
            }) : (0, i.jsx)(q, {
                invite: t,
                message: H.intl.string(H.t.ohMvm1),
                onClick: s
            })]
        })
    })
}

function Z(e) {
    let {
        banned: t,
        handleDefaultTransition: n
    } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [(0, i.jsx)(x.hE, {
            className: l()(K.Ot, K.QB),
            children: H.intl.string(H.t.kux01N)
        }), (0, i.jsx)(x.tK, {
            children: t ? H.intl.string(H.t["5AkWAd"]) : H.intl.string(H.t["+qUJAj"])
        }), (0, i.jsx)(q, {
            message: H.intl.string(H.t.fIv16B),
            onClick: n
        }), (0, i.jsx)("div", {
            className: K.Ot,
            style: {
                textAlign: "left"
            },
            children: (0, i.jsx)(_.QWc, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: H.intl.string(H.t.urIwn4),
                onClick: () => window.open(k.A.getArticleURL(M.MVz.INVALID_INVITES), "_blank")
            })
        })]
    })
}

function ee(e) {
    let {
        handleDefaultTransition: t
    } = e;
    return (0, i.jsxs)(x.Ay, {
        children: [(0, i.jsx)(x.hE, {
            children: H.intl.string(H.t.fOc4gn)
        }), (0, i.jsx)(q, {
            message: H.intl.string(H.t.fIv16B),
            onClick: t
        })]
    })
}

function et(e) {
    let {
        inviteKey: t,
        location: n,
        transitionTo: r,
        login: l
    } = e, _ = (0, d.bG)([L.A], () => L.A.getInvite(t)), x = (0, d.bG)([v.A], () => v.A.getState(t)), I = (0, d.bG)([b.default], () => b.default.isAuthenticated()), N = (0, d.bG)([R.A], () => R.A.defaultRoute), k = (0, d.bG)([f.A], () => f.A.isUnderageAnonymous()), [P, K] = s.useState(null), [q, et] = s.useState(!1);
    s.useLayoutEffect(() => {
        (x === M.fAW.OPEN || _?.state === M.elq.APP_OPENED) && et(!0)
    }, [_?.state, x]);
    let en = l ? Q : z,
        ei = s.useCallback(e => g.Ay.getInviteContext(e, _), [_]),
        es = s.useCallback(e => {
            null != _ && (null != _.channel || e?.channel != null) && (_.guild?.id != null ? r(M.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(_.code)) : g.Ay.transitionToInvite(e ?? _, r))
        }, [_, r]),
        er = s.useCallback(() => {
            K(null), g.Ay.acceptInvite({
                inviteKey: t,
                context: ei(M.S3d.INVITE),
                skipOnboarding: !0,
                callback: e => {
                    (0, E.v)(e), null != e.channel && g.Ay.openApp(t, e.channel.id)
                }
            }).catch(e => {
                if (e instanceof p.Wl || e instanceof p.LG) {
                    let t = (0, D.s)(e.code);
                    K({
                        code: e.code,
                        message: t
                    })
                } else K({
                    code: e.code,
                    message: H.intl.string(H.t.dDZRdy)
                })
            })
        }, [t, ei]),
        el = s.useCallback(() => {
            r(N)
        }, [N, r]);
    if ((0, m.Ay)(() => {
            let e = b.default.getAnalyticsToken();
            if (null != e && h.h.dispatch({
                    type: "SET_ANALYTICS_TOKEN",
                    analyticsToken: e,
                    userId: b.default.getId()
                }), w.default.track(M.HAw.INVITE_VIEWED, {
                    invite_code: t
                }, {
                    flush: !0
                }), (0, y.d)("invite"), W.VP || U.A.launch("discord://" + M.BVt.INVITE(t), () => void 0), !l && k) {
                let {
                    baseCode: e
                } = (0, j.y$)(t);
                (0, S.bG)(M.BVt.INVITE_LOGIN(e))
            }
        }), s.useEffect(() => {
            _?.state === M.elq.APP_NOT_OPENED && es()
        }, [_?.state, es]), function(e) {
            let {
                invite: t,
                inviteKey: n,
                authenticated: i,
                nativeAppState: r,
                mode: l,
                getAcceptInviteContext: d,
                handleContinue: u,
                transitionTo: _
            } = e, h = (0, A.A)(i), p = (0, A.A)(r);
            s.useEffect(() => {
                if (l === Q && i && !1 === h) {
                    let e = b.default.getFingerprint();
                    if (null != e) {
                        let i = (0, c.d)(e);
                        w.default.track(M.HAw.INVITE_LOGIN_SUCCESSFUL, {
                            invite_code: (0, j.m0)(n),
                            guild_id: t?.guild?.id,
                            channel_id: t?.channel?.id,
                            inviter_id: t?.inviter?.id,
                            prev_user_id: i
                        })
                    }
                    g.Ay.acceptInvite({
                        inviteKey: n,
                        context: d(M.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: u
                    })
                }
            }, [i, h, l, d, u, t, n]), s.useEffect(() => {
                if (null != t && l === z && i && !1 === h) {
                    let {
                        channel: e
                    } = t;
                    if (null != e)
                        if ((0, C.C)(V.zY.INVITE_UNCLAIMED), null != t.guild) {
                            let e = (0, o.Lt)(t.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                                n = t.guild.features?.includes(M.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && t.guild.features?.includes(M.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
                            !e && n ? _(M.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id)) : _(M.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        } else g.Ay.transitionToInvite(t, _)
                }
            }, [t, i, h, _, l]), s.useEffect(() => {
                null != t && r !== p && r === M.fAW.OPEN && w.default.track(M.HAw.INVITE_APP_INVOKED, {
                    invite_code: (0, j.m0)(n),
                    guild_id: t.guild?.id,
                    channel_id: t.channel?.id,
                    inviter_id: t.inviter?.id,
                    user_is_member: null != t.guild && null != O.A.getGuild(t.guild.id),
                    size_total: t.approximate_member_count,
                    invite_type: null != t.type ? F.Xd[t.type] : void 0
                })
            }, [t, r, p, n])
        }({
            invite: _,
            inviteKey: t,
            authenticated: I,
            nativeAppState: x,
            mode: en,
            getAcceptInviteContext: ei,
            handleContinue: es,
            transitionTo: r
        }), null == _) return null;
    if (q || x === M.fAW.OPEN || _.state === M.elq.APP_OPENED) return (0, i.jsx)(X, {
        invite: _,
        onContinue: es
    });
    let {
        state: ea
    } = _;
    if (ea === M.elq.APP_NOT_OPENED) return (0, i.jsx)(ee, {
        handleDefaultTransition: el
    });
    if ([M.elq.RESOLVING, M.elq.ACCEPTING, M.elq.APP_OPENING].includes(ea)) {
        let e = ea === M.elq.ACCEPTING ? H.intl.string(H.t["6wsY16"]) : (M.elq.RESOLVING, H.intl.string(H.t["Z+hCVU"]));
        return (0, i.jsx)(J, {
            title: e
        })
    }
    return ea === M.elq.EXPIRED ? (0, i.jsx)(Z, {
        banned: !1,
        handleDefaultTransition: el
    }) : ea === M.elq.BANNED ? (0, i.jsx)(Z, {
        banned: !0,
        handleDefaultTransition: el
    }) : ea === M.elq.ERROR ? (0, i.jsx)($, {
        invite: _,
        error: P,
        handleAccept: er,
        handleDefaultTransition: el
    }) : ea === M.elq.RESOLVED ? I && (0, o.Lt)(_.flags ?? 0, a.Q.IS_GUEST_INVITE) ? (g.Ay.openApp(_.code), u.u.set(T.B, _.code), (0, i.jsx)(X, {
        invite: _,
        onContinue: () => r(M.BVt.APP)
    })) : I || !W.VP ? (0, i.jsx)(Y, {
        invite: _,
        handleAccept: er
    }) : en === Q ? (0, i.jsx)(B.A, {
        invite: _,
        transitionTo: r,
        location: n
    }) : (0, i.jsx)(G.A, {
        invite: _,
        onLoginStart: () => {
            w.default.track(M.HAw.INVITE_LOGIN, {
                invite_code: _?.code,
                guild_id: _?.guild?.id,
                channel_id: _?.channel?.id,
                inviter_id: _?.inviter?.id
            })
        },
        location: n,
        transitionTo: r
    }) : null
}