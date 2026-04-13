/** chunk id: 855880 params = (module,exports,require) **/
n.d(t, {
    q: () => A
});
var i = n(934551),
    s = n(419954),
    l = n(430452),
    r = n(780964),
    a = n(235661),
    o = n(894918),
    d = n(209903),
    c = n(280964),
    u = n(430536),
    m = n(950127),
    g = n(620219),
    _ = n(794089),
    x = n(985018);
let h = (0, s.t_)(r.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => x.intl.string(x.t.B1fFpf),
        buildLayout: () => [_.p, c.Q, o.i, g.H, m.t, u.U, d.r]
    }),
    A = (0, s.i4)(r.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => x.intl.string(x.t.B1fFpf),
        usePredicate: () => l.Ay.isSupported(),
        icon: i.MicrophoneIcon,
        useMenu: a.A,
        buildLayout: () => [h]
    })