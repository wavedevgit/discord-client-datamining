/** chunk id: 206018, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968);
n(64700);
var r = n(110259),
    l = n(311907),
    s = n(205693),
    a = n(397927),
    o = n(827343),
    c = n(820284),
    d = n(688810),
    A = n(139286),
    u = n(48435),
    g = n(485873),
    m = n(24933),
    I = n(964592),
    p = n(430452),
    T = n(383501),
    _ = n(532624),
    S = n(723702),
    v = n(17143),
    E = n(819027),
    b = n(652215),
    f = n(509381),
    h = n(731854),
    N = n(985018),
    O = n(220636);

function y(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: y,
        onClose: x,
        maybeRenderPTTCheckbox: C = !1,
        renderDeafenCheckbox: j = !1,
        renderInputProfiles: D = !1,
        renderOutputDevices: M = !1,
        renderOutputVolume: P = !1,
        renderInputDevices: R = !1,
        renderInputVolume: U = !1,
        maybeRenderInputMeter: V = !1,
        renderSettingsButton: G = !1
    } = e, {
        analyticsLocations: L
    } = (0, d.Ay)();
    (0, A.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: L
        }
    });
    let k = (0, E.A)(t),
        B = (0, u.H)({
            deviceType: h.oh.AUDIO_INPUT,
            analyticsLocations: L,
            asSubmenu: !0
        }),
        K = (0, u.H)({
            deviceType: h.oh.AUDIO_OUTPUT,
            analyticsLocations: L,
            asSubmenu: !0
        }),
        X = (0, l.bG)([p.Ay], () => p.Ay.getActiveInputProfile()),
        w = (0, m.A)(L),
        H = (0, g.A)(L),
        F = (0, I.A)(L),
        Y = s.x.DEFAULT,
        Z = p.Ay.isSelfDeaf(Y),
        J = (0, l.bG)([p.Ay], () => p.Ay.getMode()),
        W = J === b.TBI.VOICE_ACTIVITY ? b.TBI.PUSH_TO_TALK : b.TBI.VOICE_ACTIVITY,
        q = (0, l.bG)([p.Ay, _.Ay], () => {
            let e = p.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(b.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(b.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n
        }),
        Q = (0, l.bG)([T.A], () => null != T.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: b.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: y,
            onInteraction: n,
            onClose: x,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": N.intl.string(N.t.ZR1Ss6),
            className: O.MK,
            children: [(0, i.jsxs)(a.rXV, {
                children: [R && B, D && w, M && K]
            }), (0, i.jsxs)(a.rXV, {
                children: [U && H, V && Q && (0, i.jsx)(a.aK1, {
                    id: "input-device-meter",
                    control: () => (0, i.jsx)(v.A, {
                        notchBackground: v.V.BLACK,
                        location: {
                            section: b.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: O.Eq,
                        notchClassName: O.CO
                    })
                }), P && F]
            }), (0, i.jsxs)(a.rXV, {
                children: [C && S.isPlatformEmbedded && q ? (0, i.jsx)(a.sLh, {
                    checked: J === b.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: N.intl.string(N.t.Q8gkVL),
                    action: () => o.A.setMode(W, void 0, void 0, {
                        analyticsLocations: L
                    }),
                    disabled: X === f.m.STUDIO
                }) : null, j && (0, i.jsx)(a.sLh, {
                    id: "deafen",
                    label: N.intl.string(N.t.wjcRFX),
                    action: () => o.A.toggleSelfDeaf({
                        context: Y,
                        location: "AudioDeviceMenu"
                    }),
                    checked: Z
                }, "self-deafen"), G && k]
            })]
        })
    })
}