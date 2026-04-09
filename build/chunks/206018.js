/** chunk id: 206018 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var a = n(627968);
n(64700);
var r = n(110259),
    l = n(311907),
    i = n(205693),
    o = n(397927),
    s = n(827343),
    _ = n(820284),
    c = n(688810),
    u = n(139286),
    d = n(48435),
    p = n(485873),
    A = n(24933),
    g = n(964592),
    f = n(430452),
    m = n(383501),
    b = n(532624),
    h = n(17143),
    x = n(819027),
    T = n(652215),
    v = n(509381),
    C = n(731854),
    I = n(985018),
    S = n(933421);

function y(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: y,
        onClose: E,
        maybeRenderPTTCheckbox: M = !1,
        renderDeafenCheckbox: O = !1,
        renderInputProfiles: P = !1,
        renderOutputDevices: D = !1,
        renderOutputVolume: N = !1,
        renderInputDevices: j = !1,
        renderInputVolume: k = !1,
        maybeRenderInputMeter: w = !1,
        renderSettingsButton: U = !1
    } = e, {
        analyticsLocations: B
    } = (0, c.Ay)();
    (0, u.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: B
        }
    });
    let R = (0, x.A)(t),
        L = (0, d.H)({
            deviceType: C.oh.AUDIO_INPUT,
            analyticsLocations: B,
            asSubmenu: !0
        }),
        V = (0, d.H)({
            deviceType: C.oh.AUDIO_OUTPUT,
            analyticsLocations: B,
            asSubmenu: !0
        }),
        G = (0, l.bG)([f.Ay], () => f.Ay.getActiveInputProfile()),
        H = (0, A.A)(B),
        W = (0, p.A)(B),
        K = (0, g.A)(B),
        Q = i.x.DEFAULT,
        F = f.Ay.isSelfDeaf(Q),
        X = (0, l.bG)([f.Ay], () => f.Ay.getMode()),
        Y = X === T.TBI.VOICE_ACTIVITY ? T.TBI.PUSH_TO_TALK : T.TBI.VOICE_ACTIVITY,
        q = (0, l.bG)([f.Ay, b.Ay], () => {
            let e = f.Ay.getModeOptions().shortcut?.length > 0,
                t = null != b.Ay.getKeybindForAction(T.hCu.PUSH_TO_TALK, !1, !0),
                n = null != b.Ay.getKeybindForAction(T.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n
        }),
        Z = (0, l.bG)([m.A], () => null != m.A.getChannelId());
    return (0, a.jsx)(_.A, {
        object: T.ZSU.CONTEXT_MENU,
        children: (0, a.jsxs)(o.W1t, {
            "data-menu-migrated": !0,
            onSelect: y,
            onInteraction: n,
            onClose: E,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": I.intl.string(I.t.ZR1Ss6),
            className: S.MK,
            children: [(0, a.jsxs)(o.rXV, {
                children: [j && L, P && H, D && V]
            }), (0, a.jsxs)(o.rXV, {
                children: [k && W, w && Z && (0, a.jsx)(o.aK1, {
                    id: "input-device-meter",
                    interactive: !1,
                    control: () => (0, a.jsx)(h.A, {
                        notchBackground: h.V.BLACK,
                        location: {
                            section: T.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: S.Eq,
                        notchClassName: S.CO
                    })
                }), N && K]
            }), (0, a.jsxs)(o.rXV, {
                children: [M && q ? (0, a.jsx)(o.sLh, {
                    checked: X === T.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: I.intl.string(I.t.Q8gkVL),
                    action: () => s.A.setMode(Y, void 0, void 0, {
                        analyticsLocations: B
                    }),
                    disabled: G === v.m.STUDIO
                }) : null, O && (0, a.jsx)(o.sLh, {
                    id: "deafen",
                    label: I.intl.string(I.t.wjcRFX),
                    action: () => s.A.toggleSelfDeaf({
                        context: Q,
                        location: "AudioDeviceMenu"
                    }),
                    checked: F
                }, "self-deafen"), U && R]
            })]
        })
    })
}