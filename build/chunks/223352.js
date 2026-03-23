/** chunk id: 223352 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(497766),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(341915),
    m = n(646764),
    h = n(398025),
    p = n(568329),
    x = n(963713),
    g = n(772244);
n(272111);
var _ = n(985018),
    f = n(355862);
let v = e => {
    let {
        isFullyExpanded: t,
        partnerBranding: n
    } = e, l = (0, g.q)().label, v = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
        quest: b
    } = i.useContext(x.T), {
        expansionSpring: j
    } = i.useContext(p.PW), A = l ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.animated.div, {
            className: f.tE,
            style: {
                transform: (0, r.to)([j.to({
                    range: [0, 1],
                    output: [0, 0]
                }), j.to({
                    range: [0, 1],
                    output: [0, 82]
                }), j.to({
                    range: [0, 1],
                    output: [1, 1.3333333333333333]
                })], (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`)
            },
            children: (0, a.jsx)(m.A, {
                learnMoreStyle: "text",
                learnMoreFontSize: t ? 9 : void 0,
                quest: b,
                questContent: u.uF.QUEST_BAR_V2,
                autoplay: t && !v,
                sourceQuestContent: u.uF.QUEST_BAR_V2,
                style: {
                    width: 48,
                    height: 48,
                    marginRight: 8,
                    borderRadius: 6
                }
            })
        }), (0, a.jsxs)(r.animated.div, {
            className: s()(f.pm, {
                [f.nd]: l
            }),
            style: {
                transform: (0, r.to)([j.to({
                    range: [0, 1],
                    output: [0, -48]
                }), j.to({
                    range: [0, 1],
                    output: [0, A]
                })], (e, t) => `translate(${e}px, ${t}px)`)
            },
            children: [(0, a.jsx)("div", {
                className: s()({
                    [f.Iu]: !l
                }),
                children: n
            }), (0, a.jsx)(r.animated.div, {
                className: s()(f.ol, {
                    [f.yZ]: l
                }),
                style: {
                    opacity: (0, h.a)(j.to({
                        range: [0, 1],
                        output: [l ? 1 : .7, 0]
                    }))
                },
                children: (0, a.jsx)(d.Text, {
                    color: "always-white",
                    lineClamp: 1,
                    variant: "text-xs/medium",
                    children: _.intl.string(_.t["3mgEQf"])
                })
            })]
        })]
    })
}