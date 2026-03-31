/** chunk id: 812299 params = (module,exports,require) **/
n.d(t, {
    k: () => l,
    y: () => c
});
var a = n(627968);
n(64700);
var i = n(709066),
    r = n(455207),
    s = n(943667),
    o = n(812782);

function l(e) {
    let t, {
        message: n,
        channel: a,
        user: o,
        isRepliedMessage: l
    } = e;
    return n?.isSystemDM() ? t = i.A.Types.SYSTEM_DM : null != n && (0, s.A)(n) ? t = (0, r.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER : o?.bot ? t = i.A.Types.BOT : null != a && a.isForumPost() && a.ownerId === o?.id && !l && (t = i.A.Types.ORIGINAL_POSTER), t
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
    } = e, _ = l({
        message: t,
        channel: n,
        user: r,
        compact: s,
        isRepliedMessage: c,
        hideIcon: d,
        children: u
    });
    return null == _ ? null : (0, a.jsx)(i.A, {
        className: s ? o.jW : o.RQ,
        type: _,
        verified: r?.isVerifiedBot(),
        hideIcon: d,
        useRemSizes: !0,
        children: u
    })
}