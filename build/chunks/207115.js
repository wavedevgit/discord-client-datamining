/** chunk id: 207115 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(157559),
    o = n(969632),
    d = n(649963),
    c = n(815807),
    u = n(406704),
    g = n(576705),
    A = n(486020),
    p = n(690521),
    m = n(652215),
    f = n(985018);

function y(e, t) {
    let {
        reducedMotion: n
    } = l.useContext(r.CZY), A = (0, u.Id)(t), y = (0, a.bG)([g.A], () => g.A.can(m.xBc.MANAGE_MESSAGES, t) && A, [t, A]), E = e.reactions.reduce((e, t) => t.count_details?.vote != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji], []);
    return !y || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, o.Gh)(e) ? null : (0, i.jsx)(r.Drp, {
        id: "remove-emoji-reactions",
        label: f.intl.string(f.t["zx/e4P"]),
        leadingAccessory: {
            type: "icon",
            icon: r.FD6
        },
        color: "danger",
        children: E.map(l => (0, i.jsx)(r.Drp, {
            id: `remove-emoji-reactions-${l.name??l.id}`,
            label: (0, c.b3)(l),
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
                src: null == l.id ? p.Ay.getURL(l.name ?? "") : void 0,
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
        isFocused: a = !1
    } = e;
    return (0, i.jsx)("img", {
        className: l,
        src: null != t.id ? A.Ay.getEmojiURL({
            id: t.id,
            animated: t.animated && (!n || a),
            size: 18
        }) : p.Ay.getURL(t.name ?? ""),
        alt: ""
    })
}