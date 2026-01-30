/** chunk id: 845187, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => h,
    default: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(397927),
    s = n(817281),
    o = n(429913),
    c = n(954571),
    u = n(837921),
    d = n(652215),
    p = n(985018);
let h = "Activity Encourages Hardware Acceleration";

function g(e) {
    var t;
    let {
        applicationId: n,
        transitionState: g,
        onClose: f
    } = e, [m, A] = i.useState(!1), [_] = (0, o.A)([n]), b = null != (t = null == _ ? void 0 : _.name) ? t : "This Activity";
    i.useEffect(() => {
        c.default.track(d.HAw.OPEN_MODAL, {
            type: h
        })
    }, []);
    let E = async () => {
        let e = "temporary";
        m && (e = "permanent", s.Ay.updatedUnsyncedSettings({
            disableActivityHardwareAccelerationPrompt: !0
        })), c.default.track(d.HAw.MODAL_DISMISSED, {
            type: h,
            dismiss_type: e
        }), await f()
    }, O = async () => {
        c.default.track(d.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
            application_id: n
        }), u.Ay.setEnableHardwareAcceleration(!0), await E()
    };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        transitionState: g,
        onClose: E,
        "aria-label": p.intl.string(p.t.NQkK4l),
        title: p.intl.string(p.t.NQkK4l),
        actionBarInput: (0, r.jsx)(a.Checkbox, {
            checked: m,
            onChange: () => A(!m),
            label: p.intl.string(p.t["5E9SB9"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: p.intl.string(p.t["Ibf5/h"]),
            onClick: E
        }, {
            variant: "primary",
            text: p.intl.string(p.t["/wlDqi"]),
            onClick: O
        }],
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: p.intl.format(p.t.B9eiaK, {
                applicationName: b
            })
        })
    })
}