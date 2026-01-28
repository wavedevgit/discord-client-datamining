/** Chunk was on 5606 **/
/** chunk id: 959443, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(732955),
    s = n(397927),
    a = n(688810),
    o = n(139286),
    c = n(793943),
    d = n(996254),
    u = n(12901),
    p = n(738419),
    _ = n(520650),
    m = n(985018),
    g = n(996554),
    f = n(114149);

function b() {
    let {
        analyticsLocations: e
    } = (0, a.Ay)();
    (0, o.A)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: {
            location_stack: e
        }
    });
    let t = (0, d.X)({
        "en-US": _.default["f/cLEi"],
        "en-GB": _.default["f/cLEi"]
    }, _.default.CARxAC);
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [(0, r.jsx)("div", {
            className: g.zc,
            children: (0, r.jsx)("img", {
                src: f.A,
                className: g._e,
                alt: ""
            })
        }), (0, r.jsxs)("div", {
            className: g.P_,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: m.intl.string(_.default.nla4RG)
            })]
        }), (0, r.jsx)("div", {
            className: g.UD,
            children: (0, r.jsx)(l.$nd, {
                variant: "primary",
                text: m.intl.string(m.t.uw9zI7),
                onClick: () => {
                    (0, p.b0)(p.G8.APPEARANCE_SETTINGS), (0, c.nf)(c.HP.CUSTOM_THEME, {
                        from: c.xv.SETTING
                    }), (0, u.default)()
                }
            })
        })]
    })
}