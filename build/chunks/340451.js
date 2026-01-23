/** Chunk was on 86142 **/
/** chunk id: 340451, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(492917),
    a = n(830215),
    o = n(964486),
    c = n(396681),
    u = n(317940),
    d = n(701273),
    h = n(210714),
    p = n(954571),
    g = n(652215),
    m = n(985018);

function f(e) {
    n.g.location.assign(e)
}

function _(e) {
    let {
        location: t,
        transitionTo: n = f
    } = e, [s, _] = i.useState("submitting"), A = i.useRef(void 0);
    (0, o.Ay)(() => {
        (0, h.d)("verify_email");
        let e = (0, c.A)(t);
        null == e ? _("failed") : (async () => {
            try {
                let t = await a.A.verify(e);
                _("succeeded"), A.current = t
            } catch (e) {
                _("failed")
            }
        })()
    });
    let x = i.useCallback(() => {
            n(g.BVt.LOGIN, {
                source: "verify_email"
            })
        }, [n]),
        E = i.useCallback(() => {
            p.default.track(g.HAw.VERIFY_ACCOUNT_APP_OPENED, {
                verifying_user_id: A.current
            }), (0, d.A)("verify_email")
        }, []);
    return "failed" === s ? (0, r.jsx)(u.A, {
        title: m.intl.string(m.t["PCgG3+"]),
        subtitle: m.intl.string(m.t.tQpeA3),
        buttonText: m.intl.string(m.t.dKhVQN),
        onButtonClick: x
    }) : "succeeded" === s ? (0, r.jsx)(u.A, {
        title: m.intl.string(m.t["dAfGb+"]),
        buttonText: m.intl.string(m.t["uJWIj/"]),
        onButtonClick: E,
        image: (0, r.jsx)(l.bqQ, {
            alt: m.intl.string(m.t["dAfGb+"])
        })
    }) : (0, r.jsx)(u.A, {
        title: m.intl.string(m.t["0c8+5n"]),
        subtitle: m.intl.string(m.t.ULTCBE),
        loading: !0
    })
}
s.Ay.initialize()