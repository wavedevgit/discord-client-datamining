/** chunk id: 212614 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(732955),
    s = n(79545),
    r = n(561393),
    a = n(220514),
    o = n(884392),
    d = n(985018);

function c(e) {
    let {
        taskType: t
    } = e;
    return (0, i.jsx)(l.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: d.intl.string(d.t.P84bAD)
    })
}

function u(e) {
    let {
        taskType: t
    } = e;
    return (0, i.jsx)(l.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: d.intl.string(d.t.P84bAD)
    })
}
let m = function(e) {
    let {
        quest: t,
        surface: n,
        preClickCallback: m,
        analyticsCtxQuestContent: _,
        analyticsCtxSourceQuestContent: h,
        analyticsCtxQuestContentPosition: p,
        analyticsCtxQuestContentRowIndex: g,
        size: A = "md",
        variant: x = "primary"
    } = e, f = (0, s.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length) return (0, i.jsx)(l.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: d.intl.string(d.t.P84bAD)
    });
    let C = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (f) {
        case s.UA.UNENROLLED:
            return (0, i.jsx)(o.A, {
                variant: x,
                quest: t,
                taskType: C.type,
                size: A,
                preClickCallback: m,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g
            });
        case s.UA.ENROLLED:
            return (0, i.jsx)(r.A, {
                quest: t,
                taskType: C.type,
                size: A,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n
            });
        case s.UA.INCOMPLETE:
            return (0, i.jsx)(a.A, {
                quest: t,
                taskType: C.type,
                size: A,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n
            });
        case s.UA.COMPLETED:
            return (0, i.jsx)(c, {
                taskType: C.type
            });
        case s.UA.CLAIMED:
            return (0, i.jsx)(u, {
                taskType: C.type
            });
        default:
            return (0, i.jsx)(l.$nd, {
                variant: "primary",
                fullWidth: !0,
                size: A,
                text: d.intl.string(d.t.P84bAD)
            })
    }
}