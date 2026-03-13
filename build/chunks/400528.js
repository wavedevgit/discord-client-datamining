/** chunk id: 400528 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    l = n(73153),
    r = n(967198);
let a = null,
    s = null,
    o = {
        reportedMessages: {}
    };

function d() {
    let e = r.A.getLastSelectedGuildId();
    e !== a && (s = null, a = e ?? null)
}
class c extends i.Ay.PersistedStore {
    static displayName = "ReportToModStore";
    static persistKey = "ReportToModStore";
    static migrations = [e => ({
        reportedMessages: e?.reportedMessages ?? {}
    })];
    initialize(e) {
        null != e && (o.reportedMessages = Object.fromEntries(Object.entries(e.reportedMessages).map(e => {
            let [t, n] = e;
            return [t, new Set(n)]
        }))), this.syncWith([r.A], d)
    }
    getState() {
        return o
    }
    isUserBanned(e) {
        return s?.get(e) ?? null
    }
    getReportedMessages() {
        return o.reportedMessages
    }
    hasReportedMessage(e, t) {
        return o.reportedMessages[e]?.has(t) ?? !1
    }
}
let u = new c(l.h, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function(e) {
        let {
            channelId: t,
            messageId: n
        } = e;
        null == o.reportedMessages[t] && (o.reportedMessages[t] = new Set), o.reportedMessages[t].add(n)
    },
    GUILD_BAN_ADD: function(e) {
        let {
            user: t,
            guildId: n
        } = e;
        n !== a || null != s && s.set(t.id, !0)
    },
    GUILD_BAN_REMOVE: function(e) {
        let {
            user: t,
            guildId: n
        } = e;
        n !== a || null != s && s.set(t.id, !1)
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
        let {
            bans: t,
            guildId: n,
            userIds: i
        } = e;
        if (n !== a) return;
        let l = new Set(t.map(e => e.user?.id)),
            r = Array.from(new Set(i ?? [])).filter(e => !l.has(e));
        null == s && (s = new Map), l.forEach(e => {
            s?.set(e, !0)
        }), r.forEach(e => {
            s?.set(e, !1)
        })
    },
    LOGOUT: function() {
        a = null, s = null, o.reportedMessages = {}
    }
})