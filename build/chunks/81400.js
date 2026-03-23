/** chunk id: 81400 params = (module,exports,require) **/
e.d(n, {
    EC: () => O,
    j8: () => M,
    uZ: () => N
}), e(938796);
var i = e(64700),
    l = e(417597),
    r = e(159001),
    u = e(507553),
    A = e(780964),
    a = e(961350),
    d = e(696451),
    o = e(71393),
    s = e(576705),
    E = e(967198),
    _ = e(229527),
    f = e(652215),
    g = e(340837),
    c = e(355097),
    I = e(985018);

function N(t) {
    return (0, l.bG)([a.default, d.Ay], () => {
        if (null == t) return !1;
        let n = a.default.getId();
        return (0, _.TR)(d.Ay.getMember(t, n))
    }, [t])
}

function O(t) {
    return (0, l.cf)([a.default, d.Ay, E.A, o.A], () => {
        let n = {
                nick: void 0,
                bio: void 0
            },
            e = E.A.getGuildId(),
            i = t ?? e,
            l = o.A.getGuild(i);
        if (null == l || null == i) return n;
        let r = a.default.getId(),
            u = d.Ay.getMember(i, r),
            A = (0, _.wR)(u?.flags);
        return 0 === A.size || (A.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == t ? n.nick = [I.intl.formatToPlainString(I.t.WBUh3O, {
            guildName: l.name ?? ""
        })] : n.nick = [I.intl.string(I.t.EPZCrM)]), A.has(g.D.AUTOMOD_QUARANTINED_BIO) && (n.bio = [I.intl.string(I.t.dZh1vz)])), n
    }, [t])
}

function M(t) {
    let {
        guildId: n,
        scrollPosition: a,
        analyticsLocations: d
    } = t, E = (0, l.bG)([o.A], () => o.A.getGuild(n), [n]), _ = (0, l.bG)([s.A], () => null != E && s.A.can(f.xBc.CHANGE_NICKNAME, E), [E]);
    return [i.useCallback(() => {
        if (null == E) return;
        f.nc_.PROFILE_CUSTOMIZATION;
        let t = c.Eq.GUILD;
        _ ? (0, r.V2)(E.id) : t = c.Eq.USER_PROFILE;
        {
            let {
                openUserSettings: n
            } = e(840065);
            u.A.setState({
                subsection: t,
                scrollPosition: a
            }), n(A.X.PROFILE_PANEL, {
                analyticsLocations: d
            })
        }
    }, [_, a, d, E]), _]
}