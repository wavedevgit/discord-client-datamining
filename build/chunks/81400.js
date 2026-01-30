/** chunk id: 81400, original params: t,l,n (module,exports,require) **/
n.d(l, {
    EC: () => I,
    j8: () => O,
    uZ: () => N
}), n(938796);
var i = n(64700),
    e = n(417597),
    u = n(159001),
    r = n(780964),
    A = n(961350),
    a = n(696451),
    d = n(71393),
    o = n(576705),
    f = n(967198),
    s = n(229527),
    E = n(652215),
    _ = n(340837),
    g = n(355097),
    c = n(985018);

function N(t) {
    return (0, e.bG)([A.default, a.Ay], () => {
        if (null == t) return !1;
        let l = A.default.getId();
        return (0, s.TR)(a.Ay.getMember(t, l))
    }, [t])
}

function I(t) {
    return (0, e.cf)([A.default, a.Ay, f.A, d.A], () => {
        let l = {
                nick: void 0,
                bio: void 0
            },
            n = f.A.getGuildId(),
            i = null != t ? t : n,
            e = d.A.getGuild(i);
        if (null == e || null == i) return l;
        let u = A.default.getId(),
            r = a.Ay.getMember(i, u),
            o = (0, s.wR)(null == r ? void 0 : r.flags);
        if (0 === o.size) return l;
        if (o.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
            if (null == t) {
                var E;
                l.nick = [c.intl.formatToPlainString(c.t.WBUh3O, {
                    guildName: null != (E = e.name) ? E : ""
                })]
            } else l.nick = [c.intl.string(c.t.EPZCrM)];
        return o.has(_.D.AUTOMOD_QUARANTINED_BIO) && (l.bio = [c.intl.string(c.t.dZh1vz)]), l
    }, [t])
}

function O(t) {
    let {
        guildId: l,
        scrollPosition: A,
        analyticsLocations: a
    } = t, f = (0, e.bG)([d.A], () => d.A.getGuild(l), [l]), s = (0, e.bG)([o.A], () => null != f && o.A.can(E.xBc.CHANGE_NICKNAME, f), [f]);
    return [i.useCallback(() => {
        if (null == f) return;
        let t = E.nc_.PROFILE_CUSTOMIZATION,
            l = g.Eq.GUILD;
        s ? (0, u.V2)(f) : l = g.Eq.USER_PROFILE;
        {
            let {
                openUserSettings: i
            } = n(840065);
            i(r.X.PROFILE_PANEL, {
                section: t,
                subsection: l,
                scrollPosition: A,
                analyticsLocations: a
            })
        }
    }, [s, A, a, f]), s]
}