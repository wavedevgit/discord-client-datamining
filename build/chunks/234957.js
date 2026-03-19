/** chunk id: 234957 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(9842),
    s = n(994500),
    o = n(465364),
    c = n(763754),
    d = n(448368),
    u = n(652215);
let _ = a.memo(function(e) {
    let {
        baseMessage: t,
        channel: n,
        referencedMessage: u,
        compact: _ = !1
    } = e, m = u.state === r.a.LOADED ? u.message : void 0, A = a.useMemo(() => m?.content != null && "" !== m.content ? (0, o.Ay)(m, {
        formatInline: !0
    }).content : null, [m]), {
        isReplyAuthorBlocked: E,
        isReplyAuthorIgnored: I
    } = (0, l.cf)([s.A], () => ({
        isReplyAuthorBlocked: null != m && s.A.isBlockedForMessage(m),
        isReplyAuthorIgnored: null != m && s.A.isIgnoredForMessage(m)
    }), [m]), T = (0, c.X4)(m), f = (0, c.X4)(t);
    return (0, i.jsx)(d.A, {
        repliedAuthor: T,
        baseAuthor: f,
        baseMessage: t,
        channel: n,
        referencedMessage: u,
        content: A,
        compact: _,
        isReplyAuthorBlocked: E,
        isReplyAuthorIgnored: I,
        isReplySpineClickable: !1,
        showReplySpine: !0
    })
});

function m(e, t, n, a, l) {
    return e.type !== u.lAJ.REPLY || null == n ? null : (0, i.jsx)(_, {
        baseMessage: e,
        channel: t,
        referencedMessage: a,
        compact: l
    })
}