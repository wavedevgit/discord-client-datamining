/** chunk id: 441412 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(843472),
    a = n(763754),
    l = n(888675),
    o = n(985018);

function c(e) {
    let {
        message: t,
        usernameHook: n,
        onClickPins: c,
        compact: u
    } = e, d = (0, a.Ay)(t), _ = d.nick, E = n(d), A = () => {
        if (null == t.messageReference) return;
        let {
            channel_id: e,
            message_id: n
        } = t.messageReference;
        s.A.jumpToMessage({
            channelId: e,
            messageId: n,
            flash: !0
        })
    }, m = {
        iconNode: (0, i.jsx)(r.tsw, {
            size: "sm",
            color: "currentColor"
        })
    };
    return (0, i.jsx)(l.A, {
        ...m,
        timestamp: t.timestamp,
        compact: u,
        children: null != t.messageReference ? null == c ? o.intl.format(o.t.lD5tup, {
            usernameHook: E,
            username: _,
            messageOnClick: A
        }) : o.intl.format(o.t.yIDvPL, {
            usernameHook: E,
            username: _,
            pinsActionOnClick: c,
            messageOnClick: A
        }) : null == c ? o.intl.format(o.t.vfkjqx, {
            usernameHook: E,
            username: _
        }) : o.intl.format(o.t.R7vZGZ, {
            usernameHook: E,
            username: _,
            pinsActionOnClick: c
        })
    })
}