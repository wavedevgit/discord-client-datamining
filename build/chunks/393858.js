/** chunk id: 393858 params = (module,exports,require) **/
n.d(t, {
    f: () => g
});
var i = n(574381),
    s = n(311907),
    l = n(314116),
    r = n(827343),
    a = n(77729),
    o = n(480862),
    d = n(729410),
    c = n(419954),
    u = n(430452),
    _ = n(780964),
    m = n(985018);
let g = (0, c.zD)(_.X.VOICE_AND_VIDEO_OPENH264, {
    useTitle: () => m.intl.string(m.t.qFphsa),
    useSubtitle: () => m.intl.string(m.t.cQfwyY),
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
        r.A.setOpenH264Enabled(e), (0, l.A)({
            title: m.intl.string(m.t["9jf31O"]),
            subtitle: m.intl.string(m.t["J2wg+X"]),
            confirmText: m.intl.string(m.t.BddRzS),
            onConfirm: () => a.A.app.relaunch()
        })
    },
    useSearchTerms: () => ["open", "OpenH264", "H264", "codec"]
})