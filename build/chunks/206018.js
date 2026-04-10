/** chunk id: 206018 params = (module,exports,require) **/
a.d(t, {
    A: () => y
});
var n = a(627968);
a(64700);
var r = a(110259),
    i = a(311907),
    l = a(205693),
    o = a(397927),
    s = a(827343),
    _ = a(820284),
    c = a(688810),
    d = a(139286),
    u = a(48435),
    p = a(485873),
    A = a(24933),
    g = a(964592),
    m = a(430452),
    b = a(383501),
    f = a(532624),
    h = a(17143),
    T = a(819027),
    v = a(652215),
    I = a(509381),
    x = a(731854),
    C = a(985018),
    S = a(933421);

function y(e) {
    let {
        appContext: t,
        onInteraction: a,
        onSelect: y,
        onClose: E,
        maybeRenderPTTCheckbox: M = !1,
        renderDeafenCheckbox: O = !1,
        renderInputProfiles: P = !1,
        renderOutputDevices: N = !1,
        renderOutputVolume: D = !1,
        renderInputDevices: U = !1,
        renderInputVolume: w = !1,
        maybeRenderInputMeter: j = !1,
        renderSettingsButton: k = !1
    } = e, {
        analyticsLocations: B
    } = (0, c.Ay)();
    (0, d.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: B
        }
    });
    let R = (0, T.A)(t),
        L = (0, u.H)({
            deviceType: x.oh.AUDIO_INPUT,
            analyticsLocations: B,
            asSubmenu: !0
        }),
        V = (0, u.H)({
            deviceType: x.oh.AUDIO_OUTPUT,
            analyticsLocations: B,
            asSubmenu: !0
        }),
        G = (0, i.bG)([m.Ay], () => m.Ay.getActiveInputProfile()),
        H = (0, A.A)(B),
        K = (0, p.A)(B),
        Q = (0, g.A)(B),
        W = l.x.DEFAULT,
        X = m.Ay.isSelfDeaf(W),
        F = (0, i.bG)([m.Ay], () => m.Ay.getMode()),
        Y = F === v.TBI.VOICE_ACTIVITY ? v.TBI.PUSH_TO_TALK : v.TBI.VOICE_ACTIVITY,
        q = (0, i.bG)([m.Ay, f.Ay], () => {
            let e = m.Ay.getModeOptions().shortcut?.length > 0,
                t = null != f.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK, !1, !0),
                a = null != f.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || a
        }),
        Z = (0, i.bG)([b.A], () => null != b.A.getChannelId());
    return (0, n.jsx)(_.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(o.W1t, {
            "data-menu-migrated": !0,
            onSelect: y,
            onInteraction: a,
            onClose: E,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": C.intl.string(C.t.ZR1Ss6),
            className: S.MK,
            children: [(0, n.jsxs)(o.rXV, {
                children: [U && L, P && H, N && V]
            }), (0, n.jsxs)(o.rXV, {
                children: [w && K, j && Z && (0, n.jsx)(o.aK1, {
                    id: "input-device-meter",
                    interactive: !1,
                    control: () => (0, n.jsx)(h.A, {
                        notchBackground: h.V.BLACK,
                        location: {
                            section: v.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: S.Eq,
                        notchClassName: S.CO
                    })
                }), D && Q]
            }), (0, n.jsxs)(o.rXV, {
                children: [M && q ? (0, n.jsx)(o.sLh, {
                    checked: F === v.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: C.intl.string(C.t.Q8gkVL),
                    action: () => s.A.setMode(Y, void 0, void 0, {
                        analyticsLocations: B
                    }),
                    disabled: G === I.m.STUDIO
                }) : null, O && (0, n.jsx)(o.sLh, {
                    id: "deafen",
                    label: C.intl.string(C.t.wjcRFX),
                    action: () => s.A.toggleSelfDeaf({
                        context: W,
                        location: "AudioDeviceMenu"
                    }),
                    checked: X
                }, "self-deafen"), k && R]
            })]
        })
    })
}