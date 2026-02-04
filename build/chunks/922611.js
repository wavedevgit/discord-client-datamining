/** chunk id: 922611, original params: e,t,n (module,exports,require) **/
n.d(t, {
    c: () => h,
    g: () => f
}), n(65821);
var i, r = n(627968),
    l = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(263063),
    u = n(290863),
    c = n(102983),
    d = n(912156),
    h = ((i = {})[i.SIZE_24 = 24] = "SIZE_24", i[i.SIZE_40 = 40] = "SIZE_40", i);

function p(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? o._3J.SIZE_24 : o._3J.SIZE_40;
        case "guild":
            return 24 === e ? s.A.Sizes.SMALLER : s.A.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error("Unhandled icon type: ".concat(String(t)))
    }
}
let f = l.memo(function(e) {
    var t, n;
    let {
        channel: i,
        user: l,
        guild: h,
        isSelected: f = !1,
        size: g = 24,
        isTyping: m = !1,
        mentionCount: A = 0,
        isMentionLowImportance: y = !1
    } = e, O = null != (t = null == i ? void 0 : i.isPrivate()) && t, v = null != (n = null == i ? void 0 : i.isMultiUserDM()) && n, b = null == l ? void 0 : l.id, E = (0, a.bG)([u.A], () => null != b ? u.A.getStatus(b) : null, [b]), _ = (0, a.bG)([u.A], () => null != b && u.A.isMobileOnline(b), [b]);
    if (O || v) return (0, r.jsx)(c.h, {
        channel: null != i ? i : null,
        user: l,
        "aria-hidden": !0,
        size: p(g, "user"),
        status: E,
        isMobile: _,
        isTyping: m,
        mentionCount: A,
        isMentionLowImportance: y
    });
    if (null == h) return (0, r.jsx)(o.oyn, {
        size: p(g, "default"),
        color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT
    });
    {
        if (null == i) return (0, r.jsx)(s.A, {
            guild: h,
            size: p(g, "guild"),
            active: !0,
            showTooltip: !1
        });
        let e = 40 === g ? d.Q.MEDIUM_40 : d.Q.TINY_24;
        return (0, r.jsx)(d.A, {
            channel: i,
            guild: h,
            size: e,
            isTyping: m
        })
    }
})