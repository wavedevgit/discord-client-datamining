/** chunk id: 812299 params = (module,exports,require) **/
n.d(t, {
    k: () => o,
    y: () => c
});
var i = n(627968);
n(64700);
var l = n(709066),
    r = n(455207),
    s = n(943667),
    a = n(679740);

function o(e) {
    let t, {
        message: n,
        channel: i,
        user: a,
        isRepliedMessage: o
    } = e;
    return n?.isSystemDM() ? t = l.A.Types.SYSTEM_DM : null != n && (0, s.A)(n) ? t = (0, r.MZ)(n) ? l.A.Types.OFFICIAL : l.A.Types.SERVER : a?.bot ? t = l.A.Types.BOT : null != i && i.isForumPost() && i.ownerId === a?.id && !o && (t = l.A.Types.ORIGINAL_POSTER), t
}

function c(e) {
    let {
        message: t,
        channel: n,
        user: r,
        compact: s,
        isRepliedMessage: c,
        hideIcon: d = !1,
        children: u
    } = e, _ = o({
        message: t,
        channel: n,
        user: r,
        compact: s,
        isRepliedMessage: c,
        hideIcon: d,
        children: u
    });
    return null == _ ? null : (0, i.jsx)(l.A, {
        className: s ? a.jW : a.RQ,
        type: _,
        verified: r?.isVerifiedBot(),
        hideIcon: d,
        useRemSizes: !0,
        children: u
    })
}