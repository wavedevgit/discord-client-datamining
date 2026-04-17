/** chunk id: 850381 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
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
    _ = n(341371),
    h = n(714505),
    g = n(652215),
    p = n(985018);

function m(e) {
    let {
        location: t
    } = e, [n, m] = s.useState(!1), {
        verifySuccess: A,
        verifyErrors: f,
        redirectGuildId: E
    } = (0, r.bG)([_.A], () => _.A.getState());
    s.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, u.d)("verify_hub_email")
    }, [t]);
    let x = () => {
        (0, h.A)(E), m(!0)
    };
    return n ? (0, i.jsx)(c.A, {
        title: p.intl.string(p.t.csrAMJ),
        subtitle: p.intl.string(p.t["m1+IBn"]),
        buttonText: p.intl.string(p.t.fIv16B),
        onButtonClick: () => (0, d.pX)(g.BVt.CHANNEL(E))
    }) : A ? (0, i.jsx)(c.A, {
        title: p.intl.string(p.t["dAfGb+"]),
        buttonText: p.intl.string(p.t["uJWIj/"]),
        onButtonClick: x,
        image: (0, i.jsx)(l.bqQ, {
            alt: p.intl.string(p.t["dAfGb+"])
        })
    }) : null != f ? (0, i.jsx)(c.A, {
        title: p.intl.string(p.t["PCgG3+"]),
        subtitle: p.intl.string(p.t.tQpeA3),
        buttonText: p.intl.string(p.t["uJWIj/"]),
        onButtonClick: x
    }) : (0, i.jsx)(c.A, {
        title: p.intl.string(p.t["0c8+5n"]),
        subtitle: p.intl.string(p.t.ULTCBE),
        loading: !0
    })
}
r.Ay.initialize()