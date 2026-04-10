/** chunk id: 730430 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(956793),
    r = n(806246),
    o = n(378570),
    c = n(383501),
    d = n(954571),
    u = n(652215),
    h = n(985018);

function m(e) {
    let {
        variant: t = "active",
        size: n = "sm",
        hangStatusChannel: m,
        onAction: A,
        userId: g,
        ...p
    } = e, _ = (0, l.bG)([c.A], () => c.A.getChannelId() === m.id);
    return (0, i.jsx)(a.Button, {
        text: _ ? h.intl.string(h.t.BXxdl7) : h.intl.string(h.t["9C444m"]),
        onClick: () => {
            A?.(), s.default.selectVoiceChannel(m.id), (0, o.iN)(m.id), d.default.track(u.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, r.A)(m.id),
                other_user_id: g,
                cta_type: _ ? "open" : "join"
            })
        },
        variant: t,
        size: n,
        fullWidth: !0,
        ...p
    })
}