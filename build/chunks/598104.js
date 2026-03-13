/** chunk id: 598104 params = (module,exports,require) **/
s.d(t, {
    A: () => A
});
var i = s(627968),
    a = s(64700),
    l = s(397927),
    n = s(571694),
    r = s(954376);
let A = a.memo(function(e) {
    let {
        channel: t,
        size: s,
        facepileSizeOverride: a,
        isTyping: A,
        status: u,
        className: d,
        animated: _ = !1,
        ...c
    } = e;
    return t.recipients.length >= 2 && null == t.icon ? (0, i.jsx)(r.A, {
        "aria-label": c["aria-label"],
        "aria-hidden": c["aria-hidden"],
        className: d,
        recipients: t.recipients,
        size: a ?? s,
        isTyping: A,
        status: u
    }) : (0, i.jsx)(l.euF, {
        "aria-hidden": c["aria-hidden"],
        "aria-label": c["aria-label"],
        className: d,
        size: s,
        src: (0, n.Y)(t, 80, _)
    })
})