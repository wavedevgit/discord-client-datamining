/** chunk id: 807734 params = (module,exports,require) **/
i.d(e, {
    A: () => _
});
var n = i(64700),
    l = i(311907),
    r = i(847599),
    s = i(787301),
    a = i(295972),
    o = i(36149),
    c = i(677501),
    u = i(634101),
    d = i(40449),
    E = i(985018);
let _ = function(t) {
    let {
        onClose: e,
        onMethodClick: i,
        classificationId: _,
        onGoogleWalletSelect: f
    } = t, {
        methods: A,
        loading: R
    } = (0, l.cf)([s.A], () => ({
        methods: s.A.methods,
        loading: s.A.loading
    })), {
        initiateAgeVerification: g
    } = (0, o.nn)({
        onComplete: e,
        entryPoint: r.q1.EXPRESSIVE_GET_STARTED,
        shouldShowExpressiveModal: !0,
        classificationId: _
    }), m = (0, u.D)("age_verification_methods"), [S, p] = n.useState(!1);
    return n.useEffect(() => {
        m && (0, c.sf)().then(p)
    }, [m]), n.useEffect(() => {
        null == A && (0, a.DJ)()
    }, [A]), {
        ageVerificationMethods: n.useMemo(() => {
            let t = A?.filter(t => t !== d.VF.GOOGLE_WALLET).map(t => {
                let e = d.uv[t];
                if (null == e) return null;
                let {
                    title: n,
                    description: l
                } = e;
                return {
                    id: t,
                    title: E.intl.string(n),
                    description: E.intl.string(l),
                    onClick: async e => {
                        (0, r.St)(e, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, t), i?.(), await g(t)
                    }
                }
            }).filter(t => null != t) ?? [];
            if (m && S && null != f) {
                let e = d.uv[d.VF.GOOGLE_WALLET];
                if (null != e) return [{
                    id: d.VF.GOOGLE_WALLET,
                    title: E.intl.string(e.title),
                    description: E.intl.string(e.description),
                    onClick: t => {
                        (0, r.St)(t, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, d.VF.GOOGLE_WALLET), i?.(), f()
                    }
                }, ...t]
            }
            return t
        }, [A, m, S, f, i, g]),
        loading: R
    }
}