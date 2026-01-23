/** Chunk was on web.js **/
/** chunk id: 558179, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(591487), n(727858), n(747238);
var r, i, a = n(627968),
    s = n(64700),
    o = n(503698),
    l = n.n(o),
    c = n(280230),
    u = n.n(c),
    d = n(268218),
    f = n(481859),
    p = n(694403),
    _ = n(542664),
    h = n(49005),
    m = n(529223),
    g = n(829681);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let v = new RegExp("https?://".concat(null != (r = window.GLOBAL_ENV.CDN_HOST) ? r : ""));

function A(e) {
    return "string" == typeof e.content ? e.content : T(e.content)
}
let I = O(y({}, u().defaultRules), {
        heading: O(y({}, u().defaultRules.heading), {
            react(e, t, n) {
                let r = "h".concat(e.level);
                return (0, a.jsx)(f.A, {
                    tag: r,
                    children: t(e.content, n)
                }, n.key)
            }
        }),
        paragraph: O(y({}, u().defaultRules.paragraph), {
            react: (e, t, n) => (0, a.jsx)("div", {
                className: m.FY,
                children: t(e.content, n)
            }, n.key)
        }),
        strong: O(y({}, u().defaultRules.strong), {
            order: 6
        }),
        em: O(y({}, u().defaultRules.em), {
            order: 6
        }),
        u: O(y({}, u().defaultRules.u), {
            order: 5
        }),
        del: O(y({}, u().defaultRules.del), {
            order: 6
        }),
        link: O(y({}, p.Ay, (0, h.A)({
            enableBuildOverrides: !1
        })), {
            order: 6
        }),
        blockQuote: O(y({}, u().defaultRules.blockQuote), {
            react: (e, t, n) => (0, a.jsx)("blockquote", {
                className: m.aV,
                children: A(e)
            }, n.key)
        }),
        image: O(y({}, u().defaultRules.image), {
            order: 6,
            match(e, t, n) {
                let r = u().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let i = r.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ("string" == typeof e) return null != e.match(v) ? i : null
                }
                return !1
            }
        }),
        inlineCode: O(y({}, _.A.RULES.inlineCode), {
            order: 6,
            react: (e, t, n) => (0, a.jsx)("code", {
                className: m.hQ,
                children: A(e)
            }, n.key)
        }),
        codeBlock: O(y({}, u().defaultRules.codeBlock), {
            react(e, t, r) {
                let i = () => (0, a.jsx)("pre", {
                    children: (0, a.jsx)("code", {
                        className: l()(g.kw, "hljs"),
                        children: A(e)
                    })
                }, r.key);
                return (0, a.jsx)(d.c2, {
                    createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
                    webpackId: 752238,
                    renderFallback: i,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
                        {
                            let n = t.highlight(e.lang, e.content, !0);
                            return null == n ? i() : (0, a.jsx)("pre", {
                                children: (0, a.jsx)("code", {
                                    className: l()(g.kw, "hljs", n.language),
                                    dangerouslySetInnerHTML: {
                                        __html: n.value
                                    }
                                })
                            }, r.key)
                        }
                    }
                }, r.key)
            }
        })
    }),
    S = u().parserFor(I),
    T = u().reactFor(u().ruleOutput(I, "react"));
class C extends(i = s.PureComponent) {
    render() {
        let {
            className: e,
            children: t,
            state: n,
            parser: r,
            output: i
        } = this.props, s = i(r("".concat(t, "\n\n"), y({
            inline: !1
        }, n)));
        return (0, a.jsx)("div", {
            className: l()(m.wD, e),
            children: s
        })
    }
}
E(C, "rules", I), E(C, "defaultProps", {
    parser: S,
    output: T
});
let N = C