/** chunk id: 845187 params = (module,exports,require) **/
n.d(t, {
    a: () => _,
    default: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(158954),
    l = n(397927),
    s = n(817281),
    o = n(429913),
    d = n(954571),
    c = n(837921),
    u = n(652215),
    A = n(985018);
let _ = "Activity Encourages Hardware Acceleration";

function h(e) {
    let {
        applicationId: t,
        transitionState: n,
        onClose: h
    } = e, [m, g] = a.useState(!1), [p] = (0, o.A)([t]), E = p?.name ?? "This Activity";
    a.useEffect(() => {
        d.default.track(u.HAw.OPEN_MODAL, {
            type: _
        })
    }, []);
    let I = async () => {
        let e = "temporary";
        m && (e = "permanent", s.Ay.updatedUnsyncedSettings({
            disableActivityHardwareAccelerationPrompt: !0
        })), d.default.track(u.HAw.MODAL_DISMISSED, {
            type: _,
            dismiss_type: e
        }), await h()
    }, f = async () => {
        d.default.track(u.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
            application_id: t
        }), c.Ay.setEnableHardwareAcceleration(!0), await I()
    };
    return (0, i.jsx)(r.Modal, {
        size: "md",
        transitionState: n,
        onClose: I,
        "aria-label": A.intl.string(A.t.NQkK4l),
        title: A.intl.string(A.t.NQkK4l),
        actionBarInput: (0, i.jsx)(l.Checkbox, {
            checked: m,
            onChange: () => g(!m),
            label: A.intl.string(A.t["5E9SB9"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: A.intl.string(A.t["Ibf5/h"]),
            onClick: I
        }, {
            variant: "primary",
            text: A.intl.string(A.t["/wlDqi"]),
            onClick: f
        }],
        children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: A.intl.format(A.t.B9eiaK, {
                applicationName: E
            })
        })
    })
}