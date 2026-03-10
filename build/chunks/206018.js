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
    f = n(430452),
    p = n(383501),
    h = n(532624),
    g = n(723702),
    C = n(17143),
    I = n(819027),
    y = n(652215),
    T = n(509381),
    b = n(731854),
    E = n(985018),
    S = n(220636);

function N(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: N,
        onClose: O,
        maybeRenderPTTCheckbox: x = !1,
        renderDeafenCheckbox: R = !1,
        renderInputProfiles: M = !1,
        renderOutputDevices: P = !1,
        renderOutputVolume: j = !1,
        renderInputDevices: k = !1,
        renderInputVolume: D = !1,
        maybeRenderInputMeter: U = !1,
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
    let G = (0, I.A)(t),
        F = (0, m.H)({
            deviceType: b.oh.AUDIO_INPUT,
            analyticsLocations: L,
            asSubmenu: !0
        }),
        H = (0, m.H)({
            deviceType: b.oh.AUDIO_OUTPUT,
            analyticsLocations: L,
            asSubmenu: !0
        }),
        B = (0, i.bG)([f.Ay], () => f.Ay.getActiveInputProfile()),
        K = (0, _.A)(L),
        w = (0, A.A)(L),
        X = (0, v.A)(L),
        q = l.x.DEFAULT,
        Y = f.Ay.isSelfDeaf(q),
        Z = (0, i.bG)([f.Ay], () => f.Ay.getMode()),
        J = Z === y.TBI.VOICE_ACTIVITY ? y.TBI.PUSH_TO_TALK : y.TBI.VOICE_ACTIVITY,
        W = (0, i.bG)([f.Ay, h.Ay], () => {
            let e = f.Ay.getModeOptions().shortcut?.length > 0,
                t = null != h.Ay.getKeybindForAction(y.hCu.PUSH_TO_TALK, !1, !0),
                n = null != h.Ay.getKeybindForAction(y.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n
        }),
        Q = (0, i.bG)([p.A], () => null != p.A.getChannelId());
    return (0, r.jsx)(o.A, {
        object: y.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            onSelect: N,
            onInteraction: n,
            onClose: O,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": E.intl.string(E.t.ZR1Ss6),
            className: S.MK,
            children: [(0, r.jsxs)(s.rXV, {
                children: [k && F, M && K, P && H]
            }), (0, r.jsxs)(s.rXV, {
                children: [D && w, U && Q && (0, r.jsx)(s.aK1, {
                    id: "input-device-meter",
                    control: () => (0, r.jsx)(C.A, {
                        notchBackground: C.V.BLACK,
                        location: {
                            section: y.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: S.Eq,
                        notchClassName: S.CO
                    })
                }), j && X]
            }), (0, r.jsxs)(s.rXV, {
                children: [x && g.isPlatformEmbedded && W ? (0, r.jsx)(s.sLh, {
                    checked: Z === y.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: E.intl.string(E.t.Q8gkVL),
                    action: () => u.A.setMode(J, void 0, void 0, {
                        analyticsLocations: L
                    }),
                    disabled: B === T.m.STUDIO
                }) : null, R && (0, r.jsx)(s.sLh, {
                    id: "deafen",
                    label: E.intl.string(E.t.wjcRFX),
                    action: () => u.A.toggleSelfDeaf({
                        context: q,
                        location: "AudioDeviceMenu"
                    }),
                    checked: Y
                }, "self-deafen"), V && G]
            })]
        })
    })
}