/** chunk id: 743987 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var s = n(417597),
    r = n(990078),
    l = n(397927),
    a = n(370480),
    d = n(263063),
    o = n(773669),
    c = n(696451),
    u = n(71393),
    A = n(661191),
    m = n(985018),
    x = n(713531);

function f(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: f,
        tooltipDelay: _
    } = e, p = (0, s.bG)([o.default], () => o.default.locale), h = (0, s.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), g = (0, s.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), I = (0, a.An)(A.default.extractTimestamp(t), p), j = (0, a.An)(g?.joinedAt, p);
    return null == h || null == g ? (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: f,
        children: I
    }) : (0, i.jsxs)("div", {
        className: x.y9,
        children: [(0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(r.m, {
                text: m.intl.string(m.t.uvGmCx),
                delay: _,
                children: (0, i.jsx)(l.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: x.Mg
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: f,
                children: I
            })]
        }), (0, i.jsx)("div", {
            className: x.yF
        }), (0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(r.m, {
                text: h.name,
                delay: _,
                children: (0, i.jsx)(d.Ay, {
                    guild: h,
                    size: d.Ay.Sizes.SMOL,
                    className: x.$f
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: f,
                children: j
            })]
        })]
    })
}