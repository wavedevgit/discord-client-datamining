/** Chunk was on 1113 **/
/** chunk id: 647668, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => F
}), n(114821), n(339614), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    h = n(933958),
    p = n(104171),
    g = n(297334),
    f = n(454938),
    m = n(714991),
    b = n(57991),
    A = n(513461),
    y = n(199285),
    O = n(347951),
    _ = n(164956),
    j = n(392567),
    x = n(63995),
    v = n(69407),
    E = n(624265),
    C = n(970278),
    S = n(21119),
    I = n(907459),
    N = n(616356),
    T = n(808728),
    P = n(994500),
    w = n(543465),
    R = n(287809),
    D = n(607567),
    L = n(652215),
    M = n(985018),
    G = n(653750);

function k(e, t, n) {
    return 0 === t.length ? null : (0, r.jsxs)("div", {
        className: G.nM,
        children: [(0, r.jsx)(e, {
            className: G.RI,
            color: "currentColor"
        }), (0, r.jsx)(p.Ay, {
            guildId: n,
            users: t,
            max: 6
        })]
    })
}

function U(e) {
    let {
        muteConfig: t,
        className: n
    } = e;
    return (null == t ? void 0 : t.end_time) == null ? (0, r.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: M.intl.string(M.t.fpKdS1)
    }) : (0, r.jsx)(j.A, {
        muteConfig: t,
        className: n
    })
}

function V(e) {
    let t, n, i, a, u, f, m, b, A, y, O, _, j, M, V, B, H, F, K, Y, {
            guild: W
        } = e,
        z = W.id,
        {
            voiceUsersToShow: q,
            stageSpeakers: X,
            numStageListeners: J,
            streamUsersToShow: Q,
            embeddedActivitiesUsers: Z
        } = (t = W.id, n = (0, c.yK)([T.Ay, C.A], () => [...T.Ay.getChannels(t)[T.vM].filter(e => {
            let {
                channel: t
            } = e;
            return t.type === L.rbe.GUILD_VOICE
        }).map(e => {
            let {
                channel: t
            } = e;
            return t.id
        }), ...Object.values(C.A.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]), i = (0, E.Ay)(t), a = l.useMemo(() => i.map(e => e.id), [i]), u = (0, c.bG)([D.Ay], () => D.Ay.getVoiceStates(t), [t]), f = (0, c.yK)([P.A], () => P.A.getBlockedOrIgnoredIDs()), m = o().flatMap(n, e => {
            var t;
            if (e === W.afkChannelId) return [];
            let n = (null != (t = u[e]) ? t : []).map(e => {
                let {
                    user: t
                } = e;
                return t
            });
            return (0, g.aw)(n, f)
        }), b = (0, c.yK)([x.A], () => o().flatMap(a, e => {
            if (e === W.afkChannelId) return [];
            let t = x.A.getMutableParticipants(e, v.ip.SPEAKER).filter(e => e.type === v.wY.VOICE).map(e => {
                let {
                    user: t
                } = e;
                return t
            });
            return (0, g.aw)(t, f)
        })), A = (0, c.bG)([x.A], () => {
            let e = 0;
            for (let t of a) e += x.A.getParticipantCount(t, v.ip.AUDIENCE);
            return e
        }), y = (0, c.yK)([N.A], () => {
            let e = N.A.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
            return (0, g.F7)(e, f)
        }, [f, t]), O = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
            return (0, g.F7)(e, f)
        }, [t, f]), _ = (0, c.yK)([R.default], () => {
            let e = O.map(e => R.default.getUser(e));
            return (0, g.aw)(e)
        }, [O]), j = (0, c.yK)([R.default], () => y.map(e => R.default.getUser(e)), [y]), M = m.filter(e => !y.includes(e.id) && !O.includes(e.id)), V = (0, g.aw)(M), B = j.filter(e => null != e && !O.includes(e.id)), H = (0, c.bG)([S.A], () => S.A.getUserAffinitiesMap(), []), F = l.useMemo(() => (0, I.L)(V, H, "GuildTooltip - nonBlockedUsers"), [V, H]), K = l.useMemo(() => (0, I.L)(b, H, "GuildTooltip - stageSpeakers"), [b, H]), Y = l.useMemo(() => (0, I.L)(B, H, "GuildTooltip - streamUsers"), [B, H]), {
            voiceUsersToShow: F,
            stageSpeakers: K,
            numStageListeners: A,
            streamUsersToShow: Y,
            embeddedActivitiesUsers: l.useMemo(() => (0, I.L)(_, H, "GuildTooltip - embeddedActivitiesUsers"), [_, H]),
            hasActivity: b.length > 0 || M.length > 0 || B.length > 0 || _.length > 0
        }),
        $ = k(d.HKD, q, z),
        ee = 0 === X.length ? null : (0, r.jsxs)("div", {
            className: G.nM,
            children: [(0, r.jsx)(d.qux, {
                size: "lg",
                color: "currentColor",
                className: G.RI
            }), (0, r.jsx)(p.Ay, {
                guildId: z,
                users: X,
                max: 3
            }), (0, r.jsxs)("div", {
                className: G.GZ,
                children: [(0, r.jsx)(d.LoC, {
                    size: "xs",
                    color: "currentColor"
                }), (0, r.jsx)(d.Text, {
                    className: G._I,
                    color: "text-default",
                    variant: "text-xs/normal",
                    children: J
                })]
            })]
        }),
        et = k(d.Fzq, Q, z),
        en = k(d.k9F, Z, z),
        {
            isMuted: er,
            muteConfig: el
        } = (0, c.cf)([w.Ay], () => ({
            isMuted: w.Ay.isMuted(z),
            muteConfig: w.Ay.getMuteConfig(z)
        }), [z]);
    return (0, r.jsxs)(r.Fragment, {
        children: [ee, $, et, en, er ? (0, r.jsx)(U, {
            muteConfig: el,
            className: s()(G.LM, {
                [G.Sx]: null != $ || null != et
            })
        }) : null]
    })
}

function B(e) {
    let {
        guildJoinRequestStatus: t
    } = e;
    return (0, r.jsx)(d.Text, {
        className: G.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: function(e) {
            switch (e) {
                case A.B5.SUBMITTED:
                    return M.intl.string(M.t["9KFC98"]);
                case A.B5.REJECTED:
                    return M.intl.string(M.t["TQY/Rd"]);
                case A.B5.APPROVED:
                    return M.intl.string(M.t.WXHcq5);
                default:
                    return M.intl.string(M.t.fjHFC8)
            }
        }(t)
    })
}

function H(e) {
    let {
        guild: t
    } = e, n = (0, f.A)(t), l = (0, y.a)(t), i = null != l ? (0, r.jsx)(B, {
        guildJoinRequestStatus: l
    }) : null, a = (0, r.jsx)(V, {
        guild: t
    }), o = (0, c.bG)([_.A], () => _.A.isViewingRoles(t.id)), u = (0, O.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(G.nM, G.Dl),
            children: [n ? (0, r.jsx)(b.A, {
                guild: t,
                className: G.WX
            }) : (0, r.jsx)(m.A, {
                guild: t,
                size: 20,
                className: G.aL
            }), (0, r.jsx)("span", {
                className: s()(G.cN, G.NT),
                children: t.name
            })]
        }), u ? (0, r.jsx)(d.Text, {
            className: G.Ef,
            color: "text-default",
            variant: "text-sm/medium",
            children: M.intl.string(M.t["2n0/Fk"])
        }) : null, o ? (0, r.jsx)(d.Text, {
            className: G.BT,
            color: "text-default",
            variant: "text-xs/normal",
            children: M.intl.string(M.t["5LwN89"])
        }) : null != i ? i : a]
    })
}

function F(e) {
    let {
        guild: t,
        disabled: n = !1,
        "aria-label": i = !1,
        children: s
    } = e, a = l.useMemo(() => n ? null : (0, r.jsx)("div", {
        className: G.A_,
        children: (0, r.jsx)(H, {
            guild: t
        })
    }), [n, t]);
    return (0, r.jsx)(u.m_, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s
    })
}