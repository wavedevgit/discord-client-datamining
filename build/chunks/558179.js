/** chunk id: 558179 params = (module,exports,require) **/
a.d(t, {
    A: () => x
});
var s = a(627968),
    l = a(64700),
    n = a(503698),
    r = a.n(n),
    i = a(791332),
    d = a.n(i),
    A = a(268218),
    o = a(481859),
    c = a(157941),
    u = a(694403),
    _ = a(542664),
    h = a(49005),
    I = a(791106),
    E = a(360792);
let p = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function L(e) {
    return "string" == typeof e.content ? e.content : m(e.content)
}
let g = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, a) {
                let l = `h${e.level}`;
                return (0, s.jsx)(o.A, {
                    tag: l,
                    children: t(e.content, a)
                }, a.key)
            }
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, a) => (0, s.jsx)("div", {
                className: I.FY,
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
            ...u.Ay,
            ...(0, h.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, a) => (0, s.jsx)("blockquote", {
                className: I.aV,
                children: L(e)
            }, a.key)
        },
        image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, a) {
                let s = d().defaultRules.image;
                if (null == s || null == s.match) return !1;
                let l = s.match(e, t, a);
                if (null != l && Array.isArray(l) && l.length >= 3) {
                    let e = l[2];
                    if ("string" == typeof e) return null != e.match(p) ? l : null
                }
                return !1
            }
        },
        inlineCode: {
            ..._.A.RULES.inlineCode,
            order: 6,
            react: (e, t, a) => (0, s.jsx)("code", {
                className: I.hQ,
                children: L(e)
            }, a.key)
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, l) {
                let n = () => (0, s.jsx)("code", {
                    className: r()(E.kw, "hljs"),
                    children: L(e)
                });
                return (0, s.jsx)("pre", {
                    children: (0, s.jsx)(c.l, {
                        location: "Markdown",
                        lang: e.lang,
                        code: e.content,
                        className: r()(E.kw, "hljs"),
                        children: (0, s.jsx)(A.c2, {
                            createPromise: () => Promise.resolve().then(a.bind(a, 752238)),
                            webpackId: 752238,
                            renderFallback: n,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
                                {
                                    let a = t.highlight(e.lang, e.content, !0);
                                    return null == a ? n() : (0, s.jsx)("code", {
                                        className: r()(E.kw, "hljs", a.language),
                                        dangerouslySetInnerHTML: {
                                            __html: a.value
                                        }
                                    })
                                }
                            }
                        })
                    })
                }, l.key)
            }
        }
    },
    N = d().parserFor(g),
    m = d().reactFor(d().ruleOutput(g, "react"));
class C extends l.PureComponent {
    static rules = g;
    static defaultProps = {
        parser: N,
        output: m
    };
    render() {
        let {
            className: e,
            children: t,
            state: a,
            parser: l,
            output: n
        } = this.props, i = n(l(`${t}

`, {
            inline: !1,
            ...a
        }));
        return (0, s.jsx)("div", {
            className: r()(I.wD, e),
            children: i
        })
    }
}
let x = C