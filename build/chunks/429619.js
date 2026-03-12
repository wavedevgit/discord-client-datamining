/** chunk id: 429619 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(823092),
    d = n(954571),
    c = n(979286),
    u = n(492499),
    _ = n(652215),
    g = n(788868),
    m = n(985018),
    A = n(300461);
let h = () => {
    let {
        analyticsLocations: e
    } = (0, r.Ay)(a.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = s.useRef(null), {
        asset: n,
        popoutAsset: h,
        title: p,
        body: x,
        version: E,
        revertTextColor: T
    } = (0, u.M)(), S = s.useContext(o.gl), C = S?.navigateWithValidation ?? (e => e());
    return s.useEffect(() => {
        d.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
            type: g.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: e,
            version: E
        })
    }, [e, E]), (0, i.jsxs)("div", {
        ref: t,
        className: A.kL,
        style: {
            backgroundImage: `url(${n})`
        },
        children: [(0, i.jsx)("div", {
            className: A.JS,
            "aria-hidden": !0,
            role: "presentation",
            children: (0, i.jsx)("img", {
                src: h,
                className: A.Qw,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: A.Em,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-lg/extrabold",
                color: T ? "text-overlay-dark" : "currentColor",
                className: A.DD,
                children: p
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: T ? "text-overlay-dark" : "currentColor",
                children: x
            })]
        }), (0, i.jsx)(l.Button, {
            onClick: () => {
                C(() => (0, c.Cz)({
                    analyticsLocations: e,
                    analyticsSource: a.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                }))
            },
            variant: "overlay-primary",
            text: m.intl.string(m.t.fYfGgK)
        })]
    })
}