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
    g = n(340837),
    f = n(355097),
    A = n(985018);

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
        return 0 === s.size || (s.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [A.intl.formatToPlainString(A.t.WBUh3O, {
            guildName: r.name ?? ""
        })] : t.nick = [A.intl.string(A.t.EPZCrM)]), s.has(g.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [A.intl.string(A.t.dZh1vz)])), t
    }, [e])
}

function h(e) {
    let {
        guildId: t,
        scrollPosition: _,
        analyticsLocations: b
    } = e, E = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]), g = (0, r.bG)([d.A], () => null != E && d.A.can(m.xBc.CHANGE_NICKNAME, E), [E]), A = (0, s.X)("AutomodQuarantineUtils");
    return [i.useCallback(() => {
        if (null == E) return;
        m.nc_.PROFILE_CUSTOMIZATION;
        let e = f.Eq.GUILD;
        if (g ? (0, a.V2)(E.id) : e = f.Eq.USER_PROFILE, A) {
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
    }, [g, _, b, E, A]), g]
}