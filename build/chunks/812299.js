/** chunk id: 812299 params = (module,exports,require) **/
"use strict";
a.d(t, {
    k: () => c,
    y: () => l
});
var n = a(627968);
a(64700);
var i = a(709066),
    r = a(455207),
    s = a(943667),
    o = a(767283);

function c(e) {
    let t, {
        message: a,
        channel: n,
        user: o,
        isRepliedMessage: c
    } = e;
    return a?.isSystemDM() ? t = i.A.Types.SYSTEM_DM : null != a && (0, s.A)(a) ? t = (0, r.MZ)(a) ? i.A.Types.OFFICIAL : i.A.Types.SERVER : o?.bot ? t = i.A.Types.BOT : null != n && n.isForumPost() && n.ownerId === o?.id && !c && (t = i.A.Types.ORIGINAL_POSTER), t
}

function l(e) {
    let {
        message: t,
        channel: a,
        user: r,
        compact: s,
        isRepliedMessage: l,
        hideIcon: _ = !1,
        children: u
    } = e, d = c({
        message: t,
        channel: a,
        user: r,
        compact: s,
        isRepliedMessage: l,
        hideIcon: _,
        children: u
    });
    return null == d ? null : (0, n.jsx)(i.A, {
        className: s ? o.jW : o.RQ,
        type: d,
        verified: r?.isVerifiedBot(),
        hideIcon: _,
        useRemSizes: !0,
        children: u
    })
}