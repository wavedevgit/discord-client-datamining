/** chunk id: 95905, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(763754),
    a = n(447215);
let s = e => {
    var t, n;
    let {
        message: s,
        originalAuthor: o,
        channel: c
    } = e, d = (0, i.d8)(o, c), u = null != (t = null != (n = null == d ? void 0 : d.nick) ? n : null == o ? void 0 : o.username) ? t : "", m = (0, a.P)({
        user: null != o ? o : void 0,
        channelId: c.id,
        guildId: c.guild_id,
        messageId: null == s ? void 0 : s.id,
        stopPropagation: !0
    })(null != d ? d : void 0)(u, c.id);
    return (0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        children: m
    })
}