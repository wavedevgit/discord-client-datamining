/** chunk id: 81400 params = (module,exports,require) **/
n.d(t, {
    EC: () => m,
    j8: () => S,
    uZ: () => h
}), n(938796);
var i = n(64700),
    l = n(417597),
    r = n(159001),
    s = n(507553),
    a = n(591179),
    o = n(780964),
    c = n(961350),
    u = n(696451),
    d = n(71393),
    _ = n(576705),
    E = n(967198),
    A = n(229527),
    T = n(652215),
    I = n(340837),
    N = n(355097),
    p = n(985018);

function h(e) {
    return (0, l.bG)([c.default, u.Ay], () => {
        if (null == e) return !1;
        let t = c.default.getId();
        return (0, A.TR)(u.Ay.getMember(e, t))
    }, [e])
}

function m(e) {
    return (0, l.cf)([c.default, u.Ay, E.A, d.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = E.A.getGuildId(),
            i = e ?? n,
            l = d.A.getGuild(i);
        if (null == l || null == i) return t;
        let r = c.default.getId(),
            s = u.Ay.getMember(i, r),
            a = (0, A.wR)(s?.flags);
        return 0 === a.size || (a.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [p.intl.formatToPlainString(p.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : t.nick = [p.intl.string(p.t.EPZCrM)]), a.has(I.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [p.intl.string(p.t.dZh1vz)])), t
    }, [e])
}

function S(e) {
    let {
        guildId: t,
        scrollPosition: u,
        analyticsLocations: E
    } = e, A = (0, l.bG)([d.A], () => d.A.getGuild(t), [t]), I = (0, l.bG)([_.A], () => null != A && _.A.can(T.xBc.CHANGE_NICKNAME, A), [A]), p = (0, a.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == A) return;
        T.nc_.PROFILE_CUSTOMIZATION;
        let e = N.Eq.GUILD;
        if (I ? (0, r.V2)(A.id) : e = N.Eq.USER_PROFILE, p) {
            let {
                openUserProfileModal: e
            } = n(657331);
            e({
                userId: c.default.getId(),
                guildId: A.id,
                sourceAnalyticsLocations: E
            })
        } else {
            let {
                openUserSettings: t
            } = n(840065);
            s.A.setState({
                subsection: e,
                scrollPosition: u
            }), t(o.X.PROFILE_PANEL, {
                analyticsLocations: E
            })
        }
    }, [I, u, E, A, p]), I]
}