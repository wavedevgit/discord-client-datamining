/** chunk id: 654041 params = (module,exports,require) **/
n.d(t, {
    default: () => x
});
var i = n(627968),
    r = n(64700),
    a = n(835245),
    s = n(158954),
    l = n(554146),
    o = n(397927),
    u = n(932001),
    c = n(95035),
    d = n(632738),
    A = n(105428),
    _ = n(975571),
    E = n(935649),
    f = n(847599),
    R = n(36149),
    p = n(737567),
    m = n(40449),
    C = n(652215),
    I = n(239093),
    k = n(985018),
    h = n(481446);
let x = function(e) {
    let {
        transitionState: t,
        entryPoint: n,
        onClose: x
    } = e, [M, T] = r.useState(l.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), S = r.useRef(M), [b, g] = (0, u.kn)([M], void 0, !0), {
        loading: P,
        initiateAgeVerification: U
    } = (0, R.nn)({
        onComplete: x,
        entryPoint: n
    }), v = r.useMemo(() => (0, a.A)(), []), L = (0, p.I)("age_verification_get_started_modal"), N = r.useRef(!1);
    return r.useEffect(() => {
        S.current = b
    }, [b]), r.useLayoutEffect(() => () => {
        if (N.current) return;
        let e = S.current;
        null != e && (N.current = !0, A.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: e
        }))
    }, []), r.useEffect(() => {
        (0, f.Bs)(v, f.WU.PRIMARY, n)
    }, [v, n]), (0, i.jsxs)(s.Modal, {
        transitionState: t,
        onClose: x,
        title: (0, R.ST)(n),
        subtitle: (0, R.mK)(n),
        actions: [{
            text: k.intl.string(k.t.SJMnkX),
            loading: P,
            icon: o.I9m,
            iconPosition: "end",
            onClick: async () => {
                (0, f.St)(v, f.WU.PRIMARY, f._7.GET_STARTED), T(l.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await U()
            }
        }],
        actionBarInput: (0, i.jsxs)(c.A, {
            onClick: () => {
                E.A.openUrl(_.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, f.St)(v, f.WU.PRIMARY, f._7.LEARN_MORE)
            },
            className: h.A,
            children: [k.intl.string(k.t["aA6q/z"]), (0, i.jsx)(o.I9m, {
                size: "xs",
                color: "currentColor"
            })]
        }),
        children: [(0, m.f6)(v).map((e, t) => {
            let {
                title: n,
                description: r
            } = e;
            return (0, i.jsx)(d.PQ, {
                title: n,
                description: r,
                listType: "numbered",
                index: t
            }, t)
        }), !L && (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: h.B,
            children: k.intl.format(k.t.pJAxgQ, {
                handleOnRequestHook: () => {
                    E.A.openUrl(I.d$.APPEALS_LINK), (0, f.St)(v, f.WU.PRIMARY, f._7.MANUAL_REVIEW_REQUEST)
                }
            })
        })]
    })
}