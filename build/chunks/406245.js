/** chunk id: 406245, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(975571),
    c = n(652215),
    u = n(985018),
    d = n(943216);
let f = [{
        getQuestion: () => u.intl.string(u.t.C4J8UB),
        getAnswer: () => u.intl.string(u.t.nhkk6k)
    }, {
        getQuestion: () => u.intl.string(u.t.ai4ym2),
        getAnswer: () => u.intl.format(u.t["8zlqlD"], {
            helpCenterUrl: l.A.getArticleURL(c.MVz.GUILD_BOOSTING_FAQ)
        })
    }, {
        getQuestion: () => u.intl.string(u.t.kMVGsC),
        getAnswer: () => u.intl.string(u.t["Vz/SCQ"])
    }, {
        getQuestion: () => u.intl.string(u.t.kYmXWF),
        getAnswer: () => u.intl.string(u.t["+OURPp"])
    }, {
        getQuestion: () => u.intl.string(u.t["LsX/vb"]),
        getAnswer: () => u.intl.string(u.t["3TeauK"])
    }, {
        getQuestion: () => u.intl.string(u.t.fRlnXU),
        getAnswer: () => u.intl.string(u.t.bTRacj)
    }, {
        getQuestion: () => u.intl.string(u.t["8Mu5Q9"]),
        getAnswer: () => u.intl.string(u.t["2T5iPo"])
    }, {
        getQuestion: () => u.intl.string(u.t["6EN+TZ"]),
        getAnswer: () => u.intl.string(u.t.NZax1u)
    }, {
        getQuestion: () => u.intl.string(u.t.f5B4EW),
        getAnswer: () => u.intl.string(u.t.Aje8Pb)
    }],
    p = function(e) {
        let {
            className: t
        } = e, [n, a] = i.useState(null);
        return (0, r.jsxs)("div", {
            className: o()(d.iE, t),
            children: [(0, r.jsx)(s.Heading, {
                className: d.R_,
                variant: "heading-xxl/bold",
                children: u.intl.string(u.t.HPJ6Nj)
            }), (0, r.jsx)("ul", {
                className: d.p_,
                children: f.map((e, t) => {
                    let i = n === t;
                    return (0, r.jsxs)("div", {
                        className: d.Aw,
                        children: [(0, r.jsxs)(s.DUT, {
                            className: o()(d.k7, {
                                [d.lo]: i
                            }),
                            onClick: () => a(e => e === t ? null : t),
                            tag: "li",
                            children: [(0, r.jsx)(s.Text, {
                                className: d.b1,
                                variant: "text-lg/normal",
                                children: e.getQuestion()
                            }), i ? (0, r.jsx)(s.QGg, {
                                size: "md",
                                color: "currentColor",
                                className: d.q4
                            }) : (0, r.jsx)(s.j96, {
                                size: "md",
                                color: "currentColor",
                                className: d.q4
                            })]
                        }), i && (0, r.jsx)(s.Text, {
                            className: d.ZF,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: e.getAnswer()
                        })]
                    }, t)
                })
            })]
        })
    }