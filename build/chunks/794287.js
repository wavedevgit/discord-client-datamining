/** chunk id: 794287, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.KEEP_POPOUTS_OPEN, {
    useTitle: () => "Keep Popouts Open",
    useSubtitle: () => "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
    useValue: () => (0, n.bG)([a.default], () => a.default.preventPopoutClose),
    setValue: t => (0, l.x)({
        preventPopoutClose: t
    })
})