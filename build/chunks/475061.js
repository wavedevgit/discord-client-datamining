/** chunk id: 475061, original params: t,e,i (module,exports,require) **/
i.d(e, {
    p: () => N
});
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(74848),
    u = i(419954),
    a = i(933297),
    o = i(843401),
    d = i(723702),
    T = i(780964),
    A = i(801264),
    S = i(902713),
    c = i(428961),
    E = i(639500),
    g = i(731854),
    _ = i(985018);
let I = d.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function O(t) {
    let {
        inputAndOutputAreBluetooth: e,
        canPromptSystemServiceInstallForVoice: i
    } = t;
    return (0, n.jsxs)(s.BJc, {
        children: [i && (0, n.jsx)(o.A, {
            sourcePage: "voice"
        }), e && (0, n.jsx)(A.A, {
            look: A.k.WARNING,
            children: _.intl.string(_.t.Ioz3gx)
        })]
    })
}
let N = (0, u.zZ)(T.X.VOICE_CATEGORY, {
    useTitle: () => _.intl.string(_.t.K3lovD),
    useInlineNotice: function() {
        let t = (0, o.I)("voice"),
            e = (0, r.x5)(g.oh.AUDIO_INPUT),
            i = (0, r.x5)(g.oh.AUDIO_OUTPUT),
            s = l.useMemo(() => {
                let t = I.some(t => {
                        var i;
                        return null == e || null == (i = e.hardwareId) ? void 0 : i.startsWith(t)
                    }),
                    n = I.some(t => {
                        var e;
                        return null == i || null == (e = i.hardwareId) ? void 0 : e.startsWith(t)
                    });
                return t && n && (null == e ? void 0 : e.containerId) != null && e.containerId === (null == i ? void 0 : i.containerId)
            }, [e, i]);
        return l.useMemo(() => t.canPrompt || s ? {
            type: a.W.STRONGLY_DISCOURAGED_CUSTOM,
            notice: () => (0, n.jsx)(O, {
                inputAndOutputAreBluetooth: s,
                canPromptSystemServiceInstallForVoice: t.canPrompt
            })
        } : null, [t.canPrompt, s])
    },
    buildLayout: () => [S.a, c.d, E.L]
})