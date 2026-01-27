/** Chunk was on 78827 **/
/** chunk id: 385318, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => E
});
var n = i(627968);
i(64700);
var l = i(110259),
    s = i(311907),
    d = i(205693),
    a = i(397927),
    o = i(827343),
    r = i(820284),
    c = i(688810),
    A = i(139286),
    T = i(48435),
    I = i(813977),
    u = i(485873),
    p = i(24933),
    b = i(964592),
    m = i(430452),
    _ = i(723702),
    g = i(819027),
    h = i(652215),
    U = i(509381),
    v = i(731854),
    f = i(985018),
    O = i(220636);

function E(e) {
    let {
        onClose: t,
        renderOutputDevices: i = !1,
        renderInputDevices: E = !1,
        renderInputProfiles: S = !1,
        renderInputModes: x = !1,
        renderInputVolume: C = !1,
        renderOutputVolume: D = !1,
        renderDeafen: V = !1,
        minimal: j = !1,
        onSelect: k,
        appContext: L,
        onInteraction: M
    } = e, {
        analyticsLocations: N
    } = (0, c.Ay)();
    (0, A.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: N
        }
    });
    let P = (0, g.A)(L),
        y = (0, T.H)({
            deviceType: v.oh.AUDIO_INPUT,
            analyticsLocations: N,
            asSubmenu: j
        }),
        B = (0, T.H)({
            deviceType: v.oh.AUDIO_OUTPUT,
            analyticsLocations: N,
            asSubmenu: j
        }),
        H = (0, s.bG)([m.A], () => m.A.getActiveInputProfile()),
        X = (0, p.A)(N),
        K = (0, I.A)(N),
        w = (0, u.A)(N),
        G = (0, b.A)(N),
        Y = d.x.DEFAULT,
        F = m.A.isSelfDeaf(Y),
        Q = (0, s.bG)([m.A], () => m.A.getMode()),
        R = Q === h.TBI.VOICE_ACTIVITY ? h.TBI.PUSH_TO_TALK : h.TBI.VOICE_ACTIVITY;
    return (0, n.jsx)(r.A, {
        object: h.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: k,
            onInteraction: M,
            className: O.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": f.intl.string(f.t.ZR1Ss6),
            children: [E && y, i && B, S && X, !j && x && H !== U.my.STUDIO ? (0, n.jsx)(a.rXV, {
                label: f.intl.string(f.t["pS+K2L"]),
                children: K
            }) : null, (0, n.jsxs)(a.rXV, {
                children: [C ? w : null, D ? G : null, j ? (0, n.jsx)(a.bXX, {}) : null, j && V ? (0, n.jsx)(a.sLh, {
                    id: "deafen",
                    label: f.intl.string(f.t.wjcRFX),
                    action: () => o.A.toggleSelfDeaf({
                        context: Y,
                        location: "AudioDeviceMenu"
                    }),
                    checked: F
                }, "self-deafen") : null, j && E && _.isPlatformEmbedded ? (0, n.jsx)(a.sLh, {
                    checked: Q === h.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: f.intl.string(f.t.Q8gkVL),
                    action: () => o.A.setMode(R, void 0, void 0, {
                        analyticsLocations: N
                    }),
                    disabled: H === U.my.STUDIO
                }) : null, P]
            })]
        })
    })
}