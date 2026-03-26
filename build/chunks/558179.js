/** chunk id: 558179 params = (module,exports,require) **/
a.d(t, {
    A: () => N
});
var r = a(627968),
    n = a(64700),
    l = a(503698),
    s = a.n(l),
    i = a(791332),
    o = a.n(i),
    d = a(268218),
    c = a(481859),
    u = a(157941),
    h = a(694403),
    p = a(542664),
    m = a(49005),
    g = a(791106),
    x = a(360792);
let f = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function b(e) {
    return "string" == typeof e.content ? e.content : k(e.content)
}
let A = {
        ...o().defaultRules,
        heading: {
            ...o().defaultRules.heading,
            react(e, t, a) {
                let n = `h${e.level}`;
                return (0, r.jsx)(c.A, {
                    tag: n,
                    children: t(e.content, a)
                }, a.key)
            }
        },
        paragraph: {
            ...o().defaultRules.paragraph,
            react: (e, t, a) => (0, r.jsx)("div", {
                className: g.FY,
                children: t(e.content, a)
            }, a.key)
        },
        strong: {
            ...o().defaultRules.strong,
            order: 6
        },
        em: {
            ...o().defaultRules.em,
            order: 6
        },
        u: {
            ...o().defaultRules.u,
            order: 5
        },
        del: {
            ...o().defaultRules.del,
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
            ...o().defaultRules.blockQuote,
            react: (e, t, a) => (0, r.jsx)("blockquote", {
                className: g.aV,
                children: b(e)
            }, a.key)
        },
        image: {
            ...o().defaultRules.image,
            order: 6,
            match(e, t, a) {
                let r = o().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let n = r.match(e, t, a);
                if (null != n && Array.isArray(n) && n.length >= 3) {
                    let e = n[2];
                    if ("string" == typeof e) return null != e.match(f) ? n : null
                }
                return !1
            }
        },
        inlineCode: {
            ...p.A.RULES.inlineCode,
            order: 6,
            react: (e, t, a) => (0, r.jsx)("code", {
                className: g.hQ,
                children: b(e)
            }, a.key)
        },
        codeBlock: {
            ...o().defaultRules.codeBlock,
            react(e, t, n) {
                let l = () => (0, r.jsx)("code", {
                    className: s()(x.kw, "hljs"),
                    children: b(e)
                });
                return (0, r.jsx)("pre", {
                    children: (0, r.jsx)(u.l, {
                        location: "Markdown",
                        lang: e.lang,
                        code: e.content,
                        className: s()(x.kw, "hljs"),
                        children: (0, r.jsx)(d.c2, {
                            createPromise: () => Promise.resolve().then(a.bind(a, 752238)),
                            webpackId: 752238,
                            renderFallback: l,
                            render: t => {
                                if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return l();
                                {
                                    let a = t.highlight(e.lang, e.content, !0);
                                    return null == a ? l() : (0, r.jsx)("code", {
                                        className: s()(x.kw, "hljs", a.language),
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
    j = o().parserFor(A),
    k = o().reactFor(o().ruleOutput(A, "react"));
class v extends n.PureComponent {
    static rules = A;
    static defaultProps = {
        parser: j,
        output: k
    };
    render() {
        let {
            className: e,
            children: t,
            state: a,
            parser: n,
            output: l
        } = this.props, i = l(n(`${t}

`, {
            inline: !1,
            ...a
        }));
        return (0, r.jsx)("div", {
            className: s()(g.wD, e),
            children: i
        })
    }
}
let N = v