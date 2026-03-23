/** chunk id: 164599 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(309635),
    u = n(84540),
    m = n(954571),
    _ = n(927578),
    g = n(919395),
    A = n(128450),
    x = n(212168),
    p = n(652215),
    h = n(788868),
    T = n(985018),
    E = n(97671);

function f(e) {
    let {
        user: t,
        guild: n,
        initialSelectedEffect: l,
        className: f,
        sectionTitle: S,
        forcedDivider: C = !1,
        withTutorial: b = !1,
        showBorder: N = !1
    } = e, {
        analyticsLocations: I
    } = (0, d.Ay)(), v = _.Ay.canUsePremiumProfileCustomization(t), j = (0, g.N2)({
        user: t,
        guildId: n?.id
    }), {
        pendingProfileEffect: y,
        errors: O
    } = (0, g.nZ)(n?.id);
    s.useEffect(() => {
        v && m.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
            type: h.e.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: I
        })
    }, [v, I]);
    let R = b ? o.wLn : r.$n;
    return (0, i.jsx)(A.A, {
        forcedDivider: C,
        borderType: x.i.PREMIUM,
        hasBackground: !0,
        title: S,
        showBorder: N,
        errors: O,
        className: f,
        children: (0, i.jsxs)("div", {
            className: E.NC,
            children: [(0, i.jsx)(R, {
                size: r.$n.Sizes.SMALL,
                onClick: () => {
                    (0, c.W)({
                        analyticsLocations: I,
                        guild: n,
                        initialSelectedEffect: l
                    })
                },
                className: a()({
                    [E.yj]: b
                }),
                children: T.intl.string(T.t["/dRfCf"])
            }), (void 0 === y ? null != j : null != y) && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: E.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != n ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.uMuafO),
                    onClick: () => {
                        (0, u.p)({
                            guildId: n?.id,
                            profileEffect: null
                        })
                    }
                })
            })]
        })
    })
}