/** chunk id: 576701, original params: n,t,l (module,exports,require) **/
l.d(t, {
    default: () => v
});
var e = l(627968);
l(64700);
var i = l(311907),
    r = l(397927),
    o = l(442433),
    a = l(886393),
    c = l(475777),
    u = l(87001),
    d = l(574172),
    s = l(253932),
    p = l(235661),
    E = l(71393),
    A = l(652215),
    D = l(985018);

function v(n) {
    var t;
    let l, v, g, b, {
            channel: h,
            onSelect: _,
            onInteraction: L
        } = n,
        G = (0, p.A)(),
        I = s.vL.useSetting(),
        P = (t = h ?? void 0, l = (0, i.bG)([u.A], () => u.A.getWindow(A.MLl.CHANNEL_CALL_POPOUT)), null == t || null != l ? null : (0, e.jsx)(r.Drp, {
            id: "popout-call",
            label: D.intl.string(D.t.JzWezz),
            icon: r.tfB,
            trailingIndicator: {
                type: "icon",
                icon: r.tfB
            },
            action: () => d.openChannelCallPopout(t)
        })),
        x = (v = (0, i.bG)([E.A], () => E.A.getGuild(h?.guild_id)), g = (0, c.A)(h ?? null, v ?? null), b = (0, a.A)(h ?? null), null != h && h.isGuildVocal() ? (0, e.jsxs)(r.rXV, {
            children: [g, b]
        }) : null);
    return (0, e.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "rtc-channel",
        "aria-label": D.intl.string(D.t.ogxXGq),
        onClose: o.Z_,
        onSelect: _,
        onInteraction: L,
        children: [G, x, (0, e.jsxs)(r.rXV, {
            children: [P, (0, e.jsx)(r.sLh, {
                id: "show-voice-states",
                checked: I,
                action: () => s.vL.updateSetting(!I),
                label: D.intl.string(D.t.vkbSB0)
            })]
        })]
    })
}