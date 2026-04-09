/** chunk id: 441412 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(843472),
    r = n(763754),
    s = n(888675),
    o = n(985018);

function c(e) {
    let {
        message: t,
        usernameHook: n,
        onClickPins: c,
        compact: u
    } = e, d = (0, r.Ay)(t), _ = d.nick, A = n(d), m = () => {
        if (null == t.messageReference) return;
        let {
            channel_id: e,
            message_id: n
        } = t.messageReference;
        a.A.jumpToMessage({
            channelId: e,
            messageId: n,
            flash: !0
        })
    }, E = {
        iconNode: (0, i.jsx)(l.tsw, {
            size: "sm",
            color: "currentColor"
        })
    };
    return (0, i.jsx)(s.A, {
        ...E,
        timestamp: t.timestamp,
        compact: u,
        children: null != t.messageReference ? null == c ? o.intl.format(o.t.lD5tup, {
            usernameHook: A,
            username: _,
            messageOnClick: m
        }) : o.intl.format(o.t.yIDvPL, {
            usernameHook: A,
            username: _,
            pinsActionOnClick: c,
            messageOnClick: m
        }) : null == c ? o.intl.format(o.t.vfkjqx, {
            usernameHook: A,
            username: _
        }) : o.intl.format(o.t.R7vZGZ, {
            usernameHook: A,
            username: _,
            pinsActionOnClick: c
        })
    })
}