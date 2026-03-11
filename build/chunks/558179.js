/** chunk id: 558179 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => P
});
var a = s(627968),
    r = s(64700),
    n = s(503698),
    l = s.n(n),
    i = s(791332),
    u = s.n(i),
    c = s(268218),
    d = s(481859),
    A = s(694403),
    o = s(542664),
    h = s(49005),
    _ = s(529223),
    I = s(829681);
let E = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function p(e) {
    return "string" == typeof e.content ? e.content : m(e.content)
}
let L = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, t, s) {
                let r = `h${e.level}`;
                return (0, a.jsx)(d.A, {
                    tag: r,
                    children: t(e.content, s)
                }, s.key)
            }
        },
        paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, t, s) => (0, a.jsx)("div", {
                className: _.FY,
                children: t(e.content, s)
            }, s.key)
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
            ...A.Ay,
            ...(0, h.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, t, s) => (0, a.jsx)("blockquote", {
                className: _.aV,
                children: p(e)
            }, s.key)
        },
        image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, s) {
                let a = u().defaultRules.image;
                if (null == a || null == a.match) return !1;
                let r = a.match(e, t, s);
                if (null != r && Array.isArray(r) && r.length >= 3) {
                    let e = r[2];
                    if ("string" == typeof e) return null != e.match(E) ? r : null
                }
                return !1
            }
        },
        inlineCode: {
            ...o.A.RULES.inlineCode,
            order: 6,
            react: (e, t, s) => (0, a.jsx)("code", {
                className: _.hQ,
                children: p(e)
            }, s.key)
        },
        codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, r) {
                let n = () => (0, a.jsx)("pre", {
                    children: (0, a.jsx)("code", {
                        className: l()(I.kw, "hljs"),
                        children: p(e)
                    })
                }, r.key);
                return (0, a.jsx)(c.c2, {
                    createPromise: () => Promise.resolve().then(s.bind(s, 752238)),
                    webpackId: 752238,
                    renderFallback: n,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
                        {
                            let s = t.highlight(e.lang, e.content, !0);
                            return null == s ? n() : (0, a.jsx)("pre", {
                                children: (0, a.jsx)("code", {
                                    className: l()(I.kw, "hljs", s.language),
                                    dangerouslySetInnerHTML: {
                                        __html: s.value
                                    }
                                })
                            }, r.key)
                        }
                    }
                }, r.key)
            }
        }
    },
    g = u().parserFor(L),
    m = u().reactFor(u().ruleOutput(L, "react"));
class N extends r.PureComponent {
    static rules = L;
    static defaultProps = {
        parser: g,
        output: m
    };
    render() {
        let {
            className: e,
            children: t,
            state: s,
            parser: r,
            output: n
        } = this.props, i = n(r(`${t}

`, {
            inline: !1,
            ...s
        }));
        return (0, a.jsx)("div", {
            className: l()(_.wD, e),
            children: i
        })
    }
}
let P = N