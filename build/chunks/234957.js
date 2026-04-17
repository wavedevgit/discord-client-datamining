/** chunk id: 234957 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(9842),
    a = n(994500),
    o = n(465364),
    c = n(763754),
    u = n(448368),
    d = n(652215);
let _ = r.memo(function(e) {
    let {
        baseMessage: t,
        channel: n,
        referencedMessage: d,
        compact: _ = !1
    } = e, A = d.state === s.a.LOADED ? d.message : void 0, E = r.useMemo(() => A?.content != null && "" !== A.content ? (0, o.Ay)(A, {
        formatInline: !0
    }).content : null, [A]), {
        isReplyAuthorBlocked: m,
        isReplyAuthorIgnored: I
    } = (0, l.cf)([a.A], () => ({
        isReplyAuthorBlocked: null != A && a.A.isBlockedForMessage(A),
        isReplyAuthorIgnored: null != A && a.A.isIgnoredForMessage(A)
    }), [A]), T = (0, c.X4)(A), g = (0, c.X4)(t);
    return (0, i.jsx)(u.A, {
        repliedAuthor: T,
        baseAuthor: g,
        baseMessage: t,
        channel: n,
        referencedMessage: d,
        content: E,
        compact: _,
        isReplyAuthorBlocked: m,
        isReplyAuthorIgnored: I,
        isReplySpineClickable: !1,
        showReplySpine: !0
    })
});

function A(e, t, n, r, l) {
    return e.type !== d.lAJ.REPLY || null == n ? null : (0, i.jsx)(_, {
        baseMessage: e,
        channel: t,
        referencedMessage: r,
        compact: l
    })
}