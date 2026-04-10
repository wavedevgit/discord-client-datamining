/** chunk id: 841362 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(311907),
    a = n(397927),
    s = n(351001),
    r = n(696451),
    o = n(576705),
    c = n(102817),
    d = n(641131),
    u = n(985018);

function h(e) {
    let {
        channel: t,
        user: h,
        guild: m
    } = e, A = (0, l.bG)([o.A], () => null != h && null != m && (0, s.KX)(h, m, [o.A])), g = (0, l.bG)([r.Ay], () => null == h || null == r.Ay.getMember(t.guild_id, h.id));
    if (!A) return null;
    let p = g ? u.intl.string(d.default.Ux67nW) : u.intl.string(d.default["snp/lJ"]),
        _ = `kick-user-${h?.id}`;
    return (0, i.jsx)(c.A, {
        text: p,
        icon: a.Nxw,
        onClick: () => {
            null != h && (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("62624").then(n.bind(n, 324785));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: t.guild_id,
                    user: h,
                    modReportId: t.id
                })
            })
        },
        disabled: g
    }, _)
}