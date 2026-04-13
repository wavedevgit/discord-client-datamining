/** chunk id: 489306 params = (module,exports,require) **/
n.d(t, {
    Ay: () => R,
    Pq: () => O
});
var i = n(64700),
    l = n(512750),
    s = n(417597),
    a = n(554146),
    r = n(367727),
    o = n(45780),
    d = n(71393),
    c = n(403362),
    u = n(473145),
    h = n(488803),
    A = n(522055),
    _ = n(764322),
    m = n(969983),
    p = n(942975),
    g = n(904560),
    f = n(645619),
    E = n(379229),
    x = n(904629),
    I = n(229548),
    C = n(139032),
    N = n(52260),
    T = n(294384),
    S = n(639060),
    b = n(864310),
    y = n(568065),
    v = n(652215),
    j = n(49999);

function R(e) {
    let t = (0, s.bG)([g.A], () => g.A.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([f.A], () => f.A.getStateForGuild(e)),
        {
            indicator: p,
            showUnread: j
        } = function(e, t, n) {
            let l = (0, b.A)(e).available,
                {
                    shouldShow: o
                } = (0, S.A)(e, "useGuildPowerupsNotificationIndicator"),
                d = (0, r.cN)(a.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                c = o && !d,
                u = (0, s.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return {
                    indicator: void 0,
                    showUnread: !1
                };
                let {
                    unlockedPowerups: e
                } = t, i = (0, x.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]), s = n?.lastSeenWarningNotification ?? Date.now(), a = new Date(i[i.length - 1]?.ends_at).getTime(), r = n?.lastBoostCount ?? 0, o = i.length > 0 && s < a, d = l - r;
                return o || c ? {
                    indicator: {
                        type: E.cD.WARNING
                    },
                    showUnread: !0
                } : l !== r && d > 0 ? {
                    indicator: {
                        type: E.cD.UNREAD,
                        count: d
                    },
                    showUnread: !0
                } : {
                    indicator: void 0,
                    showUnread: !1
                }
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, c, u?.entitlements])
        }(e, n ?? void 0, t),
        R = function(e, t) {
            let n, r, [p, g] = (0, I.ty)(null != t),
                f = p === a.M.GUILD_POWERUP_PERKS_COACHMARK,
                {
                    available: x
                } = (0, b.A)(e),
                S = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(v.GuildFeatures.GAME_SERVERS) ?? !1),
                j = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                R = (n = (0, h.C$)(e, "GuildPowerupsChannelRow"), r = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(v.GuildFeatures.GAME_SERVERS)), i.useMemo(() => {
                    let e = t?.allPowerups?.[l.zY] != null,
                        i = t?.unlockedPowerups?.[l.zY] != null;
                    return e && !i ? y.q.FILE_UPLOAD_250_MB : Array.from(y.r9[y.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(e => t?.unlockedPowerups?.[e] != null) ? n && !r ? y.q.GAME_SERVER_HOSTING : Array.from(y.r9[y.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(e => t?.unlockedPowerups?.[e] != null) ? 0 : y.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE : y.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO
                }, [t, n, r])),
                [O, L] = (0, I.FC)(null != t && !f, R),
                M = O === a.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                D = (0, C.A)(e),
                [U, G] = (0, I.ww)(null != t && !f && !M && null != D, e),
                P = U === a.M.BOOST_TO_UNLOCK_COACHMARK,
                k = (0, N.A)(e),
                [w, B] = (0, I.W2)(null != t && !f && !M && !P && null != k, e),
                V = w === a.M.EXPIRING_POWERUP_COACHMARK,
                H = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                F = (0, m.J)("useGuildPowerupsChannelListPopout"),
                [W, K] = (0, I.rd)(null != t && H && F),
                Y = W === a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK,
                z = (0, _.S)(e, "useGuildPowerupsChannelListPopout"),
                [X, q] = (0, I.vn)(null != t && !S && H && z),
                $ = X === a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                Q = i.useMemo(() => {
                    if (null == t || f || M || Y || $ || P || V) return;
                    let n = function(e, t) {
                        let n = u.fi.find(e => {
                            let n = y.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== y.mB
                        });
                        if (null == n) return;
                        let i = y.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = y.a8[n],
                            s = null != l ? t.allPowerups[l] : void 0;
                        if (null != s) return {
                            type: E.o.LEVEL_REACHED,
                            powerup: s,
                            markAsDismissed: t => {
                                (0, o._$)(i, e, !0, t)
                            }
                        }
                    }(e, t);
                    if (null != n) return n;
                    let i = function(e, t, n) {
                        let i = d.A.getGuild(e)?.premiumTier ?? v.TVA.NONE,
                            l = Array.from(y.oN.values()).flatMap(l => l.length <= 0 || l.some(e => {
                                if (null != t.unlockedPowerups[e]) return !0;
                                let n = y.wr[e];
                                return null != n && !!(i >= n)
                            }) ? [] : l.map(i => {
                                let l = t.allPowerups[i];
                                return null == l || n < l.cost || !l.dependencies.every(e => null != t.unlockedPowerups[e]) || (0, T.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF") ? null : l
                            })).filter(c.Vq);
                        if (0 !== l.length) {
                            if (1 === l.length && !(0, o.zs)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e)) return {
                                type: E.o.PERKS_PURCHASABLE,
                                powerups: l,
                                markAsDismissed: t => {
                                    (0, o._$)(a.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t)
                                }
                            };
                            if (l.length > 1 && !(0, o.zs)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e)) return {
                                type: E.o.PERKS_PURCHASABLE,
                                powerups: l,
                                markAsDismissed: t => {
                                    (0, o._$)(a.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t)
                                }
                            }
                        }
                    }(e, t, x);
                    if (null != i) return i;
                    let l = function(e, t, n, i) {
                        if ((0, h.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") && !t && null != i && n >= i && !(0, o.zs)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)) return {
                            type: E.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                            markAsDismissed: t => {
                                (0, o._$)(a.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t)
                            }
                        }
                    }(e, S, x, j);
                    if (null != l) return l
                }, [e, t, f, M, Y, $, P, V, x, S, j]),
                [J, Z] = (0, I.ru)(null != Q);
            return i.useMemo(() => {
                if (null != t) {
                    if (f) return {
                        type: E.o.PERKS_AVAILABLE,
                        markAsDismissed: g
                    };
                    if (M) {
                        if (R === y.q.GAME_SERVER_HOSTING) return {
                            type: E.o.GAME_SERVER_HOSTING_AVAILABLE,
                            markAsDismissed: L
                        };
                        let e = y.r9[R],
                            n = Object.values(t.allPowerups).filter(t => e.has(t.skuId));
                        if (0 === n.length) return;
                        return {
                            powerups: n,
                            type: E.o.NEW_PERK_AVAILABLE,
                            markAsDismissed: L
                        }
                    }
                    if (P && null != D) return {
                        type: E.o.BOOST_TO_UNLOCK,
                        powerup: D,
                        markAsDismissed: G
                    };
                    if (V && null != k) return {
                        type: E.o.EXPIRING_PERK,
                        featuredExpiringPowerup: k,
                        markAsDismissed: B
                    };
                    if (Y) return {
                        type: E.o.GAME_SERVER_NEW_GAMES,
                        markAsDismissed: K
                    };
                    if ($) return {
                        type: E.o.GAME_SERVER_PRICING_CHANGE,
                        markAsDismissed: q
                    };
                    if (J === a.M.GUILD_POWERUP_NOTIFICATION && null != Q) return {
                        ...Q,
                        markAsDismissed: e => {
                            Z(e), Q.markAsDismissed(e)
                        }
                    }
                }
            }, [t, f, g, Q, J, Z, M, L, R, P, D, G, V, k, B, Y, K, $, q])
        }(e, n ?? void 0);
    if (null !== n && (null != p || j || null != R)) return {
        indicator: p,
        showUnread: j,
        popout: R
    }
}

function O(e) {
    let t = (0, s.bG)([f.A], () => f.A.getStateForGuild(e)),
        n = R(e);
    i.useEffect(() => {
        (0, p.Zm)(e)
    }, [e]), i.useEffect(() => {
        let e = new Set([E.o.BOOST_TO_UNLOCK, E.o.EXPIRING_PERK]);
        n?.popout?.type != null && e.has(n.popout.type) || n?.popout?.markAsDismissed(j.i.AUTO_DISMISS)
    }, [n]), i.useEffect(() => {
        null != t && u.fi.forEach(n => {
            let i = y.a8[n];
            if (null == i || null == t.unlockedPowerups[i]) return;
            let l = y.On[n];
            null != l && (0, o._$)(l, e, !1, j.i.AUTO_DISMISS)
        })
    }, [e, t])
}