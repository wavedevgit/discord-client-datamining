/** chunk id: 836953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(587895),
    s = n(64983),
    o = n(997509),
    c = n(143582),
    u = n(915043),
    d = n(652215),
    p = n(985018),
    h = n(298525);

function f(e) {
    let t, {
            guild: n
        } = e,
        f = (0, u.$s)(n),
        g = () => (0, c.Hc)(n.id),
        m = i.useMemo(() => new Set(f.map(e => e.applicationId)), [f]),
        A = (0, l.yK)([a.A], () => {
            let e = [];
            for (let t of m) {
                let n = a.A.getApplication(t);
                null != n && e.push(n)
            }
            return e
        }, [m]);
    return 0 === A.length ? null : (t = 1 === A.length ? p.intl.formatToPlainString(p.t["Egq+G/"], {
        a: A[0].name
    }) : 2 === A.length ? p.intl.formatToPlainString(p.t.LxU9R3, {
        a: A[0].name,
        b: A[1].name
    }) : 3 === A.length ? p.intl.formatToPlainString(p.t.crKXMC, {
        a: A[0].name,
        b: A[1].name,
        c: A[2].name
    }) : p.intl.string(p.t.MvfowF), (0, r.jsx)(s.A, {
        guild: n,
        onDismissed: g,
        message: t,
        type: d.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
        image: h,
        onClick: () => {
            g(), o.A.open(n.id, d.BEX.INTEGRATIONS)
        },
        imageMarginTop: 6,
        imageMarginX: 46,
        cta: p.intl.string(p.t.Rr3MAe)
    }))
}