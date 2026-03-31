/** chunk id: 221950 params = (module,exports,require) **/
E.d(e, {
    Cw: () => A,
    Ld: () => D,
    UD: () => c,
    aZ: () => d,
    jo: () => S,
    uO: () => R
});
var _ = E(73153),
    a = E(997509),
    n = E(976860),
    r = E(71393),
    s = E(134413),
    i = E(11541),
    l = E(652215),
    u = E(746080);
async function R(t) {
    await _.h.dispatch({
        type: "INITIALIZE_MEMBER_SAFETY_STORE",
        guildId: t
    })
}

function c(t) {
    _.h.dispatch({
        type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
        guildId: t
    })
}

function A(t, e) {
    let {
        continuationToken: E,
        ...a
    } = e;
    _.h.dispatch({
        type: "MEMBER_SAFETY_PAGINATION_UPDATE",
        guildId: t,
        pagination: a
    })
}
async function D(t, e) {
    await _.h.dispatch({
        type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
        guildId: t,
        searchState: e
    })
}

function d(t) {
    let e = (0, s.Ml)(t),
        E = r.A.getGuild(t);
    return !!e && null != E && (E.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || E.features.has(l.GuildFeatures.COMMUNITY) || E.features.has(l.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, n.pX)(l.BVt.CHANNEL(t, u.VV.MEMBER_SAFETY)) : a.A.open(E.id, l.BEX.MEMBERS), !0)
}
async function S(t, e) {
    let E = await (0, i.vk)(t, e);
    return 0 === E.length ? [] : (await _.h.dispatch({
        type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
        guildId: t,
        memberSupplementals: E
    }), E)
}