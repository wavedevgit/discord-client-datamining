/** chunk id: 81400 params = (module,exports,require) **/
"use strict";
n.d(t, {
    EC: () => f,
    j8: () => I,
    uZ: () => h
}), n(938796);
var a = n(64700),
    i = n(417597),
    r = n(159001),
    o = n(507553),
    c = n(591179),
    s = n(780964),
    l = n(961350),
    _ = n(696451),
    u = n(71393),
    d = n(576705),
    m = n(967198),
    b = n(229527),
    p = n(652215),
    E = n(340837),
    g = n(355097),
    A = n(985018);

function h(e) {
    return (0, i.bG)([l.default, _.Ay], () => {
        if (null == e) return !1;
        let t = l.default.getId();
        return (0, b.TR)(_.Ay.getMember(e, t))
    }, [e])
}

function f(e) {
    return (0, i.cf)([l.default, _.Ay, m.A, u.A], () => {
        let t = {
                nick: void 0,
                bio: void 0
            },
            n = m.A.getGuildId(),
            a = e ?? n,
            i = u.A.getGuild(a);
        if (null == i || null == a) return t;
        let r = l.default.getId(),
            o = _.Ay.getMember(a, r),
            c = (0, b.wR)(o?.flags);
        return 0 === c.size || (c.has(E.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? t.nick = [A.intl.formatToPlainString(A.t.WBUh3O, {
            guildName: i.name ?? ""
        })] : t.nick = [A.intl.string(A.t.EPZCrM)]), c.has(E.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [A.intl.string(A.t.dZh1vz)])), t
    }, [e])
}

function I(e) {
    let {
        guildId: t,
        scrollPosition: _,
        analyticsLocations: m
    } = e, b = (0, i.bG)([u.A], () => u.A.getGuild(t), [t]), E = (0, i.bG)([d.A], () => null != b && d.A.can(p.xBc.CHANGE_NICKNAME, b), [b]), A = (0, c.X)("AutomodQuarantineUtils");
    return [a.useCallback(() => {
        if (null == b) return;
        p.nc_.PROFILE_CUSTOMIZATION;
        let e = g.Eq.GUILD;
        if (E ? (0, r.V2)(b.id) : e = g.Eq.USER_PROFILE, A) {
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
            }), t(s.X.PROFILE_PANEL, {
                analyticsLocations: m
            })
        }
    }, [E, _, m, b, A]), E]
}