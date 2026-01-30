/** chunk id: 482857, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => P
});
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(314116),
    d = t(397927),
    s = t(442433),
    a = t(686956),
    o = t(202384),
    c = t(51758),
    u = t(931991),
    _ = t(976860),
    g = t(323443),
    f = t(808728),
    v = t(71393),
    p = t(576705),
    h = t(954571),
    b = t(957565),
    m = t(496092),
    x = t(485394),
    j = t(722260),
    y = t(530209),
    A = t(974930),
    I = t(625142),
    N = t(666394),
    C = t(988794),
    O = t(652215),
    k = t(985018);

function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
            var l;
            l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = l
        })
    }
    return e
}

function S(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
        }
        return t
    })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e
}

function P(e) {
    let {
        guild: n,
        channel: P,
        guildScheduledEvent: w,
        isActive: D,
        recurrenceId: T,
        onActionTaken: L
    } = e, {
        scheduled_start_time: R,
        id: G,
        entity_type: U,
        guild_id: B
    } = w, {
        canManageGuildEvent: M
    } = (0, u.nr)(null != P ? P : n), V = M(w), F = (0, x.Ay)(w), K = (0, y.e)(null == P ? void 0 : P.id, w.id), {
        withinStartWindow: H
    } = (0, A.CC)(R), J = (0, i.bG)([p.A], () => null == P || !P.isGuildVocal() || p.A.can(O.xBc.CONNECT, P), [P]), z = (0, c.H)(B), W = (0, j.A)(T, G);

    function Q(e) {
        e.stopPropagation(), (0, N.A)(G, T, B)
    }
    async function Y(e) {
        e.stopPropagation(), await a.A.joinGuild(B), v.A.addConditionalChangeListener(() => {
            let n;
            return null == v.A.getGuild(B) || (D || Q(e), e.stopPropagation(), n = f.Ay.getDefaultChannel(B), (0, d.s7G)(), (0, _.uh)(B, null == n ? void 0 : n.id), !1)
        })
    }
    return {
        onDeleteClick: V ? function(e) {
            e.stopPropagation(), V && !D && (0, r.A)({
                title: k.intl.string(k.t.R5bpin),
                subtitle: k.intl.string(k.t.v2GWNQ),
                confirmText: k.intl.string(k.t.oyYWHE),
                onConfirm: () => m.A.deleteGuildEvent(G, B)
            })
        } : void 0,
        onContextMenu: function(e) {
            e.stopPropagation(), null != n && (0, s.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([t.e("95950"), t.e("3795"), t.e("7869")]).then(t.bind(t, 406406));
                return t => (0, l.jsx)(e, E({
                    guildEventId: G,
                    recurrenceId: T,
                    channel: P,
                    guild: n
                }, t))
            })
        },
        onJoinClick: J || z ? function(e) {
            if (e.stopPropagation(), z) {
                null == L || L(), (0, o.Ze)(B);
                return
            }(null == P ? void 0 : P.isGuildStageVoice()) ? ((0, g.av)(P), null == L || L()) : (null == P ? void 0 : P.isGuildVoice()) && (m.A.joinVoiceEvent(P.guild_id, P.id), null == L || L())
        } : void 0,
        onRsvpClick: Q,
        onStartClick: V && H && !(null == W ? void 0 : W.is_canceled) ? function(e) {
            e.stopPropagation(), (0, d.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([t.e("3795"), t.e("77223"), t.e("88317")]).then(t.bind(t, 199226));
                return n => (0, l.jsx)(e, S(E({}, n), {
                    event: w,
                    onSuccess: L
                }))
            })
        } : void 0,
        onInviteClick: function(e) {
            if (e.stopPropagation(), null != n) {
                if (!(0, I.y)(F, K, P)) {
                    let e = (0, I.d)({
                        guildId: B,
                        guildEventId: G
                    });
                    (0, b.C)(e), h.default.track(O.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                        guild_id: B,
                        guild_scheduled_event_id: G
                    });
                    return
                }(0, d.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([t.e("43600"), t.e("28136"), t.e("88332"), t.e("92779")]).then(t.bind(t, 234355));
                    return t => (0, l.jsx)(e, S(E({}, t), {
                        guild: n,
                        channel: P,
                        guildScheduledEvent: w,
                        source: O.PE1.GUILD_EVENTS
                    }))
                })
            }
        },
        onEndClick: V && U === C.Ps.EXTERNAL && D ? function(e) {
            e.stopPropagation(), V && (0, r.A)({
                title: k.intl.string(k.t.qaYzPA),
                subtitle: k.intl.string(k.t.bnDQ7E),
                confirmText: k.intl.string(k.t.mjB9pd),
                onConfirm: () => {
                    m.A.endEvent(G, B), (0, d.s7G)()
                }
            })
        } : void 0,
        onJoinGuildClick: Y
    }
}