/** chunk id: 959443 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    L: () => E
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(110259),
    a = n(732955),
    o = n(397927),
    d = n(688810),
    c = n(139286),
    u = n(793943),
    _ = n(996254),
    m = n(12901),
    g = n(738419),
    A = n(674547),
    h = n(985018),
    x = n(110948),
    p = n(114149);

function T(e) {
    let {
        className: t
    } = e, {
        analyticsLocations: n
    } = (0, d.Ay)();
    (0, c.A)({
        name: r.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: r.ImpressionTypes.VIEW,
        properties: {
            location_stack: n
        }
    });
    let s = (0, _.X)({
        "en-US": A.default["f/cLEi"],
        "en-GB": A.default["f/cLEi"]
    }, A.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: l()(x.kL, t),
        children: [(0, i.jsx)("div", {
            className: x.zc,
            children: (0, i.jsx)("img", {
                src: p.A,
                className: x._e,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: x.P_,
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: s
            }), (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: h.intl.string(A.default.nla4RG)
            })]
        }), (0, i.jsx)("div", {
            className: x.UD,
            children: (0, i.jsx)(a.$nd, {
                variant: "primary",
                text: h.intl.string(h.t.uw9zI7),
                onClick: () => {
                    (0, g.b0)(g.G8.APPEARANCE_SETTINGS), (0, u.nf)(u.HP.CUSTOM_THEME, {
                        from: u.xv.SETTING
                    }), (0, m.default)()
                }
            })
        })]
    })
}

function E() {
    return (0, i.jsx)(T, {
        className: x.YH
    })
}