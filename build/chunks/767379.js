/** chunk id: 767379 params = (module,exports,require) **/
i.d(t, {
    default: () => v
});
var n = i(627968),
    l = i(64700),
    r = i(835245),
    a = i(158954),
    s = i(554146),
    o = i(397927),
    c = i(932001),
    E = i(632738),
    u = i(627575),
    d = i(393033),
    _ = i(105428),
    A = i(975571),
    f = i(935649),
    m = i(847599),
    g = i(295972),
    R = i(36149),
    L = i(807734),
    S = i(652215),
    p = i(239093),
    x = i(542391),
    h = i(985018),
    T = i(774992),
    O = i(700129);

function I(e) {
    let {
        modalSessionId: t,
        entryPoint: i
    } = e;
    return (0, d.W$)() ? (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: h.intl.format(x.default.htWh1G, {
            handleOnHelpUrlHook: () => {
                f.A.openUrl(p.d$.LEARN_MORE_UU_APPEAL_LINK), (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.LEARN_MORE)
            }
        })
    }) : i === m.q1.SAFETY_FLOWS ? (0, n.jsx)(o.QWc, {
        size: "sm",
        textVariant: "text-sm/medium",
        text: h.intl.string(h.t["2jxGer"]),
        onClick: () => {
            (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.LOG_OUT), (0, u.k)("age_verification_get_started_modal")
        }
    }) : null
}
let v = function(e) {
    let {
        transitionState: t,
        entryPoint: i,
        onClose: u,
        onComplete: p,
        dismissable: v,
        classificationId: C
    } = e, [M, G] = l.useState(s.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), P = l.useRef(M), [W, V] = (0, c.kn)([M], void 0, !0), b = l.useMemo(() => (0, r.A)(), []), k = l.useRef(!1), U = (0, d.W$)();
    l.useEffect(() => {
        P.current = W
    }, [W]);
    let {
        loading: j,
        ageVerificationMethods: D
    } = (0, L.A)({
        onClose: () => {
            p?.(), u()
        },
        onMethodClick: () => {
            G(s.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
        },
        classificationId: C
    });
    return l.useLayoutEffect(() => () => {
        if (k.current) return;
        let e = P.current;
        null != e && (k.current = !0, _.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: e
        }))
    }, []), l.useEffect(() => {
        (0, m.Bs)(b, m.WU.EXPRESSIVE_PRIMARY, i)
    }, [b, i]), (0, n.jsx)(a.ExpressiveModal, {
        transitionState: t,
        onClose: u,
        gradientColor: "blue",
        dismissable: v,
        graphic: {
            type: "image",
            src: O.A
        },
        title: (0, R.ST)(i),
        subtitle: (0, R.mK)(i, () => {
            f.A.openUrl(A.A.getArticleURL(S.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, m.St)(b, m.WU.EXPRESSIVE_PRIMARY, m._7.LEARN_MORE)
        }, U),
        actionBarInput: (0, n.jsx)(I, {
            modalSessionId: b,
            entryPoint: i
        }),
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 16,
            children: [(0, n.jsxs)(o.BJc, {
                fullWidth: !1,
                direction: "horizontal",
                gap: 8,
                padding: {
                    top: 8,
                    bottom: 8,
                    left: 12,
                    right: 12
                },
                align: "center",
                className: T.W,
                children: [(0, n.jsx)(o.mir, {
                    size: "lg",
                    color: "currentColor"
                }), (0, n.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-info",
                    children: h.intl.string(x.default.ar3a3q)
                })]
            }), null == D || 0 === D.length ? (0, n.jsxs)(o.BJc, {
                direction: "vertical",
                align: "center",
                gap: 16,
                children: [(0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: h.intl.string(x.default.cR6336)
                }), (0, n.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: h.intl.string(x.default.hDvmYP),
                    onClick: () => {
                        (0, g.DJ)()
                    }
                })]
            }) : (0, n.jsx)(o.BJc, {
                direction: "vertical",
                gap: 8,
                children: D.map(e => {
                    let {
                        title: t,
                        description: i,
                        onClick: l
                    } = e;
                    return (0, n.jsx)(E.PQ, {
                        variant: "clickable",
                        title: t,
                        description: i,
                        buttonDisabled: j,
                        onButtonPress: () => l(b)
                    }, t)
                })
            })]
        })
    })
}