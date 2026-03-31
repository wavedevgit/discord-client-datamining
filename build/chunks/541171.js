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
        compact: _
    } = e, A = (0, r.Ay)(t), m = t.call?.duration, E = u(A), T = o.intl.format(o.t.FKXvaI, {
        username: A.nick,
        activityName: null != c ? c.name : "unknown",
        onJoinStream: d,
        usernameHook: E
    });
    return null != m && (T = o.intl.format(o.t.NEFxtd, {
        username: A.nick,
        duration: m.humanize(),
        channelName: n.name,
        usernameHook: E
    })), (0, i.jsx)(s.A, {
        iconNode: null != m ? (0, i.jsx)(l.GT3, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }) : (0, i.jsx)(a.Ay, {
            size: a.Ay.Sizes.SMALL
        }),
        timestamp: t.timestamp,
        compact: _,
        children: T
    })
}