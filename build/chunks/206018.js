/** chunk id: 206018 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var r = n(627968);
n(64700);
var a = n(110259),
    i = n(311907),
    l = n(205693),
    s = n(397927),
    u = n(827343),
    o = n(820284),
    c = n(688810),
    d = n(139286),
    m = n(48435),
    A = n(485873),
    _ = n(24933),
    v = n(964592),
    h = n(430452),
    p = n(383501),
    g = n(532624),
    C = n(723702),
    f = n(17143),
    I = n(819027),
    T = n(652215),
    b = n(509381),
    y = n(731854),
    E = n(985018),
    S = n(220636);

function N(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: N,
        onClose: x,
        maybeRenderPTTCheckbox: O = !1,
        renderDeafenCheckbox: M = !1,
        renderInputProfiles: k = !1,
        renderOutputDevices: j = !1,
        renderOutputVolume: D = !1,
        renderInputDevices: P = !1,
        renderInputVolume: U = !1,
        maybeRenderInputMeter: R = !1,
        renderSettingsButton: V = !1
    } = e, {
        analyticsLocations: L
    } = (0, c.Ay)();
    (0, d.A)({
        type: a.ImpressionTypes.MENU,
        name: a.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: L
        }
    });
    let F = (0, I.A)(t),
        H = (0, m.H)({
            deviceType: y.oh.AUDIO_INPUT,
            analyticsLocations: L,
            asSubmenu: !0
        }),
        B = (0, m.H)({
            deviceType: y.oh.AUDIO_OUTPUT,
            analyticsLocations: L,
            asSubmenu: !0
        }),
        K = (0, i.bG)([h.Ay], () => h.Ay.getActiveInputProfile()),
        X = (0, _.A)(L),
        w = (0, A.A)(L),
        G = (0, v.A)(L),
        J = l.x.DEFAULT,
        Z = h.Ay.isSelfDeaf(J),
        q = (0, i.bG)([h.Ay], () => h.Ay.getMode()),
        Y = q === T.TBI.VOICE_ACTIVITY ? T.TBI.PUSH_TO_TALK : T.TBI.VOICE_ACTIVITY,
        Q = (0, i.bG)([h.Ay, g.Ay], () => {
            let e = h.Ay.getModeOptions().shortcut?.length > 0,
                t = null != g.Ay.getKeybindForAction(T.hCu.PUSH_TO_TALK, !1, !0),
                n = null != g.Ay.getKeybindForAction(T.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n
        }),
        W = (0, i.bG)([p.A], () => null != p.A.getChannelId());
    return (0, r.jsx)(o.A, {
        object: T.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            onSelect: N,
            onInteraction: n,
            onClose: x,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": E.intl.string(E.t.ZR1Ss6),
            className: S.MK,
            children: [(0, r.jsxs)(s.rXV, {
                children: [P && H, k && X, j && B]
            }), (0, r.jsxs)(s.rXV, {
                children: [U && w, R && W && (0, r.jsx)(s.aK1, {
                    id: "input-device-meter",
                    control: () => (0, r.jsx)(f.A, {
                        notchBackground: f.V.BLACK,
                        location: {
                            section: T.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: S.Eq,
                        notchClassName: S.CO
                    })
                }), D && G]
            }), (0, r.jsxs)(s.rXV, {
                children: [O && C.isPlatformEmbedded && Q ? (0, r.jsx)(s.sLh, {
                    checked: q === T.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: E.intl.string(E.t.Q8gkVL),
                    action: () => u.A.setMode(Y, void 0, void 0, {
                        analyticsLocations: L
                    }),
                    disabled: K === b.m.STUDIO
                }) : null, M && (0, r.jsx)(s.sLh, {
                    id: "deafen",
                    label: E.intl.string(E.t.wjcRFX),
                    action: () => u.A.toggleSelfDeaf({
                        context: J,
                        location: "AudioDeviceMenu"
                    }),
                    checked: Z
                }, "self-deafen"), V && F]
            })]
        })
    })
}