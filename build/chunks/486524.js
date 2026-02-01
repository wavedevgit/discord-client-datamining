/** chunk id: 486524, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(308528),
    a = n(734057),
    s = n(985018);

function o(e, t) {
    let n = a.A.getChannel(e);
    return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(r.Drp, {
        id: "close-dm",
        label: s.intl.string(s.t.jsvgc3),
        action: () => l.A.closePrivateChannel(e, t)
    })
}