/** Chunk was on web.js **/
/** chunk id: 794782, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    RX: () => l,
    Sn: () => c,
    UZ: () => _,
    hQ: () => p,
    lc: () => s
}), n(228524);
var r = n(961350),
    i = n(9448),
    a = n(974930),
    o = n(988794);

function s(e) {
    return !!(null == e ? void 0 : e.id)
}

function l(e) {
    var t, n;
    return null == e ? null : {
        start: e.start,
        end: e.end,
        frequency: e.frequency,
        interval: e.interval,
        by_weekday: e.byWeekday,
        by_n_weekday: e.byNWeekday,
        by_month: e.byMonth,
        by_month_day: (null != (t = null == (n = e.byMonthDay) ? void 0 : n.length) ? t : 0) > 0 ? e.byMonthDay : null,
        by_year_day: e.byYearDay,
        count: e.count
    }
}

function c(e) {
    return null == e ? null : {
        start: new Date(e.start).toISOString(),
        end: null != e.end ? new Date(e.end).toISOString() : null,
        frequency: e.frequency,
        interval: e.interval,
        byWeekday: e.by_weekday,
        byNWeekday: e.by_n_weekday,
        byMonth: e.by_month,
        byMonthDay: e.by_month_day,
        byYearDay: e.by_year_day,
        count: e.count
    }
}

function u(e) {
    return e.map(e => ({
        event_exception_id: e.eventExceptionId,
        event_id: e.eventId,
        guild_id: e.guildId,
        scheduled_start_time: e.scheduledStartTime,
        scheduled_end_time: e.scheduledEndTime,
        is_canceled: e.isCanceled
    }))
}

function d(e) {
    return e.map(e => ({
        eventExceptionId: e.event_exception_id,
        eventId: e.event_id,
        guildId: e.guild_id,
        scheduledStartTime: e.scheduled_start_time,
        scheduledEndTime: e.scheduled_end_time,
        isCanceled: e.is_canceled
    }))
}

function f(e) {
    return null != e && "id" in e
}

function p(e, t, n) {
    let {
        name: i,
        description: a,
        privacyLevel: s,
        channelId: c,
        scheduledStartTime: d,
        scheduledEndTime: f,
        entityType: p,
        entityMetadata: _,
        image: h,
        recurrenceRule: m,
        eventExceptions: g
    } = e;
    return {
        id: null != n ? n : o.tq,
        name: i,
        description: null != a ? a : null,
        privacy_level: s,
        scheduled_start_time: d,
        scheduled_end_time: f,
        entity_type: p,
        entity_metadata: null != _ ? _ : null,
        image: null != h ? h : void 0,
        channel_id: c,
        guild_id: t,
        creator_id: r.default.getId(),
        status: o.XG.SCHEDULED,
        recurrence_rule: l(m),
        guild_scheduled_event_exceptions: u(g)
    }
}

function _(e, t) {
    var n, r, s, l, u, p, _;
    let h = {
        name: null != (n = null == e ? void 0 : e.name) ? n : "",
        privacyLevel: null != (r = null == e ? void 0 : e.privacy_level) ? r : o.dD.GUILD_ONLY,
        description: null != (s = null == e ? void 0 : e.description) ? s : "",
        scheduledStartTime: null != (l = null == e ? void 0 : e.scheduled_start_time) ? l : (0, a.jd)().toISOString(),
        entityType: null != (u = null == e ? void 0 : e.entity_type) ? u : o.Ps.NONE,
        entityMetadata: null != (p = null == e ? void 0 : e.entity_metadata) ? p : void 0,
        channelId: null == e ? void 0 : e.channel_id,
        creatorId: null == e ? void 0 : e.creator_id,
        image: null == e ? void 0 : e.image,
        scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
        recurrenceRule: c(null == e ? void 0 : e.recurrence_rule),
        eventExceptions: d(null != (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) ? _ : [])
    };
    if (f(e) && (null == e ? void 0 : e.entity_type) === o.Ps.EXTERNAL) {
        let t = (0, i.oF)(e);
        null != t && (h.entityMetadata = {
            location: t
        })
    } else null == h.channelId && null != t && (h.channelId = t.id, t.isGuildStageVoice() ? h.entityType = o.Ps.STAGE_INSTANCE : t.isGuildVoice() && (h.entityType = o.Ps.VOICE));
    return h
}