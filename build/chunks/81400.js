/** chunk id: 81400 params = (module,exports,require) **/
"use strict";
n.d(t, {
    EC: () => I,
    j8: () => p,
    uZ: () => S
}), n(938796);
var i = n(64700),
    r = n(417597),
    a = n(159001),
    l = n(507553),
    o = n(591179),
    s = n(780964),
    c = n(961350),
    _ = n(696451),
    u = n(71393),
    d = n(576705),
    b = n(967198),
    m = n(229527),
    E = n(652215),
    g = n(340837),
    A = n(355097),
    f = n(985018);

function S(e) {
    return (0, r.bG)([c.default, _.Ay], () => {
        if (null == e) return !1;
        let t = c.default.getId();
        return (0, m.TR)(_.Ay.getMember(e, t))
    }, [e])
}

function I(e) {
    return (0, r.cf)([c.default, _.Ay, b.A, u.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = b.A.getGuildId(),
            i = e ?? n,
            r = u.A.getGuild(i);
        if (null == r || null == i) return t;
        let a = c.default.getId(),
            l = _.Ay.getMember(i, a),
            o = (0, m.wR)(l?.flags);
        return 0 === o.size || (o.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [f.intl.formatToPlainString(f.t.WBUh3O, {
            guildName: r.name ?? ""
        })] : t.nick = [f.intl.string(f.t.EPZCrM)]), o.has(g.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [f.intl.string(f.t.dZh1vz)])), t
    }, [e])
}

function p(e) {
    let {
        guildId: t,
        scrollPosition: _,
        analyticsLocations: b
    } = e, m = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]), g = (0, r.bG)([d.A], () => null != m && d.A.can(E.xBc.CHANGE_NICKNAME, m), [m]), f = (0, o.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == m) return;
        E.nc_.PROFILE_CUSTOMIZATION;
        let e = A.Eq.GUILD;
        if (g ? (0, a.V2)(m.id) : e = A.Eq.USER_PROFILE, f) {
            let {
                openUserProfileModal: e
            } = n(657331);
            e({
                userId: c.default.getId(),
                guildId: m.id,
                sourceAnalyticsLocations: b
            })
        } else {
            let {
                openUserSettings: t
            } = n(858897);
            l.A.setState({
                subsection: e,
                scrollPosition: _
            }), t(s.X.PROFILE_PANEL, {
                analyticsLocations: b
            })
        }
    }, [g, _, b, m, f]), g]
}