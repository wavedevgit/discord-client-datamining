/** Chunk was on 93530 **/
/** chunk id: 244321, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => g
}), i(228524);
var n = i(627968),
    r = i(64700),
    s = i(158954),
    c = i(311907),
    l = i(397927),
    a = i(935649),
    o = i(847599),
    A = i(754302),
    _ = i(632738),
    d = i(67521),
    E = i(308645),
    u = i(207913),
    p = i(239093),
    b = i(985018);
let h = [{
        title: b.intl.string(b.t["1+E7LP"]),
        description: b.intl.string(b.t["BXiat/"])
    }, {
        title: b.intl.string(b.t.iMQXtK),
        description: b.intl.string(b.t.oQ0vwu)
    }, {
        title: b.intl.string(b.t["oY/z1Q"]),
        description: b.intl.string(b.t.wtj02W)
    }],
    g = function(t) {
        let {
            onClose: e,
            transitionState: i,
            classificationId: g
        } = t, P = (0, c.bG)([u.A], () => u.A.getAgeVerificationWebviewUrl()), O = (0, c.bG)([u.A], () => u.A.getIsLoadingAgeVerification()), T = r.useCallback(() => {
            e(), d.A.close()
        }, [e]), f = r.useCallback(() => {
            d.A.success(), T(), d.A.start_verification_check()
        }, [T]);
        return r.useEffect(() => {
            "" !== P && a.A.showAgeVerification({
                webviewUrl: P,
                onComplete: f,
                entryPoint: o.q1.AUTOMATED_UNDERAGE_APPEALS
            })
        }, [P, f]), (0, n.jsx)(s.Modal, {
            onClose: e,
            transitionState: i,
            title: b.intl.string(b.t["9SDLnj"]),
            subtitle: b.intl.string(b.t["yvx//1"]),
            actions: [{
                text: b.intl.string(b.t.dKacJ8),
                onClick: T,
                variant: "secondary"
            }, {
                text: b.intl.string(b.t["54b8V0"]),
                onClick: () => (0, E.k9)(g),
                loading: O
            }],
            children: (0, n.jsxs)(l.BJc, {
                gap: 8,
                direction: "vertical",
                children: [(0, n.jsx)(A.q, {
                    children: h.map((t, e) => {
                        let {
                            title: i,
                            description: r
                        } = t;
                        return (0, n.jsx)(A.B, {
                            title: i,
                            description: r,
                            index: e,
                            listType: "numbered"
                        }, e)
                    })
                }), (0, n.jsxs)(l.BJc, {
                    gap: 8,
                    direction: "vertical",
                    children: [(0, n.jsx)(_.Y0, {
                        title: b.intl.string(b.t.WPwp1b),
                        children: (0, n.jsx)(_.PQ, {
                            title: b.intl.string(b.t.N9WJMM),
                            description: b.intl.string(b.t.NHq382),
                            buttonText: b.intl.string(b.t["9iy4lB"]),
                            titleVariant: "text-md/medium",
                            onButtonPress: () => window.open(p.d$.AGE_VERIFICATION_LINK, "_blank")
                        })
                    }), (0, n.jsx)(l.BJc, {
                        align: "center",
                        children: (0, n.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: b.intl.format(b.t.ZbWsOF, {
                                learnMoreLink: p.d$.LEARN_MORE_UU_APPEAL_LINK
                            })
                        })
                    })]
                })]
            })
        })
    }