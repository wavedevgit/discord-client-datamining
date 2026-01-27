/** Chunk was on 86142 **/
/** chunk id: 850381, original params: e,t,n (module,exports,require) **/
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
    d = n(976860),
    u = n(210714),
    h = n(341371),
    p = n(714505),
    g = n(652215),
    _ = n(985018);

function f(e) {
    let {
        location: t
    } = e, [n, f] = i.useState(!1), {
        verifySuccess: m,
        verifyErrors: A,
        redirectGuildId: x
    } = (0, s.bG)([h.A], () => h.A.getState());
    i.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, u.d)("verify_hub_email")
    }, [t]);
    let E = () => {
        (0, p.A)(x), f(!0)
    };
    return n ? (0, r.jsx)(c.A, {
        title: _.intl.string(_.t.csrAMJ),
        subtitle: _.intl.string(_.t["m1+IBn"]),
        buttonText: _.intl.string(_.t.fIv16B),
        onButtonClick: () => (0, d.pX)(g.BVt.CHANNEL(x))
    }) : m ? (0, r.jsx)(c.A, {
        title: _.intl.string(_.t["dAfGb+"]),
        buttonText: _.intl.string(_.t["uJWIj/"]),
        onButtonClick: E,
        image: (0, r.jsx)(l.bqQ, {
            alt: _.intl.string(_.t["dAfGb+"])
        })
    }) : null != A ? (0, r.jsx)(c.A, {
        title: _.intl.string(_.t["PCgG3+"]),
        subtitle: _.intl.string(_.t.tQpeA3),
        buttonText: _.intl.string(_.t["uJWIj/"]),
        onButtonClick: E
    }) : (0, r.jsx)(c.A, {
        title: _.intl.string(_.t["0c8+5n"]),
        subtitle: _.intl.string(_.t.ULTCBE),
        loading: !0
    })
}
s.Ay.initialize()