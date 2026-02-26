/** chunk id: 264124, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => o
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    s = t(55619),
    c = t(351906),
    r = t(985018);

function o() {
    let e = (0, l.bG)([c.A], () => c.A.enabled, []);
    return (0, i.jsx)(a.sLh, {
        id: "streamer-mode-toggle",
        label: r.intl.string(r.t.p9ZAJZ),
        action: () => {
            s.A.setEnabled(!e)
        },
        checked: e
    })
}