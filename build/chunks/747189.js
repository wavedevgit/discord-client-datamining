/** chunk id: 747189 params = (module,exports,require) **/
"use strict";
i.d(t, {
    V: () => _,
    t: () => h
});
var n = i(627968);
i(64700);
var s = i(397927),
    a = i(684748),
    l = i(532624),
    r = i(350535),
    o = i(572164),
    d = i(652215),
    c = i(672396),
    u = i(985018);

function h() {
    let {
        trackView: e,
        trackClick: t
    } = (0, a.Y)(c.KS.ClipsReminderNotification, {
        notif_type: c.KS.ClipsReminderNotification
    }), i = l.Ay.getKeybindForAction(d.hCu.SAVE_CLIP), h = (0, o.TD)();
    if (null == i || !h) return null;
    let _ = r.dI(i.shortcut, !0);
    return {
        title: u.intl.format(u.t.S5uhCN, {
            keybind: _,
            keybindHook: () => (0, n.jsx)("span", {
                style: {
                    display: "inline-block"
                },
                children: (0, n.jsx)(s.e7I, {
                    shortcut: _
                })
            })
        }),
        icon: (0, n.jsx)(s.xgA, {
            size: "xs",
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

function _(e) {
    let {
        trackView: t,
        trackClick: i
    } = (0, a.Y)(c.KS.ClipsNotification, {
        notif_type: c.KS.ClipsNotification
    });
    return {
        title: e,
        icon: (0, n.jsx)(s.xgA, {
            size: "xs",
            color: "currentColor"
        }),
        onNotificationShow: () => {
            t()
        },
        onDismissClick: () => {
            i("dismiss")
        }
    }
}