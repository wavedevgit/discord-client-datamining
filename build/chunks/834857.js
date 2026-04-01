/** chunk id: 834857 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(267102),
    a = n(520006),
    r = n(576705),
    o = n(652215),
    d = n(985018);

function c(e, t, n, c) {
    let u = {
            streamUserId: n,
            channel: e,
            applicationId: c,
            appContext: (0, s.Us)()
        },
        h = () => {
            null != t && e.type === o.rbe.GUILD_VOICE && (0, a.X)({
                guild: t,
                source: o.PE1.VOICE_CHANNEL_CALL_MENU_ITEM,
                ...u
            })
        };
    return null != c ? (0, i.jsx)(l.Drp, {
        id: "invite-to-stream",
        label: d.intl.string(d.t["OzOM/q"]),
        action: h,
        icon: l.DpX,
        leadingAccessory: {
            type: "icon",
            icon: l.DpX
        }
    }) : null != t && null != e && r.A.can(o.xBc.CREATE_INSTANT_INVITE, e) ? (0, i.jsx)(l.Drp, {
        id: "invite-friends",
        label: d.intl.string(d.t["EE+P0H"]),
        action: h,
        icon: l.Rvf,
        leadingAccessory: {
            type: "icon",
            icon: l.Rvf
        }
    }) : null
}