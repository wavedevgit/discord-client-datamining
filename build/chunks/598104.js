/** chunk id: 598104 params = (module,exports,require) **/
a.d(t, {
    A: () => c
});
var s = a(627968),
    n = a(64700),
    i = a(397927),
    l = a(571694),
    r = a(954376);
let c = n.memo(function(e) {
    let {
        channel: t,
        size: a,
        facepileSizeOverride: n,
        isTyping: c,
        status: o,
        className: d,
        animated: _ = !1,
        ...h
    } = e;
    return t.recipients.length >= 2 && null == t.icon ? (0, s.jsx)(r.A, {
        "aria-label": h["aria-label"],
        "aria-hidden": h["aria-hidden"],
        className: d,
        recipients: t.recipients,
        size: n ?? a,
        isTyping: c,
        status: o
    }) : (0, s.jsx)(i.euF, {
        "aria-hidden": h["aria-hidden"],
        "aria-label": h["aria-label"],
        className: d,
        size: a,
        src: (0, l.Y)(t, 80, _)
    })
})