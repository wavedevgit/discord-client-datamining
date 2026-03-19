/** chunk id: 326567 params = (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => l
});
var i = n(627968);
n(64700);
var s = n(442433);

function l(e, t, l, a, r) {
    let o = l.getGuildId();
    return null != o ? (0, s.L3)(e, async () => {
        let {
            default: e
        } = await n.e("52502").then(n.bind(n, 335253));
        return n => (0, i.jsx)(e, {
            ...n,
            user: t,
            channel: l,
            guildId: o,
            onInteraction: e => r("GuildVoiceUserContextMenu", e)
        })
    }, a) : (0, s.L3)(e, async () => {
        let {
            default: e
        } = await n.e("43076").then(n.bind(n, 661455));
        return n => (0, i.jsx)(e, {
            ...n,
            user: t,
            channel: l,
            onInteraction: e => r("BaseVoiceUserContextMenu", e)
        })
    }, a)
}