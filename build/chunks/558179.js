/** chunk id: 558179, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => j
});
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(791332),
    c = r.n(i),
    o = r(268218),
    u = r(481859),
    d = r(694403),
    _ = r(542664),
    h = r(49005),
    m = r(529223),
    p = r(829681);
let f = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST??""}`);

function g(e) {
    return "string" == typeof e.content ? e.content : v(e.content)
}
let x = {
        ...c().defaultRules,
        heading: {
            ...c().defaultRules.heading,
            react(e, t, r) {
                let a = `h${e.level}`;
                return (0, n.jsx)(u.A, {
                    tag: a,
                    children: t(e.content, r)
                }, r.key)
            }
        },
        paragraph: {
            ...c().defaultRules.paragraph,
            react: (e, t, r) => (0, n.jsx)("div", {
                className: m.FY,
                children: t(e.content, r)
            }, r.key)
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
            ...d.Ay,
            ...(0, h.A)({
                enableBuildOverrides: !1
            }),
            order: 6
        },
        blockQuote: {
            ...c().defaultRules.blockQuote,
            react: (e, t, r) => (0, n.jsx)("blockquote", {
                className: m.aV,
                children: g(e)
            }, r.key)
        },
        image: {
            ...c().defaultRules.image,
            order: 6,
            match(e, t, r) {
                let n = c().defaultRules.image;
                if (null == n || null == n.match) return !1;
                let a = n.match(e, t, r);
                if (null != a && Array.isArray(a) && a.length >= 3) {
                    let e = a[2];
                    if ("string" == typeof e) return null != e.match(f) ? a : null
                }
                return !1
            }
        },
        inlineCode: {
            ..._.A.RULES.inlineCode,
            order: 6,
            react: (e, t, r) => (0, n.jsx)("code", {
                className: m.hQ,
                children: g(e)
            }, r.key)
        },
        codeBlock: {
            ...c().defaultRules.codeBlock,
            react(e, t, a) {
                let s = () => (0, n.jsx)("pre", {
                    children: (0, n.jsx)("code", {
                        className: l()(p.kw, "hljs"),
                        children: g(e)
                    })
                }, a.key);
                return (0, n.jsx)(o.c2, {
                    createPromise: () => Promise.resolve().then(r.bind(r, 752238)),
                    webpackId: 752238,
                    renderFallback: s,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return s();
                        {
                            let r = t.highlight(e.lang, e.content, !0);
                            return null == r ? s() : (0, n.jsx)("pre", {
                                children: (0, n.jsx)("code", {
                                    className: l()(p.kw, "hljs", r.language),
                                    dangerouslySetInnerHTML: {
                                        __html: r.value
                                    }
                                })
                            }, a.key)
                        }
                    }
                }, a.key)
            }
        }
    },
    b = c().parserFor(x),
    v = c().reactFor(c().ruleOutput(x, "react"));
class y extends a.PureComponent {
    static rules = x;
    static defaultProps = {
        parser: b,
        output: v
    };
    render() {
        let {
            className: e,
            children: t,
            state: r,
            parser: a,
            output: s
        } = this.props, i = s(a(`${t}

`, {
            inline: !1,
            ...r
        }));
        return (0, n.jsx)("div", {
            className: l()(m.wD, e),
            children: i
        })
    }
}
let j = y