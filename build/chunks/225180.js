/** chunk id: 225180 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(311907),
    s = n(760751),
    l = n(486020);

function i(e, t) {
    let n = (0, a.bG)([s.A], () => s.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let i = "cover" === t ? n.cover_image_hash : n.icon;
    return l.Ay.getApplicationIconURL({
        id: n.id,
        icon: i,
        keepAspectRatio: !0
    })
}