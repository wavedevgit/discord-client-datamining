/** Chunk was on 77870 **/
/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(990078),
    s = n(397927),
    a = n(370480),
    o = n(263063),
    c = n(773669),
    u = n(696451),
    d = n(71393),
    p = n(661191),
    h = n(985018),
    f = n(713531);

function g(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: g,
        tooltipDelay: m
    } = e, b = (0, l.bG)([c.default], () => c.default.locale), A = (0, l.bG)([d.A], () => null != n ? d.A.getGuild(n) : null), y = (0, l.bG)([u.Ay], () => null != n ? u.Ay.getMember(n, t) : null), _ = (0, a.An)(p.default.extractTimestamp(t), b), O = (0, a.An)(null == y ? void 0 : y.joinedAt, b);
    return null == A || null == y ? (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: g,
        children: _
    }) : (0, r.jsxs)("div", {
        className: f.y9,
        children: [(0, r.jsxs)("div", {
            className: f.R1,
            children: [(0, r.jsx)(i.m, {
                text: h.intl.string(h.t.uvGmCx),
                delay: m,
                children: (0, r.jsx)(s.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: f.Mg
                })
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                className: g,
                children: _
            })]
        }), (0, r.jsx)("div", {
            className: f.yF
        }), (0, r.jsxs)("div", {
            className: f.R1,
            children: [(0, r.jsx)(i.m, {
                text: A.name,
                delay: m,
                children: (0, r.jsx)(o.A, {
                    guild: A,
                    size: o.A.Sizes.SMOL,
                    className: f.$f
                })
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                className: g,
                children: O
            })]
        })]
    })
}