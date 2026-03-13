/** chunk id: 207115 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    s = n(157559),
    o = n(969632),
    d = n(649963),
    c = n(406704),
    u = n(576705),
    g = n(486020),
    A = n(690521),
    m = n(652215),
    f = n(985018);

function p(e, t) {
    let {
        reducedMotion: n
    } = l.useContext(a.CZY), g = (0, c.Id)(t), p = (0, r.bG)([u.A], () => u.A.can(m.xBc.MANAGE_MESSAGES, t) && g, [t, g]), y = e.reactions.reduce((e, t) => t.count_details?.vote != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji], []);
    return !p || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, o.Gh)(e) ? null : (0, i.jsx)(a.Drp, {
        id: "remove-emoji-reactions",
        label: f.intl.string(f.t["zx/e4P"]),
        leadingAccessory: {
            type: "icon",
            icon: a.FD6
        },
        color: "danger",
        children: y.map(l => (0, i.jsx)(a.Drp, {
            id: `remove-emoji-reactions-${l.name??l.id}`,
            label: null == l.id ? l.name : `:${l.name}:`,
            action: n => {
                n.shiftKey ? (0, d.Jf)(t.id, e.id, l) : s.A.show({
                    title: f.intl.string(f.t["73GqTz"]),
                    body: f.intl.string(f.t.dmy5bn),
                    confirmText: f.intl.string(f.t.p89ACt),
                    confirmVariant: "critical-primary",
                    cancelText: f.intl.string(f.t.gm1Vej),
                    onConfirm: () => {
                        (0, d.Jf)(t.id, e.id, l)
                    }
                })
            },
            leadingAccessory: {
                type: "emoji",
                emojiId: l.id,
                src: null == l.id ? A.Ay.getURL(l.name ?? "") : void 0,
                animated: l.animated
            },
            icon: e => (0, i.jsx)(h, {
                ...e,
                reducedMotionEnabled: n.enabled,
                emoji: l
            }),
            dontCloseOnActionIfHoldingShiftKey: !0
        }, l.name ?? l.id))
    })
}

function h(e) {
    let {
        emoji: t,
        reducedMotionEnabled: n,
        className: l = "",
        isFocused: r = !1
    } = e;
    return (0, i.jsx)("img", {
        className: l,
        src: null != t.id ? g.Ay.getEmojiURL({
            id: t.id,
            animated: t.animated && (!n || r),
            size: 18
        }) : A.Ay.getURL(t.name ?? ""),
        alt: ""
    })
}