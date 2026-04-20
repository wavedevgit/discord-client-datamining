/** chunk id: 953680 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(129014),
    c = n(642277),
    d = n(854378),
    u = n(976860),
    _ = n(985018),
    h = n(818050);
let p = function(e) {
    let {
        match: t,
        location: n,
        attemptDeepLink: r
    } = e, [p, g] = s.useState(0);
    s.useEffect(() => {
        o.default.once("connected", () => {
            g(1)
        }), o.default.once("disconnected", () => {
            (0, u.pX)((0, c.W)())
        }), o.default.connect()
    }, []), s.useEffect(() => {
        if (0 !== p) return;
        let e = setTimeout(() => (0, u.pX)((0, c.W)()), 3e3);
        return () => clearTimeout(e)
    }, [p]);
    let m = s.useCallback(async (e, t) => {
        try {
            g(2), await r(e, t), g(3)
        } catch (e) {
            console.error("Error opening deeplink", e)
        }
    }, [r]);
    if ((0, u.MX)()) return null;
    switch (p) {
        case 1:
            return (0, i.jsxs)(d.Ay, {
                children: [(0, i.jsx)(d.hE, {
                    className: h.QB,
                    children: _.intl.string(_.t.qllnGm)
                }), (0, i.jsx)(d.tK, {
                    children: _.intl.string(_.t.SXCxye)
                }), (0, i.jsx)("div", {
                    className: h.eT,
                    children: (0, i.jsx)(a.Button, {
                        text: _.intl.string(_.t.UQvCf7),
                        fullWidth: !0,
                        onClick: () => m(t, n)
                    })
                }), (0, i.jsx)("div", {
                    className: l()(h.Ot, h.F1),
                    children: (0, i.jsx)(a.QWc, {
                        text: _.intl.string(_.t["2ixEBi"]),
                        textVariant: "text-sm/normal",
                        onClick: () => (0, u.pX)((0, c.W)())
                    })
                })]
            });
        case 0:
        case 2:
            return (0, i.jsxs)(d.Ay, {
                children: [(0, i.jsx)(d.hE, {
                    children: _.intl.string(_.t["Z+hCVU"])
                }), (0, i.jsx)(d.CK, {})]
            });
        case 3:
            return (0, i.jsxs)(d.Ay, {
                children: [(0, i.jsx)(d.hE, {
                    className: h.QB,
                    children: _.intl.string(_.t.csrAMJ)
                }), (0, i.jsx)(d.tK, {
                    children: _.intl.string(_.t.ghBJz9)
                })]
            })
    }
}