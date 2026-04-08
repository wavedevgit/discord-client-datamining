/** chunk id: 558179 params = (module,exports,require) **/
a.d(t, {
    A: () => L
});
var n = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    l = a(791332),
    d = a.n(l),
    _ = a(268218),
    o = a(481859),
    c = a(157941),
    h = a(694403),
    u = a(542664),
    m = a(49005),
    A = a(791106),
    b = a(360792);
let p = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function I(e) {
    return "string" == typeof e.content ? e.content : N(e.content)
}
let E = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, a) {
                let i = `h${e.level}`;
                return (0, n.jsx)(o.A, {
                    tag: i,
                    children: t(e.content, a)
                }, a.key)
            }
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, a) => (0, n.jsx)("div", {
                className: A.FY,
                children: t(e.content, a)
            }, a.key)
        },
        strong: {
            ...d().defaultRules.strong,
            order: 6
        },
        em: {
            ...d().defaultRules.em,
            order: 6
        },
        u: {
            ...d().defaultRules.u,
            order: 5
        },
        del: {
            ...d().defaultRules.del,
            order: 6
        },
        link: {
            ...h.Ay,
            ...(0, m.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, a) => (0, n.jsx)("blockquote", {
                className: A.aV,
                children: I(e)
            }, a.key)
        },
        image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, a) {
                let n = d().defaultRules.image;
                if (null == n || null == n.match) return !1;
                let i = n.match(e, t, a);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ("string" == typeof e) return null != e.match(p) ? i : null
                }
                return !1
            }
        },
        inlineCode: {
            ...u.A.RULES.inlineCode,
            order: 6,
            react: (e, t, a) => (0, n.jsx)("code", {
                className: A.hQ,
                children: I(e)
            }, a.key)
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, i) {
                let s = () => (0, n.jsx)("code", {
                    className: r()(b.kw, "hljs"),
                    children: I(e)
                });
                return (0, n.jsx)("pre", {
                    children: (0, n.jsx)(c.l, {
                        location: "Markdown",
                        lang: e.lang,
                        code: e.content,
                        className: r()(b.kw, "hljs"),
                        children: (0, n.jsx)(_.c2, {
                            createPromise: () => Promise.resolve().then(a.bind(a, 752238)),
                            webpackId: 752238,
                            renderFallback: s,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return s();
                                {
                                    let a = t.highlight(e.lang, e.content, !0);
                                    return null == a ? s() : (0, n.jsx)("code", {
                                        className: r()(b.kw, "hljs", a.language),
                                        dangerouslySetInnerHTML: {
                                            __html: a.value
                                        }
                                    })
                                }
                            }
                        })
                    })
                }, i.key)
            }
        }
    },
    g = d().parserFor(E),
    N = d().reactFor(d().ruleOutput(E, "react"));
class x extends i.PureComponent {
    static rules = E;
    static defaultProps = {
        parser: g,
        output: N
    };
    render() {
        let {
            className: e,
            children: t,
            state: a,
            parser: i,
            output: s
        } = this.props, l = s(i(`${t}

`, {
            inline: !1,
            ...a
        }));
        return (0, n.jsx)("div", {
            className: r()(A.wD, e),
            children: l
        })
    }
}
let L = x