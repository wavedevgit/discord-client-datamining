/** Chunk was on web.js **/
/** chunk id: 249431, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h,
    Y: () => _
}), n(896048), n(114821), n(339614), n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(711371),
    s = n(675841),
    l = n(562650),
    c = n(388963);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let _ = {
    strong: s.bold,
    em: s.italics,
    u: s.underline,
    s: s.strikethrough,
    inlineCode: s.inlineCode,
    link: s.fakeLink,
    url: s.fakeLink,
    autolink: s.fakeLink,
    silentPrefix: s.fakeLink,
    spoiler: a()(c.ur, c.F0, c.kx, s.spoiler),
    staticRouteLink: s.fakeLink,
    syntaxBefore: s.syntaxBefore,
    syntaxAfter: s.syntaxAfter,
    codeBlockText: s.codeBlockText,
    codeBlockSyntax: s.codeBlockSyntax,
    codeBlockLang: s.codeBlockLang,
    subtext: s.subtext,
    mentionSuggestion: l.Z2,
    mentionSuggestionSimpleColorVariant: l.xD
};

function h(e, t) {
    let n, {
            attributes: i,
            children: c,
            leaf: u,
            text: f
        } = t,
        h = !1,
        [m] = o.VW.node(e, o.PW.parent(o.VW.findPath(e, f)));
    switch (o.VW.isEditor(m) ? "editor" : m.type) {
        case "line":
        case "blockQuote": {
            h = void 0;
            let e = Object.entries(u).filter(e => {
                let [t] = e;
                return "text" !== t
            }).flatMap(e => {
                let [t, n] = e;
                if ("hljsTypes" === t) return n;
                if (!0 === n) {
                    if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (h = !1), t.startsWith("before_") || t.startsWith("after_")) return [s[t]];
                    if (t in _) return [_[t]];
                    throw Error("Slate: Unknown decoration attribute: ".concat(t))
                }
            }).filter(e => null != e).join(" ");
            n = a()(e, {
                [s.syntaxOverride]: "||" === u.text || "\\" === u.text
            })
        }
    }
    return n = a()(n, {
        [l.BI]: "" === f.text
    }), (0, r.jsx)("span", p(d({}, i), {
        className: n,
        spellCheck: h,
        children: c
    }))
}