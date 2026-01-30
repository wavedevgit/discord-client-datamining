/** chunk id: 234957, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(352505),
    s = n(9842),
    o = n(994500),
    c = n(465364),
    u = n(763754),
    d = n(448368),
    p = n(652215);
let m = i.memo(function(e) {
    let {
        baseMessage: t,
        channel: n,
        referencedMessage: p,
        compact: m = !1
    } = e, f = p.state === s.a.LOADED ? p.message : void 0, g = a.m.useExperiment({
        location: "repliedMessage"
    }).enabled, _ = i.useMemo(() => (null == f ? void 0 : f.content) != null && "" !== f.content ? (0, c.Ay)(f, {
        formatInline: !0,
        allowGameMentions: g
    }).content : null, [f, g]), {
        isReplyAuthorBlocked: h,
        isReplyAuthorIgnored: b
    } = (0, l.cf)([o.A], () => ({
        isReplyAuthorBlocked: null != f && o.A.isBlockedForMessage(f),
        isReplyAuthorIgnored: null != f && o.A.isIgnoredForMessage(f)
    }), [f]), A = (0, u.X4)(f), y = (0, u.X4)(t);
    return (0, r.jsx)(d.A, {
        repliedAuthor: A,
        baseAuthor: y,
        baseMessage: t,
        channel: n,
        referencedMessage: p,
        content: _,
        compact: m,
        isReplyAuthorBlocked: h,
        isReplyAuthorIgnored: b,
        isReplySpineClickable: !1,
        showReplySpine: !0
    })
});

function f(e, t, n, i, l) {
    return e.type !== p.lAJ.REPLY || null == n ? null : (0, r.jsx)(m, {
        baseMessage: e,
        channel: t,
        referencedMessage: i,
        compact: l
    })
}