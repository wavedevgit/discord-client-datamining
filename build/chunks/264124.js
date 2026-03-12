/** chunk id: 264124 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(55619),
    a = n(351906),
    o = n(985018);

function d() {
    let e = (0, s.bG)([a.A], () => a.A.enabled, []);
    return (0, i.jsx)(l.sLh, {
        id: "streamer-mode-toggle",
        label: o.intl.string(o.t.p9ZAJZ),
        action: () => {
            r.A.setEnabled(!e)
        },
        checked: e
    })
}