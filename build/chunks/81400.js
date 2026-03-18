/** chunk id: 81400 params = (module,exports,require) **/
n.d(e, {
    EC: () => N,
    j8: () => O,
    uZ: () => I
}), n(938796);
var l = n(64700),
    i = n(417597),
    r = n(159001),
    u = n(780964),
    A = n(961350),
    a = n(696451),
    d = n(71393),
    o = n(576705),
    s = n(967198),
    E = n(229527),
    _ = n(652215),
    f = n(340837),
    g = n(355097),
    c = n(985018);

function I(t) {
    return (0, i.bG)([A.default, a.Ay], () => {
        if (null == t) return !1;
        let e = A.default.getId();
        return (0, E.TR)(a.Ay.getMember(t, e))
    }, [t])
}

function N(t) {
    return (0, i.cf)([A.default, a.Ay, s.A, d.A], () => {
        let e = {
                nick: void 0,
                bio: void 0
            },
            n = s.A.getGuildId(),
            l = t ?? n,
            i = d.A.getGuild(l);
        if (null == i || null == l) return e;
        let r = A.default.getId(),
            u = a.Ay.getMember(l, r),
            o = (0, E.wR)(u?.flags);
        return 0 === o.size || (o.has(f.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == t ? e.nick = [c.intl.formatToPlainString(c.t.WBUh3O, {
            guildName: i.name ?? ""
        })] : e.nick = [c.intl.string(c.t.EPZCrM)]), o.has(f.D.AUTOMOD_QUARANTINED_BIO) && (e.bio = [c.intl.string(c.t.dZh1vz)])), e
    }, [t])
}

function O(t) {
    let {
        guildId: e,
        scrollPosition: A,
        analyticsLocations: a
    } = t, s = (0, i.bG)([d.A], () => d.A.getGuild(e), [e]), E = (0, i.bG)([o.A], () => null != s && o.A.can(_.xBc.CHANGE_NICKNAME, s), [s]);
    return [l.useCallback(() => {
        if (null == s) return;
        _.nc_.PROFILE_CUSTOMIZATION;
        let t = g.Eq.GUILD;
        E ? (0, r.V2)(s.id) : t = g.Eq.USER_PROFILE;
        {
            let {
                openUserSettings: e
            } = n(840065), {
                default: l
            } = n(955838);
            l.setState({
                subsection: t,
                scrollPosition: A
            }), e(u.X.PROFILE_PANEL, {
                analyticsLocations: a
            })
        }
    }, [E, A, a, s]), E]
}