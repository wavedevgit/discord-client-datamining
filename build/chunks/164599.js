/** Chunk was on web.js **/
/** chunk id: 164599, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(421380),
    l = n(397927),
    c = n(688810),
    u = n(309635),
    d = n(954571),
    f = n(927578),
    p = n(919395),
    _ = n(128450),
    h = n(212168),
    m = n(652215),
    g = n(788868),
    E = n(985018),
    y = n(97671);

function b(e) {
    let {
        user: t,
        guild: n,
        initialSelectedEffect: a,
        className: b,
        sectionTitle: O,
        forcedDivider: v = !1,
        withTutorial: A = !1,
        showBorder: I = !1
    } = e, {
        analyticsLocations: S
    } = (0, c.Ay)(), T = f.Ay.canUsePremiumProfileCustomization(t), C = (0, p.N2)({
        user: t,
        guildId: null == n ? void 0 : n.id
    }), {
        pendingProfileEffect: N,
        errors: w
    } = (0, p.nZ)(null == n ? void 0 : n.id), R = void 0 === N ? null != C : null != N, P = () => {
        (0, u.W)({
            analyticsLocations: S,
            guild: n,
            initialSelectedEffect: a
        })
    }, D = () => {
        (0, p.mZ)(null, null == n ? void 0 : n.id)
    };
    i.useEffect(() => {
        T && d.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            type: g.e.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: S
        })
    }, [T, S]);
    let x = A ? l.wLn : o.$n;
    return (0, r.jsx)(_.A, {
        forcedDivider: v,
        borderType: h.i.PREMIUM,
        hasBackground: !0,
        title: O,
        showBorder: I,
        errors: w,
        className: b,
        children: (0, r.jsxs)("div", {
            className: y.NC,
            children: [(0, r.jsx)(x, {
                size: o.$n.Sizes.SMALL,
                onClick: P,
                className: s()({
                    [y.yj]: A
                }),
                children: E.intl.string(E.t["/dRfCf"])
            }), R && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: y.DT,
                children: (0, r.jsx)(l.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != n ? E.intl.string(E.t.CHf9iJ) : E.intl.string(E.t.uMuafO),
                    onClick: D
                })
            })]
        })
    })
}