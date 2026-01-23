/** Chunk was on 43139 **/
/** chunk id: 179950, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => u
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(397927),
    s = r(10005),
    i = r(208993),
    c = r(842130),
    a = r(985018),
    d = r(229468);
let u = e => {
    let {
        currentUser: t,
        otherUser: r,
        transitionState: u,
        onClose: b
    } = e, f = l.useCallback(() => {
        b()
    }, [b]), p = t.nsfwAllowed, [j, y] = l.useState(!1), [g, x] = l.useState(!1), h = l.useCallback(() => {
        x(!0), y(!1)
    }, []), {
        disconnectLinkRequest: O,
        isDisconnectLoading: m
    } = (0, s.A)({
        onSuccess: f,
        onError: h
    });
    return (0, n.jsxs)(o.dWK, {
        transitionState: u,
        onClose: b,
        children: [g && (0, n.jsx)(o.wx6, {
            type: "critical",
            children: a.intl.string(c.default.krIDdy)
        }), (0, n.jsxs)(o.cwr, {
            children: [(0, n.jsx)(i.A.Header, {
                currentUser: t,
                otherUser: r,
                header: a.intl.formatToPlainString(c.default["NMSTb/"], {
                    isAdult: String(p)
                }),
                icon: (0, n.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: d.ut
                })
            }), (0, n.jsxs)(o.BJc, {
                gap: 16,
                children: [(0, n.jsx)(i.A.Notice, {
                    notice: p ? a.intl.string(c.default.EvMGLT) : a.intl.string(c.default.f1SUeW)
                }), (0, n.jsx)(o.Checkbox, {
                    checked: j,
                    onChange: e => {
                        y(e), x(!1)
                    },
                    label: p ? a.intl.string(c.default["/MYCee"]) : a.intl.string(c.default.VJaHUb)
                })]
            })]
        }), (0, n.jsx)(o.H7u, {
            actionsFullWidth: !0,
            actions: [{
                variant: "secondary",
                text: a.intl.string(a.t["ETE/oC"]),
                onClick: b,
                disabled: m
            }, {
                variant: "critical-primary",
                text: a.intl.string(c.default["c5L+sl"]),
                onClick: () => {
                    x(!1), O(r.id)
                },
                disabled: !j || m,
                loading: m
            }]
        })]
    })
}