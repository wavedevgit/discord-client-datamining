/** chunk id: 291247 params = (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(938796);
var l = n(627968),
    i = n(64700),
    a = n(665260),
    r = n(311907),
    d = n(397927),
    s = n(262577),
    o = n(686956),
    u = n(80682),
    c = n(991982),
    A = n(838111),
    g = n(870136),
    b = n(351001),
    m = n(504049),
    E = n(734057),
    f = n(696451),
    h = n(71393),
    x = n(576705),
    C = n(287809),
    M = n(977997),
    p = n(562153),
    j = n(121127),
    v = n(652215),
    I = n(200700),
    S = n(340837),
    y = n(985018);

function D(e, t, D, T, O) {
    let _ = i.useMemo(() => ({
            [t]: [e.id]
        }), [t, e.id]),
        L = null != T ? [T] : [];
    (0, u.Eq)(_, "useAdminActionItems"), (0, r.bG)([x.A], () => x.A.getGuildVersion(t), [t]);
    let N = (0, r.bG)([h.A], () => h.A.getGuild(t), [t]),
        U = (0, r.bG)([C.default], () => C.default.getCurrentUser()?.id === e.id, [e.id]),
        G = (0, r.bG)([f.Ay], () => f.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        R = (0, r.bG)([E.A], () => E.A.getChannel(D), [D]),
        [, B] = (0, g.Ay)(e.id, t),
        V = R?.isGuildStageVoice(),
        {
            muted: P,
            deafened: k,
            suppressed: w,
            voiceChannelId: F
        } = (0, r.cf)([M.A], () => {
            let n = M.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId
            }
        }),
        K = (0, r.bG)([f.Ay], () => f.Ay.getMember(t, e.id)),
        W = (0, j.A)({
            userId: e.id,
            guildId: t,
            channelId: D,
            location: T,
            appContext: O
        }),
        X = (0, m.$9)(t, {
            location: T,
            targetUserId: e.id
        }),
        H = (0, A.A)(t, e.id),
        Y = null != F && null != D && x.A.canWithPartialContext(v.xBc.VIEW_CHANNEL, {
            channelId: F
        }) && !G ? [(!V || !w) && x.A.canWithPartialContext(v.xBc.MUTE_MEMBERS, {
            channelId: D
        }) ? (0, l.jsx)(d.sLh, {
            id: "voice-mute",
            label: y.intl.string(y.t.e9e9Ua),
            checked: P,
            color: "danger",
            action: () => {
                !1 === P && X(m.Nj.MUTE), o.A.setServerMute(t, e.id, !P)
            }
        }, "voice-mute") : null, (!V || !w) && x.A.canWithPartialContext(v.xBc.DEAFEN_MEMBERS, {
            channelId: D
        }) ? (0, l.jsx)(d.sLh, {
            id: "voice-deafen",
            label: y.intl.string(y.t.hMA2GE),
            checked: k,
            color: "danger",
            action: () => o.A.setServerDeaf(t, e.id, !k)
        }, "voice-deafen") : null, !U && null != N && x.A.canWithPartialContext(v.xBc.MOVE_MEMBERS, {
            channelId: D
        }) ? (0, l.jsx)(d.Drp, {
            id: "voice-disconnect",
            label: y.intl.string(y.t["/jERiG"]),
            color: "danger",
            action: () => o.A.setChannel(t, e.id, null)
        }, "voice-disconnect") : null] : [],
        J = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey) try {
                await s.A.setCommunicationDisabledDuration(n, l, I.DisableCommunicationDuration.DURATION_60_SEC, null, T), X(m.Nj.TIMEOUT), (0, d.showToast)((0, d.createToast)(y.intl.formatToPlainString(y.t.O9C3Nt, {
                    user: p.Ay.getName(n, null, e) ?? ""
                }), d.ToastType.SUCCESS))
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(y.intl.string(y.t.epyCuh), d.ToastType.FAILURE))
            }
        }, q = null, z = null != N && x.A.canManageUser(v.xBc.MODERATE_MEMBERS, e, N) && x.A.canManageUser(v.xBc.KICK_MEMBERS, e, N) && x.A.canManageUser(v.xBc.BAN_MEMBERS, e, N), Z = null != N && (x.A.canManageUser(v.xBc.MANAGE_GUILD, e, N) || x.A.canManageUser(v.xBc.MANAGE_ROLES, e, N));
    return !U && null != N && null != K && null != K.joinedAt && (z || Z) && N.features.has(v.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && (q = (0, a.Lt)(K.flags ?? 0, S.D.BYPASSES_VERIFICATION) ? (0, l.jsx)(d.Drp, {
        id: "verify",
        label: y.intl.string(y.t.NbhSI7),
        action: () => o.A.setMemberFlags(N.id, e.id, (0, a.lA)(K.flags ?? 0, S.D.BYPASSES_VERIFICATION, !1))
    }, "verify") : (0, l.jsx)(d.Drp, {
        id: "verify",
        label: y.intl.string(y.t["6QlTeK"]),
        action: () => o.A.setMemberFlags(N.id, e.id, (0, a.lA)(K.flags ?? 0, S.D.BYPASSES_VERIFICATION, !0))
    }, "verify")), [W, q, ...Y, ...U || null == N ? [] : [H && !G ? B ? (0, l.jsx)(d.Drp, {
        id: "removetimeout",
        label: y.intl.formatToPlainString(y.t.csKeta, {
            user: e.username
        }),
        color: "danger",
        action: () => {
            (0, c.Y)({
                guildId: t,
                userId: e.id,
                anaylticsLocations: L
            })
        }
    }, "removetimeout") : (0, l.jsx)(d.Drp, {
        id: "timeout",
        label: y.intl.formatToPlainString(y.t.OhsOy0, {
            user: e.username
        }),
        color: "danger",
        action: n => {
            if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
            (0, c.R)({
                guildId: t,
                userId: e.id,
                anaylticsLocations: L
            })
        }
    }, "timeout") : null, (0, b.L7)(e, N) ? (0, l.jsx)(d.Drp, {
        id: "kick",
        label: y.intl.formatToPlainString(y.t["9l/iTS"], {
            user: e.username
        }),
        color: "danger",
        action: () => (0, d.mMO)(async () => {
            let {
                default: i
            } = await n.e("40243").then(n.bind(n, 324785));
            return n => (0, l.jsx)(i, {
                ...n,
                location: T,
                guildId: t,
                user: e
            })
        })
    }, "kick") : null, (0, b.EZ)(e, N) ? (0, l.jsx)(d.Drp, {
        id: "ban",
        label: y.intl.formatToPlainString(y.t.WnpUBi, {
            user: e.username
        }),
        color: "danger",
        action: () => (0, d.mMO)(async () => {
            let {
                default: i
            } = await n.e("2504").then(n.bind(n, 333179));
            return n => (0, l.jsx)(i, {
                ...n,
                location: T,
                guildId: t,
                user: e
            })
        })
    }, "ban") : null]]
}