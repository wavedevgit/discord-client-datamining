/** chunk id: 244321, original params: t,i,e (module,exports,require) **/
e.d(i, {
    default: () => P
});
var n = e(627968),
    s = e(64700),
    l = e(158954),
    c = e(311907),
    r = e(397927),
    a = e(935649),
    A = e(847599),
    o = e(754302),
    _ = e(632738),
    d = e(67521),
    E = e(308645),
    p = e(207913),
    h = e(239093),
    u = e(985018);
let T = [{
        title: u.intl.string(u.t["1+E7LP"]),
        description: u.intl.string(u.t["BXiat/"])
    }, {
        title: u.intl.string(u.t.iMQXtK),
        description: u.intl.string(u.t.oQ0vwu)
    }, {
        title: u.intl.string(u.t["oY/z1Q"]),
        description: u.intl.string(u.t.wtj02W)
    }],
    P = function(t) {
        let {
            onClose: i,
            transitionState: e,
            classificationId: P
        } = t, g = (0, c.bG)([p.A], () => p.A.getAgeVerificationWebviewUrl()), U = (0, c.bG)([p.A], () => p.A.getIsLoadingAgeVerification()), L = s.useCallback(() => {
            i(), d.A.close()
        }, [i]), x = s.useCallback(() => {
            d.A.success(), L(), d.A.start_verification_check()
        }, [L]);
        return s.useEffect(() => {
            "" !== g && a.A.showAgeVerification({
                webviewUrl: g,
                onComplete: x,
                entryPoint: A.q1.AUTOMATED_UNDERAGE_APPEALS
            })
        }, [g, x]), (0, n.jsx)(l.Modal, {
            onClose: i,
            transitionState: e,
            title: u.intl.string(u.t["9SDLnj"]),
            subtitle: u.intl.string(u.t["yvx//1"]),
            actions: [{
                text: u.intl.string(u.t.dKacJ8),
                onClick: L,
                variant: "secondary"
            }, {
                text: u.intl.string(u.t["54b8V0"]),
                onClick: () => (0, E.k9)(P),
                loading: U
            }],
            children: (0, n.jsxs)(r.BJc, {
                gap: 8,
                direction: "vertical",
                children: [(0, n.jsx)(o.q, {
                    children: T.map((t, i) => {
                        let {
                            title: e,
                            description: s
                        } = t;
                        return (0, n.jsx)(o.B, {
                            title: e,
                            description: s,
                            index: i,
                            listType: "numbered"
                        }, i)
                    })
                }), (0, n.jsxs)(r.BJc, {
                    gap: 8,
                    direction: "vertical",
                    children: [(0, n.jsx)(_.Y0, {
                        title: u.intl.string(u.t.WPwp1b),
                        children: (0, n.jsx)(_.PQ, {
                            title: u.intl.string(u.t.N9WJMM),
                            description: u.intl.string(u.t.NHq382),
                            buttonText: u.intl.string(u.t["9iy4lB"]),
                            titleVariant: "text-md/medium",
                            onButtonPress: () => window.open(h.d$.AGE_VERIFICATION_LINK, "_blank")
                        })
                    }), (0, n.jsx)(r.BJc, {
                        align: "center",
                        children: (0, n.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: u.intl.format(u.t.ZbWsOF, {
                                learnMoreLink: h.d$.LEARN_MORE_UU_APPEAL_LINK
                            })
                        })
                    })]
                })]
            })
        })
    }