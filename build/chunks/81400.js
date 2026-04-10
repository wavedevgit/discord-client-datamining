/** chunk id: 81400 params = (module,exports,require) **/
n.d(e, {
    EC: () => h,
    j8: () => O,
    uZ: () => p
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
    E = n(576705),
    _ = n(967198),
    T = n(229527),
    A = n(652215),
    I = n(340837),
    N = n(355097),
    R = n(985018);

function p(t) {
    return (0, l.bG)([c.default, d.Ay], () => {
        if (null == t) return !1;
        let e = c.default.getId();
        return (0, T.TR)(d.Ay.getMember(t, e))
    }, [t])
}

function h(t) {
    return (0, l.cf)([c.default, d.Ay, _.A, u.A], () => {
        let e = {
                nick: void 0,
                bio: void 0
            },
            n = _.A.getGuildId(),
            i = t ?? n,
            l = u.A.getGuild(i);
        if (null == l || null == i) return e;
        let r = c.default.getId(),
            s = d.Ay.getMember(i, r),
            a = (0, T.wR)(s?.flags);
        return 0 === a.size || (a.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == t ? e.nick = [R.intl.formatToPlainString(R.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : e.nick = [R.intl.string(R.t.EPZCrM)]), a.has(I.D.AUTOMOD_QUARANTINED_BIO) && (e.bio = [R.intl.string(R.t.dZh1vz)])), e
    }, [t])
}

function O(t) {
    let {
        guildId: e,
        scrollPosition: d,
        analyticsLocations: _
    } = t, T = (0, l.bG)([u.A], () => u.A.getGuild(e), [e]), I = (0, l.bG)([E.A], () => null != T && E.A.can(A.xBc.CHANGE_NICKNAME, T), [T]), R = (0, a.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == T) return;
        A.nc_.PROFILE_CUSTOMIZATION;
        let t = N.Eq.GUILD;
        if (I ? (0, r.V2)(T.id) : t = N.Eq.USER_PROFILE, R) {
            let {
                openUserProfileModal: t
            } = n(657331);
            t({
                userId: c.default.getId(),
                guildId: T.id,
                sourceAnalyticsLocations: _
            })
        } else {
            let {
                openUserSettings: e
            } = n(858897);
            s.A.setState({
                subsection: t,
                scrollPosition: d
            }), e(o.X.PROFILE_PANEL, {
                analyticsLocations: _
            })
        }
    }, [I, d, _, T, R]), I]
}