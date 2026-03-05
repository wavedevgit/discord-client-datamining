/** chunk id: 541171 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(402216),
    r = n(763754),
    s = n(888675),
    o = n(985018);

function c(e) {
    let {
        message: t,
        channel: n,
        playingActivity: c,
        onJoinStream: d,
        usernameHook: u,
        compact: m
    } = e, _ = (0, r.Ay)(t), A = t.call?.duration, f = u(_), h = o.intl.format(o.t.FKXvaI, {
        username: _.nick,
        activityName: null != c ? c.name : "unknown",
        onJoinStream: d,
        usernameHook: f
    });
    return null != A && (h = o.intl.format(o.t.NEFxtd, {
        username: _.nick,
        duration: A.humanize(),
        channelName: n.name,
        usernameHook: f
    })), (0, i.jsx)(s.A, {
        iconNode: null != A ? (0, i.jsx)(l.GT3, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }) : (0, i.jsx)(a.Ay, {
            size: a.Ay.Sizes.SMALL
        }),
        timestamp: t.timestamp,
        compact: m,
        children: h
    })
}