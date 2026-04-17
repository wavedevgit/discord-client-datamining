/** chunk id: 441412 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(843472),
    s = n(763754),
    a = n(888675),
    o = n(985018);

function c(e) {
    let {
        message: t,
        usernameHook: n,
        onClickPins: c,
        compact: u
    } = e, d = (0, s.Ay)(t), _ = d.nick, A = n(d), E = () => {
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
    }, m = {
        iconNode: (0, i.jsx)(r.tsw, {
            size: "sm",
            color: "currentColor"
        })
    };
    return (0, i.jsx)(a.A, {
        ...m,
        timestamp: t.timestamp,
        compact: u,
        children: null != t.messageReference ? null == c ? o.intl.format(o.t.lD5tup, {
            usernameHook: A,
            username: _,
            messageOnClick: E
        }) : o.intl.format(o.t.yIDvPL, {
            usernameHook: A,
            username: _,
            pinsActionOnClick: c,
            messageOnClick: E
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