/** chunk id: 654041, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => j
}), r(896048), r(228524);
var n = r(627968),
    o = r(64700),
    i = r(835245),
    l = r(158954),
    c = r(554146),
    s = r(397927),
    a = r(379848),
    u = r(95035),
    f = r(632738),
    p = r(105428),
    d = r(975571),
    b = r(935649),
    O = r(847599),
    y = r(36149),
    A = r(737567),
    E = r(40449),
    m = r(652215),
    _ = r(239093),
    R = r(985018),
    g = r(891921);
let j = function(e) {
    let {
        transitionState: t,
        entryPoint: r,
        onClose: j
    } = e, [P, h] = o.useState(c.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), C = o.useRef(P), [I, S] = (0, a.kn)([P], void 0, !0), {
        loading: v,
        initiateAgeVerification: x
    } = (0, y.nn)({
        onComplete: j,
        entryPoint: r
    }), k = o.useMemo(() => (0, i.A)(), []), w = (0, A.I)("age_verification_get_started_modal"), M = o.useRef(!1);
    return o.useEffect(() => {
        C.current = I
    }, [I]), o.useLayoutEffect(() => () => {
        if (M.current) return;
        let e = C.current;
        null != e && (M.current = !0, p.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: e
        }))
    }, []), o.useEffect(() => {
        (0, O.Bs)(k, O.WU.PRIMARY, r)
    }, [k, r]), (0, n.jsxs)(l.Modal, {
        transitionState: t,
        onClose: j,
        title: (0, y.ST)(r),
        subtitle: (0, y.mK)(r),
        actions: [{
            text: R.intl.string(R.t.SJMnkX),
            loading: v,
            icon: s.I9m,
            iconPosition: "end",
            onClick: async () => {
                (0, O.St)(k, O.WU.PRIMARY, O._7.GET_STARTED), h(c.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await x()
            }
        }],
        actionBarInput: (0, n.jsxs)(u.A, {
            onClick: () => {
                b.A.openUrl(d.A.getArticleURL(m.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, O.St)(k, O.WU.PRIMARY, O._7.LEARN_MORE)
            },
            className: g.A,
            children: [R.intl.string(R.t["aA6q/z"]), (0, n.jsx)(s.I9m, {
                size: "xs",
                color: "currentColor"
            })]
        }),
        children: [(0, E.f6)(k).map((e, t) => {
            let {
                title: r,
                description: o
            } = e;
            return (0, n.jsx)(f.PQ, {
                title: r,
                description: o,
                listType: "numbered",
                index: t
            }, t)
        }), !w && (0, n.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: g.B,
            children: R.intl.format(R.t.pJAxgQ, {
                handleOnRequestHook: () => {
                    b.A.openUrl(_.d$.APPEALS_LINK), (0, O.St)(k, O.WU.PRIMARY, O._7.MANUAL_REVIEW_REQUEST)
                }
            })
        })]
    })
}