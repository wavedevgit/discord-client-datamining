/** chunk id: 420382 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    r = n(481613),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    d = n(830215),
    c = n(964486),
    u = n(396681),
    h = n(854378),
    _ = n(976860),
    p = n(210714),
    g = n(652215),
    m = n(985018),
    A = n(473169);

function f(e) {
    let {
        location: t,
        transitionTo: r = _.pX
    } = e, [a, f] = s.useState("submitting");

    function E() {
        return "Android" === l().os.family || "iOS" === l().os.family ? null : (0, i.jsx)(o.Button, {
            text: m.intl.string(m.t.dKhVQN),
            fullWidth: !0,
            onClick: () => r(g.BVt.LOGIN, {
                source: "authorizeIPAdress"
            })
        })
    }
    return ((0, c.Ay)(() => {
        (0, p.d)("authorize_ip");
        let e = (0, u.A)(t);
        null == e ? f("failed") : (async () => {
            try {
                await d.A.authorizeIPAddress(e), f("succeeded")
            } catch (e) {
                f("failed")
            }
        })()
    }), "failed" === a) ? (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)("img", {
            alt: "",
            src: n(792009),
            className: A.SX
        }), (0, i.jsx)(h.hE, {
            className: A.QB,
            children: m.intl.string(m.t["f/54az"])
        }), (0, i.jsx)(h.tK, {
            className: A.C2,
            children: m.intl.string(m.t.i3ehMr)
        }), E()]
    }) : "succeeded" === a ? (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)("img", {
            alt: "",
            src: n(841406),
            className: A.SX
        }), (0, i.jsx)(h.hE, {
            className: A.QB,
            children: m.intl.string(m.t.iG0SlK)
        }), (0, i.jsx)(h.tK, {
            className: A.C2,
            children: m.intl.string(m.t["Elv+qt"])
        }), E()]
    }) : (0, i.jsxs)(h.Ay, {
        children: [(0, i.jsx)(h.CK, {}), (0, i.jsx)(h.hE, {
            children: m.intl.string(m.t["9exy+V"])
        })]
    })
}
a.Ay.initialize()