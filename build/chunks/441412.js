/** chunk id: 441412, original params: e,t,n (module,exports,require) **/
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
        compact: d
    } = e, u = (0, r.Ay)(t), m = u.nick, _ = n(u), A = () => {
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
        compact: d,
        children: null != t.messageReference ? null == c ? o.intl.format(o.t.lD5tup, {
            usernameHook: _,
            username: m,
            messageOnClick: A
        }) : o.intl.format(o.t.yIDvPL, {
            usernameHook: _,
            username: m,
            pinsActionOnClick: c,
            messageOnClick: A
        }) : null == c ? o.intl.format(o.t.vfkjqx, {
            usernameHook: _,
            username: m
        }) : o.intl.format(o.t.R7vZGZ, {
            usernameHook: _,
            username: m,
            pinsActionOnClick: c
        })
    })
}