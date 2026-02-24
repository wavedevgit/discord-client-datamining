/** chunk id: 62350, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
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
    w = n(985018),
    k = n(373502);

function D(e) {
    let {
        members: t,
        membersOnline: n,
        textColor: l
    } = e, r = [];
    return null != n && n > 0 && r.push((0, i.jsxs)("div", {
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
    }, "onlineCount")), null != t && r.push((0, i.jsxs)("div", {
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
        children: r
    })
}

function O(e) {
    let {
        channel: t,
        guild: n,
        hasEnded: l,
        textColor: r
    } = e;
    if (null != t && null != n) {
        let e = (0, I.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: a()(k.Ix, {
                [k.v6]: l
            }),
            children: [null != e ? (0, i.jsx)(e, {
                className: k.p,
                size: "xs",
                color: "currentColor"
            }) : null, (0, i.jsx)(c.A, {
                children: (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: r,
                    children: w.intl.format(w.t["dc+LW4"], {
                        channelName: t.name,
                        serverName: n.name
                    })
                })
            })]
        })
    }
    return null != n ? (0, i.jsx)("div", {
        className: a()(k.Ix, {
            [k.v6]: l
        }),
        children: (0, i.jsx)(c.A, {
            children: (0, i.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: r,
                children: w.intl.format(w.t.u0vaDE, {
                    guildName: n.name
                })
            })
        })
    }) : null
}

function U(e) {
    let t, n, {
            invite: r,
            message: a,
            getAcceptInviteContext: s
        } = e,
        {
            approximate_member_count: c,
            approximate_presence_count: u,
            target_type: g,
            target_application: A
        } = r;
    o()(g === M.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = l.useCallback(() => {
            y.default.track(R.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: r.inviter?.id
            })
        }, [r.inviter?.id, A.id]),
        f = (0, d.bG)([T.A], () => null != r.guild ? T.A.getGuild(r.guild.id) : null, [r]),
        C = (0, E.A)([A.id])[0],
        I = (0, d.bG)([m.Ay], () => r?.channel != null && m.Ay.getSelfEmbeddedActivityForChannel(r.channel.id)?.applicationId === A.id),
        N = (0, d.bG)([m.Ay], () => (r.channel?.id != null ? m.Ay.getEmbeddedActivitiesForChannel(r.channel.id) : []).some(e => {
            let {
                applicationId: t
            } = e;
            return A.id === t
        })),
        P = b.A.getChannel(r.channel?.id),
        k = (0, d.bG)([v.A], () => null != P && v.A.can(R.xBc.USE_EMBEDDED_ACTIVITIES, P), [P]),
        {
            analyticsLocations: D
        } = (0, p.Ay)(h.A.INVITE_EMBED),
        O = (0, d.yK)([m.Ay], () => null != P ? m.Ay.getEmbeddedActivitiesForChannel(P.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [P, A.id]),
        U = (0, d.yK)([S.default], () => O.map(e => S.default.getUser(e)).filter(e => null != e), [O]),
        B = l.useCallback(() => {
            (0, _.he)({
                invite: r,
                action: "accept",
                inviter_id: a.author.id,
                invite_message_id: a.id
            }, D), _.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: r.code,
                context: s("Invite Button Embed"),
                analyticsLocations: D
            })
        }, [r, a, D, s]),
        F = r.state === R.elq.ACCEPTING,
        H = null != f;
    if (null == f) {
        if (null == r.guild) return (0, i.jsx)(L.A, {});
        f = (0, j.DY)(r.guild)
    }
    t = H ? I ? w.intl.string(w.t.DPfdsq) : N ? w.intl.string(w.t.sqe0hj) : w.intl.string(w.t.RscU7I) : w.intl.string(w.t["2BP08E"]);
    let V = H && !k || H && I;
    return (k || (n = w.intl.string(w.t.hHGrWz)), null == r.code || "" === r.code || null == C) ? null : (0, i.jsx)(p.f5, {
        value: D,
        children: (0, i.jsx)(G, {
            app: C,
            activityUsers: U,
            isMember: H,
            channel: P,
            guild: f,
            message: a,
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
        isMember: r,
        channel: a,
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
    }), S = (0, C.F)(t), y = (0, f.f)(t), j = n.length, L = l.useMemo(() => [{
        label: m,
        trackingArea: r ? x.kY.PLAY : x.kY.JOIN_SERVER,
        submitting: _,
        disabled: h,
        disabledReason: h && null != p ? p : void 0,
        onClick: E
    }], [m, r, _, h, p, E]);
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: w.intl.string(w.t["7vb6nw"]),
        iconSrc: v,
        ...y,
        onClickBanner: S,
        info: (0, i.jsxs)("div", {
            className: k.QR,
            children: [(0, i.jsx)(O, {
                channel: a,
                guild: s,
                hasEnded: !u,
                textColor: "none"
            }), r ? j > 0 && (0, i.jsx)(A.$, {
                activityUsers: n,
                guildId: s.id,
                activityText: w.intl.formatToPlainString(w.t.yJj035, {
                    count: j
                })
            }) : (0, i.jsx)(D, {
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
            channelId: a?.id,
            messageId: o.id,
            isDeadEnd: !u
        }
    })
}