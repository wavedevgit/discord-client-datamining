/** chunk id: 391209, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => b
});
var r = a(627968),
    s = a(64700),
    n = a(503698),
    o = a.n(n),
    i = a(397927),
    l = a(503852),
    c = a(363487),
    d = a(998418),
    u = a(193157),
    p = a(439156),
    _ = a(568065),
    m = a(985018),
    I = a(750845),
    f = a(107836);

function b(e) {
    let {
        guildId: t,
        powerup: a,
        onClose: n,
        ...b
    } = e, [k, x] = s.useState(void 0), T = (0, d.Ay)(t, a), v = T.type === _.b_.TIER_OVERRIDE_ACTIVATED, A = (0, c.A)(t), E = null == T.sourceEntitlement || !A;
    return (0, l.Z)(t, a, l.q.DETAIL), (0, r.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: I.yl,
        size: i.rIJ.DYNAMIC,
        ...b,
        parentComponent: "GuildPowerupLevelModal",
        children: [(0, r.jsxs)(i.$mQ, {
            "data-migration-pending": !0,
            className: I._F,
            scrollbarType: "none",
            children: [(0, r.jsx)("img", {
                alt: "",
                src: f,
                className: I.v5
            }), (0, r.jsxs)("div", {
                className: I.hQ,
                children: [(0, r.jsx)(i.Heading, {
                    variant: "heading-xl/extrabold",
                    children: a.title
                }), (0, r.jsx)(u.A, {
                    powerup: a
                }), null != k && (0, r.jsx)(i.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: k
                }), (0, r.jsxs)("div", {
                    className: o()(I.qr, {
                        [I.r9]: E
                    }),
                    children: [!v && A && (0, r.jsx)(p.A, {
                        guildId: t,
                        powerup: a,
                        onError: x,
                        grow: !1,
                        compact: !E
                    }), (0, r.jsx)(i.Button, {
                        variant: E ? "secondary" : "primary",
                        onClick: n,
                        text: m.intl.string(m.t.cpT0Cq)
                    })]
                })]
            })]
        }), (0, r.jsx)(i.s_y, {
            "data-migration-pending": !0,
            className: I.VN,
            onClick: n
        })]
    })
}