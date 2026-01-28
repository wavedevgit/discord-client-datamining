/** Chunk was on 5606 **/
/** chunk id: 569024, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => M
}), n(896048), n(446912), n(457529);
var r, i, l = n(61090);
n(237751);
var s = n(311907),
    a = n(506774),
    o = n(73153),
    c = n(154049),
    d = n(273867),
    u = n(773686),
    p = n(324827),
    _ = n(348802),
    m = n(214771),
    g = n(925948),
    f = n(980001),
    b = n(476196),
    h = n(531743),
    A = n(989950),
    E = n(264392),
    x = n(626584),
    O = n(142120),
    C = n(548965),
    y = n(917878),
    j = n(614792),
    T = n(778920),
    v = n(961350),
    S = n(309010),
    I = n(967198),
    N = n(612181),
    P = n(837367),
    R = n(736400),
    D = n(424234),
    w = n(652215);
let L = new x.A("CacheStore"),
    M = !1,
    G = !1,
    U = "initializing",
    k = 0,
    H = !1,
    B = !1,
    V = !1;

function F(e) {
    L.log("Clearing cache store"), k = Date.now(), a.w.remove(w.j_2), a.w.remove(w.CT4), a.w.remove(w.XYq), U = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (G = !0)
}
async function Y(e, t, n) {
    let r = performance.now();
    if (null == e || null == n) return L.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - r, {
        guildId: null,
        channelId: null,
        users: [],
        members: [],
        messages: []
    }];
    {
        let i = await _.Ay.startupLoad(e, t, n, w.EMb);
        L.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
        let l = {
            guildId: t,
            channelId: n,
            users: i.users,
            members: i.members,
            messages: i.messages
        };
        return y.A.recordChannelFetchedLocal(n, y.a, null, null, w.EMb, i.messages), [performance.now() - r, l]
    }
}
async function W(e, t, n) {
    var r, i, a;
    L.verbose("loading early cache");
    let c = O.A.getSocket();
    c.connect();
    let d = null != (r = I.A.getGuildId()) ? r : null,
        u = null != (i = S.A.getChannelId()) ? i : null,
        p = performance.now(),
        _ = j.A.loadCachedMessages.measureAsyncWithoutNesting(() => Y(e, d, u)),
        m = j.A.fetchGuildCache.measureAsync(() => K(e, n)),
        A = j.A.fetchGuildCache.measureAsync(() => Z(e, n)),
        E = null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.A.getAsync(e, null)) : Promise.resolve([]),
        x = null == e ? Promise.resolve({}) : l.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => b.A.getAll(e)),
        C = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.A.getAll(e)),
        y = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => f.A.getAll(e)),
        [
            [T, v], N, P, R, w, M, G
        ] = await Promise.all([_, m, A, E, x, C, y]),
        U = performance.now() - p;
    if (L.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(T, "ms)")), null == v) return (0, D.A)("database:history_cache_null"), L.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
    {
        let r = Object.fromEntries(v.members.map(e => [e.userId, e])),
            i = null != P.guildId && null != P.channels,
            p = P.guildId;
        return s.Ay.Emitter.batched(() => {
            l.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
                var e;
                return o.h.dispatch({
                    type: "CACHE_LOADED",
                    guilds: N,
                    privateChannels: R,
                    initialGuildChannels: null != (e = P.channels) ? e : [],
                    users: [...v.users],
                    messages: null == v.channelId ? {} : {
                        [v.channelId]: v.messages
                    },
                    guildMembers: null == v.guildId ? {} : {
                        [v.guildId]: r
                    },
                    userSettings: w,
                    userGuildSettings: G,
                    readStates: M
                })
            }), l.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
        }), L.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(d, "\n          selected_channel: ").concat(u, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(R.length, "\n            channel_history:\n              guild: ").concat(v.guildId, "\n              channel: ").concat(v.channelId, "\n              messages: ").concat(v.messages.length, "\n                members: ").concat(v.members.length, "\n                users: ").concat(v.users.length, "\n            initial_guild:\n              id: ").concat(p, "\n              channels: ").concat(null == (a = P.channels) ? void 0 : a.length, "\n            user_settings: ").concat(Object.keys(w).length, "\n            read_states: ").concat(M.length, "\n            user_guild_settings: ").concat(G.length, "\n      )")), L.verbose("finished dispatching CACHE_LOADED"), [!0, i && null != p ? p : null, R.length]
    }
}
let z = !1;
async function K(e, t) {
    var n, r;
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            z = !0;
            break;
        case "other":
            "@me" === t.guildId && (z = !0)
    }
    if (z) return null != (r = await (0, c.kk)(() => l.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.A.getAsync(e)))) ? r : [];
    let i = null != (n = (await m.A.getCommittedVersions()).initial_guild_id) ? n : t.guildId;
    if (null == i || "@me" === i) return [];
    let s = await (0, c.kk)(() => u.A.getOneAsync(e, i));
    return null != s ? [s] : []
}
async function Z(e, t) {
    if (null == e) return Promise.resolve({
        channels: null,
        guildId: null
    });
    let n = (await m.A.getCommittedVersions()).initial_guild_id;
    if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return L.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
        channels: null,
        guildId: null
    });
    let r = n;
    return {
        channels: await (0, c.kk)(() => h.A.getAsync(e, r)),
        guildId: n
    }
}
async function q(e, t, n, r) {
    L.verbose("loading late lazy cache");
    let [i, s, a] = await j.A.fetchLazyCache.measureAsync(() => Promise.all([(0, c.kk)(() => null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => p.A.okAsync(e)) : Promise.resolve(!0)), (0, c.kk)(() => null == e || z ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.A.getAsync(e))), (0, c.kk)(() => null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => d.A.getAsync(e)) : Promise.resolve({
        all: [],
        stale: [],
        channels: []
    }))])), _ = await j.A.fetchStaleChannels.measureAsync(() => null != e && null != a && a.stale.length > 0 ? (0, c.kk)(() => {
        var t;
        return t = a.stale, L.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => h.A.getAsync(e, t).then(e => [t, e])))
    }) : Promise.resolve([]));
    if ((0, T.O)()) {
        var m;
        null != n && ((null == s ? void 0 : s.some(e => e.id === n)) || (null == a || null == (m = a.all) ? void 0 : m.some(e => {
            let [t] = e;
            return t === n
        }))) ? (L.verbose("loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)"), await (0, E.i)()) : L.verbose("loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)")
    } else C.iQ.getCachedEnabled() ? L.verbose("loadLateLazyCache: not yielding to react") : (L.verbose("loadLateLazyCache: yielding to react"), await new Promise(e => setTimeout(e, 0)));
    j.A.loadLazyCache.recordStart();
    let g = O.A.getSocket();
    X(() => {
        let l = performance.now();
        if (!1 === i) {
            (0, D.A)("database:not_ok"), o.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:not_ok"
            }), o.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        if (null == s || null == a || null == _) {
            (0, D.A)("database:load_failed"), L.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != a, "\n          guild_channels: ").concat(null != _, "\n          guilds: ").concat(null != s, "\n        )")), o.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:load_failed"
            }), o.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        if (null == i && (s.length > 0 || a.all.length > 0)) {
            (0, D.A)("database:versionless"), L.log("kv_cache was not ok (null version with values)"), o.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:versionless"
            }), o.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        if (B) {
            (0, D.A)("already_connected"), L.log("Skipping lazy cache; already connected."), o.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            });
            return
        }
        g.addAnalytics({
            hadCacheAtStartup: !0
        });
        let c = {
            type: "CACHE_LOADED_LAZY",
            guilds: s,
            guildChannels: _,
            basicGuildChannels: a.channels,
            initialGuildId: n
        };
        j.A.deserializeCache.measure(() => {
            null != c.channels && (0, R.Ay)(c.channels), null != c.privateChannels && (0, R.Ay)(c.privateChannels), null != c.guildChannels && (0, R.X3)(c.guildChannels)
        }), j.A.dispatchLazyCache.measure(() => o.h.dispatch(c)), L.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - l, "ms)")), g.addAnalytics({
            usedCacheAtStartup: !0
        });
        let d = _.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length
            }, 0),
            u = _.length,
            p = a.all.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length
            }, 0),
            m = a.channels.reduce((e, t) => {
                let [n, r] = t;
                return e + r.length
            }, 0),
            f = p - m,
            b = 0 === a.stale.length ? "" : " \xb7 ".concat(a.stale.join(", "));
        L.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(i, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(s.length, "\n            basic_channels:\n              total: ").concat(p, " (").concat(a.channels.length, " guilds)\n              stale: ").concat(f, " (").concat(a.stale.length, " guilds").concat(b, ")\n              unstale: ").concat(m, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(d, " (").concat(_.length, " guilds)\n      )")), j.A.setCacheInfo({
            guilds: s.length,
            privateChannels: r,
            basicChannels: p,
            basicChannelsStale: f,
            fullChannels: d,
            fullChannelGuilds: u
        })
    })
}

function X(e) {
    let t = O.A.getSocket(),
        n = !1;
    s.Ay.Emitter.batched(() => {
        try {
            if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return
            }
            n = !0, j.A.loadLazyCache.recordEnd(), L.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
                L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
            }, 100)
        } catch (e) {
            L.warn("Lazy cache has encountered error", e), o.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: e,
                    action: "LazyCache"
                }
            })
        }
    }), n || j.A.loadLazyCache.recordEnd()
}
class J extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(v.default, O.A, S.A, I.A), M || O.A.getSocket().dispatcher.unpauseDispatchQueue()
    }
    hasCache() {
        return !M || H
    }
    getLazyCacheStatus() {
        return M ? U : "no-cache"
    }
    get lastWriteTime() {
        return k
    }
    canWriteCaches(e) {
        return (0, N.wR)() ? G ? (L.log("Not writing cache because caches cleared"), !1) : !!e || !!V || (L.log("Not writing cache because never connected"), !1) : (L.log("Not writing cache because not authenticated"), !1)
    }
    async loadCacheAsync(e, t) {
        let n = (0, P.q)(t);
        if ("initializing" !== U) {
            (0, D.A)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
                var e, t;
                return null == (t = O.A.getSocket()) || null == (e = t.dispatcher) ? void 0 : e.unpauseDispatchQueue()
            }, 0);
            return
        }
        try {
            let t = v.default.getId(),
                r = A.A.carefullyOpenDatabase(t),
                [i, l, s] = await j.A.loadMiniCache.measureAsync(() => W(r, t, e));
            i ? (n(), await q(r, t, l, s)) : (n(), await (X(() => o.h.dispatch({
                type: "CACHE_LOADED_LAZY_NO_CACHE"
            })), Promise.resolve()))
        } catch (e) {
            L.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, D.A)("cache:exception"), n(), o.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: e,
                    action: "loadCacheAsync"
                }
            })
        }
    }
}(i = "displayName") in J ? Object.defineProperty(J, i, {
    value: "CacheStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : J[i] = "CacheStore", new J(o.h, M ? {
    CONNECTION_OPEN: function() {
        return B = !0, V = !0, !1
    },
    LOGOUT: F,
    CONNECTION_CLOSED: function() {
        return B = !1, V = !0, !1
    },
    CACHE_LOADED: function() {
        H = !0
    },
    CACHE_LOADED_LAZY: function() {
        H = !0, U = "cache-loaded"
    },
    CACHE_LOADED_LAZY_NO_CACHE: function() {
        U = "no-cache"
    },
    CLEAR_CACHES: F,
    WRITE_CACHES: function() {
        L.verbose("Writing cache now"), k = Date.now(), H = !0, a.w.remove(w.j_2), a.w.remove(w.XYq), a.w.remove(w.CT4)
    }
} : {})