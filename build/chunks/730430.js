/** chunk id: 730430 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(956793),
    a = n(806246),
    o = n(378570),
    u = n(383501),
    d = n(954571),
    c = n(652215),
    h = n(985018);

function A(t) {
    let {
        variant: e = "active",
        size: n = "sm",
        hangStatusChannel: A,
        onAction: m,
        userId: p,
        ...g
    } = t, f = (0, l.bG)([u.A], () => u.A.getChannelId() === A.id);
    return (0, i.jsx)(r.Button, {
        text: f ? h.intl.string(h.t.BXxdl7) : h.intl.string(h.t["9C444m"]),
        onClick: () => {
            m?.(), s.default.selectVoiceChannel(A.id), (0, o.iN)(A.id), d.default.track(c.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, a.A)(A.id),
                other_user_id: p,
                cta_type: f ? "open" : "join"
            })
        },
        variant: e,
        size: n,
        fullWidth: !0,
        ...g
    })
}