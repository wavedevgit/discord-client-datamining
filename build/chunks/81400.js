/** chunk id: 81400 params = (module,exports,require) **/
n.d(t, {
    EC: () => x,
    j8: () => I,
    uZ: () => E
}), n(938796);
var i = n(64700),
    l = n(417597),
    s = n(159001),
    a = n(507553),
    r = n(591179),
    o = n(780964),
    d = n(961350),
    c = n(696451),
    u = n(71393),
    h = n(576705),
    A = n(967198),
    _ = n(229527),
    m = n(652215),
    p = n(340837),
    g = n(355097),
    f = n(985018);

function E(e) {
    return (0, l.bG)([d.default, c.Ay], () => {
        if (null == e) return !1;
        let t = d.default.getId();
        return (0, _.TR)(c.Ay.getMember(e, t))
    }, [e])
}

function x(e) {
    return (0, l.cf)([d.default, c.Ay, A.A, u.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = A.A.getGuildId(),
            i = e ?? n,
            l = u.A.getGuild(i);
        if (null == l || null == i) return t;
        let s = d.default.getId(),
            a = c.Ay.getMember(i, s),
            r = (0, _.wR)(a?.flags);
        return 0 === r.size || (r.has(p.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [f.intl.formatToPlainString(f.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : t.nick = [f.intl.string(f.t.EPZCrM)]), r.has(p.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [f.intl.string(f.t.dZh1vz)])), t
    }, [e])
}

function I(e) {
    let {
        guildId: t,
        scrollPosition: c,
        analyticsLocations: A
    } = e, _ = (0, l.bG)([u.A], () => u.A.getGuild(t), [t]), p = (0, l.bG)([h.A], () => null != _ && h.A.can(m.xBc.CHANGE_NICKNAME, _), [_]), f = (0, r.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == _) return;
        m.nc_.PROFILE_CUSTOMIZATION;
        let e = g.Eq.GUILD;
        if (p ? (0, s.V2)(_.id) : e = g.Eq.USER_PROFILE, f) {
            let {
                openUserProfileModal: e
            } = n(657331);
            e({
                userId: d.default.getId(),
                guildId: _.id,
                sourceAnalyticsLocations: A
            })
        } else {
            let {
                openUserSettings: t
            } = n(858897);
            a.A.setState({
                subsection: e,
                scrollPosition: c
            }), t(o.X.PROFILE_PANEL, {
                analyticsLocations: A
            })
        }
    }, [p, c, A, _, f]), p]
}