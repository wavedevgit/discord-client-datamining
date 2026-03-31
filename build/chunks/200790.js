/** chunk id: 200790 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    g = n(128450),
    _ = n(985018),
    A = n(950087);

function x(e) {
    let {
        user: t,
        guild: n,
        className: s,
        sectionTitle: x,
        forcedDivider: h = !1,
        withTutorial: p = !1
    } = e, {
        analyticsLocations: T
    } = (0, o.Ay)(), f = (0, m.a4)({
        user: t,
        guildId: n?.id
    }), {
        pendingAvatarDecoration: E,
        errors: S
    } = (0, m.CP)(n?.id), b = p ? r.wLn : a.$n;
    return (0, i.jsx)(g.A, {
        className: s,
        forcedDivider: h,
        hasBackground: !0,
        title: x,
        errors: S,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [(0, i.jsx)(b, {
                size: a.$n.Sizes.SMALL,
                onClick: () => {
                    (0, c.L)({
                        analyticsLocations: T,
                        guild: n
                    })
                },
                className: l()({
                    [A.yj]: p
                }),
                children: _.intl.string(_.t.BVcYCx)
            }), (void 0 === E ? null != f : null != E) && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: A.DT,
                children: (0, i.jsx)(r.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: (0, d.uZ)(t, n) ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.OrokWm),
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