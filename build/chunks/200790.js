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
    d = n(507698),
    c = n(954921),
    u = n(84540),
    m = n(919395),
    _ = n(128450),
    g = n(985018),
    A = n(223772);

function x(e) {
    let {
        user: t,
        guild: n,
        className: s,
        sectionTitle: x,
        forcedDivider: p = !1,
        withTutorial: h = !1
    } = e, {
        analyticsLocations: T
    } = (0, o.Ay)(), E = (0, m.a4)({
        user: t,
        guildId: n?.id
    }), {
        pendingAvatarDecoration: f,
        errors: S
    } = (0, m.CP)(n?.id), C = h ? r.wLn : a.$n;
    return (0, i.jsx)(_.A, {
        className: s,
        forcedDivider: p,
        hasBackground: !0,
        title: x,
        errors: S,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [(0, i.jsx)(C, {
                size: a.$n.Sizes.SMALL,
                onClick: () => {
                    (0, c.L)({
                        analyticsLocations: T,
                        guild: n
                    })
                },
                className: l()({
                    [A.yj]: h
                }),
                children: g.intl.string(g.t.BVcYCx)
            }), (void 0 === f ? null != E : null != f) && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: A.DT,
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