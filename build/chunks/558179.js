/** chunk id: 558179 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var s = a(627968),
    n = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(791332),
    c = a.n(r),
    o = a(268218),
    d = a(481859),
    _ = a(157941),
    h = a(694403),
    u = a(542664),
    A = a(49005),
    m = a(791106),
    p = a(360792);
let I = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function b(e) {
    return "string" == typeof e.content ? e.content : x(e.content)
}
let E = {
        ...c().defaultRules,
        heading: {
            ...c().defaultRules.heading,
            react(e, t, a) {
                let n = `h${e.level}`;
                return (0, s.jsx)(d.A, {
                    tag: n,
                    children: t(e.content, a)
                }, a.key)
            }
        },
        paragraph: {
            ...c().defaultRules.paragraph,
            react: (e, t, a) => (0, s.jsx)("div", {
                className: m.FY,
                children: t(e.content, a)
            }, a.key)
        },
        strong: {
            ...c().defaultRules.strong,
            order: 6
        },
        em: {
            ...c().defaultRules.em,
            order: 6
        },
        u: {
            ...c().defaultRules.u,
            order: 5
        },
        del: {
            ...c().defaultRules.del,
            order: 6
        },
        link: {
            ...h.Ay,
            ...(0, A.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...c().defaultRules.blockQuote,
            react: (e, t, a) => (0, s.jsx)("blockquote", {
                className: m.aV,
                children: b(e)
            }, a.key)
        },
        image: {
            ...c().defaultRules.image,
            order: 6,
            match(e, t, a) {
                let s = c().defaultRules.image;
                if (null == s || null == s.match) return !1;
                let n = s.match(e, t, a);
                if (null != n && Array.isArray(n) && n.length >= 3) {
                    let e = n[2];
                    if ("string" == typeof e) return null != e.match(I) ? n : null
                }
                return !1
            }
        },
        inlineCode: {
            ...u.A.RULES.inlineCode,
            order: 6,
            react: (e, t, a) => (0, s.jsx)("code", {
                className: m.hQ,
                children: b(e)
            }, a.key)
        },
        codeBlock: {
            ...c().defaultRules.codeBlock,
            react(e, t, n) {
                let i = () => (0, s.jsx)("code", {
                    className: l()(p.kw, "hljs"),
                    children: b(e)
                });
                return (0, s.jsx)("pre", {
                    children: (0, s.jsx)(_.l, {
                        location: "Markdown",
                        lang: e.lang,
                        code: e.content,
                        className: l()(p.kw, "hljs"),
                        children: (0, s.jsx)(o.c2, {
                            createPromise: () => Promise.resolve().then(a.bind(a, 752238)),
                            webpackId: 752238,
                            renderFallback: i,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
                                {
                                    let a = t.highlight(e.lang, e.content, !0);
                                    return null == a ? i() : (0, s.jsx)("code", {
                                        className: l()(p.kw, "hljs", a.language),
                                        dangerouslySetInnerHTML: {
                                            __html: a.value
                                        }
                                    })
                                }
                            }
                        })
                    })
                }, n.key)
            }
        }
    },
    N = c().parserFor(E),
    x = c().reactFor(c().ruleOutput(E, "react"));
class L extends n.PureComponent {
    static rules = E;
    static defaultProps = {
        parser: N,
        output: x
    };
    render() {
        let {
            className: e,
            children: t,
            state: a,
            parser: n,
            output: i
        } = this.props, r = i(n(`${t}

`, {
            inline: !1,
            ...a
        }));
        return (0, s.jsx)("div", {
            className: l()(m.wD, e),
            children: r
        })
    }
}
let g = L