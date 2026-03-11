/** chunk id: 39672 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(780964),
    r = n(840065),
    o = n(473145),
    d = n(652215),
    c = n(788868),
    u = n(985018);

function _(e) {
    let {
        guildBoostSlot: t,
        onClose: _,
        hasCancelableGuildBoostSlot: g,
        premiumSubscription: A,
        onSelect: m,
        fractionalState: h
    } = e, p = {
        transfer: {
            label: null != t.premiumGuildSubscription ? u.intl.string(u.t["PR0n//"]) : u.intl.string(u.t["+fmEYG"]),
            subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8M0) : null,
            disabled: t.isOnCooldown()
        },
        cancel: {
            label: u.intl.string(u.t.twFU3R),
            subtext: g ? null : u.intl.string(u.t.oQ9lOh),
            disabled: !g
        },
        uncancel: {
            label: u.intl.string(u.t["2glQNp"]),
            subtext: null,
            disabled: !1
        }
    };
    switch (A.status) {
        case d.Dmq.PAST_DUE:
            p.cancel.disabled = !0, p.cancel.subtext = u.intl.string(u.t.WnL6DV), p.uncancel.disabled = !0;
            break;
        case d.Dmq.PAUSE_PENDING:
        case d.Dmq.PAUSED:
            h === c.xc.NONE && (p.transfer.disabled = !0, p.transfer.subtext = u.intl.string(u.t.LiLRRT), p.cancel.subtext = u.intl.string(u.t["1ywaWL"]), p.cancel.disabled = !0, p.uncancel.disabled = !0)
    }
    let x = s.useMemo(() => A.isPausedOrPausePending && h === c.xc.NONE ? (0, i.jsx)(l.Drp, {
        id: "manage-subscription",
        label: u.intl.string(u.t.obRG6Y),
        action: () => (0, r.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL, {
            section: d.nc_.SUBSCRIPTIONS
        }),
        iconLeft: l.xmO,
        leadingAccessory: {
            type: "icon",
            icon: l.xmO
        }
    }) : null, [h, A]);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: m,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: _,
        children: [(0, i.jsx)(l.Drp, {
            id: "apply",
            label: p.transfer.label,
            subtext: p.transfer.subtext,
            action: function() {
                (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 657516));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        guildBoostSlots: [t],
                        locationSection: d.JJy.SETTINGS_PREMIUM
                    })
                })
            },
            disabled: p.transfer.disabled
        }), (0, o.I5)(t) ? (0, i.jsx)(l.Drp, {
            id: "uncancel",
            label: p.uncancel.label,
            subtext: p.uncancel.subtext,
            action: function() {
                (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 342744));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        guildBoostSlotId: t.id
                    })
                })
            },
            disabled: p.uncancel.disabled
        }) : (0, i.jsx)(l.Drp, {
            id: "cancel",
            label: p.cancel.label,
            subtext: p.cancel.subtext,
            action: function() {
                (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 983511));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        guildBoostSlot: t
                    })
                })
            },
            disabled: p.cancel.disabled,
            color: "danger"
        }), x]
    })
}