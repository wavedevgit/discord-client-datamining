/** chunk id: 393858 params = (module,exports,require) **/
n.d(t, {
    f: () => m
});
var i = n(574381),
    s = n(311907),
    l = n(314116),
    a = n(827343),
    r = n(77729),
    o = n(480862),
    d = n(729410),
    c = n(419954),
    u = n(430452),
    _ = n(780964),
    g = n(985018);
let m = (0, c.zD)(_.X.VOICE_AND_VIDEO_OPENH264, {
    useTitle: () => g.intl.string(g.t.qFphsa),
    useSubtitle: () => g.intl.string(g.t.cQfwyY),
    usePredicate: function() {
        if (!(0, i.j9)()) return !1;
        let e = (0, d.b)({
                location: "OpenH264Setting"
            }),
            t = (0, o.n)({
                location: "OpenH264Setting"
            });
        return e.enabled || t.enabled
    },
    useValue: function() {
        return (0, s.bG)([u.Ay], () => u.Ay.getOpenH264Enabled())
    },
    setValue: function(e) {
        a.A.setOpenH264Enabled(e), (0, l.A)({
            title: g.intl.string(g.t["9jf31O"]),
            subtitle: g.intl.string(g.t["J2wg+X"]),
            confirmText: g.intl.string(g.t.BddRzS),
            onConfirm: () => r.A.app.relaunch()
        })
    },
    useSearchTerms: () => ["open", "OpenH264", "H264", "codec"]
})