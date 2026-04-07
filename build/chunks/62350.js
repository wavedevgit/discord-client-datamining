/** chunk id: 62350 params = (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(3026),
    u = n(397927),
    _ = n(846293),
    m = n(933958),
    h = n(793574),
    p = n(688810),
    g = n(572211),
    A = n(178910),
    x = n(354287),
    f = n(112150),
    C = n(574660),
    E = n(429913),
    I = n(713654),
    v = n(21599),
    b = n(734057),
    T = n(71393),
    y = n(576705),
    N = n(287809),
    S = n(954571),
    j = n(486020),
    L = n(860689),
    R = n(168428),
    P = n(652215),
    D = n(768349),
    M = n(172799),
    w = n(985018),
    O = n(478879);

function k(e) {
    let {
        members: t,
        membersOnline: n,
        textColor: l
    } = e, s = [];
    return null != n && n > 0 && s.push((0, i.jsxs)("div", {
        className: O.MY,
        children: [(0, i.jsx)("i", {
            className: O.QD
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: O.U9,
            color: l,
            children: w.intl.format(w.t["LC+S+m"], {
                membersOnline: n
            })
        })]
    }, "onlineCount")), null != t && s.push((0, i.jsxs)("div", {
        className: O.MY,
        children: [(0, i.jsx)("i", {
            className: O.o6
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: O.U9,
            color: l,
            children: w.intl.format(w.t.zRl6XR, {
                count: t
            })
        })]
    }, "memberCount")), (0, i.jsx)("div", {
        className: O.rc,
        children: s
    })
}

function U(e) {
    let {
        channel: t,
        guild: n,
        hasEnded: l,
        textColor: s
    } = e;
    if (null != t && null != n) {
        let e = (0, I.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: a()(O.Ix, {
                [O.v6]: l
            }),
            children: [null != e ? (0, i.jsx)(e, {
                className: O.p,
                size: "xs",
                color: "currentColor"
            }) : null, (0, i.jsx)(c.A, {
                children: (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: s,
                    children: w.intl.format(w.t["dc+LW4"], {
                        channelName: t.name,
                        serverName: n.name
                    })
                })
            })]
        })
    }
    return null != n ? (0, i.jsx)("div", {
        className: a()(O.Ix, {
            [O.v6]: l
        }),
        children: (0, i.jsx)(c.A, {
            children: (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: s,
                children: w.intl.format(w.t.u0vaDE, {
                    guildName: n.name
                })
            })
        })
    }) : null
}

function B(e) {
    let t, n, {
            invite: s,
            message: a,
            getAcceptInviteContext: r
        } = e,
        {
            approximate_member_count: c,
            approximate_presence_count: u,
            target_type: g,
            target_application: A
        } = s;
    o()(g === M.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = l.useCallback(() => {
            S.default.track(P.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: s.inviter?.id
            })
        }, [s.inviter?.id, A.id]),
        f = (0, d.bG)([T.A], () => null != s.guild ? T.A.getGuild(s.guild.id) : null, [s]),
        C = (0, E.A)([A.id])[0],
        I = (0, d.bG)([m.Ay], () => s?.channel != null && m.Ay.getSelfEmbeddedActivityForChannel(s.channel.id)?.applicationId === A.id),
        j = (0, d.bG)([m.Ay], () => (s.channel?.id != null ? m.Ay.getEmbeddedActivitiesForChannel(s.channel.id) : []).some(e => {
            let {
                applicationId: t
            } = e;
            return A.id === t
        })),
        D = b.A.getChannel(s.channel?.id),
        O = (0, d.bG)([y.A], () => null != D && y.A.can(P.xBc.USE_EMBEDDED_ACTIVITIES, D), [D]),
        {
            analyticsLocations: k
        } = (0, p.Ay)(h.A.INVITE_EMBED),
        U = (0, d.yK)([m.Ay], () => null != D ? m.Ay.getEmbeddedActivitiesForChannel(D.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [D, A.id]),
        B = (0, d.yK)([N.default], () => U.map(e => N.default.getUser(e)).filter(e => null != e), [U]),
        F = l.useCallback(() => {
            (0, _.he)({
                invite: s,
                action: "accept",
                inviter_id: a.author.id,
                invite_message_id: a.id,
                invite_instance_id: (0, v._U)(s.code, a.id)
            }, k), _.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: s.code,
                context: r("Invite Button Embed", s.code),
                analyticsLocations: k
            })
        }, [s, a, k, r]),
        H = s.state === P.elq.ACCEPTING,
        V = null != f;
    if (null == f) {
        if (null == s.guild) return (0, i.jsx)(R.A, {});
        f = (0, L.DY)(s.guild)
    }
    t = V ? I ? w.intl.string(w.t.DPfdsq) : j ? w.intl.string(w.t.sqe0hj) : w.intl.string(w.t.RscU7I) : w.intl.string(w.t["2BP08E"]);
    let q = V && !O || V && I;
    return (O || (n = w.intl.string(w.t.hHGrWz)), null == s.code || "" === s.code || null == C) ? null : (0, i.jsx)(p.f5, {
        value: k,
        children: (0, i.jsx)(G, {
            app: C,
            activityUsers: B,
            isMember: V,
            channel: D,
            guild: f,
            message: a,
            members: c,
            membersOnline: u,
            isActivityActive: j,
            submitting: H,
            buttonLabel: t,
            disabled: q,
            disabledReason: n,
            handleAcceptInvite: F,
            onView: x
        })
    })
}

function G(e) {
    let {
        app: t,
        activityUsers: n,
        isMember: s,
        channel: a,
        guild: r,
        message: o,
        members: d,
        membersOnline: c,
        isActivityActive: u,
        submitting: _,
        buttonLabel: m,
        disabled: h,
        disabledReason: p,
        handleAcceptInvite: E,
        onView: I
    } = e, {
        bot: v,
        icon: b
    } = t, T = j.Ay.getApplicationIconURL({
        id: t.id,
        icon: b,
        bot: v
    }), y = (0, C.F)(t), N = (0, f.f)(t), S = n.length, L = l.useMemo(() => [{
        label: m,
        trackingArea: s ? x.kY.PLAY : x.kY.JOIN_SERVER,
        submitting: _,
        disabled: h,
        disabledReason: h && null != p ? p : void 0,
        onClick: E
    }], [m, s, _, h, p, E]);
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: w.intl.string(w.t["7vb6nw"]),
        iconSrc: T,
        ...N,
        onClickBanner: y,
        info: (0, i.jsxs)("div", {
            className: O.QR,
            children: [(0, i.jsx)(U, {
                channel: a,
                guild: r,
                hasEnded: !u,
                textColor: "none"
            }), s ? S > 0 && (0, i.jsx)(A.$, {
                activityUsers: n,
                guildId: r.id,
                activityText: w.intl.formatToPlainString(w.t.yJj035, {
                    count: S
                })
            }) : (0, i.jsx)(k, {
                members: d,
                membersOnline: c,
                textColor: "none"
            })]
        }),
        actions: L,
        onClickContent: y,
        trackingConfig: {
            id: t.id,
            linkType: D.J.ACTIVITY_INVITE,
            onView: I,
            guildId: r.id,
            channelId: a?.id,
            messageId: o.id,
            isDeadEnd: !u
        }
    })
}