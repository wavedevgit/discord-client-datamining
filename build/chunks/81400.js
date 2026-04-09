/** chunk id: 81400 params = (module,exports,require) **/
"use strict";
n.d(t, {
    EC: () => A,
    j8: () => C,
    uZ: () => f
}), n(938796);
var a = n(64700),
    r = n(417597),
    i = n(159001),
    o = n(507553),
    s = n(591179),
    c = n(780964),
    l = n(961350),
    _ = n(696451),
    u = n(71393),
    d = n(576705),
    m = n(967198),
    b = n(229527),
    p = n(652215),
    g = n(340837),
    h = n(355097),
    E = n(985018);

function f(e) {
    return (0, r.bG)([l.default, _.Ay], () => {
        if (null == e) return !1;
        let t = l.default.getId();
        return (0, b.TR)(_.Ay.getMember(e, t))
    }, [e])
}

function A(e) {
    return (0, r.cf)([l.default, _.Ay, m.A, u.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = m.A.getGuildId(),
            a = e ?? n,
            r = u.A.getGuild(a);
        if (null == r || null == a) return t;
        let i = l.default.getId(),
            o = _.Ay.getMember(a, i),
            s = (0, b.wR)(o?.flags);
        return 0 === s.size || (s.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [E.intl.formatToPlainString(E.t.WBUh3O, {
            guildName: r.name ?? ""
        })] : t.nick = [E.intl.string(E.t.EPZCrM)]), s.has(g.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [E.intl.string(E.t.dZh1vz)])), t
    }, [e])
}

function C(e) {
    let {
        guildId: t,
        scrollPosition: _,
        analyticsLocations: m
    } = e, b = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]), g = (0, r.bG)([d.A], () => null != b && d.A.can(p.xBc.CHANGE_NICKNAME, b), [b]), E = (0, s.X)("AutomodQuarantineUtils");
    return [a.useCallback(() => {
        if (null == b) return;
        p.nc_.PROFILE_CUSTOMIZATION;
        let e = h.Eq.GUILD;
        if (g ? (0, i.V2)(b.id) : e = h.Eq.USER_PROFILE, E) {
            let {
                openUserProfileModal: e
            } = n(657331);
            e({
                userId: l.default.getId(),
                guildId: b.id,
                sourceAnalyticsLocations: m
            })
        } else {
            let {
                openUserSettings: t
            } = n(858897);
            o.A.setState({
                subsection: e,
                scrollPosition: _
            }), t(c.X.PROFILE_PANEL, {
                analyticsLocations: m
            })
        }
    }, [g, _, m, b, E]), g]
}