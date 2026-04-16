/** chunk id: 812299 params = (module,exports,require) **/
a.d(t, {
    k: () => l,
    y: () => s
});
var n = a(627968);
a(64700);
var o = a(709066),
    i = a(455207),
    r = a(943667),
    c = a(334211);

function l(e) {
    let t, {
        message: a,
        channel: n,
        user: c,
        isRepliedMessage: l
    } = e;
    return a?.isSystemDM() ? t = o.A.Types.SYSTEM_DM : null != a && (0, r.A)(a) ? t = (0, i.MZ)(a) ? o.A.Types.OFFICIAL : o.A.Types.SERVER : c?.bot ? t = o.A.Types.BOT : null != n && n.isForumPost() && n.ownerId === c?.id && !l && (t = o.A.Types.ORIGINAL_POSTER), t
}

function s(e) {
    let {
        message: t,
        channel: a,
        user: i,
        compact: r,
        isRepliedMessage: s,
        hideIcon: _ = !1,
        children: d
    } = e, u = l({
        message: t,
        channel: a,
        user: i,
        compact: r,
        isRepliedMessage: s,
        hideIcon: _,
        children: d
    });
    return null == u ? null : (0, n.jsx)(o.A, {
        className: r ? c.jW : c.RQ,
        type: u,
        verified: i?.isVerifiedBot(),
        hideIcon: _,
        useRemSizes: !0,
        children: d
    })
}