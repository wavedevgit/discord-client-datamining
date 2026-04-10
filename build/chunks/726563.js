/** chunk id: 726563 params = (module,exports,require) **/
n.d(t, {
    g: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.KEEP_POPOUTS_OPEN, {
    useTitle: () => "Keep Popouts Open",
    useSubtitle: () => "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
    useValue: () => (0, i.bG)([r.default], () => r.default.preventPopoutClose),
    setValue: e => (0, s.x)({
        preventPopoutClose: e
    })
})