/** chunk id: 206018 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var a = n(627968);
n(64700);
var r = n(110259),
    i = n(311907),
    l = n(205693),
    o = n(397927),
    s = n(827343),
    _ = n(820284),
    u = n(688810),
    c = n(139286),
    d = n(48435),
    p = n(485873),
    A = n(24933),
    f = n(964592),
    g = n(430452),
    m = n(383501),
    b = n(532624),
    C = n(723702),
    T = n(17143),
    I = n(819027),
    v = n(652215),
    S = n(509381),
    h = n(731854),
    x = n(985018),
    y = n(933421);

function E(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: E,
        onClose: M,
        maybeRenderPTTCheckbox: O = !1,
        renderDeafenCheckbox: P = !1,
        renderInputProfiles: N = !1,
        renderOutputDevices: k = !1,
        renderOutputVolume: D = !1,
        renderInputDevices: U = !1,
        renderInputVolume: w = !1,
        maybeRenderInputMeter: L = !1,
        renderSettingsButton: R = !1
    } = e, {
        analyticsLocations: j
    } = (0, u.Ay)();
    (0, c.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: j
        }
    });
    let B = (0, I.A)(t),
        G = (0, d.H)({
            deviceType: h.oh.AUDIO_INPUT,
            analyticsLocations: j,
            asSubmenu: !0
        }),
        V = (0, d.H)({
            deviceType: h.oh.AUDIO_OUTPUT,
            analyticsLocations: j,
            asSubmenu: !0
        }),
        H = (0, i.bG)([g.Ay], () => g.Ay.getActiveInputProfile()),
        W = (0, A.A)(j),
        K = (0, p.A)(j),
        Q = (0, f.A)(j),
        F = l.x.DEFAULT,
        X = g.Ay.isSelfDeaf(F),
        J = (0, i.bG)([g.Ay], () => g.Ay.getMode()),
        Y = J === v.TBI.VOICE_ACTIVITY ? v.TBI.PUSH_TO_TALK : v.TBI.VOICE_ACTIVITY,
        z = (0, i.bG)([g.Ay, b.Ay], () => {
            let e = g.Ay.getModeOptions().shortcut?.length > 0,
                t = null != b.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK, !1, !0),
                n = null != b.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n
        }),
        q = (0, i.bG)([m.A], () => null != m.A.getChannelId());
    return (0, a.jsx)(_.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, a.jsxs)(o.W1t, {
            "data-menu-migrated": !0,
            onSelect: E,
            onInteraction: n,
            onClose: M,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": x.intl.string(x.t.ZR1Ss6),
            className: y.MK,
            children: [(0, a.jsxs)(o.rXV, {
                children: [U && G, N && W, k && V]
            }), (0, a.jsxs)(o.rXV, {
                children: [w && K, L && q && (0, a.jsx)(o.aK1, {
                    id: "input-device-meter",
                    control: () => (0, a.jsx)(T.A, {
                        notchBackground: T.V.BLACK,
                        location: {
                            section: v.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: y.Eq,
                        notchClassName: y.CO
                    })
                }), D && Q]
            }), (0, a.jsxs)(o.rXV, {
                children: [O && C.isPlatformEmbedded && z ? (0, a.jsx)(o.sLh, {
                    checked: J === v.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: x.intl.string(x.t.Q8gkVL),
                    action: () => s.A.setMode(Y, void 0, void 0, {
                        analyticsLocations: j
                    }),
                    disabled: H === S.m.STUDIO
                }) : null, P && (0, a.jsx)(o.sLh, {
                    id: "deafen",
                    label: x.intl.string(x.t.wjcRFX),
                    action: () => s.A.toggleSelfDeaf({
                        context: F,
                        location: "AudioDeviceMenu"
                    }),
                    checked: X
                }, "self-deafen"), R && B]
            })]
        })
    })
}