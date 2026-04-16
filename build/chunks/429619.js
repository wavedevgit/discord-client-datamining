/** chunk id: 429619 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(793574),
    a = n(688810),
    o = n(823092),
    d = n(954571),
    c = n(979286),
    u = n(492499),
    m = n(652215),
    g = n(788868),
    _ = n(985018),
    x = n(144030);
let h = () => {
    let {
        analyticsLocations: e
    } = (0, a.Ay)(r.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = s.useRef(null), {
        asset: n,
        popoutAsset: h,
        title: A,
        body: p,
        version: T,
        revertTextColor: f
    } = (0, u.M)(), {
        navigateWithValidation: S
    } = (0, o.L_)();
    return s.useEffect(() => {
        d.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            type: g.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: e,
            version: T
        })
    }, [e, T]), (0, i.jsxs)("div", {
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
                src: h,
                className: x.Qw,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: x.Em,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-lg/extrabold",
                color: f ? "text-overlay-dark" : "currentColor",
                className: x.DD,
                children: A
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: f ? "text-overlay-dark" : "currentColor",
                children: p
            })]
        }), (0, i.jsx)(l.Button, {
            onClick: () => {
                S(() => (0, c.Cz)({
                    analyticsLocations: e,
                    analyticsSource: r.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                }))
            },
            variant: "overlay-primary",
            text: _.intl.string(_.t.fYfGgK)
        })]
    })
}