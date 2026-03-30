/** chunk id: 200790 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(688810),
    d = n(821956),
    c = n(562819),
    u = n(84540),
    m = n(919395),
    _ = n(128450),
    g = n(985018),
    x = n(950087);

function A(e) {
    let {
        user: t,
        guild: n,
        className: s,
        sectionTitle: A,
        forcedDivider: h = !1,
        withTutorial: p = !1
    } = e, {
        analyticsLocations: T
    } = (0, o.Ay)(), f = (0, m.a4)({
        user: t,
        guildId: n?.id
    }), {
        pendingAvatarDecoration: S,
        errors: E
    } = (0, m.CP)(n?.id), b = p ? r.wLn : a.$n;
    return (0, i.jsx)(_.A, {
        className: s,
        forcedDivider: h,
        hasBackground: !0,
        title: A,
        errors: E,
        children: (0, i.jsxs)("div", {
            className: x.NC,
            children: [(0, i.jsx)(b, {
                size: a.$n.Sizes.SMALL,
                onClick: () => {
                    (0, c.L)({
                        analyticsLocations: T,
                        guild: n
                    })
                },
                className: l()({
                    [x.yj]: p
                }),
                children: g.intl.string(g.t.BVcYCx)
            }), (void 0 === S ? null != f : null != S) && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: x.DT,
                children: (0, i.jsx)(r.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: (0, d.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                    onClick: () => {
                        (0, u.p)({
                            guildId: n?.id,
                            avatarDecoration: null
                        })
                    }
                })
            })]
        })
    })
}