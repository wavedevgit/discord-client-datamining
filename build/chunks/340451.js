/** Chunk was on 86142 **/
/** chunk id: 340451, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(492917),
    a = n(830215),
    o = n(964486),
    c = n(396681),
    d = n(317940),
    u = n(701273),
    h = n(210714),
    p = n(954571),
    g = n(652215),
    _ = n(985018);

function f(e) {
    n.g.location.assign(e)
}

function m(e) {
    let {
        location: t,
        transitionTo: n = f
    } = e, [s, m] = i.useState("submitting"), A = i.useRef(void 0);
    (0, o.Ay)(() => {
        (0, h.d)("verify_email");
        let e = (0, c.A)(t);
        null == e ? m("failed") : (async () => {
            try {
                let t = await a.A.verify(e);
                m("succeeded"), A.current = t
            } catch (e) {
                m("failed")
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
            }), (0, u.A)("verify_email")
        }, []);
    return "failed" === s ? (0, r.jsx)(d.A, {
        title: _.intl.string(_.t["PCgG3+"]),
        subtitle: _.intl.string(_.t.tQpeA3),
        buttonText: _.intl.string(_.t.dKhVQN),
        onButtonClick: x
    }) : "succeeded" === s ? (0, r.jsx)(d.A, {
        title: _.intl.string(_.t["dAfGb+"]),
        buttonText: _.intl.string(_.t["uJWIj/"]),
        onButtonClick: E,
        image: (0, r.jsx)(l.bqQ, {
            alt: _.intl.string(_.t["dAfGb+"])
        })
    }) : (0, r.jsx)(d.A, {
        title: _.intl.string(_.t["0c8+5n"]),
        subtitle: _.intl.string(_.t.ULTCBE),
        loading: !0
    })
}
s.Ay.initialize()