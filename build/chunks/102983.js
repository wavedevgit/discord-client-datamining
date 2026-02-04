/** chunk id: 102983, original params: e,t,n (module,exports,require) **/
n.d(t, {
    h: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(571694),
    a = n(954376),
    o = n(576692),
    u = n(652215),
    c = n(75379);
let d = r.memo(function(e) {
    let {
        channel: t,
        user: n,
        mentionCount: d = 0,
        isMentionLowImportance: h,
        size: g = i._3J.SIZE_32,
        status: f,
        isMobile: p,
        isTyping: I = !1,
        "aria-hidden": m = !1
    } = e, E = (0, i.FT9)(g), A = r.useMemo(() => {
        if ((null == t ? void 0 : t.isDM()) && null != n) return (0, l.jsx)(i.euF, {
            src: n.getAvatarURL(null == t ? void 0 : t.getGuildId(), (0, i.FT9)(g), !1),
            size: g,
            "aria-hidden": m,
            "aria-label": m ? void 0 : n.username,
            status: f,
            isMobile: !(d > 0) && p,
            isTyping: I
        });
        if (null == t ? void 0 : t.isMultiUserDM()) {
            var e;
            return (null == t ? void 0 : t.recipients.length) >= 2 && null == t.icon ? (0, l.jsx)(a.A, {
                "aria-hidden": m,
                recipients: t.recipients,
                size: function(e) {
                    switch (e) {
                        case i._3J.SIZE_16:
                        case i._3J.SIZE_20:
                        case i._3J.SIZE_24:
                        case i._3J.SIZE_32:
                            return e;
                        case i._3J.SIZE_40:
                        case i._3J.SIZE_48:
                            return i._3J.SIZE_40;
                        case i._3J.SIZE_56:
                        case i._3J.SIZE_80:
                        case i._3J.SIZE_96:
                        case i._3J.SIZE_120:
                            return e;
                        default:
                            return i._3J.SIZE_32
                    }
                }(g),
                isTyping: I,
                status: I ? u.clD.ONLINE : null
            }) : (0, l.jsx)(i.euF, {
                src: null != (e = (0, s.Y)(t)) ? e : void 0,
                "aria-hidden": m,
                size: g,
                status: I ? u.clD.ONLINE : null,
                isTyping: I
            })
        }
        return (0, l.jsx)(i.euF, {
            src: void 0,
            "aria-hidden": m,
            size: g
        })
    }, [m, t, p, I, d, g, f, n]);
    return d <= 0 ? A : (0, l.jsx)(o.i, {
        size: E,
        rounded: null == t || !t.isMultiUserDM(),
        lowerBadge: (0, l.jsx)(i.hVq, {
            count: d,
            color: h ? i.LU0.colors.BACKGROUND_ACCENT.css : i.LU0.colors.STATUS_DANGER.css,
            "aria-hidden": !0
        }),
        lowerBadgeSize: {
            width: (0, i.o6S)(d)
        },
        children: (0, l.jsx)("div", {
            className: c.R,
            children: A
        })
    })
})