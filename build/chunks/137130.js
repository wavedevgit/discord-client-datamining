/** chunk id: 137130, original params: e,t,n (module,exports,require) **/
n.d(t, {
    ER: () => d,
    Qi: () => _,
    Wy: () => u,
    gN: () => E,
    jS: () => c
});
var l = n(562465),
    r = n(73153),
    a = n(523599),
    i = n(652215);

function s() {
    return a.A.isLoading || a.A.isLoadingNextPage
}

function o(e, t) {
    let n = function(e) {
        let {
            before: t,
            userId: n,
            targetId: l,
            action: r
        } = e, s = null != n ? n : a.A.userIdFilter, o = null != r ? r : a.A.actionFilter, u = null != l ? l : a.A.targetIdFilter, c = {
            limit: i.$jw
        };
        return null != t && (c.before = t), null != s && (c.user_id = s), null != o && (c.action_type = o), null != u && (c.target_id = u), c
    }(t);
    return l.Bo.get({
        url: i.Rsh.GUILD_AUDIT_LOG(e),
        query: n,
        oldFormErrors: !0,
        rejectWithError: !0
    })
}

function u(e, t, n, l) {
    if (!s() && null != e) return r.h.dispatch({
        type: "AUDIT_LOG_FETCH_START"
    }), o(e, {
        userId: t,
        action: l,
        targetId: n
    }).then(e => {
        let {
            audit_log_entries: t,
            integrations: n,
            users: l,
            webhooks: a,
            guild_scheduled_events: i,
            auto_moderation_rules: s,
            threads: o,
            application_commands: u
        } = e.body;
        r.h.dispatch({
            type: "AUDIT_LOG_FETCH_SUCCESS",
            logs: t,
            integrations: n,
            users: l,
            webhooks: a,
            guildScheduledEvents: i,
            automodRules: s,
            threads: o,
            applicationCommands: u
        })
    }, () => r.h.dispatch({
        type: "AUDIT_LOG_FETCH_FAIL"
    }))
}

function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!a.A.hasOlderLogs || s() || null == e) return;
    let n = a.A.logs,
        l = n[n.length - 1],
        i = null;
    return null != l && (i = l.id), r.h.dispatch({
        type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
        before: i,
        isGroupedFetch: t
    }), o(e, {
        before: i
    }).then(e => {
        let {
            audit_log_entries: t,
            integrations: n,
            users: l,
            webhooks: a,
            guild_scheduled_events: i,
            auto_moderation_rules: s,
            threads: o,
            application_commands: u
        } = e.body;
        r.h.dispatch({
            type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
            logs: t,
            integrations: n,
            users: l,
            webhooks: a,
            guildScheduledEvents: i,
            automodRules: s,
            threads: o,
            applicationCommands: u
        })
    }, () => r.h.dispatch({
        type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
    }))
}

function E(e, t) {
    if (!s() && null != t) return r.h.dispatch({
        type: "AUDIT_LOG_FILTER_BY_ACTION",
        action: e
    }), u(t, null, null, e)
}

function d(e, t) {
    if (!s() && null != t) return r.h.dispatch({
        type: "AUDIT_LOG_FILTER_BY_USER",
        userId: e
    }), u(t, e)
}

function _(e, t) {
    if (!s() && null != t) return r.h.dispatch({
        type: "AUDIT_LOG_FILTER_BY_TARGET",
        targetId: e
    }), u(t, null, e)
}