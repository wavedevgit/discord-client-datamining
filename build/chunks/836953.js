/** chunk id: 836953 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(587895),
    s = n(64983),
    o = n(997509),
    d = n(143582),
    c = n(915043),
    u = n(652215),
    A = n(985018),
    h = n(298525);

function _(e) {
    let t, {
            guild: n
        } = e,
        _ = (0, c.$s)(n),
        m = () => (0, d.Hc)(n.id),
        g = a.useMemo(() => new Set(_.map(e => e.applicationId)), [_]),
        p = (0, l.yK)([r.A], () => {
            let e = [];
            for (let t of g) {
                let n = r.A.getApplication(t);
                null != n && e.push(n)
            }
            return e
        }, [g]);
    return 0 === p.length ? null : (t = 1 === p.length ? A.intl.formatToPlainString(A.t["Egq+G/"], {
        a: p[0].name
    }) : 2 === p.length ? A.intl.formatToPlainString(A.t.LxU9R3, {
        a: p[0].name,
        b: p[1].name
    }) : 3 === p.length ? A.intl.formatToPlainString(A.t.crKXMC, {
        a: p[0].name,
        b: p[1].name,
        c: p[2].name
    }) : A.intl.string(A.t.MvfowF), (0, i.jsx)(s.A, {
        guild: n,
        onDismissed: m,
        message: t,
        type: u.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
        image: h,
        onClick: () => {
            m(), o.A.open(n.id, u.BEX.INTEGRATIONS)
        },
        imageMarginTop: 6,
        imageMarginX: 46,
        cta: A.intl.string(A.t.Rr3MAe)
    }))
}