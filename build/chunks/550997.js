/** chunk id: 550997 params = (module,exports,require) **/
"use strict";
let l;
n.r(t), n.d(t, {
    default: () => C,
    renderChangelogMessageMarkup: () => b
});
var i = n(791332),
    s = n.n(i),
    a = n(873879),
    r = n(683412),
    o = n(704726),
    u = n(46054);
let c = s().defaultRules.lheading,
    d = s().defaultRules.heading,
    m = s().defaultRules.link,
    h = s().defaultRules.image,
    g = s().defaultRules.list,
    p = s().defaultRules.blockQuote,
    A = s().defaultRules.paragraph,
    x = /\{(.+?)}/,
    f = /^\$(\w+?)\$/;
l = n(482644);
let v = e => {
        let {
            transformUpperCase: t = !1
        } = e;
        return (e, n, l) => {
            let i = x.exec(e[1]),
                a = e[1].replace(x, "");
            return t && (a = a.toUpperCase()), {
                className: null != i ? i[1] : null,
                level: "=" === e[2] ? 1 : 2,
                content: s().parseInline(n, a, l)
            }
        }
    },
    j = e => ({
        ...l.baseRules,
        image: {
            ...h,
            ..."function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image
        },
        link: {
            ...m,
            ..."function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link
        },
        list: {
            ...g,
            ..."function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list
        },
        interpolation: {
            order: o.Ay.order,
            match: e => f.exec(e),
            parse(e, t, n) {
                let l = n.interpolations[e[1]];
                return null == l ? {
                    type: "text",
                    content: e[0]
                } : {
                    type: "interpolation",
                    renderer: l
                }
            },
            react: e => e.renderer()
        },
        lheading: {
            ...c,
            parse: v({
                transformUpperCase: !0
            }),
            ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
        },
        heading: {
            ...d,
            ..."function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading
        },
        blockQuote: {
            ...p,
            ..."function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote
        },
        paragraph: {
            ...A,
            ..."function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph
        }
    });

function N(e) {
    return {
        ...j(e)
    }
}
let C = {
    getDefaultRules: N,
    getSpecialRules: e => ({
        ...j(e),
        ...{
            lheading: {
                ...c,
                parse: v({
                    transformUpperCase: !1
                }),
                ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
            }
        }
    }),
    getMessageRules: e => ({
        ...{
            ...j(e),
            newline: {
                ...s().defaultRules.newline
            },
            text: o.Ay,
            list: a.A,
            subtext: r.A
        }
    })
};

function b(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        hasBailedAst: !1,
        content: u.A.reactParserFor(N(t))(e.content, !1, null != n ? {
            changeLog: n
        } : {})
    }
}