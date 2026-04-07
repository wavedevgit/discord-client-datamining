/** chunk id: 598104 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var n = a(627968),
    i = a(64700),
    s = a(397927),
    r = a(571694),
    l = a(954376);
let d = i.memo(function(e) {
    let {
        channel: t,
        size: a,
        facepileSizeOverride: i,
        isTyping: d,
        status: _,
        className: o,
        animated: c = !1,
        ...h
    } = e;
    return t.recipients.length >= 2 && null == t.icon ? (0, n.jsx)(l.A, {
        "aria-label": h["aria-label"],
        "aria-hidden": h["aria-hidden"],
        className: o,
        recipients: t.recipients,
        size: i ?? a,
        isTyping: d,
        status: _
    }) : (0, n.jsx)(s.euF, {
        "aria-hidden": h["aria-hidden"],
        "aria-label": h["aria-label"],
        className: o,
        size: a,
        src: (0, r.Y)(t, 80, c)
    })
})