/** chunk id: 558179 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => v
});
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(791332),
    u = r.n(i),
    c = r(268218),
    o = r(481859),
    d = r(694403),
    h = r(542664),
    p = r(49005),
    m = r(529223),
    g = r(829681);
let x = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function f(e) {
    return "string" == typeof e.content ? e.content : R(e.content)
}
let A = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, t, r) {
                let l = `h${e.level}`;
                return (0, n.jsx)(o.A, {
                    tag: l,
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
            ...d.Ay,
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
                let l = n.match(e, t, r);
                if (null != l && Array.isArray(l) && l.length >= 3) {
                    let e = l[2];
                    if ("string" == typeof e) return null != e.match(x) ? l : null
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
            react(e, t, l) {
                let s = () => (0, n.jsx)("pre", {
                    children: (0, n.jsx)("code", {
                        className: a()(g.kw, "hljs"),
                        children: f(e)
                    })
                }, l.key);
                return (0, n.jsx)(c.c2, {
                    createPromise: () => Promise.resolve().then(r.bind(r, 752238)),
                    webpackId: 752238,
                    renderFallback: s,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return s();
                        {
                            let r = t.highlight(e.lang, e.content, !0);
                            return null == r ? s() : (0, n.jsx)("pre", {
                                children: (0, n.jsx)("code", {
                                    className: a()(g.kw, "hljs", r.language),
                                    dangerouslySetInnerHTML: {
                                        __html: r.value
                                    }
                                })
                            }, l.key)
                        }
                    }
                }, l.key)
            }
        }
    },
    k = u().parserFor(A),
    R = u().reactFor(u().ruleOutput(A, "react"));
class b extends l.PureComponent {
    static rules = A;
    static defaultProps = {
        parser: k,
        output: R
    };
    render() {
        let {
            className: e,
            children: t,
            state: r,
            parser: l,
            output: s
        } = this.props, i = s(l(`${t}

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
let v = b