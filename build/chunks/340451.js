/** chunk id: 340451 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(492917),
    a = n(830215),
    o = n(964486),
    c = n(396681),
    d = n(317940),
    u = n(701273),
    h = n(210714),
    _ = n(954571),
    p = n(652215),
    m = n(985018);

function g(e) {
    n.g.location.assign(e)
}

function A(e) {
    let {
        location: t,
        transitionTo: n = g
    } = e, [r, A] = s.useState("submitting"), f = s.useRef(void 0);
    (0, o.Ay)(() => {
        (0, h.d)("verify_email");
        let e = (0, c.A)(t);
        null == e ? A("failed") : (async () => {
            try {
                let t = await a.A.verify(e);
                A("succeeded"), f.current = t
            } catch (e) {
                A("failed")
            }
        })()
    });
    let E = s.useCallback(() => {
            n(p.BVt.LOGIN, {
                source: "verify_email"
            })
        }, [n]),
        x = s.useCallback(() => {
            _.default.track(p.HAw.VERIFY_ACCOUNT_APP_OPENED, {
                verifying_user_id: f.current
            }), (0, u.A)("verify_email")
        }, []);
    return "failed" === r ? (0, i.jsx)(d.A, {
        title: m.intl.string(m.t["PCgG3+"]),
        subtitle: m.intl.string(m.t.tQpeA3),
        buttonText: m.intl.string(m.t.dKhVQN),
        onButtonClick: E
    }) : "succeeded" === r ? (0, i.jsx)(d.A, {
        title: m.intl.string(m.t["dAfGb+"]),
        buttonText: m.intl.string(m.t["uJWIj/"]),
        onButtonClick: x,
        image: (0, i.jsx)(l.bqQ, {
            alt: m.intl.string(m.t["dAfGb+"])
        })
    }) : (0, i.jsx)(d.A, {
        title: m.intl.string(m.t["0c8+5n"]),
        subtitle: m.intl.string(m.t.ULTCBE),
        loading: !0
    })
}
r.Ay.initialize()