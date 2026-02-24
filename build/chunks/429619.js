/** chunk id: 429619, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(793574),
    r = n(688810),
    o = n(823092),
    c = n(954571),
    d = n(979286),
    u = n(492499),
    _ = n(652215),
    m = n(788868),
    A = n(985018),
    g = n(844551);
let h = () => {
    let {
        analyticsLocations: e
    } = (0, r.Ay)(l.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = s.useRef(null), {
        asset: n,
        popoutAsset: h,
        title: x,
        body: p,
        version: E,
        revertTextColor: C
    } = (0, u.M)(), T = s.useContext(o.gl), S = T?.navigateWithValidation ?? (e => e());
    return s.useEffect(() => {
        c.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
            type: m.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: e,
            version: E
        })
    }, [e, E]), (0, i.jsxs)("div", {
        ref: t,
        className: g.kL,
        style: {
            backgroundImage: `url(${n})`
        },
        children: [(0, i.jsx)("div", {
            className: g.JS,
            "aria-hidden": !0,
            role: "presentation",
            children: (0, i.jsx)("img", {
                src: h,
                className: g.Qw,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: g.Em,
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-lg/extrabold",
                color: C ? "text-overlay-dark" : "currentColor",
                className: g.DD,
                children: x
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: C ? "text-overlay-dark" : "currentColor",
                children: p
            })]
        }), (0, i.jsx)(a.Button, {
            onClick: () => {
                S(() => (0, d.Cz)({
                    analyticsLocations: e,
                    analyticsSource: l.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                }))
            },
            variant: "overlay-primary",
            text: A.intl.string(A.t.fYfGgK)
        })]
    })
}