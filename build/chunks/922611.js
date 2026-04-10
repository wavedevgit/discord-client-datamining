/** chunk id: 922611 params = (module,exports,require) **/
n.d(t, {
    c: () => h,
    g: () => m
});
var i, l = n(627968),
    r = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(263063),
    u = n(290863),
    d = n(102983),
    c = n(912156),
    h = ((i = {})[i.SIZE_24 = 24] = "SIZE_24", i[i.SIZE_40 = 40] = "SIZE_40", i);

function g(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? a._3J.SIZE_24 : a._3J.SIZE_40;
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
        size: h = 24,
        isTyping: m = !1,
        mentionCount: f = 0,
        isMentionLowImportance: A = !1
    } = e, I = t?.isPrivate() ?? !1, E = t?.isMultiUserDM() ?? !1, p = n?.id, _ = (0, s.bG)([u.A], () => null != p ? u.A.getStatus(p) : null, [p]), S = (0, s.bG)([u.A], () => null != p && u.A.isMobileOnline(p), [p]);
    if (I || E) return (0, l.jsx)(d.h, {
        channel: t ?? null,
        user: n,
        "aria-hidden": !0,
        size: g(h, "user"),
        status: _,
        isMobile: S,
        isTyping: m,
        mentionCount: f,
        isMentionLowImportance: A
    });
    if (null == i) return (0, l.jsx)(a.oyn, {
        size: g(h, "default"),
        color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT
    });
    {
        if (null == t) return (0, l.jsx)(o.Ay, {
            guild: i,
            size: g(h, "guild"),
            active: !0,
            showTooltip: !1
        });
        let e = 40 === h ? c.Q.MEDIUM_40 : c.Q.TINY_24;
        return (0, l.jsx)(c.A, {
            channel: t,
            guild: i,
            size: e,
            isTyping: m
        })
    }
})