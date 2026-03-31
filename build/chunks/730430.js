/** chunk id: 730430 params = (module,exports,require) **/
i.d(e, {
    A: () => A
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
    m = i(985018);

function A(t) {
    let {
        variant: e = "active",
        size: i = "sm",
        hangStatusChannel: A,
        onAction: h,
        userId: p,
        ...g
    } = t, f = (0, l.bG)([d.A], () => d.A.getChannelId() === A.id);
    return (0, n.jsx)(r.Button, {
        text: f ? m.intl.string(m.t.BXxdl7) : m.intl.string(m.t["9C444m"]),
        onClick: () => {
            h?.(), s.default.selectVoiceChannel(A.id), (0, o.iN)(A.id), u.default.track(c.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, a.A)(A.id),
                other_user_id: p,
                cta_type: f ? "open" : "join"
            })
        },
        variant: e,
        size: i,
        fullWidth: !0,
        ...g
    })
}