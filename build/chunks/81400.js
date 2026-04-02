/** chunk id: 81400 params = (module,exports,require) **/
"use strict";
n.d(t, {
    EC: () => S,
    j8: () => h,
    uZ: () => p
}), n(938796);
var i = n(64700),
    r = n(417597),
    a = n(159001),
    o = n(507553),
    s = n(591179),
    l = n(780964),
    c = n(961350),
    _ = n(696451),
    u = n(71393),
    d = n(576705),
    b = n(967198),
    E = n(229527),
    m = n(652215),
    f = n(340837),
    A = n(355097),
    g = n(985018);

function p(e) {
    return (0, r.bG)([c.default, _.Ay], () => {
        if (null == e) return !1;
        let t = c.default.getId();
        return (0, E.TR)(_.Ay.getMember(e, t))
    }, [e])
}

function S(e) {
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
            o = _.Ay.getMember(i, a),
            s = (0, E.wR)(o?.flags);
        return 0 === s.size || (s.has(f.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [g.intl.formatToPlainString(g.t.WBUh3O, {
            guildName: r.name ?? ""
        })] : t.nick = [g.intl.string(g.t.EPZCrM)]), s.has(f.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [g.intl.string(g.t.dZh1vz)])), t
    }, [e])
}

function h(e) {
    let {
        guildId: t,
        scrollPosition: _,
        analyticsLocations: b
    } = e, E = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]), f = (0, r.bG)([d.A], () => null != E && d.A.can(m.xBc.CHANGE_NICKNAME, E), [E]), g = (0, s.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == E) return;
        m.nc_.PROFILE_CUSTOMIZATION;
        let e = A.Eq.GUILD;
        if (f ? (0, a.V2)(E.id) : e = A.Eq.USER_PROFILE, g) {
            let {
                openUserProfileModal: e
            } = n(657331);
            e({
                userId: c.default.getId(),
                guildId: E.id,
                sourceAnalyticsLocations: b
            })
        } else {
            let {
                openUserSettings: t
            } = n(858897);
            o.A.setState({
                subsection: e,
                scrollPosition: _
            }), t(l.X.PROFILE_PANEL, {
                analyticsLocations: b
            })
        }
    }, [f, _, b, E, g]), f]
}