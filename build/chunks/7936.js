/** Chunk was on 86142 **/
/** chunk id: 7936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(747238);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(557722),
    d = n(628387),
    u = n(148864),
    h = n(146571),
    p = n(854378);
n(53516);
var g = n(985018),
    _ = n(20976),
    f = n(473169);
let m = () => {
    let [e, t] = i.useState(""), [s, m] = i.useState(""), [A, x] = i.useState(!1), [E, v] = i.useState(!1), [b, y] = i.useState(null), [j, I] = i.useState(null), O = (0, a.bG)([u.A], () => u.A.getCountryCode()), S = O.code.split(" ")[0], N = async () => {
        try {
            await c.A.resendCode(e)
        } catch (e) {
            I(e.body.message)
        }
    }, C = async () => {
        x(!0);
        try {
            let {
                token: t
            } = await c.A.verifyPhone(S + e, s);
            y(null), I(null), v(!0), c.A.validatePhoneForSupport(t)
        } catch (e) {
            e.body.message ? (y(null), I(e.body.message)) : (y(e.body.phone), I(e.body.code))
        } finally {
            x(!1)
        }
    }, T = (0, r.jsxs)(p.Ay, {
        children: [(0, r.jsx)(p._V, {
            src: n(142041)
        }), (0, r.jsxs)(p.hE, {
            className: l()(f.QX, _.Uu, _.wq, _.Hu),
            children: [g.intl.string(g.t.WWzQta), (0, r.jsx)(o.yr3, {
                size: "md",
                color: "currentColor",
                className: f.oY
            })]
        })]
    });
    return E ? T : (0, r.jsxs)(p.Ay, {
        children: [(0, r.jsx)(p.hE, {
            children: g.intl.string(g.t.o4JNrO)
        }), (0, r.jsx)(p.tK, {
            className: f.Ot,
            children: g.intl.string(g.t.y0tVbq)
        }), (0, r.jsxs)(p.eB, {
            className: f.QX,
            children: [(0, r.jsx)(h.A, {
                label: g.intl.string(g.t["eJnn0+"]),
                alpha2: O.alpha2,
                countryCode: S,
                value: e,
                autoComplete: "off",
                spellCheck: "false",
                onChange: t,
                forceMode: d.Pd.PHONE,
                error: b
            }), (0, r.jsx)(p.pd, {
                className: f.QX,
                label: g.intl.string(g.t.OdzNbm),
                value: s,
                onChange: m,
                maxLength: 6,
                error: j
            }), (0, r.jsx)(o.QWc, {
                text: g.intl.string(g.t["5b60gi"]),
                onClick: N
            }), (0, r.jsx)("div", {
                className: f.QX,
                children: (0, r.jsx)(o.Button, {
                    text: g.intl.string(g.t.i4jeWR),
                    fullWidth: !0,
                    onClick: C,
                    loading: A
                })
            })]
        })]
    })
}