/** chunk id: 81400 params = (module,exports,require) **/
n.d(t, {
    EC: () => N,
    j8: () => m,
    uZ: () => p
}), n(938796);
var i = n(64700),
    l = n(417597),
    r = n(159001),
    s = n(780964),
    a = n(961350),
    o = n(696451),
    c = n(71393),
    u = n(576705),
    d = n(967198),
    _ = n(229527),
    E = n(652215),
    T = n(340837),
    A = n(355097),
    I = n(985018);

function p(e) {
    return (0, l.bG)([a.default, o.Ay], () => {
        if (null == e) return !1;
        let t = a.default.getId();
        return (0, _.TR)(o.Ay.getMember(e, t))
    }, [e])
}

function N(e) {
    return (0, l.cf)([a.default, o.Ay, d.A, c.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = d.A.getGuildId(),
            i = e ?? n,
            l = c.A.getGuild(i);
        if (null == l || null == i) return t;
        let r = a.default.getId(),
            s = o.Ay.getMember(i, r),
            u = (0, _.wR)(s?.flags);
        return 0 === u.size || (u.has(T.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [I.intl.formatToPlainString(I.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : t.nick = [I.intl.string(I.t.EPZCrM)]), u.has(T.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1vz)])), t
    }, [e])
}

function m(e) {
    let {
        guildId: t,
        scrollPosition: a,
        analyticsLocations: o
    } = e, d = (0, l.bG)([c.A], () => c.A.getGuild(t), [t]), _ = (0, l.bG)([u.A], () => null != d && u.A.can(E.xBc.CHANGE_NICKNAME, d), [d]);
    return [i.useCallback(() => {
        if (null == d) return;
        E.nc_.PROFILE_CUSTOMIZATION;
        let e = A.Eq.GUILD;
        _ ? (0, r.V2)(d.id) : e = A.Eq.USER_PROFILE;
        {
            let {
                openUserSettings: t
            } = n(840065), {
                default: i
            } = n(955838);
            i.setState({
                subsection: e,
                scrollPosition: a
            }), t(s.X.PROFILE_PANEL, {
                analyticsLocations: o
            })
        }
    }, [_, a, o, d]), _]
}