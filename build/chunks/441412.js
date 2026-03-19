/** chunk id: 441412 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(843472),
    r = n(763754),
    s = n(888675),
    o = n(985018);

function c(e) {
    let {
        message: t,
        usernameHook: n,
        onClickPins: c,
        compact: d
    } = e, u = (0, r.Ay)(t), _ = u.nick, m = n(u), A = () => {
        if (null == t.messageReference) return;
        let {
            channel_id: e,
            message_id: n
        } = t.messageReference;
        l.A.jumpToMessage({
            channelId: e,
            messageId: n,
            flash: !0
        })
    }, E = {
        iconNode: (0, i.jsx)(a.tsw, {
            size: "sm",
            color: "currentColor"
        })
    };
    return (0, i.jsx)(s.A, {
        ...E,
        timestamp: t.timestamp,
        compact: d,
        children: null != t.messageReference ? null == c ? o.intl.format(o.t.lD5tup, {
            usernameHook: m,
            username: _,
            messageOnClick: A
        }) : o.intl.format(o.t.yIDvPL, {
            usernameHook: m,
            username: _,
            pinsActionOnClick: c,
            messageOnClick: A
        }) : null == c ? o.intl.format(o.t.vfkjqx, {
            usernameHook: m,
            username: _
        }) : o.intl.format(o.t.R7vZGZ, {
            usernameHook: m,
            username: _,
            pinsActionOnClick: c
        })
    })
}