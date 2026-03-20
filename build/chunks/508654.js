/** chunk id: 508654 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    BP: () => I,
    Qs: () => x,
    RO: () => S,
    WG: () => E,
    ob: () => N,
    r2: () => b,
    vj: () => C
});
var i = n(64700),
    s = n(311907),
    l = n(734057),
    a = n(71393),
    r = n(576705),
    o = n(927813),
    c = n(698441),
    d = n(357801),
    u = n(11550),
    h = n(563312),
    A = n(974930),
    m = n(988794),
    _ = n(652215);
let p = [],
    g = 15 * o.A.Millis.MINUTE;

function f(e, t) {
    return (0, s.yK)([a.A, c.Ay, r.A, l.A], () => {
        let n = a.A.getGuild(e);
        return null == n ? p : c.Ay.getGuildScheduledEventsByIndex(t ?? c.ej.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
            let t = e.channel_id;
            if (null == t) return !0;
            let n = l.A.getChannel(t);
            return r.A.can(_.xBc.VIEW_CHANNEL, n)
        })
    }, [t, e])
}

function x(e) {
    return (0, s.bG)([c.Ay, l.A, r.A], () => {
        let t = l.A.getChannel(e);
        if (!r.A.can(_.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null
    }, [e])
}

function C(e) {
    let t = (0, s.yK)([c.Ay], () => c.Ay.getGuildScheduledEventsForGuild(e), [e]);
    return i.useMemo(() => {
        let e = new Map;
        return t.forEach(t => {
            let n = t.channel_id;
            null != n && e.set(n, t)
        }), e
    }, [t])
}

function E(e) {
    let t = (0, s.yK)([c.Ay, l.A, r.A], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_UPCOMING(e)).filter(e => {
            if (e.entity_type === m.Ps.NONE || e.status !== m.XG.SCHEDULED) return !1;
            if (null == e.channel_id) return !0;
            let t = l.A.getChannel(e.channel_id);
            return r.A.can(_.xBc.VIEW_CHANNEL, t)
        }), [e]),
        n = (0, s.cf)([u.A], () => u.A.getAllEventDismissals()),
        i = (0, s.cf)([u.A], () => u.A.getAllUpcomingNoticeSeenTimes()),
        o = (0, s.cf)([c.Ay], () => null == t ? {} : t.reduce((e, t) => {
            let n = (0, A.G3)(t);
            return {
                ...e,
                [t.id]: c.Ay.isInterestedInEventRecurrence(t.id, n)
            }
        }, {}), [t]),
        h = (0, s.bG)([a.A], () => a.A.getGuild(e)),
        p = null != h && !h.features.has(_.GuildFeatures.COMMUNITY) && h.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != o && p)
        for (let e = 0; e < t.length; e++) {
            let s = t[e],
                l = n[s.id],
                a = i[s.id],
                r = o[s.id] ?? !1,
                c = (0, d.F)(s, l, a, r);
            if (null != c) return {
                upcomingEvent: s,
                noticeType: c
            }
        }
}

function I(e) {
    return (0, s.bG)([c.Ay, l.A, r.A], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(e => {
        if (e.entity_type === m.Ps.NONE || !(0, c.Fd)(e)) return !1;
        if (null == e.channel_id) return !0;
        let t = l.A.getChannel(e.channel_id);
        return r.A.can(_.xBc.VIEW_CHANNEL, t)
    }), [e])
}

function N(e) {
    return (0, s.bG)([c.Ay], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function b(e) {
    return (0, s.bG)([l.A, c.Ay], () => {
        let t = c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(e => null != l.A.getChannel(e.channel_id));
        return l.A.getChannel(t?.channel_id)
    }, [e])
}

function S(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now())
        }, g);
        return () => clearInterval(e)
    }, []);
    let l = (0, s.bG)([c.Ay], () => null == e ? [] : c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
    return i.useMemo(() => l.filter(e => {
        let {
            startTime: t,
            endTime: n
        } = (0, h.YR)(e), {
            withinStartWindow: i,
            diffMinutes: s
        } = (0, A.CC)(t.toISOString(), n?.toISOString());
        return e.status !== m.XG.ACTIVE && i && s < 15
    }), [l])
}