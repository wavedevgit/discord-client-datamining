/** Chunk was on 97492 **/
/** chunk id: 11550, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r, l = n(311907),
    i = n(73153),
    s = n(961350),
    a = n(698441),
    o = n(357801),
    c = n(988794);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}
let p = {},
    h = {};

function f(e) {
    let t = d({}, p);
    delete t[e], p = t;
    let n = d({}, h);
    delete n[e], h = n
}
class g extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        if (this.waitFor(s.default, a.Ay), null != e) {
            var t, n;
            p = null != (t = e.upcomingEventDismissals) ? t : {}, h = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return p[e]
    }
    getAllEventDismissals() {
        return p
    }
    getUpcomingNoticeSeenTime(e) {
        return h[e]
    }
    getAllUpcomingNoticeSeenTimes() {
        return h
    }
    getState() {
        return {
            upcomingEventDismissals: p,
            upcomingEventSeenTimestamps: h
        }
    }
}
u(g, "displayName", "UpcomingEventNoticesStore"), u(g, "persistKey", "UpcomingEventNotices");
let m = new g(i.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
        let {
            eventId: t
        } = e, n = d({}, p);
        n[t] = Date.now(), p = n
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
        let {
            guildScheduledEvent: t
        } = e;
        (t.status === c.XG.CANCELED || t.status === c.XG.COMPLETED) && f(t.id)
    },
    GUILD_SCHEDULED_EVENT_DELETE: function(e) {
        let {
            guildScheduledEvent: t
        } = e;
        f(t.id)
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
        let {
            userId: t,
            guildEventId: n
        } = e;
        if (t !== s.default.getId()) return;
        let r = a.Ay.getGuildScheduledEvent(n);
        if (null == r || r.status !== c.XG.SCHEDULED || null != p[n]) return;
        let l = h[n];
        if ((0, o.F)(r, void 0, l, !1) === c.w0.NEW_EVENT) {
            let e = d({}, p);
            e[n] = Date.now(), p = e
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
        let {
            guildEventId: t
        } = e, n = d({}, h);
        n[t] = Date.now(), h = n
    }
})