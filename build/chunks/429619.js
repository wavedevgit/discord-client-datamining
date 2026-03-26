/** chunk id: 429619 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    m = n(652215),
    _ = n(788868),
    g = n(985018),
    x = n(378926);
let A = () => {
    let {
        analyticsLocations: e
    } = (0, r.Ay)(a.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = s.useRef(null), {
        asset: n,
        popoutAsset: A,
        title: h,
        body: p,
        version: f,
        revertTextColor: T
    } = (0, u.M)(), S = s.useContext(o.gl), E = S?.navigateWithValidation ?? (e => e());
    return s.useEffect(() => {
        d.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            type: _.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: e,
            version: f
        })
    }, [e, f]), (0, i.jsxs)("div", {
        ref: t,
        className: x.kL,
        style: {
            backgroundImage: `url(${n})`
        },
        children: [(0, i.jsx)("div", {
            className: x.JS,
            "aria-hidden": !0,
            role: "presentation",
            children: (0, i.jsx)("img", {
                src: A,
                className: x.Qw,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: x.Em,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-lg/extrabold",
                color: T ? "text-overlay-dark" : "currentColor",
                className: x.DD,
                children: h
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: T ? "text-overlay-dark" : "currentColor",
                children: p
            })]
        }), (0, i.jsx)(l.Button, {
            onClick: () => {
                E(() => (0, c.Cz)({
                    analyticsLocations: e,
                    analyticsSource: a.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                }))
            },
            variant: "overlay-primary",
            text: g.intl.string(g.t.fYfGgK)
        })]
    })
}