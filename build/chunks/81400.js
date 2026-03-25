/** chunk id: 81400 params = (module,exports,require) **/
i.d(e, {
    EC: () => b,
    j8: () => M,
    uZ: () => O
}), i(938796);
var n = i(64700),
    l = i(417597),
    u = i(159001),
    r = i(507553),
    a = i(591179),
    d = i(780964),
    A = i(961350),
    o = i(696451),
    s = i(71393),
    f = i(576705),
    g = i(967198),
    c = i(229527),
    E = i(652215),
    _ = i(340837),
    I = i(355097),
    N = i(985018);

function O(t) {
    return (0, l.bG)([A.default, o.Ay], () => {
        if (null == t) return !1;
        let e = A.default.getId();
        return (0, c.TR)(o.Ay.getMember(t, e))
    }, [t])
}

function b(t) {
    return (0, l.cf)([A.default, o.Ay, g.A, s.A], () => {
        let e = {
                nick: void 0,
                bio: void 0
            },
            i = g.A.getGuildId(),
            n = t ?? i,
            l = s.A.getGuild(n);
        if (null == l || null == n) return e;
        let u = A.default.getId(),
            r = o.Ay.getMember(n, u),
            a = (0, c.wR)(r?.flags);
        return 0 === a.size || (a.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == t ? e.nick = [N.intl.formatToPlainString(N.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : e.nick = [N.intl.string(N.t.EPZCrM)]), a.has(_.D.AUTOMOD_QUARANTINED_BIO) && (e.bio = [N.intl.string(N.t.dZh1vz)])), e
    }, [t])
}

function M(t) {
    let {
        guildId: e,
        scrollPosition: o,
        analyticsLocations: g
    } = t, c = (0, l.bG)([s.A], () => s.A.getGuild(e), [e]), _ = (0, l.bG)([f.A], () => null != c && f.A.can(E.xBc.CHANGE_NICKNAME, c), [c]), N = (0, a.X)("AutomodQuarantineUtils");
    return [n.useCallback(() => {
        if (null == c) return;
        E.nc_.PROFILE_CUSTOMIZATION;
        let t = I.Eq.GUILD;
        if (_ ? (0, u.V2)(c.id) : t = I.Eq.USER_PROFILE, N) {
            let {
                openUserProfileModal: t
            } = i(657331);
            t({
                userId: A.default.getId(),
                guildId: c.id,
                sourceAnalyticsLocations: g
            })
        } else {
            let {
                openUserSettings: e
            } = i(840065);
            r.A.setState({
                subsection: t,
                scrollPosition: o
            }), e(d.X.PROFILE_PANEL, {
                analyticsLocations: g
            })
        }
    }, [_, o, g, c, N]), _]
}