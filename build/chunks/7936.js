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
var p = n(985018),
    g = n(653307),
    m = n(818050);
let A = () => {
    let [e, t] = s.useState(""), [r, A] = s.useState(""), [f, E] = s.useState(!1), [x, I] = s.useState(!1), [N, v] = s.useState(null), [T, C] = s.useState(null), j = (0, a.bG)([u.A], () => u.A.getCountryCode()), y = j.code.split(" ")[0], S = async () => {
        try {
            await c.A.resendCode(e)
        } catch (e) {
            C(e.body.message)
        }
    }, b = async () => {
        E(!0);
        try {
            let {
                token: t
            } = await c.A.verifyPhone(y + e, r);
            v(null), C(null), I(!0), c.A.validatePhoneForSupport(t)
        } catch (e) {
            e.body.message ? (v(null), C(e.body.message)) : (v(e.body.phone), C(e.body.code))
        } finally {
            E(!1)
        }
    }, R = (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)(h._V, {
            src: n(142041)
        }), (0, i.jsxs)(h.hE, {
            className: l()(m.QX, g.Uu, g.wq, g.Hu),
            children: [p.intl.string(p.t.WWzQta), (0, i.jsx)(o.yr3, {
                size: "md",
                color: "currentColor",
                className: m.oY
            })]
        })]
    });
    return x ? R : (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)(h.hE, {
            children: p.intl.string(p.t.o4JNrO)
        }), (0, i.jsx)(h.tK, {
            className: m.Ot,
            children: p.intl.string(p.t.y0tVbq)
        }), (0, i.jsxs)(h.eB, {
            className: m.QX,
            children: [(0, i.jsx)(_.A, {
                label: p.intl.string(p.t["eJnn0+"]),
                alpha2: j.alpha2,
                countryCode: y,
                value: e,
                autoComplete: "off",
                spellCheck: "false",
                onChange: t,
                forceMode: d.Pd.PHONE,
                error: N
            }), (0, i.jsx)(h.pd, {
                className: m.QX,
                label: p.intl.string(p.t.OdzNbm),
                value: r,
                onChange: A,
                maxLength: 6,
                error: T
            }), (0, i.jsx)(o.QWc, {
                text: p.intl.string(p.t["5b60gi"]),
                onClick: S
            }), (0, i.jsx)("div", {
                className: m.QX,
                children: (0, i.jsx)(o.Button, {
                    text: p.intl.string(p.t.i4jeWR),
                    fullWidth: !0,
                    onClick: b,
                    loading: f
                })
            })]
        })]
    })
}