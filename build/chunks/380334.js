/** chunk id: 380334 params = (module,exports,require) **/
l.d(t, {
    T: () => j
});
var n = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    a = l(311907),
    s = l(397927),
    u = l(565645),
    o = l(71393),
    c = l(927813),
    d = l(985018),
    m = l(780999),
    h = l(861173);
let g = 6 * c.A.Millis.SECOND;

function x(e) {
    let {
        emoji: t,
        guildId: l
    } = e, i = (0, a.bG)([o.A], () => o.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: r()(h.oR, m.o),
        children: [(0, n.jsx)(u.A, {
            emojiId: t.id,
            size: "default"
        }), (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: d.intl.format(d.t.BaxFf8, {
                emojiName: t.name,
                emojiNameHook: (e, t) => (0, n.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    tag: "strong",
                    children: e
                }, t),
                guildName: i,
                guildNameHook: (e, t) => (0, n.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    tag: "strong",
                    children: e
                }, t)
            })
        })]
    })
}

function j(e) {
    let {
        emoji: t,
        guildId: l
    } = e;
    (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
        position: s.ToastPosition.TOP,
        component: (0, n.jsx)(x, {
            emoji: t,
            guildId: l
        }),
        duration: g
    }))
}