/** chunk id: 475061, original params: t,e,i (module,exports,require) **/
i.d(e, {
    p: () => N
});
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(74848),
    a = i(419954),
    u = i(933297),
    o = i(843401),
    d = i(723702),
    A = i(780964),
    T = i(801264),
    S = i(902713),
    E = i(428961),
    g = i(639500),
    _ = i(731854),
    c = i(985018);
let I = d.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function C(t) {
    let {
        inputAndOutputAreBluetooth: e,
        canPromptSystemServiceInstallForVoice: i
    } = t;
    return (0, n.jsxs)(s.BJc, {
        children: [i && (0, n.jsx)(o.A, {
            sourcePage: "voice"
        }), e && (0, n.jsx)(T.A, {
            look: T.k.WARNING,
            children: c.intl.string(c.t.Ioz3gx)
        })]
    })
}
let N = (0, a.zZ)(A.X.VOICE_CATEGORY, {
    useTitle: () => c.intl.string(c.t.K3lovD),
    useInlineNotice: function() {
        let t = (0, o.I)("voice"),
            e = (0, r.x5)(_.oh.AUDIO_INPUT),
            i = (0, r.x5)(_.oh.AUDIO_OUTPUT),
            s = l.useMemo(() => {
                let t = I.some(t => e?.hardwareId?.startsWith(t)),
                    n = I.some(t => i?.hardwareId?.startsWith(t));
                return t && n && e?.containerId != null && e.containerId === i?.containerId
            }, [e, i]);
        return l.useMemo(() => t.canPrompt || s ? {
            type: u.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: () => (0, n.jsx)(C, {
                inputAndOutputAreBluetooth: s,
                canPromptSystemServiceInstallForVoice: t.canPrompt
            })
        } : null, [t.canPrompt, s])
    },
    buildLayout: () => [S.a, E.d, g.L]
})