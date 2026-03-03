/** chunk id: 225180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(311907),
    s = n(760751),
    i = n(486020);

function l(e, t) {
    let n = (0, a.bG)([s.A], () => s.A.getDetectableGame(e ?? ""));
    if (null == n) return;
    let l = "cover" === t ? n.cover_image_hash : n.icon;
    return i.Ay.getApplicationIconURL({
        id: n.id,
        icon: l,
        keepAspectRatio: !0
    })
}