/** chunk id: 77544, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(908289),
    o = n(290863),
    s = n(652215),
    d = n(985018);

function u(e, t) {
    let n = (0, r.bG)([o.A], () => (0, a.A)(o.A.findActivity(e, e => e.type === s.$pd.STREAMING)), [e]);
    return null == n ? null : (0, l.jsx)(i.Drp, {
        id: "watch-stream",
        label: d.intl.string(d.t["7Xq/nV"]),
        action: () => {
            null == t || t(), window.open(n, "_blank")
        }
    })
}