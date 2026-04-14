/** chunk id: 62350 params = (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
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
    I = n(47167),
    v = n(713654),
    b = n(21599),
    T = n(734057),
    y = n(71393),
    S = n(576705),
    N = n(287809),
    j = n(954571),
    L = n(486020),
    R = n(860689),
    P = n(168428),
    w = n(652215),
    D = n(768349),
    M = n(172799),
    k = n(985018),
    O = n(478879);

function U(e) {
    let {
        members: t,
        membersOnline: n,
        textColor: a
    } = e, l = [];
    return null != n && n > 0 && l.push((0, i.jsxs)("div", {
        className: O.MY,
        children: [(0, i.jsx)("i", {
            className: O.QD
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: O.U9,
            color: a,
            children: k.intl.format(k.t["LC+S+m"], {
                membersOnline: n
            })
        })]
    }, "onlineCount")), null != t && l.push((0, i.jsxs)("div", {
        className: O.MY,
        children: [(0, i.jsx)("i", {
            className: O.o6
        }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: O.U9,
            color: a,
            children: k.intl.format(k.t.zRl6XR, {
                count: t
            })
        })]
    }, "memberCount")), (0, i.jsx)("div", {
        className: O.rc,
        children: l
    })
}

function B(e) {
    let {
        channel: t,
        guild: n,
        hasEnded: a,
        textColor: l
    } = e, r = (0, I.Ay)(t);
    if (null != t && null != n) {
        let e = (0, v.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: s()(O.Ix, {
                [O.v6]: a
            }),
            children: [null != e ? (0, i.jsx)(e, {
                className: O.p,
                size: "xs",
                color: "currentColor"
            }) : null, (0, i.jsx)(c.A, {
                children: (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: l,
                    children: k.intl.format(k.t["dc+LW4"], {
                        channelName: r ?? "",
                        serverName: n.name
                    })
                })
            })]
        })
    }
    return null != n ? (0, i.jsx)("div", {
        className: s()(O.Ix, {
            [O.v6]: a
        }),
        children: (0, i.jsx)(c.A, {
            children: (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: l,
                children: k.intl.format(k.t.u0vaDE, {
                    guildName: n.name
                })
            })
        })
    }) : null
}

function G(e) {
    let t, n, {
            invite: l,
            message: s,
            getAcceptInviteContext: r
        } = e,
        {
            approximate_member_count: c,
            approximate_presence_count: u,
            target_type: g,
            target_application: A
        } = l;
    o()(g === M.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = a.useCallback(() => {
            j.default.track(w.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: l.inviter?.id
            })
        }, [l.inviter?.id, A.id]),
        f = (0, d.bG)([y.A], () => null != l.guild ? y.A.getGuild(l.guild.id) : null, [l]),
        C = (0, E.A)([A.id])[0],
        I = (0, d.bG)([m.Ay], () => l?.channel != null && m.Ay.getSelfEmbeddedActivityForChannel(l.channel.id)?.applicationId === A.id),
        v = (0, d.bG)([m.Ay], () => (l.channel?.id != null ? m.Ay.getEmbeddedActivitiesForChannel(l.channel.id) : []).some(e => {
            let {
                applicationId: t
            } = e;
            return A.id === t
        })),
        L = T.A.getChannel(l.channel?.id),
        D = (0, d.bG)([S.A], () => null != L && S.A.can(w.xBc.USE_EMBEDDED_ACTIVITIES, L), [L]),
        {
            analyticsLocations: O
        } = (0, p.Ay)(h.A.INVITE_EMBED),
        U = (0, d.yK)([m.Ay], () => null != L ? m.Ay.getEmbeddedActivitiesForChannel(L.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [L, A.id]),
        B = (0, d.yK)([N.default], () => U.map(e => N.default.getUser(e)).filter(e => null != e), [U]),
        G = a.useCallback(() => {
            (0, _.he)({
                invite: l,
                action: "accept",
                inviter_id: s.author.id,
                invite_message_id: s.id,
                invite_instance_id: (0, b._U)(l.code, s.id)
            }, O), _.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: l.code,
                context: r("Invite Button Embed", l.code),
                analyticsLocations: O
            })
        }, [l, s, O, r]),
        H = l.state === w.elq.ACCEPTING,
        V = null != f;
    if (null == f) {
        if (null == l.guild) return (0, i.jsx)(P.A, {});
        f = (0, R.DY)(l.guild)
    }
    t = V ? I ? k.intl.string(k.t.DPfdsq) : v ? k.intl.string(k.t.sqe0hj) : k.intl.string(k.t.RscU7I) : k.intl.string(k.t["2BP08E"]);
    let q = V && !D || V && I;
    return (D || (n = k.intl.string(k.t.hHGrWz)), null == l.code || "" === l.code || null == C) ? null : (0, i.jsx)(p.f5, {
        value: O,
        children: (0, i.jsx)(F, {
            app: C,
            activityUsers: B,
            isMember: V,
            channel: L,
            guild: f,
            message: s,
            members: c,
            membersOnline: u,
            isActivityActive: v,
            submitting: H,
            buttonLabel: t,
            disabled: q,
            disabledReason: n,
            handleAcceptInvite: G,
            onView: x
        })
    })
}

function F(e) {
    let {
        app: t,
        activityUsers: n,
        isMember: l,
        channel: s,
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
    } = t, T = L.Ay.getApplicationIconURL({
        id: t.id,
        icon: b,
        bot: v
    }), y = (0, C.F)(t), S = (0, f.f)(t), N = n.length, j = a.useMemo(() => [{
        label: m,
        trackingArea: l ? x.kY.PLAY : x.kY.JOIN_SERVER,
        submitting: _,
        disabled: h,
        disabledReason: h && null != p ? p : void 0,
        onClick: E
    }], [m, l, _, h, p, E]);
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: k.intl.string(k.t["7vb6nw"]),
        iconSrc: T,
        ...S,
        onClickBanner: y,
        info: (0, i.jsxs)("div", {
            className: O.QR,
            children: [(0, i.jsx)(B, {
                channel: s,
                guild: r,
                hasEnded: !u,
                textColor: "none"
            }), l ? N > 0 && (0, i.jsx)(A.$, {
                activityUsers: n,
                guildId: r.id,
                activityText: k.intl.formatToPlainString(k.t.yJj035, {
                    count: N
                })
            }) : (0, i.jsx)(U, {
                members: d,
                membersOnline: c,
                textColor: "none"
            })]
        }),
        actions: j,
        onClickContent: y,
        trackingConfig: {
            id: t.id,
            linkType: D.J.ACTIVITY_INVITE,
            onView: I,
            guildId: r.id,
            channelId: s?.id,
            messageId: o.id,
            isDeadEnd: !u
        }
    })
}