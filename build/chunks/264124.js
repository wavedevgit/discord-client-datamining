/** Chunk was on 95153 **/
/** chunk id: 264124, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(55619),
    o = n(351906),
    c = n(985018);

function s() {
    let e = (0, l.bG)([o.A], () => o.A.enabled, []);
    return (0, r.jsx)(i.sLh, {
        id: "streamer-mode-toggle",
        label: c.intl.string(c.t.p9ZAJZ),
        action: () => {
            a.A.setEnabled(!e)
        },
        checked: e
    })
}