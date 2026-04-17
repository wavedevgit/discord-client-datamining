/** chunk id: 137207 params = (module,exports,require) **/
n.d(t, {
    E5: () => N,
    G6: () => E,
    H0: () => C,
    Vj: () => x,
    W5: () => T,
    nV: () => I,
    s6: () => f,
    wu: () => S
});
var i = n(562465),
    l = n(73153),
    s = n(58149),
    a = n(71393),
    r = n(576705),
    o = n(403362),
    d = n(661191),
    c = n(615550),
    u = n(488703),
    h = n(449585),
    A = n(652215);

function _(e) {
    return {
        type: e.type,
        metadata: (0, u.A)(e.metadata)
    }
}

function m(e) {
    let t = (0, u.A)(e.triggerMetadata);
    return null != t && delete t.keywordLists, {
        id: e.id,
        name: e.name,
        guild_id: e.guildId,
        event_type: e.eventType,
        trigger_type: e.triggerType,
        trigger_metadata: t,
        actions: e.actions.filter(o.Vq).map(_),
        enabled: e.enabled,
        creator_id: e.creatorId,
        position: e.position,
        exempt_channels: Array.from(e.exemptChannels ?? []),
        exempt_roles: Array.from(e.exemptRoles ?? [])
    }
}

function p(e) {
    return {
        type: e.type,
        metadata: (0, u.W)(e.metadata)
    }
}

function g(e) {
    let t = {
        id: e.id ?? d.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, u.W)(e.trigger_metadata),
        actions: e.actions.filter(o.Vq).map(p),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? [])
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t
}
async function f(e) {
    let t = m(e),
        n = await i.Bo.post({
            url: A.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, u.W)(n.body)
}
async function E(e) {
    let t = m(e);
    return delete t.id, g((await i.Bo.post({
        url: A.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
        body: t,
        rejectWithError: !1
    })).body)
}
async function x(e) {
    let t = m(e);
    return g((await i.Bo.patch({
        url: A.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
        body: t,
        rejectWithError: !1
    })).body)
}
async function I(e, t) {
    return await i.Bo.del({
        url: A.Rsh.GUILD_AUTOMOD_RULE(t, e),
        rejectWithError: !1
    }), !0
}
async function C(e) {
    let t = await i.Bo.get({
        url: A.Rsh.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(g) : []
}
async function N(e, t, n) {
    r.A.can(A.xBc.MANAGE_MESSAGES, t) && await i.Bo.post({
        url: A.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
        body: {
            message_id: e,
            channel_id: t.id,
            alert_action_type: n
        },
        rejectWithError: !1
    })
}

function T(e, t, n) {
    let l = a.A.getGuild(e);
    null != l && r.A.can(A.xBc.MANAGE_GUILD, l) && (0, h.rI)(() => {
        (0, s.zV)(A.HAw.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: c.Gb.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t
        }), i.Bo.post({
            url: A.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
            rejectWithError: !0
        }), n()
    })
}

function S(e) {
    l.h.dispatch({
        type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
        guildId: e
    })
}