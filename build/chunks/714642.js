/** chunk id: 714642, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => m,
    t: () => g
}), n(747238);
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(572164),
    a = n(87001),
    s = n(532624),
    o = n(350535),
    u = n(22802),
    c = n(592598),
    d = n(581730),
    h = n(672396),
    p = n(652215),
    f = n(985018);

function g() {
    if (c.A.isNotificationDisabled(h.KS.ClipsReminderNotification) || a.A.getWindowOpen(p.MLl.ACTIVITY_POPOUT)) return null;
    let {
        trackView: e,
        trackClick: t
    } = (0, d.Y9)(h.KS.ClipsReminderNotification, {
        notif_type: h.KS.ClipsReminderNotification
    }), n = s.Ay.getKeybindForAction(p.hCu.SAVE_CLIP), g = (0, l.TD)();
    if (null == n || !g) return null;
    let m = o.dI(n.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCN, {
            keybind: m,
            keybindHook: (e, t) => (0, i.jsx)(u.b, {
                keybind: m.split("+")
            }, t)
        }),
        icon: (0, i.jsx)(r.xgA, {
            size: "lg",
            color: "currentColor"
        }),
        onNotificationShow: () => {
            e()
        },
        onDismissClick: () => {
            t("dismiss")
        }
    }
}

function m(e) {
    let {
        trackView: t,
        trackClick: n
    } = (0, d.Y9)(h.KS.ClipsNotification, {
        notif_type: h.KS.ClipsNotification
    });
    return {
        title: e,
        icon: (0, i.jsx)(r.xgA, {
            size: "lg",
            color: "currentColor"
        }),
        onNotificationShow: () => {
            t()
        },
        onDismissClick: () => {
            n("dismiss")
        }
    }
}