/** Chunk was on 93140 **/
/** chunk id: 81400, original params: e,t,n (module,exports,require) **/
n.d(t, {
    EC: () => N,
    j8: () => p,
    uZ: () => O
}), n(938796);
var r = n(64700),
    i = n(417597),
    l = n(159001),
    o = n(780964),
    a = n(961350),
    s = n(696451),
    c = n(71393),
    u = n(576705),
    E = n(967198),
    d = n(229527),
    _ = n(652215),
    A = n(340837),
    T = n(355097),
    I = n(985018);

function O(e) {
    return (0, i.bG)([a.default, s.Ay], () => {
        if (null == e) return !1;
        let t = a.default.getId();
        return (0, d.TR)(s.Ay.getMember(e, t))
    }, [e])
}

function N(e) {
    return (0, i.cf)([a.default, s.Ay, E.A, c.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = E.A.getGuildId(),
            r = null != e ? e : n,
            i = c.A.getGuild(r);
        if (null == i || null == r) return t;
        let l = a.default.getId(),
            o = s.Ay.getMember(r, l),
            u = (0, d.wR)(null == o ? void 0 : o.flags);
        if (0 === u.size) return t;
        if (u.has(A.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
            if (null == e) {
                var _;
                t.nick = [I.intl.formatToPlainString(I.t.WBUh3O, {
                    guildName: null != (_ = i.name) ? _ : ""
                })]
            } else t.nick = [I.intl.string(I.t.EPZCrM)];
        return u.has(A.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1vz)]), t
    }, [e])
}

function p(e) {
    let {
        guildId: t,
        scrollPosition: a,
        analyticsLocations: s
    } = e, E = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]), d = (0, i.bG)([u.A], () => null != E && u.A.can(_.xBc.CHANGE_NICKNAME, E), [E]);
    return [r.useCallback(() => {
        if (null == E) return;
        let e = _.nc_.PROFILE_CUSTOMIZATION,
            t = T.Eq.GUILD;
        d ? (0, l.V2)(E) : t = T.Eq.USER_PROFILE;
        {
            let {
                openUserSettings: r
            } = n(840065);
            r(o.X.PROFILE_PANEL, {
                section: e,
                subsection: t,
                scrollPosition: a,
                analyticsLocations: s
            })
        }
    }, [d, a, s, E]), d]
}