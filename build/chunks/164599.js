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
    c = n(309635),
    u = n(954571),
    _ = n(927578),
    m = n(919395),
    g = n(128450),
    A = n(212168),
    x = n(652215),
    h = n(788868),
    p = n(985018),
    T = n(97671);

function E(e) {
    let {
        user: t,
        guild: n,
        initialSelectedEffect: l,
        className: E,
        sectionTitle: S,
        forcedDivider: C = !1,
        withTutorial: f = !1,
        showBorder: N = !1
    } = e, {
        analyticsLocations: I
    } = (0, d.Ay)(), b = _.Ay.canUsePremiumProfileCustomization(t), v = (0, m.N2)({
        user: t,
        guildId: n?.id
    }), {
        pendingProfileEffect: j,
        errors: y
    } = (0, m.nZ)(n?.id);
    s.useEffect(() => {
        b && u.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
            type: h.e.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: I
        })
    }, [b, I]);
    let O = f ? o.wLn : r.$n;
    return (0, i.jsx)(g.A, {
        forcedDivider: C,
        borderType: A.i.PREMIUM,
        hasBackground: !0,
        title: S,
        showBorder: N,
        errors: y,
        className: E,
        children: (0, i.jsxs)("div", {
            className: T.NC,
            children: [(0, i.jsx)(O, {
                size: r.$n.Sizes.SMALL,
                onClick: () => {
                    (0, c.W)({
                        analyticsLocations: I,
                        guild: n,
                        initialSelectedEffect: l
                    })
                },
                className: a()({
                    [T.yj]: f
                }),
                children: p.intl.string(p.t["/dRfCf"])
            }), (void 0 === j ? null != v : null != j) && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: T.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != n ? p.intl.string(p.t.CHf9iJ) : p.intl.string(p.t.uMuafO),
                    onClick: () => {
                        (0, m.mZ)(null, n?.id)
                    }
                })
            })]
        })
    })
}