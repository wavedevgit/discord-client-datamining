/** chunk id: 164599, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(309635),
    u = n(954571),
    _ = n(927578),
    p = n(919395),
    m = n(128450),
    g = n(212168),
    A = n(652215),
    f = n(788868),
    b = n(985018),
    h = n(97671);

function E(e) {
    let {
        user: t,
        guild: n,
        initialSelectedEffect: l,
        className: E,
        sectionTitle: O,
        forcedDivider: C = !1,
        withTutorial: x = !1,
        showBorder: S = !1
    } = e, {
        analyticsLocations: T
    } = (0, c.Ay)(), I = _.Ay.canUsePremiumProfileCustomization(t), y = (0, p.N2)({
        user: t,
        guildId: null == n ? void 0 : n.id
    }), {
        pendingProfileEffect: N,
        errors: j
    } = (0, p.nZ)(null == n ? void 0 : n.id);
    i.useEffect(() => {
        I && u.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
            type: f.e.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: T
        })
    }, [I, T]);
    let v = x ? o.wLn : a.$n;
    return (0, r.jsx)(m.A, {
        forcedDivider: C,
        borderType: g.i.PREMIUM,
        hasBackground: !0,
        title: O,
        showBorder: S,
        errors: j,
        className: E,
        children: (0, r.jsxs)("div", {
            className: h.NC,
            children: [(0, r.jsx)(v, {
                size: a.$n.Sizes.SMALL,
                onClick: () => {
                    (0, d.W)({
                        analyticsLocations: T,
                        guild: n,
                        initialSelectedEffect: l
                    })
                },
                className: s()({
                    [h.yj]: x
                }),
                children: b.intl.string(b.t["/dRfCf"])
            }), (void 0 === N ? null != y : null != N) && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: h.DT,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != n ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.uMuafO),
                    onClick: () => {
                        (0, p.mZ)(null, null == n ? void 0 : n.id)
                    }
                })
            })]
        })
    })
}