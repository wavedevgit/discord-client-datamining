/** chunk id: 773140 params = (module,exports,require) **/
n.d(t, {
    q: () => p
});
var i = n(934551),
    s = n(419954),
    l = n(430452),
    a = n(780964),
    r = n(235661),
    o = n(573858),
    d = n(490107),
    c = n(945928),
    u = n(108804),
    _ = n(198987),
    g = n(315943),
    m = n(475061),
    A = n(985018);
let h = (0, s.t_)(a.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => A.intl.string(A.t.B1fFpf),
        buildLayout: () => [m.p, c.Q, o.i, g.H, _.t, u.U, d.r]
    }),
    p = (0, s.i4)(a.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.B1fFpf),
        usePredicate: () => l.Ay.isSupported(),
        icon: i.MicrophoneIcon,
        useMenu: r.A,
        buildLayout: () => [h]
    })