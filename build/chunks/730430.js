/** chunk id: 730430 params = (module,exports,require) **/
i.d(t, {
    A: () => _
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(956793),
    r = i(806246),
    o = i(378570),
    c = i(383501),
    d = i(954571),
    u = i(652215),
    m = i(985018);

function _(e) {
    let {
        variant: t = "active",
        size: i = "sm",
        hangStatusChannel: _,
        onAction: p,
        userId: h,
        ...A
    } = e, g = (0, a.bG)([c.A], () => c.A.getChannelId() === _.id);
    return (0, n.jsx)(l.Button, {
        text: g ? m.intl.string(m.t.BXxdl7) : m.intl.string(m.t["9C444m"]),
        onClick: () => {
            p?.(), s.default.selectVoiceChannel(_.id), (0, o.iN)(_.id), d.default.track(u.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, r.A)(_.id),
                other_user_id: h,
                cta_type: g ? "open" : "join"
            })
        },
        variant: t,
        size: i,
        fullWidth: !0,
        ...A
    })
}