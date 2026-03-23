/** chunk id: 730430 params = (module,exports,require) **/
i.d(t, {
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
    A = i(985018);

function m(e) {
    let {
        variant: t = "active",
        size: i = "sm",
        hangStatusChannel: m,
        onAction: p,
        userId: h,
        ...g
    } = e, f = (0, l.bG)([d.A], () => d.A.getChannelId() === m.id);
    return (0, n.jsx)(r.Button, {
        text: f ? A.intl.string(A.t.BXxdl7) : A.intl.string(A.t["9C444m"]),
        onClick: () => {
            p?.(), s.default.selectVoiceChannel(m.id), (0, o.iN)(m.id), u.default.track(c.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, a.A)(m.id),
                other_user_id: h,
                cta_type: f ? "open" : "join"
            })
        },
        variant: t,
        size: i,
        fullWidth: !0,
        ...g
    })
}