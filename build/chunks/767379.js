/** chunk id: 767379, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => T
});
var n = i(627968),
    r = i(64700),
    l = i(835245),
    a = i(158954),
    s = i(554146),
    o = i(397927),
    c = i(379848),
    d = i(632738),
    u = i(627575),
    E = i(393033),
    _ = i(105428),
    A = i(975571),
    R = i(935649),
    f = i(847599),
    m = i(295972),
    x = i(36149),
    g = i(807734),
    p = i(652215),
    S = i(239093),
    h = i(536242),
    I = i(985018),
    M = i(62959),
    v = i(700129);

function P(t) {
    let {
        modalSessionId: e,
        entryPoint: i
    } = t;
    return (0, E.W$)() ? (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: I.intl.format(h.default.htWh1G, {
            handleOnHelpUrlHook: () => {
                R.A.openUrl(S.d$.LEARN_MORE_UU_APPEAL_LINK), (0, f.St)(e, f.WU.EXPRESSIVE_PRIMARY, f._7.LEARN_MORE)
            }
        })
    }) : i === f.q1.SAFETY_FLOWS ? (0, n.jsx)(o.QWc, {
        size: "sm",
        textVariant: "text-sm/medium",
        text: I.intl.string(I.t["2jxGer"]),
        onClick: () => {
            (0, f.St)(e, f.WU.EXPRESSIVE_PRIMARY, f._7.LOG_OUT), (0, u.k)("age_verification_get_started_modal")
        }
    }) : null
}
let T = function(t) {
    let {
        transitionState: e,
        entryPoint: i,
        onClose: u,
        onComplete: S,
        dismissable: T,
        classificationId: C
    } = t, [k, O] = r.useState(s.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), U = r.useRef(k), [b, j] = (0, c.kn)([k], void 0, !0), L = r.useMemo(() => (0, l.A)(), []), V = r.useRef(!1), W = (0, E.W$)();
    r.useEffect(() => {
        U.current = b
    }, [b]);
    let {
        loading: G,
        ageVerificationMethods: D
    } = (0, g.A)({
        onClose: () => {
            S?.(), u()
        },
        onMethodClick: () => {
            O(s.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
        },
        classificationId: C
    });
    return r.useLayoutEffect(() => () => {
        if (V.current) return;
        let t = U.current;
        null != t && (V.current = !0, _.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: t
        }))
    }, []), r.useEffect(() => {
        (0, f.Bs)(L, f.WU.EXPRESSIVE_PRIMARY, i)
    }, [L, i]), (0, n.jsx)(a.ExpressiveModal, {
        transitionState: e,
        onClose: u,
        gradientColor: "blue",
        dismissable: T,
        graphic: {
            type: "image",
            src: v.A
        },
        title: (0, x.ST)(i),
        subtitle: (0, x.mK)(i, () => {
            R.A.openUrl(A.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, f.St)(L, f.WU.EXPRESSIVE_PRIMARY, f._7.LEARN_MORE)
        }, W),
        actionBarInput: (0, n.jsx)(P, {
            modalSessionId: L,
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
                className: M.W,
                children: [(0, n.jsx)(o.mir, {
                    size: "lg",
                    color: "currentColor"
                }), (0, n.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-info",
                    children: I.intl.string(h.default.ar3a3q)
                })]
            }), null == D || 0 === D.length ? (0, n.jsxs)(o.BJc, {
                direction: "vertical",
                align: "center",
                gap: 16,
                children: [(0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: I.intl.string(h.default.cR6336)
                }), (0, n.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: I.intl.string(h.default.hDvmYP),
                    onClick: () => {
                        (0, m.DJ)()
                    }
                })]
            }) : (0, n.jsx)(o.BJc, {
                direction: "vertical",
                gap: 8,
                children: D.map(t => {
                    let {
                        title: e,
                        description: i,
                        onClick: r
                    } = t;
                    return (0, n.jsx)(d.PQ, {
                        variant: "clickable",
                        title: e,
                        description: i,
                        buttonDisabled: G,
                        onButtonPress: () => r(L)
                    }, e)
                })
            })]
        })
    })
}