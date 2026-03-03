/** chunk id: 486524, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => s
});
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(308528),
    a = e(734057),
    d = e(985018);

function s(n, t) {
    let e = a.A.getChannel(n);
    return null == e || e.isMultiUserDM() ? null : (0, i.jsx)(r.Drp, {
        id: "close-dm",
        label: d.intl.string(d.t.jsvgc3),
        action: () => l.A.closePrivateChannel(n, t)
    })
}