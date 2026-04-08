/** chunk id: 212614 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(732955),
    s = n(424151),
    r = n(79545),
    a = n(941775),
    o = n(561393),
    d = n(220514),
    c = n(884392),
    u = n(985018);
let m = function(e) {
    let {
        quest: t,
        surface: n,
        preClickCallback: m,
        analyticsCtxQuestContent: _,
        analyticsCtxSourceQuestContent: h,
        analyticsCtxQuestContentPosition: p,
        analyticsCtxQuestContentRowIndex: g,
        size: A = "md"
    } = e, x = (0, r.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length) return (0, i.jsx)(l.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: u.intl.string(u.t.P84bAD)
    });
    let f = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (x) {
        case r.UA.UNENROLLED:
            return (0, i.jsx)(c.A, {
                quest: t,
                taskType: f.type,
                size: A,
                preClickCallback: m,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g
            });
        case r.UA.ENROLLED:
            return (0, i.jsx)(o.A, {
                quest: t,
                taskType: f.type,
                size: A,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n
            });
        case r.UA.INCOMPLETE:
            return (0, i.jsx)(d.A, {
                quest: t,
                taskType: f.type,
                size: A,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n
            });
        case r.UA.COMPLETED:
            return (0, i.jsx)(a.A, {
                quest: t,
                size: A,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g
            });
        case r.UA.CLAIMED:
            return (0, i.jsx)(s.A, {
                quest: t,
                size: A,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g
            });
        default:
            return (0, i.jsx)(l.$nd, {
                variant: "primary",
                fullWidth: !0,
                size: A,
                text: u.intl.string(u.t.P84bAD)
            })
    }
}