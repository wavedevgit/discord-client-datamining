/** Chunk was on 87557 **/
/** chunk id: 767379, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => T
}), n(896048), n(228524);
var a = n(627968),
    l = n(64700),
    r = n(835245),
    i = n(158954),
    s = n(554146),
    o = n(397927),
    c = n(379848),
    d = n(632738),
    u = n(627575),
    m = n(393033),
    p = n(105428),
    h = n(975571),
    x = n(935649),
    g = n(847599),
    f = n(295972),
    b = n(36149),
    v = n(807734),
    j = n(652215),
    _ = n(239093),
    y = n(536242),
    A = n(985018),
    C = n(62959),
    S = n(700129);

function O(e) {
    let {
        modalSessionId: t,
        entryPoint: n
    } = e;
    return (0, m.W$)() ? (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: A.intl.format(y.default.htWh1G, {
            handleOnHelpUrlHook: () => {
                x.A.openUrl(_.d$.LEARN_MORE_UU_APPEAL_LINK), (0, g.St)(t, g.WU.EXPRESSIVE_PRIMARY, g._7.LEARN_MORE)
            }
        })
    }) : n === g.q1.SAFETY_FLOWS ? (0, a.jsx)(o.QWc, {
        size: "sm",
        textVariant: "text-sm/medium",
        text: A.intl.string(A.t["2jxGer"]),
        onClick: () => {
            (0, g.St)(t, g.WU.EXPRESSIVE_PRIMARY, g._7.LOG_OUT), (0, u.k)("age_verification_get_started_modal")
        }
    }) : null
}
let T = function(e) {
    let {
        transitionState: t,
        entryPoint: n,
        onClose: u,
        onComplete: _,
        dismissable: T,
        classificationId: E
    } = e, [N, w] = l.useState(s.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), I = l.useRef(N), [P, k] = (0, c.kn)([N], void 0, !0), R = l.useMemo(() => (0, r.A)(), []), D = l.useRef(!1), M = (0, m.W$)();
    l.useEffect(() => {
        I.current = P
    }, [P]);
    let {
        loading: L,
        ageVerificationMethods: U
    } = (0, v.A)({
        onClose: () => {
            null == _ || _(), u()
        },
        onMethodClick: () => {
            w(s.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
        },
        classificationId: E
    });
    return l.useLayoutEffect(() => () => {
        if (D.current) return;
        let e = I.current;
        null != e && (D.current = !0, p.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_get_started_modal",
            visibleContent: e
        }))
    }, []), l.useEffect(() => {
        (0, g.Bs)(R, g.WU.EXPRESSIVE_PRIMARY, n)
    }, [R, n]), (0, a.jsx)(i.ExpressiveModal, {
        transitionState: t,
        onClose: u,
        gradientColor: "blue",
        dismissable: T,
        graphic: {
            type: "image",
            src: S.A
        },
        title: (0, b.ST)(n),
        subtitle: (0, b.mK)(n, () => {
            x.A.openUrl(h.A.getArticleURL(j.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, g.St)(R, g.WU.EXPRESSIVE_PRIMARY, g._7.LEARN_MORE)
        }, M),
        actionBarInput: (0, a.jsx)(O, {
            modalSessionId: R,
            entryPoint: n
        }),
        children: (0, a.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 16,
            children: [(0, a.jsxs)(o.BJc, {
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
                className: C.W,
                children: [(0, a.jsx)(o.mir, {
                    size: "lg",
                    color: "currentColor"
                }), (0, a.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-info",
                    children: A.intl.string(y.default.ar3a3q)
                })]
            }), null == U || 0 === U.length ? (0, a.jsxs)(o.BJc, {
                direction: "vertical",
                align: "center",
                gap: 16,
                children: [(0, a.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: A.intl.string(y.default.cR6336)
                }), (0, a.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: A.intl.string(y.default.hDvmYP),
                    onClick: () => {
                        (0, f.DJ)()
                    }
                })]
            }) : (0, a.jsx)(o.BJc, {
                direction: "vertical",
                gap: 8,
                children: U.map(e => {
                    let {
                        title: t,
                        description: n,
                        onClick: l
                    } = e;
                    return (0, a.jsx)(d.PQ, {
                        variant: "clickable",
                        title: t,
                        description: n,
                        buttonDisabled: L,
                        onButtonPress: () => l(R)
                    }, t)
                })
            })]
        })
    })
}