/** chunk id: 137207 params = (module,exports,require) **/
n.d(t, {
    E5: () => g,
    G6: () => m,
    H0: () => S,
    Vj: () => R,
    W5: () => C,
    nV: () => h,
    s6: () => p,
    wu: () => O
});
var i = n(562465),
    l = n(73153),
    r = n(58149),
    s = n(71393),
    a = n(576705),
    o = n(403362),
    c = n(661191),
    u = n(615550),
    d = n(488703),
    _ = n(449585),
    E = n(652215);

function T(e) {
    return {
        type: e.type,
        metadata: (0, d.A)(e.metadata)
    }
}

function A(e) {
    let t = (0, d.A)(e.triggerMetadata);
    return null != t && delete t.keywordLists, {
        id: e.id,
        name: e.name,
        guild_id: e.guildId,
        event_type: e.eventType,
        trigger_type: e.triggerType,
        trigger_metadata: t,
        actions: e.actions.filter(o.Vq).map(T),
        enabled: e.enabled,
        creator_id: e.creatorId,
        position: e.position,
        exempt_channels: Array.from(e.exemptChannels ?? []),
        exempt_roles: Array.from(e.exemptRoles ?? [])
    }
}

function I(e) {
    return {
        type: e.type,
        metadata: (0, d.W)(e.metadata)
    }
}

function N(e) {
    let t = {
        id: e.id ?? c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.W)(e.trigger_metadata),
        actions: e.actions.filter(o.Vq).map(I),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? [])
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t
}
async function p(e) {
    let t = A(e),
        n = await i.Bo.post({
            url: E.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, d.W)(n.body)
}
async function m(e) {
    let t = A(e);
    return delete t.id, N((await i.Bo.post({
        url: E.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
        body: t,
        rejectWithError: !1
    })).body)
}
async function R(e) {
    let t = A(e);
    return N((await i.Bo.patch({
        url: E.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
        body: t,
        rejectWithError: !1
    })).body)
}
async function h(e, t) {
    return await i.Bo.del({
        url: E.Rsh.GUILD_AUTOMOD_RULE(t, e),
        rejectWithError: !1
    }), !0
}
async function S(e) {
    let t = await i.Bo.get({
        url: E.Rsh.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(N) : []
}
async function g(e, t, n) {
    a.A.can(E.xBc.MANAGE_MESSAGES, t) && await i.Bo.post({
        url: E.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
        body: {
            message_id: e,
            channel_id: t.id,
            alert_action_type: n
        },
        rejectWithError: !1
    })
}

function C(e, t, n) {
    let l = s.A.getGuild(e);
    null != l && a.A.can(E.xBc.MANAGE_GUILD, l) && (0, _.rI)(() => {
        (0, r.zV)(E.HAw.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: u.Gb.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t
        }), i.Bo.post({
            url: E.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
            rejectWithError: !0
        }), n()
    })
}

function O(e) {
    l.h.dispatch({
        type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
        guildId: e
    })
}