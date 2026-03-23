/** chunk id: 475061 params = (module,exports,require) **/
n.d(t, {
    p: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(74848),
    r = n(419954),
    o = n(933297),
    d = n(843401),
    c = n(723702),
    u = n(780964),
    m = n(801264),
    _ = n(902713),
    g = n(428961),
    A = n(639500),
    x = n(731854),
    p = n(985018);
let h = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function T(e) {
    let {
        inputAndOutputAreBluetooth: t,
        canPromptSystemServiceInstallForVoice: n
    } = e;
    return (0, i.jsxs)(l.BJc, {
        children: [n && (0, i.jsx)(d.A, {
            sourcePage: "voice"
        }), t && (0, i.jsx)(m.A, {
            look: m.k.WARNING,
            children: p.intl.string(p.t.Ioz3gx)
        })]
    })
}
let E = (0, r.zZ)(u.X.VOICE_CATEGORY, {
    useTitle: () => p.intl.string(p.t.K3lovD),
    useInlineNotice: function() {
        let e = (0, d.I)("voice"),
            t = (0, a.x5)(x.oh.AUDIO_INPUT),
            n = (0, a.x5)(x.oh.AUDIO_OUTPUT),
            l = s.useMemo(() => {
                let e = h.some(e => t?.hardwareId?.startsWith(e)),
                    i = h.some(e => n?.hardwareId?.startsWith(e));
                return e && i && t?.containerId != null && t.containerId === n?.containerId
            }, [t, n]);
        return s.useMemo(() => e.canPrompt || l ? {
            type: o.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: () => (0, i.jsx)(T, {
                inputAndOutputAreBluetooth: l,
                canPromptSystemServiceInstallForVoice: e.canPrompt
            })
        } : null, [e.canPrompt, l])
    },
    buildLayout: () => [_.a, g.d, A.L]
})