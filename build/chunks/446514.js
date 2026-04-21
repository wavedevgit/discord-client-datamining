/** chunk id: 446514 params = (module,exports,require) **/
"use strict";
s.d(e, {
    default: () => y
});
var n = s(627968),
    a = s(64700),
    r = s(719442),
    i = s(253018),
    l = s(311907),
    o = s(397927),
    c = s(442433),
    p = s(955572),
    u = s(775602),
    d = s(614203),
    g = s(253932),
    f = s(954571),
    b = s(723702),
    x = s(837921),
    m = s(711371),
    T = s(938746),
    h = s(652215),
    S = s(985018);

function y(t) {
    let {
        text: e,
        editor: s,
        target: y,
        onHeightUpdate: A,
        onSelect: C
    } = t, E = a.useCallback(t => {
        i.rL.focus(s), setTimeout(() => {
            t?.(), m.VW.focus(s)
        }, 0)
    }, [s]), j = a.useCallback(() => {
        (0, c.Z_)(E)
    }, [E]), D = a.useCallback(() => {
        let t = x.Ay.readClipboard();
        0 !== t.length && E(() => {
            r.gB.insertText(s, t)
        })
    }, [E, s]), [_, L] = (0, d.A)({
        text: e,
        target: y,
        onHeightUpdate: A
    }), k = (0, T.A)(s), N = (0, l.bG)([u.A], () => u.A.isSubmitButtonEnabled), O = g._3.useSetting();
    if (!b.isPlatformEmbedded) return null;
    let v = s.chatInputType?.commands?.enabled ?? !1,
        M = s.chatInputType?.stickers?.autoSuggest ?? !1,
        R = s.chatInputType?.submit?.button ?? !1,
        U = v || M,
        G = x.Ay.clipboardHasMixedContent(),
        w = "" !== e ? [(0, n.jsx)(o.Drp, {
            id: "cut",
            label: S.intl.string(S.t.pNPVhe),
            shortcut: (0, b.isMac)() ? "⌘X" : "Ctrl+X",
            action: () => x.Ay.cut()
        }, "cut"), (0, n.jsx)(o.Drp, {
            id: "copy",
            label: S.intl.string(S.t.OpuAlK),
            shortcut: (0, b.isMac)() ? "⌘C" : "Ctrl+C",
            action: () => x.Ay.copy()
        }, "copy")] : null,
        I = (0, n.jsx)(o.sLh, {
            id: "command-suggestions",
            label: S.intl.string(S.t["9rJKF7"]),
            checked: O,
            action: () => {
                let t = !O;
                g._3.updateSetting(t), f.default.track(h.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                    enabled: t,
                    location: {
                        object: h.ZSU.CONTEXT_MENU
                    }
                })
            }
        });
    return (0, n.jsxs)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: j,
        "aria-label": S.intl.string(S.t.NWlDSI),
        onSelect: C,
        children: [U && (0, n.jsx)(o.Drp, {
            id: "suggestions",
            label: S.intl.string(S.t.zgxg7v),
            children: v && I
        }), R && (0, n.jsx)(o.sLh, {
            id: "submit-button",
            label: S.intl.string(S.t.G8XDyj),
            checked: N,
            action: () => {
                (0, p.Xt)()
            }
        }), (0, n.jsx)(o.rXV, {
            children: _
        }), (0, n.jsxs)(o.rXV, {
            children: [L, k]
        }), (0, n.jsxs)(o.rXV, {
            children: [w, (0, n.jsx)(o.Drp, {
                id: "paste",
                label: S.intl.string(S.t.lMUxVi),
                shortcut: (0, b.isMac)() ? "⌘V" : "Ctrl+V",
                action: () => x.Ay.paste()
            }), G && (0, n.jsx)(o.Drp, {
                id: "paste-as-plain-text",
                label: S.intl.string(S.t.X92Qnr),
                shortcut: (0, b.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                action: D
            })]
        })]
    })
}