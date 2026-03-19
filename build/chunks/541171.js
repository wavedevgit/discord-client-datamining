/** chunk id: 541171 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(402216),
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
    } = e, m = (0, r.Ay)(t), A = t.call?.duration, E = u(m), I = o.intl.format(o.t.FKXvaI, {
        username: m.nick,
        activityName: null != c ? c.name : "unknown",
        onJoinStream: d,
        usernameHook: E
    });
    return null != A && (I = o.intl.format(o.t.NEFxtd, {
        username: m.nick,
        duration: A.humanize(),
        channelName: n.name,
        usernameHook: E
    })), (0, i.jsx)(s.A, {
        iconNode: null != A ? (0, i.jsx)(a.GT3, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }) : (0, i.jsx)(l.Ay, {
            size: l.Ay.Sizes.SMALL
        }),
        timestamp: t.timestamp,
        compact: _,
        children: I
    })
}