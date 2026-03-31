/** chunk id: 164599 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(617061),
    u = n(84540),
    m = n(954571),
    g = n(927578),
    _ = n(919395),
    A = n(128450),
    x = n(212168),
    h = n(652215),
    p = n(788868),
    T = n(985018),
    f = n(688201);

function E(e) {
    let {
        user: t,
        guild: n,
        initialSelectedEffect: l,
        className: E,
        sectionTitle: S,
        forcedDivider: b = !1,
        withTutorial: C = !1,
        showBorder: N = !1
    } = e, {
        analyticsLocations: v
    } = (0, d.Ay)(), I = g.Ay.canUsePremiumProfileCustomization(t), j = (0, _.N2)({
        user: t,
        guildId: n?.id
    }), {
        pendingProfileEffect: y,
        errors: O
    } = (0, _.nZ)(n?.id);
    s.useEffect(() => {
        I && m.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
            type: p.e.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: v
        })
    }, [I, v]);
    let R = C ? o.wLn : r.$n;
    return (0, i.jsx)(A.A, {
        forcedDivider: b,
        borderType: x.i.PREMIUM,
        hasBackground: !0,
        title: S,
        showBorder: N,
        errors: O,
        className: E,
        children: (0, i.jsxs)("div", {
            className: f.NC,
            children: [(0, i.jsx)(R, {
                size: r.$n.Sizes.SMALL,
                onClick: () => {
                    (0, c.W)({
                        analyticsLocations: v,
                        guild: n,
                        initialSelectedEffect: l
                    })
                },
                className: a()({
                    [f.yj]: C
                }),
                children: T.intl.string(T.t["/dRfCf"])
            }), (void 0 === y ? null != j : null != y) && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: f.DT,
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