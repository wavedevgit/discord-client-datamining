/** chunk id: 807734 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(64700),
    i = n(311907),
    l = n(847599),
    s = n(787301),
    r = n(295972),
    o = n(36149),
    d = n(677501),
    c = n(634101),
    u = n(40449),
    m = n(985018);
let h = function(e) {
    let {
        onClose: t,
        onMethodClick: n,
        classificationId: h,
        onGoogleWalletSelect: x
    } = e, {
        methods: p,
        loading: g
    } = (0, i.cf)([s.A], () => ({
        methods: s.A.methods,
        loading: s.A.loading
    })), {
        initiateAgeVerification: _
    } = (0, o.nn)({
        onComplete: t,
        entryPoint: l.q1.EXPRESSIVE_GET_STARTED,
        shouldShowExpressiveModal: !0,
        classificationId: h
    }), f = (0, c.D)("age_verification_methods"), [v, b] = a.useState(!1);
    return a.useEffect(() => {
        f && (0, d.sf)().then(b)
    }, [f]), a.useEffect(() => {
        null == p && (0, r.DJ)()
    }, [p]), {
        ageVerificationMethods: a.useMemo(() => {
            let e = p?.filter(e => e !== u.VF.GOOGLE_WALLET).map(e => {
                let t = u.uv[e];
                if (null == t) return null;
                let {
                    title: a,
                    description: i
                } = t;
                return {
                    id: e,
                    title: m.intl.string(a),
                    description: m.intl.string(i),
                    onClick: async t => {
                        (0, l.St)(t, l.WU.EXPRESSIVE_PRIMARY, l._7.METHOD_SELECT, e), n?.(), await _(e)
                    }
                }
            }).filter(e => null != e) ?? [];
            if (f && v && null != x) {
                let t = u.uv[u.VF.GOOGLE_WALLET];
                if (null != t) return [{
                    id: u.VF.GOOGLE_WALLET,
                    title: m.intl.string(t.title),
                    description: m.intl.string(t.description),
                    onClick: e => {
                        (0, l.St)(e, l.WU.EXPRESSIVE_PRIMARY, l._7.METHOD_SELECT, u.VF.GOOGLE_WALLET), n?.(), x()
                    }
                }, ...e]
            }
            return e
        }, [p, f, v, x, n, _]),
        loading: g
    }
}