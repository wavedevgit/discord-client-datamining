/** Chunk was on web.js **/
/** chunk id: 812299, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => l,
    y: () => c
});
var r = n(627968);
n(64700);
var i = n(709066),
    a = n(455207),
    o = n(943667),
    s = n(679740);

function l(e) {
    let t, {
        message: n,
        channel: r,
        user: s,
        isRepliedMessage: l
    } = e;
    return (null == n ? void 0 : n.isSystemDM()) ? t = i.A.Types.SYSTEM_DM : null != n && (0, o.A)(n) ? t = (0, a.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER : (null == s ? void 0 : s.bot) ? t = i.A.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == s ? void 0 : s.id) && !l && (t = i.A.Types.ORIGINAL_POSTER), t
}

function c(e) {
    let {
        message: t,
        channel: n,
        user: a,
        compact: o,
        isRepliedMessage: c,
        hideIcon: u = !1,
        children: d
    } = e, f = l({
        message: t,
        channel: n,
        user: a,
        compact: o,
        isRepliedMessage: c,
        hideIcon: u,
        children: d
    });
    return null == f ? null : (0, r.jsx)(i.A, {
        className: o ? s.jW : s.RQ,
        type: f,
        verified: null == a ? void 0 : a.isVerifiedBot(),
        hideIcon: u,
        useRemSizes: !0,
        children: d
    })
}