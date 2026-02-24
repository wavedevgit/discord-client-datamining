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
        renderInputVolume: y = !1,
        renderOutputVolume: C = !1,
        renderDeafen: D = !1,
        minimal: V = !1,
        onSelect: j,
        appContext: k,
        onInteraction: L
    } = e, {
        analyticsLocations: M
    } = (0, c.Ay)();
    (0, A.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: M
        }
    });
    let N = (0, g.A)(k),
        P = (0, T.H)({
            deviceType: v.oh.AUDIO_INPUT,
            analyticsLocations: M,
            asSubmenu: V
        }),
        B = (0, T.H)({
            deviceType: v.oh.AUDIO_OUTPUT,
            analyticsLocations: M,
            asSubmenu: V
        }),
        H = (0, s.bG)([m.Ay], () => m.Ay.getActiveInputProfile()),
        X = (0, p.A)(M),
        K = (0, I.A)(M),
        w = (0, u.A)(M),
        G = (0, b.A)(M),
        Y = d.x.DEFAULT,
        F = m.Ay.isSelfDeaf(Y),
        Q = (0, s.bG)([m.Ay], () => m.Ay.getMode()),
        R = Q === h.TBI.VOICE_ACTIVITY ? h.TBI.PUSH_TO_TALK : h.TBI.VOICE_ACTIVITY;
    return (0, n.jsx)(r.A, {
        object: h.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: j,
            onInteraction: L,
            className: O.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": f.intl.string(f.t.ZR1Ss6),
            children: [E && P, i && B, S && X, !V && x && H !== U.m.STUDIO ? (0, n.jsx)(a.rXV, {
                label: f.intl.string(f.t["pS+K2L"]),
                children: K
            }) : null, (0, n.jsxs)(a.rXV, {
                children: [y ? w : null, C ? G : null, V ? (0, n.jsx)(a.bXX, {}) : null, V && D ? (0, n.jsx)(a.sLh, {
                    id: "deafen",
                    label: f.intl.string(f.t.wjcRFX),
                    action: () => o.A.toggleSelfDeaf({
                        context: Y,
                        location: "AudioDeviceMenu"
                    }),
                    checked: F
                }, "self-deafen") : null, V && E && _.isPlatformEmbedded ? (0, n.jsx)(a.sLh, {
                    checked: Q === h.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: f.intl.string(f.t.Q8gkVL),
                    action: () => o.A.setMode(R, void 0, void 0, {
                        analyticsLocations: M
                    }),
                    disabled: H === U.m.STUDIO
                }) : null, N]
            })]
        })
    })
}