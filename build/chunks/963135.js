/** chunk id: 963135 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(342296),
    s = n(2398);

function o(e) {
    let {
        user: t,
        guildId: n
    } = e, o = l.useRef(null);
    return (0, i.jsx)(a.A, {
        targetElementRef: o,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: e => (0, i.jsx)(r.DUT, {
            ...e,
            innerRef: o,
            className: s.RB,
            onClick: t => {
                e.onClick(t), t.stopPropagation()
            },
            "aria-label": t.username,
            children: (0, i.jsx)(r.euF, {
                src: t.getAvatarURL(n, 24),
                size: r._3J.SIZE_24,
                "aria-hidden": !0
            })
        })
    })
}