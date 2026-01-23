/** Chunk was on 95153 **/
/** chunk id: 264124, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(55619),
    o = n(351906),
    c = n(985018);

function s() {
    let e = (0, r.bG)([o.A], () => o.A.enabled, []);
    return (0, i.jsx)(l.sLh, {
        id: "streamer-mode-toggle",
        label: c.intl.string(c.t.p9ZAJZ),
        action: () => {
            a.A.setEnabled(!e)
        },
        checked: e
    })
}