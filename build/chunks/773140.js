/** Chunk was on 28979 **/
/** chunk id: 773140, original params: t,e,i (module,exports,require) **/
i.d(e, {
    q: () => N
});
var n = i(934551),
    l = i(419954),
    s = i(430452),
    r = i(780964),
    u = i(358776),
    a = i(71995),
    o = i(573858),
    T = i(490107),
    A = i(945928),
    d = i(108804),
    S = i(198987),
    E = i(315943),
    _ = i(475061),
    g = i(531525),
    c = i(985018);
let I = (0, l.t_)(r.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => c.intl.string(c.t.B1fFpf),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => []
    }),
    O = (0, l.t_)(r.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => c.intl.string(c.t.B1fFpf),
        buildLayout: () => [_.p, A.Q, o.i, E.H, S.t, d.U, T.r]
    }),
    N = (0, l.i4)(r.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.B1fFpf),
        usePredicate: () => s.A.isSupported(),
        icon: n.MicrophoneIcon,
        getLegacySearchKey: () => (0, u.qz)("VoiceAndVideoPanel") ? void 0 : g.H.VOICE_AND_VIDEO,
        buildLayout: () => [(0, u.qz)("VoiceAndVideoPanel") ? O : I]
    })