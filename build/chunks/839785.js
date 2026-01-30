/** chunk id: 839785, original params: t,i,n (module,exports,require) **/
n.d(i, {
    default: () => b
}), n(896048);
var e = n(627968),
    s = n(64700),
    r = n(158954),
    l = n(311907),
    o = n(397927),
    a = n(708197),
    c = n(86070),
    d = n(517164),
    u = n(780964),
    C = n(840065),
    E = n(558628),
    _ = n(754495),
    x = n(939075),
    h = n(652215),
    A = n(985018),
    I = n(86617);

function b(t) {
    let {
        user: i,
        entry: n,
        transitionState: b,
        onAction: m,
        onClose: p,
        onOpenGameSettings: L
    } = t, [O, R] = (0, l.yK)([d.A], () => [d.A.isDeletingEntryHistory, d.A.deleteOutboxEntryError]);
    return s.useEffect(() => a.fq, []), (0, e.jsxs)(r.Modal, {
        title: (0, _.W)(n),
        subtitle: A.intl.format(A.t.KV72oe, {
            settingsHook: (t, i) => {
                let s = (0, x.y)({
                    entry: n,
                    onOpenGameSettings: L
                });
                return (0, e.jsx)(o.MzZ, {
                    onClick: () => {
                        null == m || m({
                            action: "PRESS_CLEAR_HISTORY_DISCLAIMER"
                        }), null != s ? s() : (0, C.openUserSettings)(u.X.PROFILE_PANEL, {
                            section: h.nc_.PROFILE_CUSTOMIZATION
                        }), p()
                    },
                    children: t
                }, i)
            }
        }),
        size: "sm",
        actions: [{
            text: A.intl.string(A.t["ETE/oC"]),
            onClick: p,
            variant: "secondary",
            size: "sm"
        }, {
            text: null != R ? A.intl.string(A.t["5911Lb"]) : A.intl.string(A.t.VkKicb),
            onClick: () => {
                null == m || m({
                    action: "PRESS_CLEAR_HISTORY_BUTTON"
                }), (0, c.FO)(n, i.id, p)
            },
            disabled: O,
            variant: "critical-primary",
            size: "sm"
        }],
        onClose: p,
        transitionState: b,
        children: [null != R ? (0, e.jsxs)("div", {
            className: I.z3,
            children: [(0, e.jsx)(o.aXh, {
                color: o.LU0.colors.ICON_FEEDBACK_CRITICAL
            }), (0, e.jsx)(o.Text, {
                variant: "text-sm/medium",
                children: A.intl.string(A.t.FMbL3s)
            })]
        }) : null, (0, e.jsx)(E.A, {
            user: i,
            entry: n,
            className: I.Nr,
            hideContextMenu: !0
        })]
    })
}