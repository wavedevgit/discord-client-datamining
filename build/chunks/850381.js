/** chunk id: 850381 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(492917),
    a = n(154672),
    o = n(396681),
    c = n(317940),
    d = n(976860),
    u = n(210714),
    h = n(341371),
    _ = n(714505),
    p = n(652215),
    m = n(985018);

function g(e) {
    let {
        location: t
    } = e, [n, g] = s.useState(!1), {
        verifySuccess: A,
        verifyErrors: f,
        redirectGuildId: E
    } = (0, r.bG)([h.A], () => h.A.getState());
    s.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, u.d)("verify_hub_email")
    }, [t]);
    let x = () => {
        (0, _.A)(E), g(!0)
    };
    return n ? (0, i.jsx)(c.A, {
        title: m.intl.string(m.t.csrAMJ),
        subtitle: m.intl.string(m.t["m1+IBn"]),
        buttonText: m.intl.string(m.t.fIv16B),
        onButtonClick: () => (0, d.pX)(p.BVt.CHANNEL(E))
    }) : A ? (0, i.jsx)(c.A, {
        title: m.intl.string(m.t["dAfGb+"]),
        buttonText: m.intl.string(m.t["uJWIj/"]),
        onButtonClick: x,
        image: (0, i.jsx)(l.bqQ, {
            alt: m.intl.string(m.t["dAfGb+"])
        })
    }) : null != f ? (0, i.jsx)(c.A, {
        title: m.intl.string(m.t["PCgG3+"]),
        subtitle: m.intl.string(m.t.tQpeA3),
        buttonText: m.intl.string(m.t["uJWIj/"]),
        onButtonClick: x
    }) : (0, i.jsx)(c.A, {
        title: m.intl.string(m.t["0c8+5n"]),
        subtitle: m.intl.string(m.t.ULTCBE),
        loading: !0
    })
}
r.Ay.initialize()