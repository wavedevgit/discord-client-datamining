/** Chunk was on 1636 **/
/** chunk id: 400528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048), n(446912);
var r, i = n(311907),
    l = n(73153),
    a = n(967198);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = null,
    s = null,
    d = {
        reportedMessages: {}
    };

function u() {
    let e = a.A.getLastSelectedGuildId();
    e !== c && (s = null, c = null != e ? e : null)
}
class g extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (d.reportedMessages = Object.fromEntries(Object.entries(e.reportedMessages).map(e => {
            let [t, n] = e;
            return [t, new Set(n)]
        }))), this.syncWith([a.A], u)
    }
    getState() {
        return d
    }
    isUserBanned(e) {
        var t;
        return null != (t = null == s ? void 0 : s.get(e)) ? t : null
    }
    getReportedMessages() {
        return d.reportedMessages
    }
    hasReportedMessage(e, t) {
        var n, r;
        return null != (n = null == (r = d.reportedMessages[e]) ? void 0 : r.has(t)) && n
    }
}
o(g, "displayName", "ReportToModStore"), o(g, "persistKey", "ReportToModStore"), o(g, "migrations", [e => {
    var t;
    return {
        reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {}
    }
}]);
let p = new g(l.h, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function(e) {
        let {
            channelId: t,
            messageId: n
        } = e;
        null == d.reportedMessages[t] && (d.reportedMessages[t] = new Set), d.reportedMessages[t].add(n)
    },
    GUILD_BAN_ADD: function(e) {
        let {
            user: t,
            guildId: n
        } = e;
        n !== c || null != s && s.set(t.id, !0)
    },
    GUILD_BAN_REMOVE: function(e) {
        let {
            user: t,
            guildId: n
        } = e;
        n !== c || null != s && s.set(t.id, !1)
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
        let {
            bans: t,
            guildId: n,
            userIds: r
        } = e;
        if (n !== c) return;
        let i = new Set(t.map(e => {
                var t;
                return null == (t = e.user) ? void 0 : t.id
            })),
            l = Array.from(new Set(null != r ? r : [])).filter(e => !i.has(e));
        null == s && (s = new Map), i.forEach(e => {
            null == s || s.set(e, !0)
        }), l.forEach(e => {
            null == s || s.set(e, !1)
        })
    },
    LOGOUT: function() {
        c = null, s = null, d.reportedMessages = {}
    }
})