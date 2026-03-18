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
    m = n(612669),
    g = n(180022),
    A = n(513570),
    x = n(975662),
    h = n(322631),
    p = n(17307),
    T = n(609195);
let E = e => {
        let {
            showAllPerksButton: t,
            leftAlignHeaders: n,
            title: s,
            headerClassname: l
        } = e, a = (0, i.jsx)(o.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: null != l ? l : T.R_,
            children: s
        });
        return null == t ? a : n ? (0, i.jsxs)("div", {
            className: T.bV,
            children: [a, null != t && (0, i.jsx)("div", {
                className: T.W0,
                children: t
            })]
        }) : (0, i.jsx)("div", {
            className: T.kL,
            children: (0, i.jsx)("div", {
                className: T.pr,
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
            showAllPerksButton: f,
            headerClassname: C
        } = e, b = s.useRef(null), N = n === h.cJ.WHATS_NEW, I = (0, r.bG)([c.default], () => c.default.getCurrentUser()), v = (0, A.E)();
        s.useEffect(() => {
            N && v()
        }, [v, N]);
        let j = (0, p.G4)(N),
            y = (0, x.A)(),
            R = (0, p.LQ)(),
            {
                fractionalState: O
            } = (0, d.A)(),
            D = (0, u.d)(),
            L = _.A.useExperiment({
                location: "PremiumPerks"
            }).enabled,
            P = (0, m.O9)(),
            G = (0, p.vx)({
                perksCards: y,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: R,
                fractionalState: O,
                isInReverseTrial: D,
                recurring3PPromotionExperiment: L,
                showPremiumGroup: P,
                isPremiumGroupMember: I?.isPremiumGroupMember()
            }),
            M = G.some(e => null != e.pillText);
        return (0, i.jsxs)("div", {
            ref: b,
            className: a()(T.uW, {
                [T.qO]: !S,
                [T.Uv]: S
            }, t),
            children: [(0, i.jsx)(E, {
                showAllPerksButton: f,
                leftAlignHeaders: S,
                title: j.title,
                headerClassname: C
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/normal",
                color: "text-strong",
                className: a()(T.VA, {
                    [T.VA]: null == f || S,
                    [T.Xx]: null != f && !S,
                    [T.Ij]: N || S,
                    [T.Ob]: M,
                    [T.dO]: S,
                    [T.br]: !S
                }),
                children: j.subtitle
            }), !S && null != f && (0, i.jsx)("div", {
                className: T.xk,
                children: f
            }), (0, i.jsx)("div", {
                className: T.Ui,
                children: G.map((e, t) => (0, i.jsx)(g.A, {
                    ...e,
                    forceShadow: l
                }, `${e.name}_${t}`))
            })]
        })
    }