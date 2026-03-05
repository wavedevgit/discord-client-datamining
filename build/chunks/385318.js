/** chunk id: 385318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => N
});
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(311907),
    a = n(205693),
    r = n(397927),
    o = n(827343),
    c = n(820284),
    d = n(688810),
    u = n(139286),
    h = n(48435),
    m = n(813977),
    A = n(485873),
    g = n(24933),
    p = n(964592),
    f = n(430452),
    _ = n(723702),
    E = n(819027),
    x = n(652215),
    C = n(509381),
    S = n(731854),
    I = n(985018),
    T = n(220636);

function N(e) {
    let {
        onClose: t,
        renderOutputDevices: n = !1,
        renderInputDevices: N = !1,
        renderInputProfiles: b = !1,
        renderInputModes: y = !1,
        renderInputVolume: v = !1,
        renderOutputVolume: j = !1,
        renderDeafen: R = !1,
        minimal: M = !1,
        onSelect: D,
        appContext: O,
        onInteraction: L
    } = e, {
        analyticsLocations: P
    } = (0, d.Ay)();
    (0, u.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: P
        }
    });
    let w = (0, E.A)(O),
        k = (0, h.H)({
            deviceType: S.oh.AUDIO_INPUT,
            analyticsLocations: P,
            asSubmenu: M
        }),
        U = (0, h.H)({
            deviceType: S.oh.AUDIO_OUTPUT,
            analyticsLocations: P,
            asSubmenu: M
        }),
        G = (0, s.bG)([f.Ay], () => f.Ay.getActiveInputProfile()),
        F = (0, g.A)(P),
        H = (0, m.A)(P),
        B = (0, A.A)(P),
        V = (0, p.A)(P),
        K = a.x.DEFAULT,
        W = f.Ay.isSelfDeaf(K),
        z = (0, s.bG)([f.Ay], () => f.Ay.getMode()),
        Y = z === x.TBI.VOICE_ACTIVITY ? x.TBI.PUSH_TO_TALK : x.TBI.VOICE_ACTIVITY;
    return (0, i.jsx)(c.A, {
        object: x.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            onSelect: D,
            onInteraction: L,
            className: T.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": I.intl.string(I.t.ZR1Ss6),
            children: [N && k, n && U, b && F, !M && y && G !== C.m.STUDIO ? (0, i.jsx)(r.rXV, {
                label: I.intl.string(I.t["pS+K2L"]),
                children: H
            }) : null, (0, i.jsxs)(r.rXV, {
                children: [v ? B : null, j ? V : null, M ? (0, i.jsx)(r.bXX, {}) : null, M && R ? (0, i.jsx)(r.sLh, {
                    id: "deafen",
                    label: I.intl.string(I.t.wjcRFX),
                    action: () => o.A.toggleSelfDeaf({
                        context: K,
                        location: "AudioDeviceMenu"
                    }),
                    checked: W
                }, "self-deafen") : null, M && N && _.isPlatformEmbedded ? (0, i.jsx)(r.sLh, {
                    checked: z === x.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: I.intl.string(I.t.Q8gkVL),
                    action: () => o.A.setMode(Y, void 0, void 0, {
                        analyticsLocations: P
                    }),
                    disabled: G === C.m.STUDIO
                }) : null, w]
            })]
        })
    })
}