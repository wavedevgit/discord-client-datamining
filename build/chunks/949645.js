/** chunk id: 949645 params = (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(667532);
var i = n(310953),
    r = n(473529),
    a = n(335934),
    s = n(380335),
    l = n(157550),
    o = n(366811),
    d = n(253932),
    _ = n(189081),
    c = n(839067),
    u = n(645959),
    A = n(403362),
    E = n(265422),
    g = n(652215),
    I = n(746080);
let h = () => {
    let e = s.A.getMessageRequestsCount() > 0 || l.A.getSpamChannelsCount() > 0;
    return [g.BVt.FRIENDS, (0, a.HF)("navigateToChannel") ? g.BVt.ICYMI : null, _.A.hasLibraryApplication() && !d.l_.getSetting() ? g.BVt.APPLICATION_LIBRARY : null, e ? g.BVt.MESSAGE_REQUESTS : null, g.BVt.APPLICATION_STORE, g.BVt.COLLECTIBLES_SHOP, d.dm.getSetting() ? g.BVt.FAMILY_CENTER : null, g.BVt.QUEST_HOME].filter(A.Vq)
};

function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t) ! function(e) {
        var t, n;
        let {
            channelId: i,
            path: r,
            basePath: a
        } = o.A.getState(), s = u.default.getPrivateChannelIds(), l = __OVERLAY__ ? s : [...h(), ...s], d = (null == i ? (t = r ?? a, h().findIndex(e => t.startsWith(e))) : null != i ? l.indexOf(i) : 0) + e;
        d >= l.length ? d = 0 : d < 0 && (d = l.length - 1);
        let _ = l[d];
        if (h().includes(_)) {
            let e;
            e = c.A.getCurrentRoute(), _ === g.BVt.APPLICATION_STORE && null != e ? (0, E.a)(e) : (0, E.a)(_)
        } else n = g.ME, (0, E.i)(n, _)
    }(e);
    else {
        var n, a, s;
        let l, d;
        l = o.A.getState().channelId, d = (0, i.A)(t, {
            withCurrentVoiceChannel: !0
        }).map(e => e.id), (0, r.K)(t) && d.unshift(I.VV.GUILD_HOME), n = (null != l ? d.indexOf(l) : -1) + e, a = d.length, s = d[n < 0 ? a - 1 : n >= a ? 0 : n], (0, E.i)(t, s)
    }
}