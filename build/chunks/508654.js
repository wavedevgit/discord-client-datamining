/** chunk id: 508654 params = (module,exports,require) **/
n.d(e, {
    Ay: () => f,
    BP: () => p,
    Qs: () => y,
    RO: () => G,
    WG: () => v,
    ob: () => N,
    r2: () => S,
    vj: () => m
});
var l = n(64700),
    i = n(311907),
    r = n(734057),
    a = n(71393),
    d = n(576705),
    s = n(927813),
    u = n(698441),
    o = n(357801),
    c = n(11550),
    E = n(563312),
    A = n(974930),
    g = n(988794),
    _ = n(652215);
let h = [],
    T = 15 * s.A.Millis.MINUTE;

function f(t, e) {
    return (0, i.yK)([a.A, u.Ay, d.A, r.A], () => {
        let n = a.A.getGuild(t);
        return null == n ? h : u.Ay.getGuildScheduledEventsByIndex(e ?? u.ej.GUILD_EVENT_UPCOMING(n.id)).filter(t => {
            let e = t.channel_id;
            if (null == e) return !0;
            let n = r.A.getChannel(e);
            return d.A.can(_.xBc.VIEW_CHANNEL, n)
        })
    }, [e, t])
}

function y(t) {
    return (0, i.bG)([u.Ay, r.A, d.A], () => {
        let e = r.A.getChannel(t);
        if (!d.A.can(_.xBc.VIEW_CHANNEL, e) || null == e?.guild_id) return null;
        let n = u.Ay.getGuildScheduledEventsByIndex(u.ej.CHANNEL_EVENT_ACTIVE(t));
        return n.length > 0 ? n[0] : null
    }, [t])
}

function m(t) {
    let e = (0, i.yK)([u.Ay], () => u.Ay.getGuildScheduledEventsForGuild(t), [t]);
    return l.useMemo(() => {
        let t = new Map;
        return e.forEach(e => {
            let n = e.channel_id;
            null != n && t.set(n, e)
        }), t
    }, [e])
}

function v(t) {
    let e = (0, i.yK)([u.Ay, r.A, d.A], () => u.Ay.getGuildScheduledEventsByIndex(u.ej.GUILD_EVENT_UPCOMING(t)).filter(t => {
            if (t.entity_type === g.Ps.NONE || t.status !== g.XG.SCHEDULED) return !1;
            if (null == t.channel_id) return !0;
            let e = r.A.getChannel(t.channel_id);
            return d.A.can(_.xBc.VIEW_CHANNEL, e)
        }), [t]),
        n = (0, i.cf)([c.A], () => c.A.getAllEventDismissals()),
        l = (0, i.cf)([c.A], () => c.A.getAllUpcomingNoticeSeenTimes()),
        s = (0, i.cf)([u.Ay], () => null == e ? {} : e.reduce((t, e) => {
            let n = (0, A.G3)(e);
            return {
                ...t,
                [e.id]: u.Ay.isInterestedInEventRecurrence(e.id, n)
            }
        }, {}), [e]),
        E = (0, i.bG)([a.A], () => a.A.getGuild(t)),
        h = null != E && !E.features.has(_.GuildFeatures.COMMUNITY) && E.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != e && null != s && h)
        for (let t = 0; t < e.length; t++) {
            let i = e[t],
                r = n[i.id],
                a = l[i.id],
                d = s[i.id] ?? !1,
                u = (0, o.F)(i, r, a, d);
            if (null != u) return {
                upcomingEvent: i,
                noticeType: u
            }
        }
}

function p(t) {
    return (0, i.bG)([u.Ay, r.A, d.A], () => u.Ay.getGuildScheduledEventsByIndex(u.ej.GUILD_EVENT_ACTIVE(t)).find(t => {
        if (t.entity_type === g.Ps.NONE || !(0, u.Fd)(t)) return !1;
        if (null == t.channel_id) return !0;
        let e = r.A.getChannel(t.channel_id);
        return d.A.can(_.xBc.VIEW_CHANNEL, e)
    }), [t])
}

function N(t) {
    return (0, i.bG)([u.Ay], () => u.Ay.getGuildScheduledEventsByIndex(u.ej.CHANNEL_EVENT_UPCOMING(t)), [t])
}

function S(t) {
    return (0, i.bG)([r.A, u.Ay], () => {
        let e = u.Ay.getGuildScheduledEventsByIndex(u.ej.GUILD_EVENT_ACTIVE(t)).find(t => null != r.A.getChannel(t.channel_id));
        return r.A.getChannel(e?.channel_id)
    }, [t])
}

function G(t) {
    let [e, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let t = setInterval(() => {
            n(Date.now())
        }, T);
        return () => clearInterval(t)
    }, []);
    let r = (0, i.bG)([u.Ay], () => null == t ? [] : u.Ay.getGuildScheduledEventsByIndex(u.ej.CHANNEL_EVENT_UPCOMING(t)), [t, e]);
    return l.useMemo(() => r.filter(t => {
        let {
            startTime: e,
            endTime: n
        } = (0, E.YR)(t), {
            withinStartWindow: l,
            diffMinutes: i
        } = (0, A.CC)(e.toISOString(), n?.toISOString());
        return t.status !== g.XG.ACTIVE && l && i < 15
    }), [r])
}