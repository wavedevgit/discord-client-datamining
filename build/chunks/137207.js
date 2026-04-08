/** chunk id: 137207 params = (module,exports,require) **/
n.d(e, {
    E5: () => m,
    G6: () => p,
    H0: () => g,
    Vj: () => h,
    W5: () => O,
    nV: () => C,
    s6: () => R,
    wu: () => S
});
var i = n(562465),
    l = n(73153),
    r = n(58149),
    s = n(71393),
    a = n(576705),
    o = n(403362),
    c = n(661191),
    d = n(615550),
    u = n(488703),
    _ = n(449585),
    E = n(652215);

function T(t) {
    return {
        type: t.type,
        metadata: (0, u.A)(t.metadata)
    }
}

function A(t) {
    let e = (0, u.A)(t.triggerMetadata);
    return null != e && delete e.keywordLists, {
        id: t.id,
        name: t.name,
        guild_id: t.guildId,
        event_type: t.eventType,
        trigger_type: t.triggerType,
        trigger_metadata: e,
        actions: t.actions.filter(o.Vq).map(T),
        enabled: t.enabled,
        creator_id: t.creatorId,
        position: t.position,
        exempt_channels: Array.from(t.exemptChannels ?? []),
        exempt_roles: Array.from(t.exemptRoles ?? [])
    }
}

function I(t) {
    return {
        type: t.type,
        metadata: (0, u.W)(t.metadata)
    }
}

function N(t) {
    let e = {
        id: t.id ?? c.default.fromTimestamp(Date.now()),
        name: t.name,
        guildId: t.guild_id,
        eventType: t.event_type,
        triggerType: t.trigger_type,
        triggerMetadata: (0, u.W)(t.trigger_metadata),
        actions: t.actions.filter(o.Vq).map(I),
        enabled: t.enabled,
        creatorId: t.creator_id,
        position: t.position,
        exemptChannels: new Set(t.exempt_channels ?? []),
        exemptRoles: new Set(t.exempt_roles ?? [])
    };
    return null != e.triggerMetadata && delete e.triggerMetadata.keywordLists, e
}
async function R(t) {
    let e = A(t),
        n = await i.Bo.post({
            url: E.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: e,
            rejectWithError: !1
        });
    return (0, u.W)(n.body)
}
async function p(t) {
    let e = A(t);
    return delete e.id, N((await i.Bo.post({
        url: E.Rsh.GUILD_AUTOMOD_RULES(t.guildId),
        body: e,
        rejectWithError: !1
    })).body)
}
async function h(t) {
    let e = A(t);
    return N((await i.Bo.patch({
        url: E.Rsh.GUILD_AUTOMOD_RULE(t.guildId, t.id),
        body: e,
        rejectWithError: !1
    })).body)
}
async function C(t, e) {
    return await i.Bo.del({
        url: E.Rsh.GUILD_AUTOMOD_RULE(e, t),
        rejectWithError: !1
    }), !0
}
async function g(t) {
    let e = await i.Bo.get({
        url: E.Rsh.GUILD_AUTOMOD_RULES(t),
        rejectWithError: !1
    });
    return Array.isArray(e.body) ? e.body.map(N) : []
}
async function m(t, e, n) {
    a.A.can(E.xBc.MANAGE_MESSAGES, e) && await i.Bo.post({
        url: E.Rsh.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
        body: {
            message_id: t,
            channel_id: e.id,
            alert_action_type: n
        },
        rejectWithError: !1
    })
}

function O(t, e, n) {
    let l = s.A.getGuild(t);
    null != l && a.A.can(E.xBc.MANAGE_GUILD, l) && (0, _.rI)(() => {
        (0, r.zV)(E.HAw.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: d.Gb.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: e
        }), i.Bo.post({
            url: E.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
            rejectWithError: !0
        }), n()
    })
}

function S(t) {
    l.h.dispatch({
        type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
        guildId: t
    })
}