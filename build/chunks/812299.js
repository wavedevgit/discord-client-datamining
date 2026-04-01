/** chunk id: 812299 params = (module,exports,require) **/
n.d(t, {
    k: () => o,
    y: () => d
});
var i = n(627968);
n(64700);
var l = n(709066),
    s = n(455207),
    a = n(943667),
    r = n(767283);

function o(e) {
    let t, {
        message: n,
        channel: i,
        user: r,
        isRepliedMessage: o
    } = e;
    return n?.isSystemDM() ? t = l.A.Types.SYSTEM_DM : null != n && (0, a.A)(n) ? t = (0, s.MZ)(n) ? l.A.Types.OFFICIAL : l.A.Types.SERVER : r?.bot ? t = l.A.Types.BOT : null != i && i.isForumPost() && i.ownerId === r?.id && !o && (t = l.A.Types.ORIGINAL_POSTER), t
}

function d(e) {
    let {
        message: t,
        channel: n,
        user: s,
        compact: a,
        isRepliedMessage: d,
        hideIcon: c = !1,
        children: u
    } = e, h = o({
        message: t,
        channel: n,
        user: s,
        compact: a,
        isRepliedMessage: d,
        hideIcon: c,
        children: u
    });
    return null == h ? null : (0, i.jsx)(l.A, {
        className: a ? r.jW : r.RQ,
        type: h,
        verified: s?.isVerifiedBot(),
        hideIcon: c,
        useRemSizes: !0,
        children: u
    })
}