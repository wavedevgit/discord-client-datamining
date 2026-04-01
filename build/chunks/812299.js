/** chunk id: 812299 params = (module,exports,require) **/
n.d(t, {
    k: () => d,
    y: () => o
});
var l = n(627968);
n(64700);
var a = n(709066),
    i = n(455207),
    r = n(943667),
    s = n(767283);

function d(e) {
    let t, {
        message: n,
        channel: l,
        user: s,
        isRepliedMessage: d
    } = e;
    return n?.isSystemDM() ? t = a.A.Types.SYSTEM_DM : null != n && (0, r.A)(n) ? t = (0, i.MZ)(n) ? a.A.Types.OFFICIAL : a.A.Types.SERVER : s?.bot ? t = a.A.Types.BOT : null != l && l.isForumPost() && l.ownerId === s?.id && !d && (t = a.A.Types.ORIGINAL_POSTER), t
}

function o(e) {
    let {
        message: t,
        channel: n,
        user: i,
        compact: r,
        isRepliedMessage: o,
        hideIcon: c = !1,
        children: u
    } = e, _ = d({
        message: t,
        channel: n,
        user: i,
        compact: r,
        isRepliedMessage: o,
        hideIcon: c,
        children: u
    });
    return null == _ ? null : (0, l.jsx)(a.A, {
        className: r ? s.jW : s.RQ,
        type: _,
        verified: i?.isVerifiedBot(),
        hideIcon: c,
        useRemSizes: !0,
        children: u
    })
}