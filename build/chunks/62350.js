/** chunk id: 62350 params = (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
    E = n(429913),
    I = n(713654),
    b = n(734057),
    T = n(71393),
    v = n(576705),
    S = n(287809),
    y = n(954571),
    N = n(486020),
    j = n(860689),
    L = n(168428),
    R = n(652215),
    P = n(768349),
    M = n(172799),
    O = n(985018),
    D = n(373502);

function w(e) {
    let {
        members: t,
        membersOnline: n,
        textColor: r
    } = e, a = [];
    return null != n && n > 0 && a.push((0, i.jsxs)("div", {
        className: D.MY,
        children: [(0, i.jsx)("i", {
            className: D.QD
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: D.U9,
            color: r,
            children: O.intl.format(O.t["LC+S+m"], {
                membersOnline: n
            })
        })]
    }, "onlineCount")), null != t && a.push((0, i.jsxs)("div", {
        className: D.MY,
        children: [(0, i.jsx)("i", {
            className: D.o6
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: D.U9,
            color: r,
            children: O.intl.format(O.t.zRl6XR, {
                count: t
            })
        })]
    }, "memberCount")), (0, i.jsx)("div", {
        className: D.rc,
        children: a
    })
}

function k(e) {
    let {
        channel: t,
        guild: n,
        hasEnded: r,
        textColor: a
    } = e;
    if (null != t && null != n) {
        let e = (0, I.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: l()(D.Ix, {
                [D.v6]: r
            }),
            children: [null != e ? (0, i.jsx)(e, {
                className: D.p,
                size: "xs",
                color: "currentColor"
            }) : null, (0, i.jsx)(c.A, {
                children: (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: a,
                    children: O.intl.format(O.t["dc+LW4"], {
                        channelName: t.name,
                        serverName: n.name
                    })
                })
            })]
        })
    }
    return null != n ? (0, i.jsx)("div", {
        className: l()(D.Ix, {
            [D.v6]: r
        }),
        children: (0, i.jsx)(c.A, {
            children: (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: a,
                children: O.intl.format(O.t.u0vaDE, {
                    guildName: n.name
                })
            })
        })
    }) : null
}

function U(e) {
    let t, n, {
            invite: a,
            message: l,
            getAcceptInviteContext: s
        } = e,
        {
            approximate_member_count: c,
            approximate_presence_count: u,
            target_type: g,
            target_application: A
        } = a;
    o()(g === M.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = r.useCallback(() => {
            y.default.track(R.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: a.inviter?.id
            })
        }, [a.inviter?.id, A.id]),
        f = (0, d.bG)([T.A], () => null != a.guild ? T.A.getGuild(a.guild.id) : null, [a]),
        C = (0, E.A)([A.id])[0],
        I = (0, d.bG)([m.Ay], () => a?.channel != null && m.Ay.getSelfEmbeddedActivityForChannel(a.channel.id)?.applicationId === A.id),
        N = (0, d.bG)([m.Ay], () => (a.channel?.id != null ? m.Ay.getEmbeddedActivitiesForChannel(a.channel.id) : []).some(e => {
            let {
                applicationId: t
            } = e;
            return A.id === t
        })),
        P = b.A.getChannel(a.channel?.id),
        D = (0, d.bG)([v.A], () => null != P && v.A.can(R.xBc.USE_EMBEDDED_ACTIVITIES, P), [P]),
        {
            analyticsLocations: w
        } = (0, p.Ay)(h.A.INVITE_EMBED),
        k = (0, d.yK)([m.Ay], () => null != P ? m.Ay.getEmbeddedActivitiesForChannel(P.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [P, A.id]),
        U = (0, d.yK)([S.default], () => k.map(e => S.default.getUser(e)).filter(e => null != e), [k]),
        B = r.useCallback(() => {
            (0, _.he)({
                invite: a,
                action: "accept",
                inviter_id: l.author.id,
                invite_message_id: l.id
            }, w), _.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: a.code,
                context: s("Invite Button Embed"),
                analyticsLocations: w
            })
        }, [a, l, w, s]),
        F = a.state === R.elq.ACCEPTING,
        H = null != f;
    if (null == f) {
        if (null == a.guild) return (0, i.jsx)(L.A, {});
        f = (0, j.DY)(a.guild)
    }
    t = H ? I ? O.intl.string(O.t.DPfdsq) : N ? O.intl.string(O.t.sqe0hj) : O.intl.string(O.t.RscU7I) : O.intl.string(O.t["2BP08E"]);
    let V = H && !D || H && I;
    return (D || (n = O.intl.string(O.t.hHGrWz)), null == a.code || "" === a.code || null == C) ? null : (0, i.jsx)(p.f5, {
        value: w,
        children: (0, i.jsx)(G, {
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
            handleAcceptInvite: B,
            onView: x
        })
    })
}

function G(e) {
    let {
        app: t,
        activityUsers: n,
        isMember: a,
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
        handleAcceptInvite: E,
        onView: I
    } = e, {
        bot: b,
        icon: T
    } = t, v = N.Ay.getApplicationIconURL({
        id: t.id,
        icon: T,
        bot: b
    }), S = (0, C.F)(t), y = (0, f.f)(t), j = n.length, L = r.useMemo(() => [{
        label: m,
        trackingArea: a ? x.kY.PLAY : x.kY.JOIN_SERVER,
        submitting: _,
        disabled: h,
        disabledReason: h && null != p ? p : void 0,
        onClick: E
    }], [m, a, _, h, p, E]);
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: O.intl.string(O.t["7vb6nw"]),
        iconSrc: v,
        ...y,
        onClickBanner: S,
        info: (0, i.jsxs)("div", {
            className: D.QR,
            children: [(0, i.jsx)(k, {
                channel: l,
                guild: s,
                hasEnded: !u,
                textColor: "none"
            }), a ? j > 0 && (0, i.jsx)(A.$, {
                activityUsers: n,
                guildId: s.id,
                activityText: O.intl.formatToPlainString(O.t.yJj035, {
                    count: j
                })
            }) : (0, i.jsx)(w, {
                members: d,
                membersOnline: c,
                textColor: "none"
            })]
        }),
        actions: L,
        onClickContent: S,
        trackingConfig: {
            id: t.id,
            linkType: P.J.ACTIVITY_INVITE,
            onView: I,
            guildId: s.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u
        }
    })
}