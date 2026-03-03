/** chunk id: 385318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => O
});
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(311907),
    a = n(205693),
    d = n(397927),
    o = n(827343),
    c = n(820284),
    r = n(688810),
    A = n(139286),
    u = n(48435),
    T = n(813977),
    I = n(485873),
    p = n(24933),
    h = n(964592),
    U = n(430452),
    b = n(723702),
    m = n(819027),
    _ = n(652215),
    f = n(509381),
    S = n(731854),
    v = n(985018),
    x = n(220636);

function O(e) {
    let {
        onClose: t,
        renderOutputDevices: n = !1,
        renderInputDevices: O = !1,
        renderInputProfiles: g = !1,
        renderInputModes: y = !1,
        renderInputVolume: D = !1,
        renderOutputVolume: E = !1,
        renderDeafen: j = !1,
        minimal: C = !1,
        onSelect: k,
        appContext: V,
        onInteraction: L
    } = e, {
        analyticsLocations: M
    } = (0, r.Ay)();
    (0, A.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: M
        }
    });
    let N = (0, m.A)(V),
        P = (0, u.H)({
            deviceType: S.oh.AUDIO_INPUT,
            analyticsLocations: M,
            asSubmenu: C
        }),
        X = (0, u.H)({
            deviceType: S.oh.AUDIO_OUTPUT,
            analyticsLocations: M,
            asSubmenu: C
        }),
        B = (0, s.bG)([U.Ay], () => U.Ay.getActiveInputProfile()),
        H = (0, p.A)(M),
        K = (0, T.A)(M),
        w = (0, I.A)(M),
        F = (0, h.A)(M),
        G = a.x.DEFAULT,
        R = U.Ay.isSelfDeaf(G),
        Y = (0, s.bG)([U.Ay], () => U.Ay.getMode()),
        Z = Y === _.TBI.VOICE_ACTIVITY ? _.TBI.PUSH_TO_TALK : _.TBI.VOICE_ACTIVITY;
    return (0, i.jsx)(c.A, {
        object: _.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(d.W1t, {
            "data-menu-migrated": !0,
            onSelect: k,
            onInteraction: L,
            className: x.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": v.intl.string(v.t.ZR1Ss6),
            children: [O && P, n && X, g && H, !C && y && B !== f.m.STUDIO ? (0, i.jsx)(d.rXV, {
                label: v.intl.string(v.t["pS+K2L"]),
                children: K
            }) : null, (0, i.jsxs)(d.rXV, {
                children: [D ? w : null, E ? F : null, C ? (0, i.jsx)(d.bXX, {}) : null, C && j ? (0, i.jsx)(d.sLh, {
                    id: "deafen",
                    label: v.intl.string(v.t.wjcRFX),
                    action: () => o.A.toggleSelfDeaf({
                        context: G,
                        location: "AudioDeviceMenu"
                    }),
                    checked: R
                }, "self-deafen") : null, C && O && b.isPlatformEmbedded ? (0, i.jsx)(d.sLh, {
                    checked: Y === _.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: v.intl.string(v.t.Q8gkVL),
                    action: () => o.A.setMode(Z, void 0, void 0, {
                        analyticsLocations: M
                    }),
                    disabled: B === f.m.STUDIO
                }) : null, N]
            })]
        })
    })
}