/** chunk id: 730430 params = (module,exports,require) **/
i.d(e, {
    A: () => m
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(956793),
    a = i(806246),
    o = i(378570),
    d = i(383501),
    u = i(954571),
    c = i(652215),
    p = i(985018);

function m(t) {
    let {
        variant: e = "active",
        size: i = "sm",
        hangStatusChannel: m,
        onAction: h,
        userId: A,
        ...g
    } = t, T = (0, l.bG)([d.A], () => d.A.getChannelId() === m.id);
    return (0, n.jsx)(r.Button, {
        text: T ? p.intl.string(p.t.BXxdl7) : p.intl.string(p.t["9C444m"]),
        onClick: () => {
            h?.(), s.default.selectVoiceChannel(m.id), (0, o.iN)(m.id), u.default.track(c.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, a.A)(m.id),
                other_user_id: A,
                cta_type: T ? "open" : "join"
            })
        },
        variant: e,
        size: i,
        fullWidth: !0,
        ...g
    })
}