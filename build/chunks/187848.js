/** chunk id: 187848 params = (module,exports,require) **/
n.d(e, {
    d: () => u
});
var i = n(627968),
    l = n(877624),
    r = n(311907),
    s = n(554146),
    a = n(412260),
    o = n(932001),
    c = n(46282),
    d = n(49999);
let u = t => {
    let e, n, {
            dismissibleContent: u
        } = t,
        {
            snowflakeId: E,
            couldShow: _
        } = (e = (0, r.bG)([a.A], () => a.A.getGiftPromotion()?.id), n = (0, r.bG)([a.A], () => null != a.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR)), u === s.M.GIFTING_PROMOTION_REMINDER ? {
            snowflakeId: e,
            couldShow: n && null != e
        } : {
            snowflakeId: void 0,
            couldShow: !1
        }),
        [T, A] = (0, o.Cc)(_ ? u : null, E ?? "", d.m.NOTICE_BAR, !0);
    return null == T ? null : T === s.M.GIFTING_PROMOTION_REMINDER ? (0, i.jsx)(c.y, {
        markAsDismissed: t => A(t)
    }) : void 0
}