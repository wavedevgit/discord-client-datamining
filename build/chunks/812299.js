/** chunk id: 812299 params = (module,exports,require) **/
a.d(t, {
    k: () => c,
    y: () => o
});
var n = a(627968);
a(64700);
var r = a(709066),
    l = a(455207),
    i = a(943667),
    s = a(222590);

function c(e) {
    let t, {
        message: a,
        channel: n,
        user: s,
        isRepliedMessage: c
    } = e;
    return a?.isSystemDM() ? t = r.A.Types.SYSTEM_DM : null != a && (0, i.A)(a) ? t = (0, l.MZ)(a) ? r.A.Types.OFFICIAL : r.A.Types.SERVER : s?.bot ? t = r.A.Types.BOT : null != n && n.isForumPost() && n.ownerId === s?.id && !c && (t = r.A.Types.ORIGINAL_POSTER), t
}

function o(e) {
    let {
        message: t,
        channel: a,
        user: l,
        compact: i,
        isRepliedMessage: o,
        hideIcon: u = !1,
        children: _
    } = e, d = c({
        message: t,
        channel: a,
        user: l,
        compact: i,
        isRepliedMessage: o,
        hideIcon: u,
        children: _
    });
    return null == d ? null : (0, n.jsx)(r.A, {
        className: i ? s.jW : s.RQ,
        type: d,
        verified: l?.isVerifiedBot(),
        hideIcon: u,
        useRemSizes: !0,
        children: _
    })
}