/** chunk id: 812299 params = (module,exports,require) **/
t.d(a, {
    k: () => s,
    y: () => o
});
var n = t(627968);
t(64700);
var c = t(709066),
    l = t(455207),
    r = t(943667),
    i = t(812782);

function s(e) {
    let a, {
        message: t,
        channel: n,
        user: i,
        isRepliedMessage: s
    } = e;
    return t?.isSystemDM() ? a = c.A.Types.SYSTEM_DM : null != t && (0, r.A)(t) ? a = (0, l.MZ)(t) ? c.A.Types.OFFICIAL : c.A.Types.SERVER : i?.bot ? a = c.A.Types.BOT : null != n && n.isForumPost() && n.ownerId === i?.id && !s && (a = c.A.Types.ORIGINAL_POSTER), a
}

function o(e) {
    let {
        message: a,
        channel: t,
        user: l,
        compact: r,
        isRepliedMessage: o,
        hideIcon: u = !1,
        children: d
    } = e, _ = s({
        message: a,
        channel: t,
        user: l,
        compact: r,
        isRepliedMessage: o,
        hideIcon: u,
        children: d
    });
    return null == _ ? null : (0, n.jsx)(c.A, {
        className: r ? i.jW : i.RQ,
        type: _,
        verified: l?.isVerifiedBot(),
        hideIcon: u,
        useRemSizes: !0,
        children: d
    })
}