/** Chunk was on 42978 **/
/** chunk id: 654041, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => x
}), n(896048), n(228524);
var i = n(627968),
    s = n(64700),
    r = n(835245),
    a = n(158954),
    o = n(554146),
    l = n(397927),
    c = n(379848),
    u = n(95035),
    d = n(632738),
    _ = n(105428),
    A = n(975571),
    E = n(935649),
    R = n(847599),
    f = n(36149),
    m = n(737567),
    I = n(40449),
    p = n(652215),
    M = n(239093),
    C = n(985018),
    T = n(891921);
let x = function(e) {
    let {
        transitionState: t,
        entryPoint: n,
        onClose: x
    } = e, [S, k] = s.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), U = s.useRef(S), [g, h] = (0, c.kn)([S], void 0, !0), {
        loading: L,
        initiateAgeVerification: b
    } = (0, f.nn)({
        onComplete: x,
        entryPoint: n
    }), O = s.useMemo(() => (0, r.A)(), []), P = (0, m.I)("age_verification_get_started_modal"), N = s.useRef(!1);
    return s.useEffect(() => {
        U.current = g
    }, [g]), s.useLayoutEffect(() => () => {
        if (N.current) return;
        let e = U.current;
        null != e && (N.current = !0, _.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: e
        }))
    }, []), s.useEffect(() => {
        (0, R.Bs)(O, R.WU.PRIMARY, n)
    }, [O, n]), (0, i.jsxs)(a.Modal, {
        transitionState: t,
        onClose: x,
        title: (0, f.ST)(n),
        subtitle: (0, f.mK)(n),
        actions: [{
            text: C.intl.string(C.t.SJMnkX),
            loading: L,
            icon: l.I9m,
            iconPosition: "end",
            onClick: async () => {
                (0, R.St)(O, R.WU.PRIMARY, R._7.GET_STARTED), k(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await b()
            }
        }],
        actionBarInput: (0, i.jsxs)(u.A, {
            onClick: () => {
                E.A.openUrl(A.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, R.St)(O, R.WU.PRIMARY, R._7.LEARN_MORE)
            },
            className: T.A,
            children: [C.intl.string(C.t["aA6q/z"]), (0, i.jsx)(l.I9m, {
                size: "xs",
                color: "currentColor"
            })]
        }),
        children: [(0, I.f6)(O).map((e, t) => {
            let {
                title: n,
                description: s
            } = e;
            return (0, i.jsx)(d.PQ, {
                title: n,
                description: s,
                listType: "numbered",
                index: t
            }, t)
        }), !P && (0, i.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: T.B,
            children: C.intl.format(C.t.pJAxgQ, {
                handleOnRequestHook: () => {
                    E.A.openUrl(M.d$.APPEALS_LINK), (0, R.St)(O, R.WU.PRIMARY, R._7.MANUAL_REVIEW_REQUEST)
                }
            })
        })]
    })
}