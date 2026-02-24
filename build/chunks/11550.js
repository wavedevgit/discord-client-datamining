/** chunk id: 11550, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => A
});
var l = n(311907),
    i = n(73153),
    r = n(961350),
    a = n(698441),
    d = n(357801),
    s = n(988794);
let u = {},
    o = {};

function c(t) {
    let e = {
        ...u
    };
    delete e[t], u = e;
    let n = {
        ...o
    };
    delete n[t], o = n
}
class E extends l.Ay.PersistedStore {
    static displayName = "UpcomingEventNoticesStore";
    static persistKey = "UpcomingEventNotices";
    initialize(t) {
        this.waitFor(r.default, a.Ay), null != t && (u = t.upcomingEventDismissals ?? {}, o = t.upcomingEventSeenTimestamps ?? {})
    }
    getGuildEventNoticeDismissalTime(t) {
        return u[t]
    }
    getAllEventDismissals() {
        return u
    }
    getUpcomingNoticeSeenTime(t) {
        return o[t]
    }
    getAllUpcomingNoticeSeenTimes() {
        return o
    }
    getState() {
        return {
            upcomingEventDismissals: u,
            upcomingEventSeenTimestamps: o
        }
    }
}
let A = new E(i.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(t) {
        let {
            eventId: e
        } = t, n = {
            ...u
        };
        n[e] = Date.now(), u = n
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function(t) {
        let {
            guildScheduledEvent: e
        } = t;
        (e.status === s.XG.CANCELED || e.status === s.XG.COMPLETED) && c(e.id)
    },
    GUILD_SCHEDULED_EVENT_DELETE: function(t) {
        let {
            guildScheduledEvent: e
        } = t;
        c(e.id)
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function(t) {
        let {
            userId: e,
            guildEventId: n
        } = t;
        if (e !== r.default.getId()) return;
        let l = a.Ay.getGuildScheduledEvent(n);
        if (null == l || l.status !== s.XG.SCHEDULED || null != u[n]) return;
        let i = o[n];
        if ((0, d.F)(l, void 0, i, !1) === s.w0.NEW_EVENT) {
            let t = {
                ...u
            };
            t[n] = Date.now(), u = t
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(t) {
        let {
            guildEventId: e
        } = t, n = {
            ...o
        };
        n[e] = Date.now(), o = n
    }
})