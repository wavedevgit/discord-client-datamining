/** chunk id: 519480, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(311907),
    s = n(73153),
    l = n(370876),
    a = n(946116);
let r = Object.freeze({}),
    o = !1,
    c = {},
    d = {},
    u = {},
    h = {},
    A = {};
class p extends i.Ay.Store {
    static displayName = "GuildDirectoryStore";
    isFetching() {
        return o
    }
    getCurrentCategoryId(e) {
        return d[e] ?? a.mU.ALL
    }
    getDirectoryEntries(e, t) {
        return null != t ? u[e]?.[t] : c[e]
    }
    getDirectoryEntry(e, t) {
        return c[e]?.[t]
    }
    getDirectoryAllEntriesCount(e) {
        return Object.keys(c[e] ?? {}).length
    }
    getDirectoryCategoryCounts(e) {
        return h[e] ?? r
    }
    getAdminGuildEntryIds(e) {
        return A[e]
    }
}
let m = new p(s.h, {
    GUILD_DIRECTORY_FETCH_START: function() {
        o = !0
    },
    GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            entries: n
        } = e;
        o = !1;
        let i = {},
            s = {};
        n.forEach(e => {
            let t = (0, l.mR)(e);
            i[t.guildId] = t, null != s[t.primaryCategoryId] ? s[t.primaryCategoryId][t.guildId] = t : s[t.primaryCategoryId] = {
                [t.guildId]: t
            }
        }), c[t] = i, u[t] = s
    },
    GUILD_DIRECTORY_FETCH_FAILURE: function() {
        o = !1
    },
    GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
        let {
            channelId: t,
            entry: n
        } = e, i = (0, l.mR)(n);
        if (null == i || c[t]?.[i.guildId] != null) return;
        c[t] = {
            ...c[t],
            [i.guildId]: i
        };
        let s = i.primaryCategoryId ?? a.mU.UNCATEGORIZED;
        if (u[t] = {
                ...u[t],
                [s]: {
                    ...u[t]?.[s],
                    [i.guildId]: i
                }
            }, null != h[t]) {
            let e = h[t]?.[s] ?? 0;
            h[t] = {
                ...h[t],
                [s]: e + 1
            }
        }
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
        let {
            channelId: t,
            guildId: n
        } = e, i = c[t]?.[n];
        if (null == i) return;
        let s = i.primaryCategoryId,
            l = Object.assign({}, c[t]);
        delete l[n], A[t]?.delete(n), A[t] = new Set(A[t]), c[t] = l;
        let a = Object.assign({}, u[t][s]);
        if (delete a[n], u[t] = {
                ...u[t],
                [s]: a
            }, null != h[t]) {
            let e = h[t][s] - 1;
            h[t] = {
                ...h[t],
                [s]: e >= 0 ? e : 0
            }
        }
    },
    GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
        let {
            channelId: t,
            entry: n
        } = e, i = (0, l.mR)(n), s = c[t]?.[i.guildId];
        c[t] = {
            ...c[t],
            [i.guildId]: {
                ...s,
                ...i
            }
        };
        let r = s?.primaryCategoryId ?? a.mU.UNCATEGORIZED,
            o = i.primaryCategoryId ?? a.mU.UNCATEGORIZED,
            d = Object.assign({}, u[t]?.[r]);
        null != s && r !== o && delete d[i.guildId], u[t] = {
            ...u[t],
            [r]: d,
            [o]: {
                ...u[t]?.[o],
                [i.guildId]: {
                    ...s,
                    ...i
                }
            }
        }, o !== r && null != h[t] && (h[t] = {
            ...h[t],
            [r]: h[t]?.[r] > 0 ? h[t]?.[r] - 1 : 0,
            [o]: (h[t]?.[o] ?? 0) + 1
        })
    },
    GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
        let {
            channelId: t,
            categoryId: n
        } = e;
        d[t] = n
    },
    GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            counts: n
        } = e;
        h[t] = n
    },
    GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            entries: n
        } = e, i = new Set;
        n.forEach(e => {
            let t = (0, l.mR)(e);
            i.add(t.guildId)
        }), A[t] = i
    }
})