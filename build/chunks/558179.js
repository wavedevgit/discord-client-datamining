/** chunk id: 558179 params = (module,exports,require) **/
a.d(t, {
    A: () => C
});
var s = a(627968),
    l = a(64700),
    n = a(503698),
    r = a.n(n),
    i = a(791332),
    A = a.n(i),
    d = a(268218),
    o = a(481859),
    c = a(694403),
    u = a(542664),
    _ = a(49005),
    h = a(529223),
    I = a(829681);
let E = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function p(e) {
    return "string" == typeof e.content ? e.content : N(e.content)
}
let L = {
        ...A().defaultRules,
        heading: {
            ...A().defaultRules.heading,
            react(e, t, a) {
                let l = `h${e.level}`;
                return (0, s.jsx)(o.A, {
                    tag: l,
                    children: t(e.content, a)
                }, a.key)
            }
        },
        paragraph: {
            ...A().defaultRules.paragraph,
            react: (e, t, a) => (0, s.jsx)("div", {
                className: h.FY,
                children: t(e.content, a)
            }, a.key)
        },
        strong: {
            ...A().defaultRules.strong,
            order: 6
        },
        em: {
            ...A().defaultRules.em,
            order: 6
        },
        u: {
            ...A().defaultRules.u,
            order: 5
        },
        del: {
            ...A().defaultRules.del,
            order: 6
        },
        link: {
            ...c.Ay,
            ...(0, _.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...A().defaultRules.blockQuote,
            react: (e, t, a) => (0, s.jsx)("blockquote", {
                className: h.aV,
                children: p(e)
            }, a.key)
        },
        image: {
            ...A().defaultRules.image,
            order: 6,
            match(e, t, a) {
                let s = A().defaultRules.image;
                if (null == s || null == s.match) return !1;
                let l = s.match(e, t, a);
                if (null != l && Array.isArray(l) && l.length >= 3) {
                    let e = l[2];
                    if ("string" == typeof e) return null != e.match(E) ? l : null
                }
                return !1
            }
        },
        inlineCode: {
            ...u.A.RULES.inlineCode,
            order: 6,
            react: (e, t, a) => (0, s.jsx)("code", {
                className: h.hQ,
                children: p(e)
            }, a.key)
        },
        codeBlock: {
            ...A().defaultRules.codeBlock,
            react(e, t, l) {
                let n = () => (0, s.jsx)("pre", {
                    children: (0, s.jsx)("code", {
                        className: r()(I.kw, "hljs"),
                        children: p(e)
                    })
                }, l.key);
                return (0, s.jsx)(d.c2, {
                    createPromise: () => Promise.resolve().then(a.bind(a, 752238)),
                    webpackId: 752238,
                    renderFallback: n,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
                        {
                            let a = t.highlight(e.lang, e.content, !0);
                            return null == a ? n() : (0, s.jsx)("pre", {
                                children: (0, s.jsx)("code", {
                                    className: r()(I.kw, "hljs", a.language),
                                    dangerouslySetInnerHTML: {
                                        __html: a.value
                                    }
                                })
                            }, l.key)
                        }
                    }
                }, l.key)
            }
        }
    },
    g = A().parserFor(L),
    N = A().reactFor(A().ruleOutput(L, "react"));
class m extends l.PureComponent {
    static rules = L;
    static defaultProps = {
        parser: g,
        output: N
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
            className: r()(h.wD, e),
            children: i
        })
    }
}
let C = m