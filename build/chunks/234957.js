/** chunk id: 234957 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(9842),
    s = n(994500),
    o = n(465364),
    c = n(763754),
    u = n(448368),
    d = n(652215);
let _ = l.memo(function(e) {
    let {
        baseMessage: t,
        channel: n,
        referencedMessage: d,
        compact: _ = !1
    } = e, A = d.state === r.a.LOADED ? d.message : void 0, m = l.useMemo(() => A?.content != null && "" !== A.content ? (0, o.Ay)(A, {
        formatInline: !0
    }).content : null, [A]), {
        isReplyAuthorBlocked: E,
        isReplyAuthorIgnored: T
    } = (0, a.cf)([s.A], () => ({
        isReplyAuthorBlocked: null != A && s.A.isBlockedForMessage(A),
        isReplyAuthorIgnored: null != A && s.A.isIgnoredForMessage(A)
    }), [A]), I = (0, c.X4)(A), N = (0, c.X4)(t);
    return (0, i.jsx)(u.A, {
        repliedAuthor: I,
        baseAuthor: N,
        baseMessage: t,
        channel: n,
        referencedMessage: d,
        content: m,
        compact: _,
        isReplyAuthorBlocked: E,
        isReplyAuthorIgnored: T,
        isReplySpineClickable: !1,
        showReplySpine: !0
    })
});

function A(e, t, n, l, a) {
    return e.type !== d.lAJ.REPLY || null == n ? null : (0, i.jsx)(_, {
        baseMessage: e,
        channel: t,
        referencedMessage: l,
        compact: a
    })
}