/** chunk id: 62350 params = (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(284009),
    o = n.n(s),
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
    I = n(429913),
    E = n(713654),
    b = n(734057),
    v = n(71393),
    T = n(576705),
    y = n(287809),
    S = n(954571),
    N = n(486020),
    j = n(860689),
    L = n(168428),
    R = n(652215),
    P = n(768349),
    w = n(172799),
    M = n(985018),
    D = n(478879);

function k(e) {
    let {
        members: t,
        membersOnline: n,
        textColor: a
    } = e, r = [];
    return null != n && n > 0 && r.push((0, i.jsxs)("div", {
        className: D.MY,
        children: [(0, i.jsx)("i", {
            className: D.QD
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: D.U9,
            color: a,
            children: M.intl.format(M.t["LC+S+m"], {
                membersOnline: n
            })
        })]
    }, "onlineCount")), null != t && r.push((0, i.jsxs)("div", {
        className: D.MY,
        children: [(0, i.jsx)("i", {
            className: D.o6
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: D.U9,
            color: a,
            children: M.intl.format(M.t.zRl6XR, {
                count: t
            })
        })]
    }, "memberCount")), (0, i.jsx)("div", {
        className: D.rc,
        children: r
    })
}

function O(e) {
    let {
        channel: t,
        guild: n,
        hasEnded: a,
        textColor: r
    } = e;
    if (null != t && null != n) {
        let e = (0, E.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: l()(D.Ix, {
                [D.v6]: a
            }),
            children: [null != e ? (0, i.jsx)(e, {
                className: D.p,
                size: "xs",
                color: "currentColor"
            }) : null, (0, i.jsx)(c.A, {
                children: (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: r,
                    children: M.intl.format(M.t["dc+LW4"], {
                        channelName: t.name,
                        serverName: n.name
                    })
                })
            })]
        })
    }
    return null != n ? (0, i.jsx)("div", {
        className: l()(D.Ix, {
            [D.v6]: a
        }),
        children: (0, i.jsx)(c.A, {
            children: (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: r,
                children: M.intl.format(M.t.u0vaDE, {
                    guildName: n.name
                })
            })
        })
    }) : null
}

function U(e) {
    let t, n, {
            invite: r,
            message: l,
            getAcceptInviteContext: s
        } = e,
        {
            approximate_member_count: c,
            approximate_presence_count: u,
            target_type: g,
            target_application: A
        } = r;
    o()(g === w.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = a.useCallback(() => {
            S.default.track(R.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: r.inviter?.id
            })
        }, [r.inviter?.id, A.id]),
        f = (0, d.bG)([v.A], () => null != r.guild ? v.A.getGuild(r.guild.id) : null, [r]),
        C = (0, I.A)([A.id])[0],
        E = (0, d.bG)([m.Ay], () => r?.channel != null && m.Ay.getSelfEmbeddedActivityForChannel(r.channel.id)?.applicationId === A.id),
        N = (0, d.bG)([m.Ay], () => (r.channel?.id != null ? m.Ay.getEmbeddedActivitiesForChannel(r.channel.id) : []).some(e => {
            let {
                applicationId: t
            } = e;
            return A.id === t
        })),
        P = b.A.getChannel(r.channel?.id),
        D = (0, d.bG)([T.A], () => null != P && T.A.can(R.xBc.USE_EMBEDDED_ACTIVITIES, P), [P]),
        {
            analyticsLocations: k
        } = (0, p.Ay)(h.A.INVITE_EMBED),
        O = (0, d.yK)([m.Ay], () => null != P ? m.Ay.getEmbeddedActivitiesForChannel(P.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [P, A.id]),
        U = (0, d.yK)([y.default], () => O.map(e => y.default.getUser(e)).filter(e => null != e), [O]),
        G = a.useCallback(() => {
            (0, _.he)({
                invite: r,
                action: "accept",
                inviter_id: l.author.id,
                invite_message_id: l.id
            }, k), _.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: r.code,
                context: s("Invite Button Embed"),
                analyticsLocations: k
            })
        }, [r, l, k, s]),
        F = r.state === R.elq.ACCEPTING,
        H = null != f;
    if (null == f) {
        if (null == r.guild) return (0, i.jsx)(L.A, {});
        f = (0, j.DY)(r.guild)
    }
    t = H ? E ? M.intl.string(M.t.DPfdsq) : N ? M.intl.string(M.t.sqe0hj) : M.intl.string(M.t.RscU7I) : M.intl.string(M.t["2BP08E"]);
    let V = H && !D || H && E;
    return (D || (n = M.intl.string(M.t.hHGrWz)), null == r.code || "" === r.code || null == C) ? null : (0, i.jsx)(p.f5, {
        value: k,
        children: (0, i.jsx)(B, {
            app: C,
            activityUsers: U,
            isMember: H,
            channel: P,
            guild: f,
            message: l,
            members: c,
            membersOnline: u,
            isActivityActive: N,
            submitting: F,
            buttonLabel: t,
            disabled: V,
            disabledReason: n,
            handleAcceptInvite: G,
            onView: x
        })
    })
}

function B(e) {
    let {
        app: t,
        activityUsers: n,
        isMember: r,
        channel: l,
        guild: s,
        message: o,
        members: d,
        membersOnline: c,
        isActivityActive: u,
        submitting: _,
        buttonLabel: m,
        disabled: h,
        disabledReason: p,
        handleAcceptInvite: I,
        onView: E
    } = e, {
        bot: b,
        icon: v
    } = t, T = N.Ay.getApplicationIconURL({
        id: t.id,
        icon: v,
        bot: b
    }), y = (0, C.F)(t), S = (0, f.f)(t), j = n.length, L = a.useMemo(() => [{
        label: m,
        trackingArea: r ? x.kY.PLAY : x.kY.JOIN_SERVER,
        submitting: _,
        disabled: h,
        disabledReason: h && null != p ? p : void 0,
        onClick: I
    }], [m, r, _, h, p, I]);
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: M.intl.string(M.t["7vb6nw"]),
        iconSrc: T,
        ...S,
        onClickBanner: y,
        info: (0, i.jsxs)("div", {
            className: D.QR,
            children: [(0, i.jsx)(O, {
                channel: l,
                guild: s,
                hasEnded: !u,
                textColor: "none"
            }), r ? j > 0 && (0, i.jsx)(A.$, {
                activityUsers: n,
                guildId: s.id,
                activityText: M.intl.formatToPlainString(M.t.yJj035, {
                    count: j
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
            linkType: P.J.ACTIVITY_INVITE,
            onView: E,
            guildId: s.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u
        }
    })
}