/** chunk id: 157839 params = (module,exports,require) **/
n.d(t, {
    A: () => f
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
    m = n(398523),
    _ = n(612669),
    g = n(180022),
    A = n(513570),
    x = n(975662),
    p = n(322631),
    h = n(17307),
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
    f = e => {
        let {
            className: t,
            variant: n,
            noBackground: l = !1,
            leftAlignHeaders: f = !1,
            showAllPerksButton: S,
            headerClassname: C
        } = e, b = s.useRef(null), N = n === p.cJ.WHATS_NEW, I = (0, r.bG)([c.default], () => c.default.getCurrentUser()), v = (0, A.E)();
        s.useEffect(() => {
            N && v()
        }, [v, N]);
        let j = (0, h.G4)(N),
            y = (0, x.A)(),
            O = (0, h.LQ)(),
            {
                fractionalState: R
            } = (0, d.A)(),
            L = (0, u.d)(),
            P = m.A.useExperiment({
                location: "PremiumPerks"
            }).enabled,
            D = (0, _.O9)(),
            M = (0, h.vx)({
                perksCards: y,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: O,
                fractionalState: R,
                isInReverseTrial: L,
                recurring3PPromotionExperiment: P,
                showPremiumGroup: D,
                isPremiumGroupMember: I?.isPremiumGroupMember()
            }),
            G = M.some(e => null != e.pillText);
        return (0, i.jsxs)("div", {
            ref: b,
            className: a()(T.uW, {
                [T.qO]: !f,
                [T.Uv]: f
            }, t),
            children: [(0, i.jsx)(E, {
                showAllPerksButton: S,
                leftAlignHeaders: f,
                title: j.title,
                headerClassname: C
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/normal",
                color: "text-strong",
                className: a()(T.VA, {
                    [T.VA]: null == S || f,
                    [T.Xx]: null != S && !f,
                    [T.Ij]: N || f,
                    [T.Ob]: G,
                    [T.dO]: f,
                    [T.br]: !f
                }),
                children: j.subtitle
            }), !f && null != S && (0, i.jsx)("div", {
                className: T.xk,
                children: S
            }), (0, i.jsx)("div", {
                className: T.Ui,
                children: M.map((e, t) => (0, i.jsx)(g.A, {
                    ...e,
                    forceShadow: l
                }, `${e.name}_${t}`))
            })]
        })
    }