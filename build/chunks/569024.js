/** chunk id: 569024, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => D
});
var i = n(61090);
n(237751);
var s = n(311907),
    a = n(506774),
    l = n(73153),
    r = n(154049),
    o = n(273867),
    c = n(773686),
    d = n(324827),
    u = n(348802),
    _ = n(214771),
    m = n(925948),
    A = n(980001),
    g = n(476196),
    h = n(531743),
    x = n(989950),
    p = n(264392),
    E = n(626584),
    C = n(142120),
    T = n(548965),
    S = n(917878),
    I = n(614792),
    f = n(961350),
    N = n(309010),
    b = n(967198),
    j = n(612181),
    v = n(723702),
    O = n(837367),
    R = n(736400),
    y = n(424234),
    P = n(652215);
let L = new E.A("CacheStore"),
    D = !1,
    G = !1,
    M = "initializing",
    U = 0,
    k = !1,
    V = !1,
    w = !1;

function H(e) {
    L.log("Clearing cache store"), U = Date.now(), a.w.remove(P.j_2), a.w.remove(P.CT4), a.w.remove(P.XYq), M = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (G = !0)
}
async function B(e, t, n) {
    let i = performance.now();
    if (null == e || null == n) return L.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`), [performance.now() - i, {
        guildId: null,
        channelId: null,
        users: [],
        members: [],
        messages: []
    }];
    {
        let s = await u.Ay.startupLoad(e, t, n, P.EMb);
        L.verbose(`loaded ${s.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let a = {
            guildId: t,
            channelId: n,
            users: s.users,
            members: s.members,
            messages: s.messages
        };
        return S.A.recordChannelFetchedLocal(n, S.a, null, null, P.EMb, s.messages), [performance.now() - i, a]
    }
}
async function Y(e, t, n) {
    L.verbose("loading early cache");
    let a = C.A.getSocket();
    a.connect();
    let r = b.A.getGuildId() ?? null,
        o = N.A.getChannelId() ?? null,
        c = performance.now(),
        d = I.A.loadCachedMessages.measureAsyncWithoutNesting(() => B(e, r, o)),
        u = I.A.fetchGuildCache.measureAsync(() => z(e, n)),
        _ = I.A.fetchGuildCache.measureAsync(() => W(e, n)),
        x = null != e ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.A.getAsync(e, null)) : Promise.resolve([]),
        p = null == e ? Promise.resolve({}) : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => g.A.getAll(e)),
        E = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => m.A.getAll(e)),
        T = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => A.A.getAll(e)),
        [
            [S, f], j, v, O, R, P, D
        ] = await Promise.all([d, u, _, x, p, E, T]),
        G = performance.now() - c;
    if (L.verbose(`cache loaded in ${G}ms (channel_history ${S}ms)`), null == f) return (0, y.A)("database:history_cache_null"), L.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
    {
        let c = Object.fromEntries(f.members.map(e => [e.userId, e])),
            d = null != v.guildId && null != v.channels,
            u = v.guildId;
        return s.Ay.Emitter.batched(() => {
            i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => l.h.dispatch({
                type: "CACHE_LOADED",
                guilds: j,
                privateChannels: O,
                initialGuildChannels: v.channels ?? [],
                users: [...f.users],
                messages: null == f.channelId ? {} : {
                    [f.channelId]: f.messages
                },
                guildMembers: null == f.guildId ? {} : {
                    [f.guildId]: c
                },
                userSettings: R,
                userGuildSettings: D,
                readStates: P
            })), i.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => a.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
        }), L.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${r}
          selected_channel: ${o}
          navigation_state: ${JSON.stringify(n)}
          database: ${null!=e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${O.length}
            channel_history:
              guild: ${f.guildId}
              channel: ${f.channelId}
              messages: ${f.messages.length}
                members: ${f.members.length}
                users: ${f.users.length}
            initial_guild:
              id: ${u}
              channels: ${v.channels?.length}
            user_settings: ${Object.keys(R).length}
            read_states: ${P.length}
            user_guild_settings: ${D.length}
      )`), L.verbose("finished dispatching CACHE_LOADED"), [!0, d ? u ?? null : null, O.length]
    }
}
let F = !1;
async function z(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            F = !0;
            break;
        case "other":
            "@me" === t.guildId && (F = !0)
    }
    if (F) return await (0, r.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => c.A.getAsync(e))) ?? [];
    let n = (await _.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let s = await (0, r.kk)(() => c.A.getOneAsync(e, n));
    return null != s ? [s] : []
}
async function W(e, t) {
    if (null == e) return Promise.resolve({
        channels: null,
        guildId: null
    });
    let n = (await _.A.getCommittedVersions()).initial_guild_id;
    if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return L.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`), Promise.resolve({
        channels: null,
        guildId: null
    });
    let i = n;
    return {
        channels: await (0, r.kk)(() => h.A.getAsync(e, i)),
        guildId: n
    }
}
async function K(e, t, n, s) {
    L.verbose("loading late lazy cache");
    let [a, u, _] = await I.A.fetchLazyCache.measureAsync(() => Promise.all([(0, r.kk)(() => null != e ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.A.okAsync(e)) : Promise.resolve(!0)), (0, r.kk)(() => null == e || F ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => c.A.getAsync(e))), (0, r.kk)(() => null != e ? i.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => o.A.getAsync(e)) : Promise.resolve({
        all: [],
        stale: [],
        channels: []
    }))])), m = await I.A.fetchStaleChannels.measureAsync(() => null != e && null != _ && _.stale.length > 0 ? (0, r.kk)(() => {
        var t;
        return t = _.stale, L.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`), Promise.all(t.map(t => h.A.getAsync(e, t).then(e => [t, e])))
    }) : Promise.resolve([]));
    T.iQ.getCachedEnabled() ? L.verbose("loadLateLazyCache: not yielding to react") : (L.verbose("loadLateLazyCache: yielding to react"), await (0, p.i)((0, v.isIOS)() ? 0 : void 0)), I.A.loadLazyCache.recordStart();
    let A = C.A.getSocket();
    Z(() => {
        let i = performance.now();
        if (!1 === a) {
            (0, y.A)("database:not_ok"), l.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:not_ok"
            }), l.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        if (null == u || null == _ || null == m) {
            (0, y.A)("database:load_failed"), L.log(`couldn't load database item (
          database: ${null!=e}
          basic_channels: ${null!=_}
          guild_channels: ${null!=m}
          guilds: ${null!=u}
        )`), l.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:load_failed"
            }), l.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        if (null == a && (u.length > 0 || _.all.length > 0)) {
            (0, y.A)("database:versionless"), L.log("kv_cache was not ok (null version with values)"), l.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:versionless"
            }), l.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        if (V) {
            (0, y.A)("already_connected"), L.log("Skipping lazy cache; already connected."), l.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        A.addAnalytics({
            hadCacheAtStartup: !0
        });
        let r = {
            type: "CACHE_LOADED_LAZY",
            guilds: u,
            guildChannels: m,
            basicGuildChannels: _.channels,
            initialGuildId: n
        };
        I.A.deserializeCache.measure(() => {
            null != r.channels && (0, R.Ay)(r.channels), null != r.privateChannels && (0, R.Ay)(r.privateChannels), null != r.guildChannels && (0, R.X3)(r.guildChannels)
        }), I.A.dispatchLazyCache.measure(() => l.h.dispatch(r)), L.verbose(`late lazy cache loaded (ok: true, took: ${performance.now()-i}ms)`), A.addAnalytics({
            usedCacheAtStartup: !0
        });
        let o = m.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length
            }, 0),
            c = m.length,
            d = _.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length
            }, 0),
            g = _.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length
            }, 0),
            h = d - g,
            x = 0 === _.stale.length ? "" : ` \xb7 ${_.stale.join(", ")}`;
        L.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null!=e}
            ok: ${a}
            name: ${e?.name}
        data:
          database:
            guilds: ${u.length}
            basic_channels:
              total: ${d} (${_.channels.length} guilds)
              stale: ${h} (${_.stale.length} guilds${x})
              unstale: ${g}
            full_channels (guilds_with_stale_basic_channels):
              total: ${o} (${m.length} guilds)
      )`), I.A.setCacheInfo({
            guilds: u.length,
            privateChannels: s,
            basicChannels: d,
            basicChannelsStale: h,
            fullChannels: o,
            fullChannelGuilds: c
        })
    })
}

function Z(e) {
    let t = C.A.getSocket(),
        n = !1;
    s.Ay.Emitter.batched(() => {
        try {
            if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return
            }
            n = !0, I.A.loadLazyCache.recordEnd(), L.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
            }, 100)
        } catch (e) {
            L.warn("Lazy cache has encountered error", e), l.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: e,
                    action: "LazyCache"
                }
            })
        }
    }), n || I.A.loadLazyCache.recordEnd()
}
class q extends s.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(f.default, C.A, N.A, b.A), D || C.A.getSocket().dispatcher.unpauseDispatchQueue()
    }
    hasCache() {
        return !D || k
    }
    getLazyCacheStatus() {
        return D ? M : "no-cache"
    }
    get lastWriteTime() {
        return U
    }
    canWriteCaches(e) {
        return (0, j.wR)() ? G ? (L.log("Not writing cache because caches cleared"), !1) : !!e || !!w || (L.log("Not writing cache because never connected"), !1) : (L.log("Not writing cache because not authenticated"), !1)
    }
    async loadCacheAsync(e, t) {
        let n = (0, O.q)(t);
        if ("initializing" !== M) {
            (0, y.A)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => C.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return
        }
        try {
            let t = f.default.getId(),
                i = x.A.carefullyOpenDatabase(t),
                [s, a, r] = await I.A.loadMiniCache.measureAsync(() => Y(i, t, e));
            s ? (n(), await K(i, t, a, r)) : (n(), await (Z(() => l.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            })), Promise.resolve()))
        } catch (e) {
            L.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, y.A)("cache:exception"), n(), l.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: e,
                    action: "loadCacheAsync"
                }
            })
        }
    }
}
new q(l.h, D ? {
    CONNECTION_OPEN: function() {
        return V = !0, w = !0, !1
    },
    LOGOUT: H,
    CONNECTION_CLOSED: function() {
        return V = !1, w = !0, !1
    },
    CACHE_LOADED: function() {
        k = !0
    },
    CACHE_LOADED_LAZY: function() {
        k = !0, M = "cache-loaded"
    },
    CACHE_LOADED_LAZY_NO_CACHE: function() {
        M = "no-cache"
    },
    CLEAR_CACHES: H,
    WRITE_CACHES: function() {
        L.verbose("Writing cache now"), U = Date.now(), k = !0, a.w.remove(P.j_2), a.w.remove(P.XYq), a.w.remove(P.CT4)
    }
} : {})