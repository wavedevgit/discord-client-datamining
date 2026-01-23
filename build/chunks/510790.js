/** Chunk was on web.js **/
/** chunk id: 510790, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => T
}), n(747238);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(110259),
    o = n(239947),
    l = n(934551),
    c = n(97808),
    u = n(732955),
    d = n(397927),
    f = n(139286),
    p = n(520117),
    _ = n(793943),
    h = n(763754),
    m = n(973654),
    g = n(954571),
    E = n(467135),
    y = n(644235),
    b = n(153469),
    O = n(652215),
    v = n(520650),
    A = n(985018),
    I = n(294456);
let S = e => e.map(e => "#".concat(e)),
    T = e => {
        let {
            message: t
        } = e, {
            sharedClientTheme: n
        } = t, {
            setAll: i
        } = (0, E.ko)();
        return void 0 === n ? null : (0, r.jsxs)("div", {
            className: I.kL,
            children: [(0, r.jsx)(N, {
                message: t
            }), (0, r.jsx)(u.$nd, {
                text: A.intl.string(A.t.SKNnqq),
                fullWidth: !0,
                variant: "primary",
                onClick: () => {
                    g.default.track(O.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}), (0, _.nf)(_.HP.CUSTOM_THEME, {
                        from: _.xv.SHARE_MESSAGE
                    }), i({
                        colors: S(n.colors),
                        chassisMixAmount: n.base_mix,
                        gradientAngle: n.gradient_angle
                    }), (0, m.GQ)((0, y.PC)(n.base_theme))
                }
            })]
        })
    },
    C = (e, t, n) => e.split(" ").map((e, a) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
        children: [e, " "]
    }, a) : (0, r.jsxs)("span", {
        className: I.H,
        children: [(0, r.jsx)(c.eu, {
            "aria-label": n,
            src: t.getAvatarURL(null, 20),
            size: d._3J.SIZE_20
        }), " ", n, " "]
    }, a)),
    N = e => {
        let {
            message: t
        } = e, {
            sharedClientTheme: n
        } = t, c = (0, h.Ay)(t), u = i.useMemo(() => (0, a.once)(() => {
            (0, f.x)({
                type: s.ImpressionTypes.VIEW,
                name: o.I.CUSTOM_THEME_SHARE,
                properties: {}
            })
        }), []), _ = (0, p.A)({
            onVisible: () => {
                u()
            },
            threshold: 1,
            minTimeVisibleMs: 200
        }), m = i.useMemo(() => {
            var e;
            return void 0 === n ? "" : (0, b.V9)(S(n.colors), null != (e = n.gradient_angle) ? e : 0)
        }, [n]);
        return void 0 === n ? null : (0, r.jsxs)("div", {
            className: I.pS,
            ref: _,
            children: [(0, r.jsx)("div", {
                className: I.sl,
                style: {
                    background: "".concat(m)
                }
            }), (0, r.jsxs)("div", {
                className: I.Ix,
                children: [(0, r.jsxs)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: I.qP,
                    children: [A.intl.string(v.default.KSBBpC), " ", (0, r.jsx)(l.NitroWheelIcon, {})]
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: I.Tb,
                    children: C("".concat(A.intl.format(v.default.fQPSEf, {
                        username: "__USERNAME__"
                    })), t.author, c.nick)
                })]
            })]
        })
    }