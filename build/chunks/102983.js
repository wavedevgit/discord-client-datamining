/** chunk id: 102983 params = (module,exports,require) **/
n.d(t, {
    h: () => c
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    s = n(571694),
    a = n(954376),
    o = n(576692),
    u = n(652215),
    d = n(25792);
let c = r.memo(function(e) {
    let {
        channel: t,
        user: n,
        mentionCount: c = 0,
        isMentionLowImportance: h,
        size: g = l._3J.SIZE_32,
        status: m,
        isMobile: f,
        isTyping: A = !1,
        "aria-hidden": I = !1
    } = e, E = (0, l.FT9)(g), p = r.useMemo(() => t?.isDM() && null != n ? (0, i.jsx)(l.euF, {
        src: n.getAvatarURL(t?.getGuildId(), (0, l.FT9)(g), !1),
        size: g,
        "aria-hidden": I,
        "aria-label": I ? void 0 : n.username,
        status: m,
        isMobile: !(c > 0) && f,
        isTyping: A
    }) : t?.isMultiUserDM() ? t?.recipients.length >= 2 && null == t.icon ? (0, i.jsx)(a.A, {
        "aria-hidden": I,
        recipients: t.recipients,
        size: function(e) {
            switch (e) {
                case l._3J.SIZE_16:
                case l._3J.SIZE_20:
                case l._3J.SIZE_24:
                case l._3J.SIZE_32:
                    return e;
                case l._3J.SIZE_40:
                case l._3J.SIZE_48:
                    return l._3J.SIZE_40;
                case l._3J.SIZE_56:
                case l._3J.SIZE_80:
                case l._3J.SIZE_96:
                case l._3J.SIZE_120:
                    return e;
                default:
                    return l._3J.SIZE_32
            }
        }(g),
        isTyping: A,
        status: A ? u.clD.ONLINE : null
    }) : (0, i.jsx)(l.euF, {
        src: (0, s.Y)(t) ?? void 0,
        "aria-hidden": I,
        size: g,
        status: A ? u.clD.ONLINE : null,
        isTyping: A
    }) : (0, i.jsx)(l.euF, {
        src: void 0,
        "aria-hidden": I,
        size: g
    }), [I, t, f, A, c, g, m, n]);
    return c <= 0 ? p : (0, i.jsx)(o.i, {
        size: E,
        rounded: !t?.isMultiUserDM(),
        lowerBadge: (0, i.jsx)(l.hVq, {
            count: c,
            color: h ? l.LU0.colors.BACKGROUND_ACCENT.css : l.LU0.colors.STATUS_DANGER.css,
            "aria-hidden": !0
        }),
        lowerBadgeSize: {
            width: (0, l.o6S)(c)
        },
        children: (0, i.jsx)("div", {
            className: d.R,
            children: p
        })
    })
})