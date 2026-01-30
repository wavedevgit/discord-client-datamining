/** chunk id: 639719, original params: t,i,s (module,exports,require) **/
s.d(i, {
    default: () => h
}), s(896048), s(228524);
var n = s(627968),
    e = s(64700),
    r = s(110259),
    l = s(158954),
    a = s(417597),
    c = s(397927),
    o = s(803306),
    u = s(139286),
    x = s(870570),
    m = s(652215),
    p = s(985018),
    d = s(665763),
    E = s(546);

function _(t) {
    let {
        text: i
    } = t;
    return (0, n.jsxs)("li", {
        className: d.nf,
        children: [i, " ", (0, n.jsx)(l.I9m, {
            size: "sm",
            color: "currentColor"
        })]
    })
}

function h(t) {
    let {
        transitionState: i
    } = t, s = (0, a.bG)([x.A], () => x.A.getAction()), [l, h] = e.useState(!1);
    async function j() {
        return h(!0), s === m.a3B.AGREEMENTS && h(await (0, o.Q9)()), null
    }
    return (0, u.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.USER_AGREEMENTS,
        properties: {
            required_action: s
        }
    }, {}, []), (0, n.jsx)(c.kpP, {
        graphic: {
            src: E.A,
            type: "image"
        },
        gradientColor: "blue",
        dismissable: !1,
        title: p.intl.string(p.t["7glvXu"]),
        subtitle: p.intl.string(p.t["+USXQE"]),
        actions: [{
            variant: "primary",
            text: p.intl.string(p.t["+TBKL1"]),
            onClick: j,
            loading: l
        }],
        transitionState: i,
        onClose: m.js$,
        children: (0, n.jsxs)(c.BJc, {
            gap: 20,
            children: [s === m.a3B.AGREEMENTS ? (0, n.jsx)(c.Text, {
                variant: "text-md/normal",
                className: d.h_,
                children: p.intl.format(p.t.CN0Hvb, {
                    url: m.X7G.TERMS_SUMMARY
                })
            }) : null, (0, n.jsx)("div", {
                className: d.kL,
                children: (0, n.jsxs)("ul", {
                    className: d.yJ,
                    children: [(0, n.jsx)(_, {
                        text: p.intl.format(p.t.iw0hFi, {
                            url: m.X7G.TERMS
                        })
                    }), (0, n.jsx)(c.cGx, {}), (0, n.jsx)(_, {
                        text: p.intl.format(p.t["36klnD"], {
                            url: m.X7G.PAID_TERMS
                        })
                    }), (0, n.jsx)(c.cGx, {}), (0, n.jsx)(_, {
                        text: p.intl.format(p.t.TquFBF, {
                            url: m.X7G.PRIVACY
                        })
                    }), (0, n.jsx)(c.cGx, {}), (0, n.jsx)(_, {
                        text: p.intl.format(p.t.ia96Tb, {
                            url: m.X7G.GUIDELINES
                        })
                    })]
                })
            })]
        })
    })
}