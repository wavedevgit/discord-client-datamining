/** chunk id: 391209 params = (module,exports,require) **/
r.d(t, {
    A: () => b
});
var a = r(627968),
    s = r(64700),
    n = r(503698),
    o = r.n(n),
    i = r(397927),
    l = r(503852),
    c = r(363487),
    d = r(998418),
    u = r(193157),
    p = r(439156),
    _ = r(568065),
    m = r(985018),
    f = r(750845),
    I = r(107836);

function b(e) {
    let {
        guildId: t,
        powerup: r,
        onClose: n,
        ...b
    } = e, [k, x] = s.useState(void 0), v = (0, d.Ay)(t, r), T = v.type === _.b_.TIER_OVERRIDE_ACTIVATED, A = (0, c.A)(t), E = null == v.sourceEntitlement || !A;
    return (0, l.Z)(t, r, l.q.DETAIL), (0, a.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: f.yl,
        size: i.rIJ.DYNAMIC,
        ...b,
        parentComponent: "GuildPowerupLevelModal",
        children: [(0, a.jsxs)(i.$mQ, {
            "data-migration-pending": !0,
            className: f._F,
            scrollbarType: "none",
            children: [(0, a.jsx)("img", {
                alt: "",
                src: I,
                className: f.v5
            }), (0, a.jsxs)("div", {
                className: f.hQ,
                children: [(0, a.jsx)(i.Heading, {
                    variant: "heading-xl/extrabold",
                    children: r.title
                }), (0, a.jsx)(u.A, {
                    powerup: r
                }), null != k && (0, a.jsx)(i.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: k
                }), (0, a.jsxs)("div", {
                    className: o()(f.qr, {
                        [f.r9]: E
                    }),
                    children: [!T && A && (0, a.jsx)(p.A, {
                        guildId: t,
                        powerup: r,
                        onError: x,
                        grow: !1,
                        compact: !E
                    }), (0, a.jsx)(i.Button, {
                        variant: E ? "secondary" : "primary",
                        onClick: n,
                        text: m.intl.string(m.t.cpT0Cq)
                    })]
                })]
            })]
        }), (0, a.jsx)(i.s_y, {
            "data-migration-pending": !0,
            className: f.VN,
            onClick: n
        })]
    })
}