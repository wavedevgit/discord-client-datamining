/** chunk id: 206018, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => C
});
var n = r(627968);
r(64700);
var o = r(110259),
    i = r(311907),
    l = r(205693),
    a = r(397927),
    u = r(827343),
    c = r(820284),
    s = r(688810),
    b = r(139286),
    d = r(48435),
    p = r(485873),
    O = r(24933),
    f = r(964592),
    m = r(430452),
    y = r(383501),
    v = r(532624),
    g = r(723702),
    j = r(17143),
    A = r(819027),
    P = r(652215),
    h = r(509381),
    _ = r(731854),
    S = r(985018),
    w = r(220636);

function C(e) {
    let {
        appContext: t,
        onInteraction: r,
        onSelect: C,
        onClose: E,
        maybeRenderPTTCheckbox: D = !1,
        renderDeafenCheckbox: I = !1,
        renderInputProfiles: T = !1,
        renderOutputDevices: k = !1,
        renderOutputVolume: x = !1,
        renderInputDevices: N = !1,
        renderInputVolume: M = !1,
        maybeRenderInputMeter: V = !1,
        renderSettingsButton: U = !1
    } = e, {
        analyticsLocations: R
    } = (0, s.Ay)();
    (0, b.A)({
        type: o.ImpressionTypes.MENU,
        name: o.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: {
            location_stack: R
        }
    });
    let L = (0, A.A)(t),
        B = (0, d.H)({
            deviceType: _.oh.AUDIO_INPUT,
            analyticsLocations: R,
            asSubmenu: !0
        }),
        F = (0, d.H)({
            deviceType: _.oh.AUDIO_OUTPUT,
            analyticsLocations: R,
            asSubmenu: !0
        }),
        H = (0, i.bG)([m.A], () => m.A.getActiveInputProfile()),
        K = (0, O.A)(R),
        X = (0, p.A)(R),
        G = (0, f.A)(R),
        J = l.x.DEFAULT,
        Z = m.A.isSelfDeaf(J),
        q = (0, i.bG)([m.A], () => m.A.getMode()),
        Y = q === P.TBI.VOICE_ACTIVITY ? P.TBI.PUSH_TO_TALK : P.TBI.VOICE_ACTIVITY,
        Q = (0, i.bG)([m.A, v.Ay], () => {
            var e;
            let t = (null == (e = m.A.getModeOptions().shortcut) ? void 0 : e.length) > 0,
                r = null != v.Ay.getKeybindForAction(P.hCu.PUSH_TO_TALK, !1, !0),
                n = null != v.Ay.getKeybindForAction(P.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || r || n
        }),
        W = (0, i.bG)([y.A], () => null != y.A.getChannelId());
    return (0, n.jsx)(c.A, {
        object: P.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: C,
            onInteraction: r,
            onClose: E,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": S.intl.string(S.t.ZR1Ss6),
            className: w.MK,
            children: [(0, n.jsxs)(a.rXV, {
                children: [N && B, T && K, k && F]
            }), (0, n.jsxs)(a.rXV, {
                children: [M && X, V && W && (0, n.jsx)(a.aK1, {
                    id: "input-device-meter",
                    control: () => (0, n.jsx)(j.A, {
                        notchBackground: j.V.BLACK,
                        location: {
                            section: P.JJy.CONTEXT_MENU
                        },
                        meterOnly: !0,
                        containerClassName: w.Eq,
                        notchClassName: w.CO
                    })
                }), x && G]
            }), (0, n.jsxs)(a.rXV, {
                children: [D && g.isPlatformEmbedded && Q ? (0, n.jsx)(a.sLh, {
                    checked: q === P.TBI.PUSH_TO_TALK,
                    id: "input-mode",
                    label: S.intl.string(S.t.Q8gkVL),
                    action: () => u.A.setMode(Y, void 0, void 0, {
                        analyticsLocations: R
                    }),
                    disabled: H === h.my.STUDIO
                }) : null, I && (0, n.jsx)(a.sLh, {
                    id: "deafen",
                    label: S.intl.string(S.t.wjcRFX),
                    action: () => u.A.toggleSelfDeaf({
                        context: J,
                        location: "AudioDeviceMenu"
                    }),
                    checked: Z
                }, "self-deafen"), U && L]
            })]
        })
    })
}