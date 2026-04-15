/** chunk id: 807734 params = (module,exports,require) **/
i.d(t, {
    A: () => f
});
var n = i(64700),
    l = i(731738),
    r = i(311907),
    a = i(831062),
    s = i(847599),
    o = i(787301),
    c = i(295972),
    E = i(36149),
    u = i(677501),
    d = i(634101),
    _ = i(40449),
    A = i(985018);
let f = function(e) {
    let {
        onClose: t,
        onMethodClick: i,
        classificationId: f,
        onGoogleWalletSelect: m
    } = e, {
        methods: g,
        loading: R
    } = (0, r.cf)([o.A], () => ({
        methods: o.A.methods,
        loading: o.A.loading
    })), {
        initiateAgeVerification: L
    } = (0, E.nn)({
        onComplete: t,
        entryPoint: s.q1.EXPRESSIVE_GET_STARTED,
        shouldShowExpressiveModal: !0,
        classificationId: f
    }), S = (0, d.D)("age_verification_methods"), [p, x] = n.useState(!1);
    return n.useEffect(() => {
        S && (0, u.sf)().then(e => {
            a.A.increment({
                name: l.K.GOOGLE_WALLET_AVAILABILITY_CHECK,
                tags: [`available:${e}`]
            }), x(e)
        })
    }, [S]), n.useEffect(() => {
        null == g && (0, c.DJ)()
    }, [g]), {
        ageVerificationMethods: n.useMemo(() => {
            let e = g?.filter(e => e !== _.VF.GOOGLE_WALLET).map(e => {
                let t = _.uv[e];
                if (null == t) return null;
                let {
                    title: n,
                    description: l
                } = t;
                return {
                    id: e,
                    title: A.intl.string(n),
                    description: A.intl.string(l),
                    onClick: async t => {
                        (0, s.St)(t, s.WU.EXPRESSIVE_PRIMARY, s._7.METHOD_SELECT, e), i?.(), await L(e)
                    }
                }
            }).filter(e => null != e) ?? [];
            if (S && p && null != m) {
                let t = _.uv[_.VF.GOOGLE_WALLET];
                if (null != t) return [{
                    id: _.VF.GOOGLE_WALLET,
                    title: A.intl.string(t.title),
                    description: A.intl.string(t.description),
                    onClick: e => {
                        a.A.increment({
                            name: l.K.GOOGLE_WALLET_METHOD_SELECTED
                        }), (0, s.St)(e, s.WU.EXPRESSIVE_PRIMARY, s._7.METHOD_SELECT, _.VF.GOOGLE_WALLET), i?.(), m()
                    }
                }, ...e]
            }
            return e
        }, [g, S, p, m, i, L]),
        loading: R
    }
}