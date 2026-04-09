/** chunk id: 767379 params = (module,exports,require) **/
i.d(e, {
    default: () => I
});
var n = i(627968),
    l = i(64700),
    r = i(835245),
    s = i(158954),
    a = i(554146),
    o = i(397927),
    c = i(932001),
    u = i(632738),
    d = i(627575),
    E = i(393033),
    _ = i(105428),
    f = i(975571),
    A = i(935649),
    R = i(847599),
    g = i(295972),
    m = i(36149),
    S = i(807734),
    p = i(652215),
    x = i(239093),
    h = i(949268),
    L = i(985018),
    T = i(325901),
    v = i(700129);

function O(t) {
    let {
        modalSessionId: e,
        entryPoint: i
    } = t;
    return (0, E.W$)() ? (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: L.intl.format(h.default.htWh1G, {
            handleOnHelpUrlHook: () => {
                A.A.openUrl(x.d$.LEARN_MORE_UU_APPEAL_LINK), (0, R.St)(e, R.WU.EXPRESSIVE_PRIMARY, R._7.LEARN_MORE)
            }
        })
    }) : i === R.q1.SAFETY_FLOWS ? (0, n.jsx)(o.QWc, {
        size: "sm",
        textVariant: "text-sm/medium",
        text: L.intl.string(L.t["2jxGer"]),
        onClick: () => {
            (0, R.St)(e, R.WU.EXPRESSIVE_PRIMARY, R._7.LOG_OUT), (0, d.k)("age_verification_get_started_modal")
        }
    }) : null
}
let I = function(t) {
    let {
        transitionState: e,
        entryPoint: i,
        onClose: d,
        onComplete: x,
        dismissable: I,
        classificationId: M
    } = t, [P, C] = l.useState(a.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), V = l.useRef(P), [W, G] = (0, c.kn)([P], void 0, !0), b = l.useMemo(() => (0, r.A)(), []), k = l.useRef(!1), U = (0, E.W$)();
    l.useEffect(() => {
        V.current = W
    }, [W]);
    let {
        loading: j,
        ageVerificationMethods: D
    } = (0, S.A)({
        onClose: () => {
            x?.(), d()
        },
        onMethodClick: () => {
            C(a.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
        },
        classificationId: M
    });
    return l.useLayoutEffect(() => () => {
        if (k.current) return;
        let t = V.current;
        null != t && (k.current = !0, _.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: t
        }))
    }, []), l.useEffect(() => {
        (0, R.Bs)(b, R.WU.EXPRESSIVE_PRIMARY, i)
    }, [b, i]), (0, n.jsx)(s.ExpressiveModal, {
        transitionState: e,
        onClose: d,
        gradientColor: "blue",
        dismissable: I,
        graphic: {
            type: "image",
            src: v.A
        },
        title: (0, m.ST)(i),
        subtitle: (0, m.mK)(i, () => {
            A.A.openUrl(f.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, R.St)(b, R.WU.EXPRESSIVE_PRIMARY, R._7.LEARN_MORE)
        }, U),
        actionBarInput: (0, n.jsx)(O, {
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
                    children: L.intl.string(h.default.ar3a3q)
                })]
            }), null == D || 0 === D.length ? (0, n.jsxs)(o.BJc, {
                direction: "vertical",
                align: "center",
                gap: 16,
                children: [(0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: L.intl.string(h.default.cR6336)
                }), (0, n.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: L.intl.string(h.default.hDvmYP),
                    onClick: () => {
                        (0, g.DJ)()
                    }
                })]
            }) : (0, n.jsx)(o.BJc, {
                direction: "vertical",
                gap: 8,
                children: D.map(t => {
                    let {
                        title: e,
                        description: i,
                        onClick: l
                    } = t;
                    return (0, n.jsx)(u.PQ, {
                        variant: "clickable",
                        title: e,
                        description: i,
                        buttonDisabled: j,
                        onButtonPress: () => l(b)
                    }, e)
                })
            })]
        })
    })
}