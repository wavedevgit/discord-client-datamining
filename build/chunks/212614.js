/** chunk id: 212614 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(732955),
    l = n(424151),
    s = n(79545),
    r = n(941775),
    o = n(561393),
    d = n(593587),
    c = n(220514),
    u = n(884392),
    _ = n(985018);
let m = function(e) {
    let {
        quest: t,
        surface: n,
        preClickCallback: m,
        analyticsCtxQuestContent: h,
        analyticsCtxSourceQuestContent: p,
        analyticsCtxQuestContentPosition: g,
        analyticsCtxQuestContentRowIndex: A,
        size: x = "md"
    } = e, f = (0, s.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length) return (0, i.jsx)(a.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: _.intl.string(_.t.P84bAD)
    });
    let C = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (f) {
        case s.UA.UNENROLLED:
            return (0, i.jsx)(u.A, {
                quest: t,
                taskType: C.type,
                size: x,
                preClickCallback: m,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A
            });
        case s.UA.ENROLLED:
            return (0, i.jsx)(o.A, {
                quest: t,
                taskType: C.type,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
                surface: n
            });
        case s.UA.INCOMPLETE:
            return (0, i.jsx)(c.A, {
                quest: t,
                taskType: C.type,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
                surface: n
            });
        case s.UA.EXPIRED_CLAIMABLE:
        case s.UA.COMPLETED:
            return (0, i.jsx)(r.A, {
                quest: t,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A
            });
        case s.UA.CLAIMED:
            return (0, i.jsx)(l.A, {
                quest: t,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A
            });
        case s.UA.EXPIRED:
            return (0, i.jsx)(d.A, {
                quest: t,
                size: x
            });
        default:
            return (0, i.jsx)(a.$nd, {
                variant: "primary",
                fullWidth: !0,
                size: x,
                text: _.intl.string(_.t.P84bAD)
            })
    }
}