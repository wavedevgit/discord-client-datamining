/** chunk id: 331446 params = (module,exports,require) **/
n.d(t, {
    w: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(939249),
    a = n(834730),
    s = n(397927),
    o = n(720485);
let d = l.lazy(() => n.e("46054").then(n.bind(n, 680901)).then(e => ({
        default: e.ClipParticipantsList
    }))),
    u = e => {
        let {
            participants: t,
            maxVisibleParticipants: n,
            guildId: u
        } = e, c = l.useRef(null), h = (0, l.useCallback)(() => (0, i.jsx)(l.Suspense, {
            fallback: null,
            children: (0, i.jsx)(d, {
                users: t,
                guildId: u
            })
        }), [t, u]);
        return (0, i.jsx)(s.YNO, {
            renderPopout: h,
            targetElementRef: c,
            position: "right",
            children: e => (0, i.jsx)(r.D, {
                ...e,
                innerRef: c,
                className: o.x,
                onClick: t => {
                    t.stopPropagation(), e.onClick?.(t)
                },
                children: (0, i.jsxs)(a.E, {
                    className: o.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n]
                })
            })
        })
    }