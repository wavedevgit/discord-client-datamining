/** chunk id: 401695, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => H
});
var n = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    r = l(417597),
    C = l(565787),
    o = l(397927),
    d = l(530347),
    c = l(504049),
    u = l(266047),
    m = l(221950),
    x = l(652215),
    h = l(985018);
let g = (0, C.k)(d.A);

function H(e) {
    let {
        guildId: t,
        onClose: l
    } = e, s = (0, r.bG)([u.A], () => u.A.getSearchStateByGuildId(t), [t], a()), C = (0, c.Tj)(t), d = i.useCallback(() => {
        s.requireUnusualDmActivity || C(c.Zp.UNUSUAL_DM_ACTIVITY), (0, m.Ld)(t, {
            ...s,
            requireUnusualDmActivity: !s.requireUnusualDmActivity
        })
    }, [t, s, C]), H = i.useCallback(() => {
        s.requireCommunicationDisabled || C(c.Zp.COMMUNICATION_DISABLED), (0, m.Ld)(t, {
            ...s,
            requireCommunicationDisabled: !s.requireCommunicationDisabled
        })
    }, [t, s, C]), j = i.useCallback(() => {
        s.requireUnusualAccountActivity || C(c.Zp.UNUSUAL_ACCOUNT_ACTIVITY), (0, m.Ld)(t, {
            ...s,
            requireUnusualAccountActivity: !s.requireUnusualAccountActivity
        })
    }, [t, s, C]), _ = i.useCallback(() => {
        s.requireUsernameQuarantined || C(c.Zp.USERNAME_QUARANTINED), (0, m.Ld)(t, {
            ...s,
            requireUsernameQuarantined: !s.requireUsernameQuarantined
        })
    }, [t, s, C]);
    return (0, n.jsx)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": h.intl.string(h.t.k9m8Rg),
        onSelect: x.tEg,
        children: (0, n.jsxs)(o.rXV, {
            children: [(0, n.jsx)(o.sLh, {
                id: "toggle-require-unusual-dm-activity",
                label: h.intl.string(h.t.ZRnON3),
                leftIcon: o.EF8,
                leadingAccessory: {
                    type: "icon",
                    icon: o.EF8
                },
                action: d,
                checked: s.requireUnusualDmActivity
            }), (0, n.jsx)(o.sLh, {
                id: "toggle-require-communication-disabled",
                label: h.intl.string(h.t.z3wbj8),
                leftIcon: o.gQi,
                leadingAccessory: {
                    type: "icon",
                    icon: o.gQi
                },
                action: H,
                checked: s.requireCommunicationDisabled
            }), (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(o.sLh, {
                    id: "toggle-require-unusual-account-activity",
                    label: h.intl.string(h.t.DIQsD9),
                    leftIcon: g,
                    leadingAccessory: {
                        type: "icon",
                        icon: g
                    },
                    action: j,
                    checked: s.requireUnusualAccountActivity
                }), (0, n.jsx)(o.sLh, {
                    id: "toggle-require-username-quarantined",
                    label: h.intl.string(h.t.Jloklk),
                    leftIcon: o._mZ,
                    leadingAccessory: {
                        type: "icon",
                        icon: o._mZ
                    },
                    action: _,
                    checked: s.requireUsernameQuarantined
                })]
            })]
        })
    })
}