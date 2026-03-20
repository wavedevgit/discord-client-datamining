/** chunk id: 807734 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(64700),
    i = n(311907),
    l = n(847599),
    s = n(787301),
    r = n(295972),
    o = n(36149),
    d = n(40449),
    c = n(985018);
let u = function(e) {
    let {
        onClose: t,
        onMethodClick: n,
        classificationId: u
    } = e, {
        methods: m,
        loading: h
    } = (0, i.cf)([s.A], () => ({
        methods: s.A.methods,
        loading: s.A.loading
    })), {
        initiateAgeVerification: p
    } = (0, o.nn)({
        onComplete: t,
        entryPoint: l.q1.EXPRESSIVE_GET_STARTED,
        shouldShowExpressiveModal: !0,
        classificationId: u
    });
    return a.useEffect(() => {
        null == m && (0, r.DJ)()
    }, [m]), {
        ageVerificationMethods: m?.map(e => {
            let t = d.uv[e];
            if (null == t) return null;
            let {
                title: a,
                description: i
            } = t;
            return {
                id: e,
                title: c.intl.string(a),
                description: c.intl.string(i),
                onClick: async t => {
                    (0, l.St)(t, l.WU.EXPRESSIVE_PRIMARY, l._7.METHOD_SELECT, e), n?.(), await p(e)
                }
            }
        }).filter(e => null != e),
        loading: h
    }
}