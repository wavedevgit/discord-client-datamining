/** chunk id: 922611, original params: e,t,n (module,exports,require) **/
n.d(t, {
    c: () => h,
    g: () => g
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

function m(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? a._3J.SIZE_24 : a._3J.SIZE_40;
        case "guild":
            return 24 === e ? o.A.Sizes.SMALLER : o.A.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`)
    }
}
let g = r.memo(function(e) {
    let {
        channel: t,
        user: n,
        guild: i,
        isSelected: r = !1,
        size: h = 24,
        isTyping: g = !1,
        mentionCount: p = 0,
        isMentionLowImportance: A = !1
    } = e, f = t?.isPrivate() ?? !1, x = t?.isMultiUserDM() ?? !1, E = n?.id, S = (0, s.bG)([u.A], () => null != E ? u.A.getStatus(E) : null, [E]), v = (0, s.bG)([u.A], () => null != E && u.A.isMobileOnline(E), [E]);
    if (f || x) return (0, l.jsx)(d.h, {
        channel: t ?? null,
        user: n,
        "aria-hidden": !0,
        size: m(h, "user"),
        status: S,
        isMobile: v,
        isTyping: g,
        mentionCount: p,
        isMentionLowImportance: A
    });
    if (null == i) return (0, l.jsx)(a.oyn, {
        size: m(h, "default"),
        color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT
    });
    {
        if (null == t) return (0, l.jsx)(o.A, {
            guild: i,
            size: m(h, "guild"),
            active: !0,
            showTooltip: !1
        });
        let e = 40 === h ? c.Q.MEDIUM_40 : c.Q.TINY_24;
        return (0, l.jsx)(c.A, {
            channel: t,
            guild: i,
            size: e,
            isTyping: g
        })
    }
})