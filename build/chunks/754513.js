/** Chunk was on 47841 **/
/** chunk id: 754513, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(975571),
    c = n(546457),
    d = n(897295),
    u = n(411335),
    g = n(652215),
    m = n(985018),
    p = n(256893);
let f = o.A.getArticleURL(g.MVz.GUILD_AUTOMOD_REGEX);

function b(e) {
    let {
        hasErrors: t,
        text: n,
        errorText: i
    } = e;
    return t ? (0, r.jsx)("div", {
        className: p.W$,
        children: (0, r.jsx)(a.Text, {
            className: p.F,
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: null != i ? i : m.intl.format(m.t.jKYAPu, {
                helpArticle: f
            })
        })
    }) : (0, r.jsx)(a.Text, {
        className: p.W$,
        variant: "text-xs/medium",
        color: "text-muted",
        children: n
    })
}

function h(e) {
    var t, n;
    let {
        rule: l,
        onChangeText: a,
        className: o
    } = e, {
        patterns: g,
        valueError: h,
        errors: x,
        validatePatternsChanged: j,
        validateEditingValueChanged: _
    } = (0, d.A)(l, a), [O] = i.useState(() => ({
        tags: g,
        value: "",
        selections: [],
        isSelecting: !1
    })), v = i.useMemo(() => x.reduce((e, t) => {
        let {
            pattern: n,
            message: r,
            description: i,
            erroringCharacterLength: l = n.length,
            erroringCharacterOffset: s = 0
        } = t;
        return null == g.find(e => e === n) || (e[n] = {
            value: n,
            message: null != i ? i : r,
            erroringCharacterLength: l,
            erroringCharacterOffset: s
        }), e
    }, {}), [x, g]), y = i.useCallback(e => {
        j(e, g)
    }, [j, g]), A = i.useCallback(e => {
        _(e)
    }, [_]);
    return (0, r.jsxs)("div", {
        className: s()(p.Qn, o),
        children: [(0, r.jsx)(c.A, {
            placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
            initialValue: O,
            onChangeTags: y,
            onChangeNewTagValue: A,
            tagErrors: v,
            maxTags: u.qm
        }), (0, r.jsx)(b, {
            text: m.intl.format(m.t["PGC/AJ"], {
                helpArticle: f
            }),
            hasErrors: x.length > 0 || null != h,
            errorText: null != (t = null == (n = x.find(e => {
                let {
                    pattern: t
                } = e;
                return t === d.B
            })) ? void 0 : n.message) ? t : null == h ? void 0 : h.message
        })]
    })
}