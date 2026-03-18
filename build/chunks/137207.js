/** chunk id: 137207 params = (module,exports,require) **/
n.d(t, {
    E5: () => b,
    G6: () => m,
    H0: () => S,
    Vj: () => f,
    W5: () => N,
    nV: () => y,
    s6: () => I,
    wu: () => h
});
var l = n(562465),
    i = n(73153),
    r = n(58149),
    a = n(71393),
    o = n(576705),
    d = n(403362),
    s = n(661191),
    u = n(615550),
    c = n(488703),
    A = n(449585),
    E = n(652215);

function g(e) {
    return {
        type: e.type,
        metadata: (0, c.A)(e.metadata)
    }
}

function _(e) {
    let t = (0, c.A)(e.triggerMetadata);
    return null != t && delete t.keywordLists, {
        id: e.id,
        name: e.name,
        guild_id: e.guildId,
        event_type: e.eventType,
        trigger_type: e.triggerType,
        trigger_metadata: t,
        actions: e.actions.filter(d.Vq).map(g),
        enabled: e.enabled,
        creator_id: e.creatorId,
        position: e.position,
        exempt_channels: Array.from(e.exemptChannels ?? []),
        exempt_roles: Array.from(e.exemptRoles ?? [])
    }
}

function M(e) {
    return {
        type: e.type,
        metadata: (0, c.W)(e.metadata)
    }
}

function O(e) {
    let t = {
        id: e.id ?? s.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, c.W)(e.trigger_metadata),
        actions: e.actions.filter(d.Vq).map(M),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? [])
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t
}
async function I(e) {
    let t = _(e),
        n = await l.Bo.post({
            url: E.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, c.W)(n.body)
}
async function m(e) {
    let t = _(e);
    return delete t.id, O((await l.Bo.post({
        url: E.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
        body: t,
        rejectWithError: !1
    })).body)
}
async function f(e) {
    let t = _(e);
    return O((await l.Bo.patch({
        url: E.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
        body: t,
        rejectWithError: !1
    })).body)
}
async function y(e, t) {
    return await l.Bo.del({
        url: E.Rsh.GUILD_AUTOMOD_RULE(t, e),
        rejectWithError: !1
    }), !0
}
async function S(e) {
    let t = await l.Bo.get({
        url: E.Rsh.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(O) : []
}
async function b(e, t, n) {
    o.A.can(E.xBc.MANAGE_MESSAGES, t) && await l.Bo.post({
        url: E.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
        body: {
            message_id: e,
            channel_id: t.id,
            alert_action_type: n
        },
        rejectWithError: !1
    })
}

function N(e, t, n) {
    let i = a.A.getGuild(e);
    null != i && o.A.can(E.xBc.MANAGE_GUILD, i) && (0, A.rI)(() => {
        (0, r.zV)(E.HAw.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: u.Gb.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t
        }), l.Bo.post({
            url: E.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
            rejectWithError: !0
        }), n()
    })
}

function h(e) {
    i.h.dispatch({
        type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
        guildId: e
    })
}