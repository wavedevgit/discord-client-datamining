/** chunk id: 812299 params = (module,exports,require) **/
t.d(a, {
    k: () => l,
    y: () => s
});
var n = t(627968);
t(64700);
var i = t(709066),
    o = t(455207),
    r = t(943667),
    c = t(767283);

function l(e) {
    let a, {
        message: t,
        channel: n,
        user: c,
        isRepliedMessage: l
    } = e;
    return t?.isSystemDM() ? a = i.A.Types.SYSTEM_DM : null != t && (0, r.A)(t) ? a = (0, o.MZ)(t) ? i.A.Types.OFFICIAL : i.A.Types.SERVER : c?.bot ? a = i.A.Types.BOT : null != n && n.isForumPost() && n.ownerId === c?.id && !l && (a = i.A.Types.ORIGINAL_POSTER), a
}

function s(e) {
    let {
        message: a,
        channel: t,
        user: o,
        compact: r,
        isRepliedMessage: s,
        hideIcon: _ = !1,
        children: d
    } = e, u = l({
        message: a,
        channel: t,
        user: o,
        compact: r,
        isRepliedMessage: s,
        hideIcon: _,
        children: d
    });
    return null == u ? null : (0, n.jsx)(i.A, {
        className: r ? c.jW : c.RQ,
        type: u,
        verified: o?.isVerifiedBot(),
        hideIcon: _,
        useRemSizes: !0,
        children: d
    })
}