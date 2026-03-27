/** chunk id: 812299 params = (module,exports,require) **/
n.d(t, {
    k: () => o,
    y: () => c
});
var a = n(627968);
n(64700);
var i = n(709066),
    r = n(455207),
    s = n(943667),
    l = n(812782);

function o(e) {
    let t, {
        message: n,
        channel: a,
        user: l,
        isRepliedMessage: o
    } = e;
    return n?.isSystemDM() ? t = i.A.Types.SYSTEM_DM : null != n && (0, s.A)(n) ? t = (0, r.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER : l?.bot ? t = i.A.Types.BOT : null != a && a.isForumPost() && a.ownerId === l?.id && !o && (t = i.A.Types.ORIGINAL_POSTER), t
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
    return null == _ ? null : (0, a.jsx)(i.A, {
        className: s ? l.jW : l.RQ,
        type: _,
        verified: r?.isVerifiedBot(),
        hideIcon: d,
        useRemSizes: !0,
        children: u
    })
}