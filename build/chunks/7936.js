/** chunk id: 7936 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    c = n(557722),
    d = n(628387),
    u = n(148864),
    _ = n(146571),
    h = n(854378);
n(53516);
var g = n(985018),
    p = n(653307),
    m = n(818050);
let A = () => {
    let [e, t] = s.useState(""), [r, A] = s.useState(""), [f, E] = s.useState(!1), [x, I] = s.useState(!1), [N, v] = s.useState(null), [T, j] = s.useState(null), C = (0, a.bG)([u.A], () => u.A.getCountryCode()), S = C.code.split(" ")[0], y = async () => {
        try {
            await c.A.resendCode(e)
        } catch (e) {
            j(e.body.message)
        }
    }, b = async () => {
        E(!0);
        try {
            let {
                token: t
            } = await c.A.verifyPhone(S + e, r);
            v(null), j(null), I(!0), c.A.validatePhoneForSupport(t)
        } catch (e) {
            e.body.message ? (v(null), j(e.body.message)) : (v(e.body.phone), j(e.body.code))
        } finally {
            E(!1)
        }
    }, R = (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)(h._V, {
            src: n(142041)
        }), (0, i.jsxs)(h.hE, {
            className: l()(m.QX, p.Uu, p.wq, p.Hu),
            children: [g.intl.string(g.t.WWzQta), (0, i.jsx)(o.yr3, {
                size: "md",
                color: "currentColor",
                className: m.oY
            })]
        })]
    });
    return x ? R : (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)(h.hE, {
            children: g.intl.string(g.t.o4JNrO)
        }), (0, i.jsx)(h.tK, {
            className: m.Ot,
            children: g.intl.string(g.t.y0tVbq)
        }), (0, i.jsxs)(h.eB, {
            className: m.QX,
            children: [(0, i.jsx)(_.A, {
                label: g.intl.string(g.t["eJnn0+"]),
                alpha2: C.alpha2,
                countryCode: S,
                value: e,
                autoComplete: "off",
                spellCheck: "false",
                onChange: t,
                forceMode: d.Pd.PHONE,
                error: N
            }), (0, i.jsx)(h.pd, {
                className: m.QX,
                label: g.intl.string(g.t.OdzNbm),
                value: r,
                onChange: A,
                maxLength: 6,
                error: T
            }), (0, i.jsx)(o.QWc, {
                text: g.intl.string(g.t["5b60gi"]),
                onClick: y
            }), (0, i.jsx)("div", {
                className: m.QX,
                children: (0, i.jsx)(o.Button, {
                    text: g.intl.string(g.t.i4jeWR),
                    fullWidth: !0,
                    onClick: b,
                    loading: f
                })
            })]
        })]
    })
}