/** Chunk was on 78827 **/
/** chunk id: 385318, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => x
});
var n = i(627968);
i(64700);
var l = i(110259),
    s = i(311907),
    d = i(205693),
    a = i(397927),
    o = i(827343),
    c = i(820284),
    r = i(688810),
    A = i(139286),
    T = i(48435),
    I = i(813977),
    u = i(485873),
    p = i(24933),
    b = i(964592),
    m = i(430452),
    _ = i(723702),
    h = i(819027),
    U = i(652215),
    g = i(509381),
    v = i(731854),
    f = i(985018),
    O = i(220636);

function x(e) {
    let {
        onClose: t,
        renderOutputDevices: i = !1,
        renderInputDevices: x = !1,
        renderInputProfiles: E = !1,
        renderInputModes: S = !1,
        renderInputVolume: C = !1,
        renderOutputVolume: D = !1,
        renderDeafen: V = !1,
        minimal: j = !1,
        onSelect: k,
        appContext: L,
        onInteraction: M
    } = e, {
        analyticsLocations: N
    } = (0, r.Ay)();
    (0, A.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: N
        }
    });
    let P = (0, h.A)(L),
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
        R = Q === U.TBI.VOICE_ACTIVITY ? U.TBI.PUSH_TO_TALK : U.TBI.VOICE_ACTIVITY;
    return (0, n.jsx)(c.A, {
        object: U.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(a.W1t, {
            "data-menu-mixed": !0,
            onSelect: k,
            onInteraction: M,
            className: O.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": f.intl.string(f.t.ZR1Ss6),
            children: [x && y, i && B, E && X, !j && S && H !== g.my.STUDIO ? (0, n.jsx)(a.rXV, {
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
                }, "self-deafen") : null, j && x && _.isPlatformEmbedded ? (0, n.jsx)(a.sLh, {
                    checked: Q === U.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: f.intl.string(f.t.Q8gkVL),
                    action: () => o.A.setMode(R, void 0, void 0, {
                        analyticsLocations: N
                    }),
                    disabled: H === g.my.STUDIO
                }) : null, P]
            })]
        })
    })
}