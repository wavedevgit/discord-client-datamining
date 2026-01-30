/** chunk id: 212614, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(732955),
    l = n(79545),
    a = n(884392),
    s = n(985018);

function o(e) {
    let {
        taskType: t
    } = e;
    return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD)
    })
}

function c(e) {
    let {
        taskType: t
    } = e;
    return (0, r.jsx)(o, {
        taskType: t
    })
}

function u(e) {
    let {
        taskType: t
    } = e;
    return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD)
    })
}

function d(e) {
    let {
        taskType: t
    } = e;
    return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD)
    })
}
let p = function(e) {
    let {
        quest: t,
        preClickCallback: n,
        analyticsCtxQuestContent: p,
        analyticsCtxSourceQuestContent: m,
        analyticsCtxQuestContentPosition: f,
        size: g = "md"
    } = e, _ = (0, l.P)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length) return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD)
    });
    let h = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (_) {
        case l.U.UNENROLLED:
            return (0, r.jsx)(a.A, {
                quest: t,
                taskType: h.type,
                size: g,
                preClickCallback: n,
                analyticsCtxQuestContent: p,
                analyticsCtxSourceQuestContent: m,
                analyticsCtxQuestContentPosition: f
            });
        case l.U.ENROLLED:
            return (0, r.jsx)(o, {
                taskType: h.type
            });
        case l.U.INCOMPLETE:
            return (0, r.jsx)(c, {
                taskType: h.type
            });
        case l.U.COMPLETED:
            return (0, r.jsx)(u, {
                taskType: h.type
            });
        case l.U.CLAIMED:
            return (0, r.jsx)(d, {
                taskType: h.type
            });
        default:
            return (0, r.jsx)(i.$nd, {
                variant: "primary",
                fullWidth: !0,
                size: g,
                text: s.intl.string(s.t.P84bAD)
            })
    }
}