/** chunk id: 206018 params = (module,exports,require) **/
n.d(t, {
    A: () => N
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
    m = n(485873),
    A = n(24933),
    g = n(964592),
    _ = n(430452),
    p = n(383501),
    f = n(532624),
    E = n(17143),
    C = n(819027),
    x = n(652215),
    S = n(509381),
    I = n(731854),
    T = n(985018),
    v = n(347933);

function N(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: N,
        onClose: y,
        maybeRenderPTTCheckbox: b = !1,
        renderDeafenCheckbox: j = !1,
        renderInputProfiles: R = !1,
        renderOutputDevices: M = !1,
        renderOutputVolume: L = !1,
        renderInputDevices: D = !1,
        renderInputVolume: O = !1,
        maybeRenderInputMeter: P = !1,
        renderSettingsButton: w = !1
    } = e, {
        analyticsLocations: k
    } = (0, d.Ay)();
    (0, u.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: k
        }
    });
    let U = (0, C.A)(t),
        G = (0, h.H)({
            deviceType: I.oh.AUDIO_INPUT,
            analyticsLocations: k,
            asSubmenu: !0
        }),
        F = (0, h.H)({
            deviceType: I.oh.AUDIO_OUTPUT,
            analyticsLocations: k,
            asSubmenu: !0
        }),
        H = (0, s.bG)([_.Ay], () => _.Ay.getActiveInputProfile()),
        B = (0, A.A)(k),
        V = (0, m.A)(k),
        W = (0, g.A)(k),
        K = a.x.DEFAULT,
        z = _.Ay.isSelfDeaf(K),
        Y = (0, s.bG)([_.Ay], () => _.Ay.getMode()),
        J = Y === x.TBI.VOICE_ACTIVITY ? x.TBI.PUSH_TO_TALK : x.TBI.VOICE_ACTIVITY,
        q = (0, s.bG)([_.Ay, f.Ay], () => {
            let e = _.Ay.getModeOptions().shortcut?.length > 0,
                t = null != f.Ay.getKeybindForAction(x.hCu.PUSH_TO_TALK, !1, !0),
                n = null != f.Ay.getKeybindForAction(x.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n
        }),
        $ = (0, s.bG)([p.A], () => null != p.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: x.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            onSelect: N,
            onInteraction: n,
            onClose: y,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": T.intl.string(T.t.ZR1Ss6),
            className: v.MK,
            children: [(0, i.jsxs)(r.rXV, {
                children: [D && G, R && B, M && F]
            }), (0, i.jsxs)(r.rXV, {
                children: [O && V, P && $ && (0, i.jsx)(r.aK1, {
                    id: "input-device-meter",
                    interactive: !1,
                    control: () => (0, i.jsx)(E.A, {
                        notchBackground: E.V.BLACK,
                        location: {
                            section: x.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: v.Eq,
                        notchClassName: v.CO
                    })
                }), L && W]
            }), (0, i.jsxs)(r.rXV, {
                children: [b && q ? (0, i.jsx)(r.sLh, {
                    checked: Y === x.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: T.intl.string(T.t.Q8gkVL),
                    action: () => o.A.setMode(J, void 0, void 0, {
                        analyticsLocations: k
                    }),
                    disabled: H === S.m.STUDIO
                }) : null, j && (0, i.jsx)(r.sLh, {
                    id: "deafen",
                    label: T.intl.string(T.t.wjcRFX),
                    action: () => o.A.toggleSelfDeaf({
                        context: K,
                        location: "AudioDeviceMenu"
                    }),
                    checked: z
                }, "self-deafen"), w && U]
            })]
        })
    })
}