/** chunk id: 587084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => x,
    r: () => h
});
var a = n(311907),
    i = n(554146),
    s = n(379848),
    l = n(45780),
    r = n(696451),
    o = n(71393),
    d = n(287809),
    c = n(685073),
    u = n(334165),
    m = n(652215);

function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            shouldShow: n = !0
        } = t,
        u = (0, l.G$)(i.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? m.dJq),
        h = (0, a.bG)([o.A, d.default, r.Ay], () => {
            if (null === e) return !1;
            let t = o.A.getGuild(e);
            if (void 0 === t || !(0, c.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
            let n = d.default.getCurrentUser();
            if (void 0 === n || n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag) return !1;
            let a = r.Ay.getMember(e, n.id);
            return null != a && !a.isPending
        }, [e]);
    return (0, s.ww)(h && n && !u ? [i.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? m.eGj)
}

function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            shouldShow: n = !0
        } = t,
        l = e?.primaryGuild,
        r = l?.identityGuildId ?? null,
        d = (0, a.bG)([u.A], () => null === r ? null : u.A.getGuildLastSeenInfo(r)),
        c = (0, a.bG)([o.A], () => o.A.getGuild(r)?.profile?.tag),
        m = null != c && l?.identityGuildId === r && l?.tag === null,
        h = null != r && d?.tag === c,
        x = null !== r && m && !h;
    return (0, s.Wl)(x && n ? i.M.GUILD_TAG_UPDATED_COACHMARK : null, {
        cooldownDurationMs: 864e5
    })
}