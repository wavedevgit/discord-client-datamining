/** chunk id: 949645 params = (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(667532);
var i = n(310953),
    r = n(473529),
    s = n(335934),
    a = n(380335),
    l = n(157550),
    o = n(366811),
    d = n(253932),
    c = n(189081),
    _ = n(839067),
    u = n(645959),
    A = n(403362),
    E = n(265422),
    g = n(652215),
    I = n(746080);
let h = () => {
    let e = a.A.getMessageRequestsCount() > 0 || l.A.getSpamChannelsCount() > 0;
    return [g.BVt.FRIENDS, (0, s.HF)("navigateToChannel") ? g.BVt.ICYMI : null, c.A.hasLibraryApplication() && !d.l_.getSetting() ? g.BVt.APPLICATION_LIBRARY : null, e ? g.BVt.MESSAGE_REQUESTS : null, g.BVt.APPLICATION_STORE, g.BVt.COLLECTIBLES_SHOP, d.dm.getSetting() ? g.BVt.FAMILY_CENTER : null, g.BVt.QUEST_HOME].filter(A.Vq)
};

function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t) ! function(e) {
        var t, n;
        let {
            channelId: i,
            path: r,
            basePath: s
        } = o.A.getState(), a = u.default.getPrivateChannelIds(), l = __OVERLAY__ ? a : [...h(), ...a], d = (null == i ? (t = r ?? s, h().findIndex(e => t.startsWith(e))) : null != i ? l.indexOf(i) : 0) + e;
        d >= l.length ? d = 0 : d < 0 && (d = l.length - 1);
        let c = l[d];
        if (h().includes(c)) {
            let e;
            e = _.A.getCurrentRoute(), c === g.BVt.APPLICATION_STORE && null != e ? (0, E.a)(e) : (0, E.a)(c)
        } else n = g.ME, (0, E.i)(n, c)
    }(e);
    else {
        var n, s, a;
        let l, d;
        l = o.A.getState().channelId, d = (0, i.A)(t, {
            withCurrentVoiceChannel: !0
        }).map(e => e.id), (0, r.K)(t) && d.unshift(I.VV.GUILD_HOME), n = (null != l ? d.indexOf(l) : -1) + e, s = d.length, a = d[n < 0 ? s - 1 : n >= s ? 0 : n], (0, E.i)(t, a)
    }
}