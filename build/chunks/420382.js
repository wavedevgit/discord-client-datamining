/** chunk id: 420382, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(481613),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(830215),
    u = n(964486),
    d = n(396681),
    h = n(854378),
    p = n(976860),
    g = n(210714),
    f = n(652215),
    _ = n(985018),
    m = n(473169);

function A(e) {
    let {
        location: t,
        transitionTo: s = p.pX
    } = e, [a, A] = i.useState("submitting");

    function x() {
        return "Android" === l().os.family || "iOS" === l().os.family ? null : (0, r.jsx)(o.Button, {
            text: _.intl.string(_.t.dKhVQN),
            fullWidth: !0,
            onClick: () => s(f.BVt.LOGIN, {
                source: "authorizeIPAdress"
            })
        })
    }
    return ((0, u.Ay)(() => {
        (0, g.d)("authorize_ip");
        let e = (0, d.A)(t);
        null == e ? A("failed") : (async () => {
            try {
                await c.A.authorizeIPAddress(e), A("succeeded")
            } catch (e) {
                A("failed")
            }
        })()
    }), "failed" === a) ? (0, r.jsxs)(h.Ay, {
        children: [(0, r.jsx)("img", {
            alt: "",
            src: n(792009),
            className: m.SX
        }), (0, r.jsx)(h.hE, {
            className: m.QB,
            children: _.intl.string(_.t["f/54az"])
        }), (0, r.jsx)(h.tK, {
            className: m.C2,
            children: _.intl.string(_.t.i3ehMr)
        }), x()]
    }) : "succeeded" === a ? (0, r.jsxs)(h.Ay, {
        children: [(0, r.jsx)("img", {
            alt: "",
            src: n(841406),
            className: m.SX
        }), (0, r.jsx)(h.hE, {
            className: m.QB,
            children: _.intl.string(_.t.iG0SlK)
        }), (0, r.jsx)(h.tK, {
            className: m.C2,
            children: _.intl.string(_.t["Elv+qt"])
        }), x()]
    }) : (0, r.jsxs)(h.Ay, {
        children: [(0, r.jsx)(h.CK, {}), (0, r.jsx)(h.hE, {
            children: _.intl.string(_.t["9exy+V"])
        })]
    })
}
a.Ay.initialize()