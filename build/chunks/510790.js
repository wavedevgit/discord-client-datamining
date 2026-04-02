/** chunk id: 510790 params = (module,exports,require) **/
n.d(t, {
    f: () => S
});
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n(110259),
    s = n(239947),
    o = n(934551),
    d = n(97808),
    c = n(732955),
    u = n(397927),
    _ = n(139286),
    m = n(520117),
    h = n(793943),
    p = n(763754),
    g = n(973654),
    A = n(954571),
    x = n(467135),
    f = n(644235),
    C = n(153469),
    I = n(652215),
    E = n(674547),
    b = n(985018),
    v = n(574854);
let T = e => e.map(e => `#${e}`),
    S = e => {
        let {
            message: t
        } = e, {
            sharedClientTheme: n
        } = t, {
            setAll: a
        } = (0, x.ko)();
        return void 0 === n ? null : (0, i.jsxs)("div", {
            className: v.kL,
            children: [(0, i.jsx)(y, {
                message: t
            }), (0, i.jsx)(c.$nd, {
                text: b.intl.string(b.t.SKNnqq),
                fullWidth: !0,
                variant: "primary",
                onClick: () => {
                    A.default.track(I.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}), (0, h.nf)(h.HP.CUSTOM_THEME, {
                        from: h.xv.SHARE_MESSAGE
                    }), a({
                        colors: T(n.colors),
                        chassisMixAmount: n.base_mix,
                        gradientAngle: n.gradient_angle
                    }), (0, g.GQ)((0, f.PC)(n.base_theme))
                }
            })]
        })
    },
    y = e => {
        let t, n, c, {
                message: h
            } = e,
            {
                sharedClientTheme: g
            } = h,
            A = (0, p.Ay)(h),
            x = a.useMemo(() => (0, r.once)(() => {
                (0, _.x)({
                    type: l.ImpressionTypes.VIEW,
                    name: s.I.CUSTOM_THEME_SHARE,
                    properties: {}
                })
            }), []),
            f = (0, m.A)({
                onVisible: () => {
                    x()
                },
                threshold: 1,
                minTimeVisibleMs: 200
            }),
            I = a.useMemo(() => void 0 === g ? "" : (0, C.V9)(T(g.colors), g.gradient_angle ?? 0), [g]);
        return void 0 === g ? null : (0, i.jsxs)("div", {
            className: v.pS,
            ref: f,
            children: [(0, i.jsx)("div", {
                className: v.sl,
                style: {
                    background: `${I}`
                }
            }), (0, i.jsxs)("div", {
                className: v.Ix,
                children: [(0, i.jsxs)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: v.qP,
                    children: [b.intl.string(E.default.KSBBpC), " ", (0, i.jsx)(o.NitroWheelIcon, {})]
                }), (0, i.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: v.Tb,
                    children: (t = `${b.intl.format(E.default.fQPSEf,{username:"__USERNAME__"})}`, n = h.author, c = A.nick, t.split(" ").map((e, t) => "__USERNAME__" !== e ? (0, i.jsxs)(a.Fragment, {
                        children: [e, " "]
                    }, t) : (0, i.jsxs)("span", {
                        className: v.H,
                        children: [(0, i.jsx)(d.eu, {
                            "aria-label": c,
                            src: n.getAvatarURL(null, 20),
                            size: u._3J.SIZE_20
                        }), " ", c, " "]
                    }, t)))
                })]
            })]
        })
    }