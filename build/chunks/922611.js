/** chunk id: 922611 params = (module,exports,require) **/
n.d(t, {
    c: () => _,
    g: () => m
});
var i, a = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(397927),
    o = n(263063),
    d = n(290863),
    c = n(102983),
    u = n(912156),
    _ = ((i = {})[i.SIZE_24 = 24] = "SIZE_24", i[i.SIZE_40 = 40] = "SIZE_40", i);

function h(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? s._3J.SIZE_24 : s._3J.SIZE_40;
        case "guild":
            return 24 === e ? o.Ay.Sizes.SMALLER : o.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`)
    }
}
let m = r.memo(function(e) {
    let {
        channel: t,
        user: n,
        guild: i,
        isSelected: r = !1,
        size: _ = 24,
        isTyping: m = !1,
        mentionCount: p = 0,
        isMentionLowImportance: g = !1
    } = e, f = t?.isPrivate() ?? !1, A = t?.isMultiUserDM() ?? !1, x = n?.id, I = (0, l.bG)([d.A], () => null != x ? d.A.getStatus(x) : null, [x]), E = (0, l.bG)([d.A], () => null != x && d.A.isMobileOnline(x), [x]);
    if (f || A) return (0, a.jsx)(c.h, {
        channel: t ?? null,
        user: n,
        "aria-hidden": !0,
        size: h(_, "user"),
        status: I,
        isMobile: E,
        isTyping: m,
        mentionCount: p,
        isMentionLowImportance: g
    });
    if (null == i) return (0, a.jsx)(s.oyn, {
        size: h(_, "default"),
        color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT
    });
    {
        if (null == t) return (0, a.jsx)(o.Ay, {
            guild: i,
            size: h(_, "guild"),
            active: !0,
            showTooltip: !1
        });
        let e = 40 === _ ? u.Q.MEDIUM_40 : u.Q.TINY_24;
        return (0, a.jsx)(u.A, {
            channel: t,
            guild: i,
            size: e,
            isTyping: m
        })
    }
})