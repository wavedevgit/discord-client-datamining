/** chunk id: 959443 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    L: () => E
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(110259),
    r = n(732955),
    o = n(397927),
    d = n(688810),
    c = n(139286),
    u = n(793943),
    m = n(996254),
    _ = n(12901),
    g = n(738419),
    A = n(520650),
    x = n(985018),
    p = n(996554),
    h = n(114149);

function T(e) {
    let {
        className: t
    } = e, {
        analyticsLocations: n
    } = (0, d.Ay)();
    (0, c.A)({
        name: a.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: a.ImpressionTypes.VIEW,
        properties: {
            location_stack: n
        }
    });
    let s = (0, m.X)({
        "en-US": A.default["f/cLEi"],
        "en-GB": A.default["f/cLEi"]
    }, A.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: l()(p.kL, t),
        children: [(0, i.jsx)("div", {
            className: p.zc,
            children: (0, i.jsx)("img", {
                src: h.A,
                className: p._e,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: p.P_,
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: s
            }), (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: x.intl.string(A.default.nla4RG)
            })]
        }), (0, i.jsx)("div", {
            className: p.UD,
            children: (0, i.jsx)(r.$nd, {
                variant: "primary",
                text: x.intl.string(x.t.uw9zI7),
                onClick: () => {
                    (0, g.b0)(g.G8.APPEARANCE_SETTINGS), (0, u.nf)(u.HP.CUSTOM_THEME, {
                        from: u.xv.SETTING
                    }), (0, _.default)()
                }
            })
        })]
    })
}

function E() {
    return (0, i.jsx)(T, {
        className: p.YH
    })
}