/** chunk id: 345254 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(954571),
    l = n(957565),
    a = n(652215),
    c = n(985018);

function o(e, t) {
    return l.p5 ? (0, i.jsx)(s.Drp, {
        id: "copy-link",
        label: c.intl.string(c.t.Xrt5Po),
        leadingAccessory: {
            type: "icon",
            icon: s.qYV
        },
        icon: s.qYV,
        action: () => {
            (0, l.C)(`${location.protocol}//${location.host}${a.BVt.CHANNEL(t.guild_id,t.id,e.id)}`), r.default.track(a.HAw.MESSAGE_LINK_COPIED, {
                message_id: e.id,
                channel: e.channel_id
            })
        }
    }) : null
}