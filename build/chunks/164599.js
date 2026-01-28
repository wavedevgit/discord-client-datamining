/** Chunk was on 5606 **/
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
    p = n(927578),
    _ = n(919395),
    m = n(128450),
    g = n(212168),
    f = n(652215),
    b = n(788868),
    h = n(985018),
    A = n(97671);

function E(e) {
    let {
        user: t,
        guild: n,
        initialSelectedEffect: l,
        className: E,
        sectionTitle: x,
        forcedDivider: O = !1,
        withTutorial: C = !1,
        showBorder: y = !1
    } = e, {
        analyticsLocations: j
    } = (0, c.Ay)(), T = p.Ay.canUsePremiumProfileCustomization(t), v = (0, _.N2)({
        user: t,
        guildId: null == n ? void 0 : n.id
    }), {
        pendingProfileEffect: S,
        errors: I
    } = (0, _.nZ)(null == n ? void 0 : n.id);
    i.useEffect(() => {
        T && u.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
            type: b.e.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: j
        })
    }, [T, j]);
    let N = C ? o.wLn : a.$n;
    return (0, r.jsx)(m.A, {
        forcedDivider: O,
        borderType: g.i.PREMIUM,
        hasBackground: !0,
        title: x,
        showBorder: y,
        errors: I,
        className: E,
        children: (0, r.jsxs)("div", {
            className: A.NC,
            children: [(0, r.jsx)(N, {
                size: a.$n.Sizes.SMALL,
                onClick: () => {
                    (0, d.W)({
                        analyticsLocations: j,
                        guild: n,
                        initialSelectedEffect: l
                    })
                },
                className: s()({
                    [A.yj]: C
                }),
                children: h.intl.string(h.t["/dRfCf"])
            }), (void 0 === S ? null != v : null != S) && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: A.DT,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != n ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.uMuafO),
                    onClick: () => {
                        (0, _.mZ)(null, null == n ? void 0 : n.id)
                    }
                })
            })]
        })
    })
}