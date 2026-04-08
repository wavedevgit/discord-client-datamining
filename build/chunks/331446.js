/** chunk id: 331446 params = (module,exports,require) **/
a.d(t, {
    w: () => _
});
var n = a(627968),
    r = a(64700),
    o = a(939249),
    i = a(834730),
    l = a(397927),
    c = a(680901),
    s = a(720485);
let _ = e => {
    let {
        participants: t,
        maxVisibleParticipants: a,
        guildId: _
    } = e, d = r.useRef(null), u = (0, r.useCallback)(() => (0, n.jsx)(c.L, {
        users: t,
        guildId: _
    }), [t, _]);
    return (0, n.jsx)(l.YNO, {
        renderPopout: u,
        targetElementRef: d,
        position: "right",
        children: e => (0, n.jsx)(o.D, {
            ...e,
            innerRef: d,
            className: s.x,
            onClick: t => {
                t.stopPropagation(), e.onClick?.(t)
            },
            children: (0, n.jsxs)(i.E, {
                className: s.s,
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: ["+", t.length - a]
            })
        })
    })
}