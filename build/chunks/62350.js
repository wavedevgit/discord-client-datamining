/** chunk id: 62350 params = (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
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
    N = n(576705),
    y = n(287809),
    S = n(954571),
    j = n(486020),
    L = n(860689),
    R = n(168428),
    P = n(652215),
    D = n(768349),
    M = n(172799),
    w = n(985018),
    k = n(478879);

function O(e) {
    let {
        members: t,
        membersOnline: n,
        textColor: l
    } = e, s = [];
    return null != n && n > 0 && s.push((0, i.jsxs)("div", {
        className: k.MY,
        children: [(0, i.jsx)("i", {
            className: k.QD
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: k.U9,
            color: l,
            children: w.intl.format(w.t["LC+S+m"], {
                membersOnline: n
            })
        })]
    }, "onlineCount")), null != t && s.push((0, i.jsxs)("div", {
        className: k.MY,
        children: [(0, i.jsx)("i", {
            className: k.o6
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: k.U9,
            color: l,
            children: w.intl.format(w.t.zRl6XR, {
                count: t
            })
        })]
    }, "memberCount")), (0, i.jsx)("div", {
        className: k.rc,
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
            className: r()(k.Ix, {
                [k.v6]: l
            }),
            children: [null != e ? (0, i.jsx)(e, {
                className: k.p,
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
        className: r()(k.Ix, {
            [k.v6]: l
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
            message: r,
            getAcceptInviteContext: a
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
        k = (0, d.bG)([N.A], () => null != D && N.A.can(P.xBc.USE_EMBEDDED_ACTIVITIES, D), [D]),
        {
            analyticsLocations: O
        } = (0, p.Ay)(h.A.INVITE_EMBED),
        U = (0, d.yK)([m.Ay], () => null != D ? m.Ay.getEmbeddedActivitiesForChannel(D.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [D, A.id]),
        B = (0, d.yK)([y.default], () => U.map(e => y.default.getUser(e)).filter(e => null != e), [U]),
        F = l.useCallback(() => {
            (0, _.he)({
                invite: s,
                action: "accept",
                inviter_id: r.author.id,
                invite_message_id: r.id,
                invite_instance_id: (0, v._U)(s.code, r.id)
            }, O), _.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: s.code,
                context: a("Invite Button Embed", s.code),
                analyticsLocations: O
            })
        }, [s, r, O, a]),
        H = s.state === P.elq.ACCEPTING,
        V = null != f;
    if (null == f) {
        if (null == s.guild) return (0, i.jsx)(R.A, {});
        f = (0, L.DY)(s.guild)
    }
    t = V ? I ? w.intl.string(w.t.DPfdsq) : j ? w.intl.string(w.t.sqe0hj) : w.intl.string(w.t.RscU7I) : w.intl.string(w.t["2BP08E"]);
    let q = V && !k || V && I;
    return (k || (n = w.intl.string(w.t.hHGrWz)), null == s.code || "" === s.code || null == C) ? null : (0, i.jsx)(p.f5, {
        value: O,
        children: (0, i.jsx)(G, {
            app: C,
            activityUsers: B,
            isMember: V,
            channel: D,
            guild: f,
            message: r,
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
        channel: r,
        guild: a,
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
    }), N = (0, C.F)(t), y = (0, f.f)(t), S = n.length, L = l.useMemo(() => [{
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
        ...y,
        onClickBanner: N,
        info: (0, i.jsxs)("div", {
            className: k.QR,
            children: [(0, i.jsx)(U, {
                channel: r,
                guild: a,
                hasEnded: !u,
                textColor: "none"
            }), s ? S > 0 && (0, i.jsx)(A.$, {
                activityUsers: n,
                guildId: a.id,
                activityText: w.intl.formatToPlainString(w.t.yJj035, {
                    count: S
                })
            }) : (0, i.jsx)(O, {
                members: d,
                membersOnline: c,
                textColor: "none"
            })]
        }),
        actions: L,
        onClickContent: N,
        trackingConfig: {
            id: t.id,
            linkType: D.J.ACTIVITY_INVITE,
            onView: I,
            guildId: a.id,
            channelId: r?.id,
            messageId: o.id,
            isDeadEnd: !u
        }
    })
}