/** chunk id: 221950 params = (module,exports,require) **/
n.d(t, {
    Cw: () => m,
    Ld: () => A,
    UD: () => _,
    aZ: () => E,
    jo: () => I,
    uO: () => u
});
var i = n(73153),
    a = n(997509),
    l = n(976860),
    r = n(71393),
    s = n(134413),
    o = n(11541),
    c = n(652215),
    d = n(746080);
async function u(e) {
    await i.h.dispatch({
        type: "INITIALIZE_MEMBER_SAFETY_STORE",
        guildId: e
    })
}

function _(e) {
    i.h.dispatch({
        type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
        guildId: e
    })
}

function m(e, t) {
    let {
        continuationToken: n,
        ...a
    } = t;
    i.h.dispatch({
        type: "MEMBER_SAFETY_PAGINATION_UPDATE",
        guildId: e,
        pagination: a
    })
}
async function A(e, t) {
    await i.h.dispatch({
        type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
        guildId: e,
        searchState: t
    })
}

function E(e) {
    let t = (0, s.Ml)(e),
        n = r.A.getGuild(e);
    return !!t && null != n && (n.features.has(c.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || n.features.has(c.GuildFeatures.COMMUNITY) || n.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, l.pX)(c.BVt.CHANNEL(e, d.VV.MEMBER_SAFETY)) : a.A.open(n.id, c.BEX.MEMBERS), !0)
}
async function I(e, t) {
    let n = await (0, o.vk)(e, t);
    return 0 === n.length ? [] : (await i.h.dispatch({
        type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
        guildId: e,
        memberSupplementals: n
    }), n)
}