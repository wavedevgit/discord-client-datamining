/** chunk id: 389889 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(54570),
    s = n(8880),
    o = n(985018);

function d(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content ? null : (0, i.jsx)(r.Drp, {
        id: "tts",
        label: n ? o.intl.string(o.t.CJ30BP) : o.intl.string(o.t.yGLjXF),
        leadingAccessory: {
            type: "icon",
            icon: r._Ft
        },
        icon: r._Ft,
        action: () => n ? (0, a.pr)() : (0, a.kP)(t, e)
    })
}