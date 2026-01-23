/** Chunk was on 8546 **/
/** chunk id: 299921, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => T
});
var s = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    c = n(397927),
    r = n(340833),
    o = n(913642),
    d = n(544231),
    u = n(349435),
    _ = n(665909),
    x = n(985018),
    m = n(82457),
    p = n(910200);

function g() {
    return (0, s.jsxs)("div", {
        className: l()(p.oR, m.oR),
        children: [(0, s.jsx)(c.lmn, {
            color: c.LU0.colors.TEXT_BRAND
        }), (0, s.jsx)(c.Text, {
            className: p.__invalid_content,
            color: "text-strong",
            variant: "text-md/normal",
            children: x.intl.string(x.t["gd/Yqs"])
        })]
    })
}

function T(t) {
    let {
        channelId: e,
        warningId: n,
        senderId: i,
        safetyWarning: p
    } = t, T = a.useMemo(() => (null == p ? void 0 : p.feedback_type) === u.fy.UPVOTE, [p]), h = a.useMemo(() => (null == p ? void 0 : p.feedback_type) === u.fy.DOWNVOTE, [p]), v = a.useCallback((t, a) => {
        (null == p ? void 0 : p.feedback_type) !== t && ((0, d.v2)(e, n, t), (0, c.showToast)((0, c.createToast)(x.intl.string(x.t["gd/Yqs"]), c.ToastType.CUSTOM, {
            component: (0, s.jsx)(g, {})
        })), (0, _._$)({
            channelId: e,
            warningId: n,
            senderId: i,
            warningType: null == p ? void 0 : p.type,
            cta: a
        }))
    }, [p, e, n, i]);
    return (0, s.jsxs)("div", {
        className: m.mp,
        children: [(0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: x.intl.string(x.t.L84yVm)
        }), (0, s.jsxs)("div", {
            className: m.NC,
            children: [(0, s.jsx)(c.DUT, {
                className: l()([m.eH, T ? m.QT : m.LM, {
                    [m.r9]: T
                }]),
                onClick: () => v(u.fy.UPVOTE, _.Wm.FEEDBACK_UPVOTE),
                "aria-label": x.intl.string(x.t["2GrOCN"]),
                children: (0, s.jsx)(o.A, {
                    className: m.__invalid_buttonIcon,
                    color: "interactive-text-default"
                })
            }), (0, s.jsx)(c.DUT, {
                className: l()([m.eH, h ? m.QT : m.LM, {
                    [m.r9]: h
                }]),
                onClick: () => v(u.fy.DOWNVOTE, _.Wm.FEEDBACK_DOWNVOTE),
                "aria-label": x.intl.string(x.t.COp9BO),
                children: (0, s.jsx)(r.A, {
                    className: m.__invalid_buttonIcon,
                    color: "interactive-text-default"
                })
            })]
        })]
    })
}