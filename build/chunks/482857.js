/** chunk id: 482857 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(314116),
    r = t(397927),
    s = t(442433),
    c = t(686956),
    o = t(202384),
    d = t(51758),
    u = t(931991),
    g = t(976860),
    A = t(323443),
    h = t(808728),
    m = t(71393),
    x = t(576705),
    C = t(954571),
    v = t(957565),
    p = t(496092),
    N = t(485394),
    E = t(722260),
    f = t(530209),
    j = t(974930),
    k = t(625142),
    y = t(666394),
    G = t(988794),
    _ = t(652215),
    I = t(985018);

function b(e) {
    let {
        guild: n,
        channel: b,
        guildScheduledEvent: T,
        isActive: P,
        recurrenceId: L,
        onActionTaken: S
    } = e, {
        scheduled_start_time: M,
        id: w,
        entity_type: D,
        guild_id: B
    } = T, {
        canManageGuildEvent: U
    } = (0, u.nr)(b ?? n), R = U(T), V = (0, N.Ay)(T), O = (0, f.e)(b?.id, T.id), {
        withinStartWindow: K
    } = (0, j.CC)(M), H = (0, l.bG)([x.A], () => !b?.isGuildVocal() || x.A.can(_.xBc.CONNECT, b), [b]), J = (0, d.H)(B), z = (0, E.A)(L, w);

    function q(e) {
        e.stopPropagation(), (0, y.A)(w, L, B)
    }
    async function F(e) {
        e.stopPropagation(), await c.A.joinGuild(B), m.A.addConditionalChangeListener(() => {
            let n;
            return null == m.A.getGuild(B) || (P || q(e), e.stopPropagation(), n = h.Ay.getDefaultChannel(B), (0, r.s7G)(), (0, g.uh)(B, n?.id), !1)
        })
    }
    return {
        onDeleteClick: R ? function(e) {
            e.stopPropagation(), R && !P && (0, a.A)({
                title: I.intl.string(I.t.R5bpin),
                subtitle: I.intl.string(I.t.v2GWNQ),
                confirmText: I.intl.string(I.t.oyYWHE),
                onConfirm: () => p.A.deleteGuildEvent(w, B)
            })
        } : void 0,
        onContextMenu: function(e) {
            e.stopPropagation(), null != n && (0, s.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([t.e("77371"), t.e("11478"), t.e("97580")]).then(t.bind(t, 406406));
                return t => (0, i.jsx)(e, {
                    guildEventId: w,
                    recurrenceId: L,
                    channel: b,
                    guild: n,
                    ...t
                })
            })
        },
        onJoinClick: H || J ? function(e) {
            if (e.stopPropagation(), J) {
                S?.(), (0, o.Ze)(B);
                return
            }
            b?.isGuildStageVoice() ? ((0, A.av)(b), S?.()) : b?.isGuildVoice() && (p.A.joinVoiceEvent(b.guild_id, b.id), S?.())
        } : void 0,
        onRsvpClick: q,
        onStartClick: R && K && !z?.is_canceled ? function(e) {
            e.stopPropagation(), (0, r.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([t.e("11478"), t.e("77223"), t.e("35957")]).then(t.bind(t, 199226));
                return n => (0, i.jsx)(e, {
                    ...n,
                    event: T,
                    onSuccess: S
                })
            })
        } : void 0,
        onInviteClick: function(e) {
            if (e.stopPropagation(), null != n) {
                if (!(0, k.y)(V, O, b)) {
                    let e = (0, k.d)({
                        guildId: B,
                        guildEventId: w
                    });
                    (0, v.C)(e), C.default.track(_.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                        guild_id: B,
                        guild_scheduled_event_id: w
                    });
                    return
                }(0, r.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([t.e("43600"), t.e("28136"), t.e("72469")]).then(t.bind(t, 234355));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guild: n,
                        channel: b,
                        guildScheduledEvent: T,
                        source: _.PE1.GUILD_EVENTS
                    })
                })
            }
        },
        onEndClick: R && D === G.Ps.EXTERNAL && P ? function(e) {
            e.stopPropagation(), R && (0, a.A)({
                title: I.intl.string(I.t.qaYzPA),
                subtitle: I.intl.string(I.t.bnDQ7E),
                confirmText: I.intl.string(I.t.mjB9pd),
                onConfirm: () => {
                    p.A.endEvent(w, B), (0, r.s7G)()
                }
            })
        } : void 0,
        onJoinGuildClick: F
    }
}