/** chunk id: 81400 params = (module,exports,require) **/
n.d(t, {
    EC: () => R,
    j8: () => h,
    uZ: () => m
}), n(938796);
var i = n(64700),
    l = n(417597),
    r = n(159001),
    s = n(507553),
    a = n(591179),
    o = n(780964),
    c = n(961350),
    d = n(696451),
    u = n(71393),
    _ = n(576705),
    E = n(967198),
    T = n(229527),
    A = n(652215),
    I = n(340837),
    p = n(355097),
    N = n(985018);

function m(e) {
    return (0, l.bG)([c.default, d.Ay], () => {
        if (null == e) return !1;
        let t = c.default.getId();
        return (0, T.TR)(d.Ay.getMember(e, t))
    }, [e])
}

function R(e) {
    return (0, l.cf)([c.default, d.Ay, E.A, u.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = E.A.getGuildId(),
            i = e ?? n,
            l = u.A.getGuild(i);
        if (null == l || null == i) return t;
        let r = c.default.getId(),
            s = d.Ay.getMember(i, r),
            a = (0, T.wR)(s?.flags);
        return 0 === a.size || (a.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [N.intl.formatToPlainString(N.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : t.nick = [N.intl.string(N.t.EPZCrM)]), a.has(I.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [N.intl.string(N.t.dZh1vz)])), t
    }, [e])
}

function h(e) {
    let {
        guildId: t,
        scrollPosition: d,
        analyticsLocations: E
    } = e, T = (0, l.bG)([u.A], () => u.A.getGuild(t), [t]), I = (0, l.bG)([_.A], () => null != T && _.A.can(A.xBc.CHANGE_NICKNAME, T), [T]), N = (0, a.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == T) return;
        A.nc_.PROFILE_CUSTOMIZATION;
        let e = p.Eq.GUILD;
        if (I ? (0, r.V2)(T.id) : e = p.Eq.USER_PROFILE, N) {
            let {
                openUserProfileModal: e
            } = n(657331);
            e({
                userId: c.default.getId(),
                guildId: T.id,
                sourceAnalyticsLocations: E
            })
        } else {
            let {
                openUserSettings: t
            } = n(840065);
            s.A.setState({
                subsection: e,
                scrollPosition: d
            }), t(o.X.PROFILE_PANEL, {
                analyticsLocations: E
            })
        }
    }, [I, d, E, T, N]), I]
}