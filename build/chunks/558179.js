/** chunk id: 558179, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => _
});
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(791332),
    u = r.n(i),
    c = r(268218),
    d = r(481859),
    o = r(694403),
    h = r(542664),
    p = r(49005),
    m = r(529223),
    g = r(829681);
let x = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function f(e) {
    return "string" == typeof e.content ? e.content : A(e.content)
}
let R = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, t, r) {
                let s = `h${e.level}`;
                return (0, n.jsx)(d.A, {
                    tag: s,
                    children: t(e.content, r)
                }, r.key)
            }
        },
        paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, t, r) => (0, n.jsx)("div", {
                className: m.FY,
                children: t(e.content, r)
            }, r.key)
        },
        strong: {
            ...u().defaultRules.strong,
            order: 6
        },
        em: {
            ...u().defaultRules.em,
            order: 6
        },
        u: {
            ...u().defaultRules.u,
            order: 5
        },
        del: {
            ...u().defaultRules.del,
            order: 6
        },
        link: {
            ...o.Ay,
            ...(0, p.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, t, r) => (0, n.jsx)("blockquote", {
                className: m.aV,
                children: f(e)
            }, r.key)
        },
        image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, r) {
                let n = u().defaultRules.image;
                if (null == n || null == n.match) return !1;
                let s = n.match(e, t, r);
                if (null != s && Array.isArray(s) && s.length >= 3) {
                    let e = s[2];
                    if ("string" == typeof e) return null != e.match(x) ? s : null
                }
                return !1
            }
        },
        inlineCode: {
            ...h.A.RULES.inlineCode,
            order: 6,
            react: (e, t, r) => (0, n.jsx)("code", {
                className: m.hQ,
                children: f(e)
            }, r.key)
        },
        codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, s) {
                let l = () => (0, n.jsx)("pre", {
                    children: (0, n.jsx)("code", {
                        className: a()(g.kw, "hljs"),
                        children: f(e)
                    })
                }, s.key);
                return (0, n.jsx)(c.c2, {
                    createPromise: () => Promise.resolve().then(r.bind(r, 752238)),
                    webpackId: 752238,
                    renderFallback: l,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return l();
                        {
                            let r = t.highlight(e.lang, e.content, !0);
                            return null == r ? l() : (0, n.jsx)("pre", {
                                children: (0, n.jsx)("code", {
                                    className: a()(g.kw, "hljs", r.language),
                                    dangerouslySetInnerHTML: {
                                        __html: r.value
                                    }
                                })
                            }, s.key)
                        }
                    }
                }, s.key)
            }
        }
    },
    v = u().parserFor(R),
    A = u().reactFor(u().ruleOutput(R, "react"));
class k extends s.PureComponent {
    static rules = R;
    static defaultProps = {
        parser: v,
        output: A
    };
    render() {
        let {
            className: e,
            children: t,
            state: r,
            parser: s,
            output: l
        } = this.props, i = l(s(`${t}

`, {
            inline: !1,
            ...r
        }));
        return (0, n.jsx)("div", {
            className: a()(m.wD, e),
            children: i
        })
    }
}
let _ = k