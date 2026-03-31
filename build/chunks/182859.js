/** chunk id: 182859 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(732955),
    o = n(397927),
    d = n(688810),
    c = n(893598),
    u = n(136708),
    m = n(985018),
    g = n(548645),
    _ = n(519636);

function x(e) {
    let {
        guildId: t,
        variant: l = "admin",
        className: x,
        analyticsLocation: A,
        videoPlacement: h = "sidebar",
        onDismiss: p
    } = e, {
        analyticsLocations: T
    } = (0, d.Ay)(), f = s.useCallback(() => {
        (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("64251").then(n.bind(n, 430326));
            return n => (0, i.jsx)(e, {
                ...n,
                guildId: t,
                analyticsLocation: A,
                videoPlacement: h,
                sourceAnalyticsLocations: T
            })
        })
    }, [A, T, t, h]);
    return "member" === l ? (0, i.jsxs)(o.DUT, {
        className: a()(g.iR, x),
        onClick: f,
        "aria-label": m.intl.string(u.default["103aY+"]),
        children: [(0, i.jsx)("img", {
            alt: "",
            className: g.xn,
            src: _.A
        }), (0, i.jsx)("div", {
            className: g.b1
        }), (0, i.jsx)("div", {
            className: g.i5,
            children: (0, i.jsx)(o.Text, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: m.intl.string(u.default.diMhWc)
            })
        }), (0, i.jsx)(c.A, {
            className: g.Rr,
            inactive: !0,
            renderLinkComponent: () => null
        })]
    }) : (0, i.jsxs)("div", {
        className: g.kL,
        children: [(0, i.jsx)("div", {
            className: a()(g.X8, "theme-dark"),
            children: (0, i.jsx)(r.K0, {
                variant: "icon-only",
                size: "md",
                "aria-label": m.intl.string(m.t.WAI6xu),
                onClick: p,
                icon: o.PGe
            })
        }), (0, i.jsxs)(o.DUT, {
            className: g.iT,
            onClick: f,
            "aria-label": m.intl.string(u.default["103aY+"]),
            children: [(0, i.jsx)("img", {
                alt: "",
                className: g.xn,
                src: _.A
            }), (0, i.jsx)("div", {
                className: g.TQ
            }), (0, i.jsx)(c.A, {
                className: g.Rr,
                inactive: !0,
                renderLinkComponent: () => null
            })]
        }), (0, i.jsxs)("div", {
            className: g.FS,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: m.intl.string(u.default.diMhWc)
            }), (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: m.intl.string(u.default.pycxTr)
            })]
        })]
    })
}