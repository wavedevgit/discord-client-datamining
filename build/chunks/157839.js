/** chunk id: 157839 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(531260),
    c = n(287809),
    u = n(637073),
    _ = n(398523),
    g = n(612669),
    A = n(180022),
    m = n(513570),
    h = n(975662),
    p = n(322631),
    x = n(17307),
    E = n(204593);
let T = e => {
        let {
            showAllPerksButton: t,
            leftAlignHeaders: n,
            title: s,
            headerClassname: l
        } = e, a = (0, i.jsx)(o.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: null != l ? l : E.R_,
            children: s
        });
        return null == t ? a : n ? (0, i.jsxs)("div", {
            className: E.bV,
            children: [a, null != t && (0, i.jsx)("div", {
                className: E.W0,
                children: t
            })]
        }) : (0, i.jsx)("div", {
            className: E.kL,
            children: (0, i.jsx)("div", {
                className: E.pr,
                children: a
            })
        })
    },
    S = e => {
        let {
            className: t,
            variant: n,
            noBackground: l = !1,
            leftAlignHeaders: S = !1,
            showAllPerksButton: C,
            headerClassname: I
        } = e, f = s.useRef(null), N = n === p.cJ.WHATS_NEW, b = (0, r.bG)([c.default], () => c.default.getCurrentUser()), v = (0, m.E)();
        s.useEffect(() => {
            N && v()
        }, [v, N]);
        let O = (0, x.G4)(N),
            j = (0, h.A)(),
            R = (0, x.LQ)(),
            {
                fractionalState: y
            } = (0, d.A)(),
            P = (0, u.d)(),
            D = _.A.useExperiment({
                location: "PremiumPerks"
            }).enabled,
            L = (0, g.O9)(),
            G = (0, x.vx)({
                perksCards: j,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: R,
                fractionalState: y,
                isInReverseTrial: P,
                recurring3PPromotionExperiment: D,
                showPremiumGroup: L,
                isPremiumGroupMember: b?.isPremiumGroupMember()
            }),
            M = G.some(e => null != e.pillText);
        return (0, i.jsxs)("div", {
            ref: f,
            className: a()(E.uW, {
                [E.qO]: !S,
                [E.Uv]: S
            }, t),
            children: [(0, i.jsx)(T, {
                showAllPerksButton: C,
                leftAlignHeaders: S,
                title: O.title,
                headerClassname: I
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/normal",
                color: "text-strong",
                className: a()(E.VA, {
                    [E.VA]: null == C || S,
                    [E.Xx]: null != C && !S,
                    [E.Ij]: N || S,
                    [E.Ob]: M,
                    [E.dO]: S,
                    [E.br]: !S
                }),
                children: O.subtitle
            }), !S && null != C && (0, i.jsx)("div", {
                className: E.xk,
                children: C
            }), (0, i.jsx)("div", {
                className: E.Ui,
                children: G.map((e, t) => (0, i.jsx)(A.A, {
                    ...e,
                    forceShadow: l
                }, `${e.name}_${t}`))
            })]
        })
    }