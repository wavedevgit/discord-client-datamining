/** Chunk was on 63974 **/
/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var i = n(417597),
    r = n(990078),
    s = n(397927),
    o = n(370480),
    a = n(263063),
    d = n(773669),
    c = n(696451),
    u = n(71393),
    p = n(661191),
    f = n(985018),
    m = n(713531);

function A(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: A,
        tooltipDelay: x
    } = e, g = (0, i.bG)([d.default], () => d.default.locale), j = (0, i.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), h = (0, i.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), b = (0, o.An)(p.default.extractTimestamp(t), g), v = (0, o.An)(null == h ? void 0 : h.joinedAt, g);
    return null == j || null == h ? (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: A,
        children: b
    }) : (0, l.jsxs)("div", {
        className: m.y9,
        children: [(0, l.jsxs)("div", {
            className: m.R1,
            children: [(0, l.jsx)(r.m, {
                text: f.intl.string(f.t.uvGmCx),
                delay: x,
                children: (0, l.jsx)(s.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: m.Mg
                })
            }), (0, l.jsx)(s.Text, {
                variant: "text-sm/normal",
                className: A,
                children: b
            })]
        }), (0, l.jsx)("div", {
            className: m.yF
        }), (0, l.jsxs)("div", {
            className: m.R1,
            children: [(0, l.jsx)(r.m, {
                text: j.name,
                delay: x,
                children: (0, l.jsx)(a.A, {
                    guild: j,
                    size: a.A.Sizes.SMOL,
                    className: m.$f
                })
            }), (0, l.jsx)(s.Text, {
                variant: "text-sm/normal",
                className: A,
                children: v
            })]
        })]
    })
}