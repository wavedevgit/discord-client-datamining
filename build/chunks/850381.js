/** Chunk was on 86142 **/
/** chunk id: 850381, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(492917),
    a = n(154672),
    o = n(396681),
    c = n(317940),
    u = n(976860),
    d = n(210714),
    h = n(341371),
    p = n(714505),
    g = n(652215),
    m = n(985018);

function f(e) {
    let {
        location: t
    } = e, [n, f] = i.useState(!1), {
        verifySuccess: _,
        verifyErrors: A,
        redirectGuildId: x
    } = (0, s.bG)([h.A], () => h.A.getState());
    i.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, d.d)("verify_hub_email")
    }, [t]);
    let E = () => {
        (0, p.A)(x), f(!0)
    };
    return n ? (0, r.jsx)(c.A, {
        title: m.intl.string(m.t.csrAMJ),
        subtitle: m.intl.string(m.t["m1+IBn"]),
        buttonText: m.intl.string(m.t.fIv16B),
        onButtonClick: () => (0, u.pX)(g.BVt.CHANNEL(x))
    }) : _ ? (0, r.jsx)(c.A, {
        title: m.intl.string(m.t["dAfGb+"]),
        buttonText: m.intl.string(m.t["uJWIj/"]),
        onButtonClick: E,
        image: (0, r.jsx)(l.bqQ, {
            alt: m.intl.string(m.t["dAfGb+"])
        })
    }) : null != A ? (0, r.jsx)(c.A, {
        title: m.intl.string(m.t["PCgG3+"]),
        subtitle: m.intl.string(m.t.tQpeA3),
        buttonText: m.intl.string(m.t["uJWIj/"]),
        onButtonClick: E
    }) : (0, r.jsx)(c.A, {
        title: m.intl.string(m.t["0c8+5n"]),
        subtitle: m.intl.string(m.t.ULTCBE),
        loading: !0
    })
}
s.Ay.initialize()