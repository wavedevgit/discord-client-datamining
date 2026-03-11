/** chunk id: 486524 params = (module,exports,require) **/
i.d(e, {
    A: () => s
});
var t = i(627968);
i(64700);
var r = i(397927),
    l = i(308528),
    a = i(734057),
    d = i(985018);

function s(n, e) {
    let i = a.A.getChannel(n);
    return null == i || i.isMultiUserDM() ? null : (0, t.jsx)(r.Drp, {
        id: "close-dm",
        label: d.intl.string(d.t.jsvgc3),
        action: () => l.A.closePrivateChannel(n, e)
    })
}