/** chunk id: 508654, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => A,
    BP: () => x,
    Qs: () => y,
    RO: () => E,
    WG: () => j,
    ob: () => _,
    r2: () => v,
    vj: () => O
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(734057),
    s = n(71393),
    a = n(576705),
    o = n(927813),
    c = n(698441),
    u = n(357801),
    d = n(11550),
    p = n(563312),
    h = n(974930),
    g = n(988794),
    f = n(652215);
let m = [],
    b = 15 * o.A.Millis.MINUTE;

function A(e, t) {
    return (0, l.yK)([s.A, c.Ay, a.A, i.A], () => {
        let n = s.A.getGuild(e);
        return null == n ? m : c.Ay.getGuildScheduledEventsByIndex(null != t ? t : c.ej.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
            let t = e.channel_id;
            if (null == t) return !0;
            let n = i.A.getChannel(t);
            return a.A.can(f.xBc.VIEW_CHANNEL, n)
        })
    }, [t, e])
}

function y(e) {
    return (0, l.bG)([c.Ay, i.A, a.A], () => {
        let t = i.A.getChannel(e);
        if (!a.A.can(f.xBc.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
        let n = c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null
    }, [e])
}

function O(e) {
    let t = (0, l.yK)([c.Ay], () => c.Ay.getGuildScheduledEventsForGuild(e), [e]);
    return r.useMemo(() => {
        let e = new Map;
        return t.forEach(t => {
            let n = t.channel_id;
            null != n && e.set(n, t)
        }), e
    }, [t])
}

function j(e) {
    var t;
    let n = (0, l.yK)([c.Ay, i.A, a.A], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_UPCOMING(e)).filter(e => {
            if (e.entity_type === g.Ps.NONE || e.status !== g.XG.SCHEDULED) return !1;
            if (null == e.channel_id) return !0;
            let t = i.A.getChannel(e.channel_id);
            return a.A.can(f.xBc.VIEW_CHANNEL, t)
        }), [e]),
        r = (0, l.cf)([d.A], () => d.A.getAllEventDismissals()),
        o = (0, l.cf)([d.A], () => d.A.getAllUpcomingNoticeSeenTimes()),
        p = (0, l.cf)([c.Ay], () => null == n ? {} : n.reduce((e, t) => {
            var n, r;
            let l = (0, h.G3)(t);
            return n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, e), r = r = {
                [t.id]: c.Ay.isInterestedInEventRecurrence(t.id, l)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n
        }, {}), [n]),
        m = (0, l.bG)([s.A], () => s.A.getGuild(e)),
        b = null != m && !m.features.has(f.GuildFeatures.COMMUNITY) && m.features.has(f.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != n && null != p && b)
        for (let e = 0; e < n.length; e++) {
            let l = n[e],
                i = r[l.id],
                s = o[l.id],
                a = null != (t = p[l.id]) && t,
                c = (0, u.F)(l, i, s, a);
            if (null != c) return {
                upcomingEvent: l,
                noticeType: c
            }
        }
}

function x(e) {
    return (0, l.bG)([c.Ay, i.A, a.A], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(e => {
        if (e.entity_type === g.Ps.NONE || !(0, c.Fd)(e)) return !1;
        if (null == e.channel_id) return !0;
        let t = i.A.getChannel(e.channel_id);
        return a.A.can(f.xBc.VIEW_CHANNEL, t)
    }), [e])
}

function _(e) {
    return (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function v(e) {
    return (0, l.bG)([i.A, c.Ay], () => {
        let t = c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(e => null != i.A.getChannel(e.channel_id));
        return i.A.getChannel(null == t ? void 0 : t.channel_id)
    }, [e])
}

function E(e) {
    let [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now())
        }, b);
        return () => clearInterval(e)
    }, []);
    let i = (0, l.bG)([c.Ay], () => null == e ? [] : c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
    return r.useMemo(() => i.filter(e => {
        let {
            startTime: t,
            endTime: n
        } = (0, p.YR)(e), {
            withinStartWindow: r,
            diffMinutes: l
        } = (0, h.CC)(t.toISOString(), null == n ? void 0 : n.toISOString());
        return e.status !== g.XG.ACTIVE && r && l < 15
    }), [i])
}