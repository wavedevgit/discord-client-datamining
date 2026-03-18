/** chunk id: 234957 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(9842),
    s = n(994500),
    o = n(465364),
    c = n(763754),
    d = n(448368),
    u = n(652215);
let _ = l.memo(function(e) {
    let {
        baseMessage: t,
        channel: n,
        referencedMessage: u,
        compact: _ = !1
    } = e, m = u.state === r.a.LOADED ? u.message : void 0, A = l.useMemo(() => m?.content != null && "" !== m.content ? (0, o.Ay)(m, {
        formatInline: !0
    }).content : null, [m]), {
        isReplyAuthorBlocked: E,
        isReplyAuthorIgnored: I
    } = (0, a.cf)([s.A], () => ({
        isReplyAuthorBlocked: null != m && s.A.isBlockedForMessage(m),
        isReplyAuthorIgnored: null != m && s.A.isIgnoredForMessage(m)
    }), [m]), T = (0, c.X4)(m), N = (0, c.X4)(t);
    return (0, i.jsx)(d.A, {
        repliedAuthor: T,
        baseAuthor: N,
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

function m(e, t, n, l, a) {
    return e.type !== u.lAJ.REPLY || null == n ? null : (0, i.jsx)(_, {
        baseMessage: e,
        channel: t,
        referencedMessage: l,
        compact: a
    })
}