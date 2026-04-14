/** chunk id: 360977 params = (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    a = n(397927),
    r = n(843472),
    s = n(501255),
    o = n(652215),
    d = n(985018);

function c(e, t) {
    let n = (0, s.Vc)(t.guild_id, t, "MessageContextMenu"),
        c = (0, l.Lt)(e.flags, o.pr7.IS_GUILD_OFFICIAL);
    return n ? c ? (0, i.jsx)(a.Drp, {
        id: "guild-official-unset",
        action: () => {
            r.A.patchMessageGuildOfficial(t.id, e.id, !1)
        },
        label: d.intl.string(d.t["2km5Gf"]),
        leadingAccessory: {
            type: "icon",
            icon: a.$pZ
        }
    }) : (0, i.jsx)(a.Drp, {
        id: "guild-official-set",
        action: () => {
            r.A.patchMessageGuildOfficial(t.id, e.id, !0)
        },
        label: d.intl.string(d.t["lE/PG3"]),
        leadingAccessory: {
            type: "icon",
            icon: a.LV2
        }
    }) : null
}