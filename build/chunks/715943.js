/** Chunk was on web.js **/
/** chunk id: 715943, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(562465),
    i = n(843472),
    a = n(652215),
    o = n(985018);
let s = {
    changeNickname: (e, t, n, s) => r.Bo.patch({
        url: a.Rsh.GUILD_MEMBER_NICK(e, n),
        body: {
            nick: s
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => {
        s = e.body.nick, i.A.sendBotMessage(t, null != s && "" !== s ? o.intl.formatToMarkdownString(o.t["gz+HRq"], {
            nick: s
        }) : o.intl.string(o.t.Vhpd9A))
    }, e => {
        403 === e.status ? i.A.sendBotMessage(t, o.intl.formatToMarkdownString(o.t.Izf9jO, {})) : i.A.sendBotMessage(t, o.intl.string(o.t["5LO/Ss"]))
    })
}