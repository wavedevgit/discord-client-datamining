/** chunk id: 598104 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    a = n(64700),
    s = n(397927),
    i = n(571694),
    r = n(954376);
let u = a.memo(function(e) {
    let {
        channel: t,
        size: n,
        facepileSizeOverride: a,
        isTyping: u,
        status: o,
        className: c,
        animated: A = !1,
        ...d
    } = e;
    return t.recipients.length >= 2 && null == t.icon ? (0, l.jsx)(r.A, {
        "aria-label": d["aria-label"],
        "aria-hidden": d["aria-hidden"],
        className: c,
        recipients: t.recipients,
        size: a ?? n,
        isTyping: u,
        status: o
    }) : (0, l.jsx)(s.euF, {
        "aria-hidden": d["aria-hidden"],
        "aria-label": d["aria-label"],
        className: c,
        size: n,
        src: (0, i.Y)(t, 80, A)
    })
})