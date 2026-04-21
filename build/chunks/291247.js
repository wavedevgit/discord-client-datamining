/** chunk id: 291247 params = (module,exports,require) **/
n.d(t, {
    A: () => y
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
    M = n(287809),
    C = n(977997),
    p = n(562153),
    I = n(121127),
    j = n(652215),
    v = n(200700),
    D = n(340837),
    S = n(985018);

function y(e, t, y, T, O) {
    let _ = i.useMemo(() => ({
            [t]: [e.id]
        }), [t, e.id]),
        N = null != T ? [T] : [];
    (0, u.Eq)(_, "useAdminActionItems"), (0, r.bG)([x.A], () => x.A.getGuildVersion(t), [t]);
    let L = (0, r.bG)([h.A], () => h.A.getGuild(t), [t]),
        U = (0, r.bG)([M.default], () => M.default.getCurrentUser()?.id === e.id, [e.id]),
        G = (0, r.bG)([f.Ay], () => f.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
        R = (0, r.bG)([E.A], () => E.A.getChannel(y), [y]),
        [, B] = (0, g.Ay)(e.id, t),
        V = R?.isGuildStageVoice(),
        {
            muted: P,
            deafened: k,
            suppressed: F,
            voiceChannelId: w
        } = (0, r.cf)([C.A], () => {
            let n = C.A.getVoiceState(t, e.id);
            return {
                muted: n?.mute ?? !1,
                deafened: n?.deaf ?? !1,
                suppressed: n?.suppress ?? !1,
                voiceChannelId: n?.channelId
            }
        }),
        K = (0, r.bG)([f.Ay], () => f.Ay.getMember(t, e.id)),
        W = (0, I.A)({
            userId: e.id,
            guildId: t,
            channelId: y,
            location: T,
            appContext: O
        }),
        X = (0, m.$9)(t, {
            location: T,
            targetUserId: e.id
        }),
        H = (0, A.A)(t, e.id),
        Y = null != w && null != y && x.A.canWithPartialContext(j.xBc.VIEW_CHANNEL, {
            channelId: w
        }) && !G ? [(!V || !F) && x.A.canWithPartialContext(j.xBc.MUTE_MEMBERS, {
            channelId: y
        }) ? (0, l.jsx)(d.sLh, {
            id: "voice-mute",
            label: S.intl.string(S.t.e9e9Ua),
            checked: P,
            color: "danger",
            action: () => {
                !1 === P && X(m.Nj.MUTE), o.A.setServerMute(t, e.id, !P)
            }
        }, "voice-mute") : null, (!V || !F) && x.A.canWithPartialContext(j.xBc.DEAFEN_MEMBERS, {
            channelId: y
        }) ? (0, l.jsx)(d.sLh, {
            id: "voice-deafen",
            label: S.intl.string(S.t.hMA2GE),
            checked: k,
            color: "danger",
            action: () => o.A.setServerDeaf(t, e.id, !k)
        }, "voice-deafen") : null, !U && null != L && x.A.canWithPartialContext(j.xBc.MOVE_MEMBERS, {
            channelId: y
        }) ? (0, l.jsx)(d.Drp, {
            id: "voice-disconnect",
            label: S.intl.string(S.t["/jERiG"]),
            color: "danger",
            action: () => o.A.setChannel(t, e.id, null)
        }, "voice-disconnect") : null] : [],
        J = async (t, n, l) => {
            if (t.ctrlKey || t.metaKey) try {
                await s.A.setCommunicationDisabledDuration(n, l, v.DisableCommunicationDuration.DURATION_60_SEC, null, T), X(m.Nj.TIMEOUT), (0, d.showToast)((0, d.createToast)(S.intl.formatToPlainString(S.t.O9C3Nt, {
                    user: p.Ay.getName(n, null, e) ?? ""
                }), d.ToastType.SUCCESS))
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(S.intl.string(S.t.epyCuh), d.ToastType.FAILURE))
            }
        }, q = null, z = null != L && x.A.canManageUser(j.xBc.MODERATE_MEMBERS, e, L) && x.A.canManageUser(j.xBc.KICK_MEMBERS, e, L) && x.A.canManageUser(j.xBc.BAN_MEMBERS, e, L), Z = null != L && (x.A.canManageUser(j.xBc.MANAGE_GUILD, e, L) || x.A.canManageUser(j.xBc.MANAGE_ROLES, e, L));
    return !U && null != L && null != K && null != K.joinedAt && (z || Z) && L.features.has(j.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && (q = (0, a.Lt)(K.flags ?? 0, D.D.BYPASSES_VERIFICATION) ? (0, l.jsx)(d.Drp, {
        id: "verify",
        label: S.intl.string(S.t.NbhSI7),
        action: () => o.A.setMemberFlags(L.id, e.id, (0, a.lA)(K.flags ?? 0, D.D.BYPASSES_VERIFICATION, !1))
    }, "verify") : (0, l.jsx)(d.Drp, {
        id: "verify",
        label: S.intl.string(S.t["6QlTeK"]),
        action: () => o.A.setMemberFlags(L.id, e.id, (0, a.lA)(K.flags ?? 0, D.D.BYPASSES_VERIFICATION, !0))
    }, "verify")), [W, q, ...Y, ...U || null == L ? [] : [H && !G ? B ? (0, l.jsx)(d.Drp, {
        id: "removetimeout",
        label: S.intl.formatToPlainString(S.t.csKeta, {
            user: e.username
        }),
        color: "danger",
        action: () => {
            (0, c.Y)({
                guildId: t,
                userId: e.id,
                anaylticsLocations: N
            })
        }
    }, "removetimeout") : (0, l.jsx)(d.Drp, {
        id: "timeout",
        label: S.intl.formatToPlainString(S.t.OhsOy0, {
            user: e.username
        }),
        color: "danger",
        action: n => {
            if (n.ctrlKey || n.metaKey) return J(n, t, e.id);
            (0, c.R)({
                guildId: t,
                userId: e.id,
                anaylticsLocations: N
            })
        }
    }, "timeout") : null, (0, b.L7)(e, L) ? (0, l.jsx)(d.Drp, {
        id: "kick",
        label: S.intl.formatToPlainString(S.t["9l/iTS"], {
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
    }, "kick") : null, (0, b.EZ)(e, L) ? (0, l.jsx)(d.Drp, {
        id: "ban",
        label: S.intl.formatToPlainString(S.t.WnpUBi, {
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