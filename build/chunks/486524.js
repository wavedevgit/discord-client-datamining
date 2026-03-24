/** chunk id: 486524 params = (module,exports,require) **/
t.d(n, {
    A: () => s
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(308528),
    a = t(734057),
    d = t(985018);

function s(e, n) {
    let t = a.A.getChannel(e);
    return null == t || t.isMultiUserDM() ? null : (0, i.jsx)(r.Drp, {
        id: "close-dm",
        label: d.intl.string(d.t.jsvgc3),
        action: () => l.A.closePrivateChannel(e, n)
    })
}