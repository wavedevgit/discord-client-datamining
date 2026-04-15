/** chunk id: 225180 params = (module,exports,require) **/
s.d(a, {
    A: () => m
});
var i = s(311907),
    c = s(760751),
    d = s(486020);

function m(e, a) {
    let s = (0, i.bG)([c.A], () => c.A.getDetectableGame(e ?? ""));
    if (null == s) return;
    let m = "cover" === a ? s.cover_image_hash : s.icon;
    return d.Ay.getApplicationIconURL({
        id: s.id,
        icon: m,
        keepAspectRatio: !0
    })
}