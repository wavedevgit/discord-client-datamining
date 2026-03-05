/** chunk id: 959443, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E,
    L: () => T
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
    _ = n(996254),
    g = n(12901),
    m = n(738419),
    A = n(520650),
    h = n(985018),
    p = n(996554),
    x = n(114149);

function E(e) {
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
    let s = (0, _.X)({
        "en-US": A.default["f/cLEi"],
        "en-GB": A.default["f/cLEi"]
    }, A.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: l()(p.kL, t),
        children: [(0, i.jsx)("div", {
            className: p.zc,
            children: (0, i.jsx)("img", {
                src: x.A,
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
                children: h.intl.string(A.default.nla4RG)
            })]
        }), (0, i.jsx)("div", {
            className: p.UD,
            children: (0, i.jsx)(r.$nd, {
                variant: "primary",
                text: h.intl.string(h.t.uw9zI7),
                onClick: () => {
                    (0, m.b0)(m.G8.APPEARANCE_SETTINGS), (0, u.nf)(u.HP.CUSTOM_THEME, {
                        from: u.xv.SETTING
                    }), (0, g.default)()
                }
            })
        })]
    })
}

function T() {
    return (0, i.jsx)(E, {
        className: p.YH
    })
}