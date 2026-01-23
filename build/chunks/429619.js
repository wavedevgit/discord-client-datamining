/** Chunk was on web.js **/
/** chunk id: 429619, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(823092),
    c = n(954571),
    u = n(979286),
    d = n(492499),
    f = n(652215),
    p = n(788868),
    _ = n(985018),
    h = n(844551);
let m = () => {
    var e;
    let {
        analyticsLocations: t
    } = (0, o.Ay)(s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), n = i.useRef(null), {
        asset: m,
        popoutAsset: g,
        title: E,
        body: y,
        version: b,
        revertTextColor: O
    } = (0, d.M)(), v = i.useContext(l.gl), A = null != (e = null == v ? void 0 : v.navigateWithValidation) ? e : e => e();
    i.useEffect(() => {
        c.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
            type: p.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
            location_stack: t,
            version: b
        })
    }, [t, b]);
    let I = () => {
        A(() => (0, u.Cz)({
            analyticsLocations: t,
            analyticsSource: s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        }))
    };
    return (0, r.jsxs)("div", {
        ref: n,
        className: h.kL,
        style: {
            backgroundImage: "url(".concat(m, ")")
        },
        children: [(0, r.jsx)("div", {
            className: h.JS,
            "aria-hidden": !0,
            role: "presentation",
            children: (0, r.jsx)("img", {
                src: g,
                className: h.Qw,
                alt: ""
            })
        }), (0, r.jsxs)("div", {
            className: h.Em,
            children: [(0, r.jsx)(a.Heading, {
                variant: "heading-lg/extrabold",
                color: O ? "text-overlay-dark" : "currentColor",
                className: h.DD,
                children: E
            }), (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: O ? "text-overlay-dark" : "currentColor",
                children: y
            })]
        }), (0, r.jsx)(a.Button, {
            onClick: I,
            variant: "overlay-primary",
            text: _.intl.string(_.t.fYfGgK)
        })]
    })
}