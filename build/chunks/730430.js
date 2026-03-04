/** chunk id: 730430, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => p
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(956793),
    s = n(806246),
    o = n(378570),
    d = n(383501),
    u = n(954571),
    c = n(652215),
    A = n(985018);

function p(t) {
    let {
        variant: e = "active",
        size: n = "sm",
        hangStatusChannel: p,
        onAction: m,
        userId: h,
        ...g
    } = t, f = (0, l.bG)([d.A], () => d.A.getChannelId() === p.id);
    return (0, i.jsx)(r.Button, {
        text: f ? A.intl.string(A.t.BXxdl7) : A.intl.string(A.t["9C444m"]),
        onClick: () => {
            m?.(), a.default.selectVoiceChannel(p.id), (0, o.iN)(p.id), u.default.track(c.HAw.HANG_STATUS_CTA_CLICKED, {
                source: "UserProfilePopout",
                ...(0, s.A)(p.id),
                other_user_id: h,
                cta_type: f ? "open" : "join"
            })
        },
        variant: e,
        size: n,
        fullWidth: !0,
        ...g
    })
}