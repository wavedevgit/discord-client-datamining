/** Chunk was on 91042 **/
/** chunk id: 77544, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(908289),
    o = n(290863),
    d = n(652215),
    s = n(985018);

function u(e, t) {
    let n = (0, i.bG)([o.A], () => (0, a.A)(o.A.findActivity(e, e => e.type === d.$pd.STREAMING)), [e]);
    return null == n ? null : (0, l.jsx)(r.Drp, {
        id: "watch-stream",
        label: s.intl.string(s.t["7Xq/nV"]),
        action: () => {
            null == t || t(), window.open(n, "_blank")
        }
    })
}