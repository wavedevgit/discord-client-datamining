/** chunk id: 39672 params = (module,exports,require) **/
n.d(t, {
    A: () => m
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

function m(e) {
    let {
        guildBoostSlot: t,
        onClose: m,
        hasCancelableGuildBoostSlot: _,
        premiumSubscription: g,
        onSelect: x,
        fractionalState: A
    } = e, h = {
        transfer: {
            label: null != t.premiumGuildSubscription ? u.intl.string(u.t["PR0n//"]) : u.intl.string(u.t["+fmEYG"]),
            subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8M0) : null,
            disabled: t.isOnCooldown()
        },
        cancel: {
            label: u.intl.string(u.t.twFU3R),
            subtext: _ ? null : u.intl.string(u.t.oQ9lOh),
            disabled: !_
        },
        uncancel: {
            label: u.intl.string(u.t["2glQNp"]),
            subtext: null,
            disabled: !1
        }
    };
    switch (g.status) {
        case d.Dmq.PAST_DUE:
            h.cancel.disabled = !0, h.cancel.subtext = u.intl.string(u.t.WnL6DV), h.uncancel.disabled = !0;
            break;
        case d.Dmq.PAUSE_PENDING:
        case d.Dmq.PAUSED:
            A === c.xc.NONE && (h.transfer.disabled = !0, h.transfer.subtext = u.intl.string(u.t.LiLRRT), h.cancel.subtext = u.intl.string(u.t["1ywaWL"]), h.cancel.disabled = !0, h.uncancel.disabled = !0)
    }
    let p = s.useMemo(() => g.isPausedOrPausePending && A === c.xc.NONE ? (0, i.jsx)(l.Drp, {
        id: "manage-subscription",
        label: u.intl.string(u.t.obRG6Y),
        action: () => (0, r.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL),
        iconLeft: l.xmO,
        leadingAccessory: {
            type: "icon",
            icon: l.xmO
        }
    }) : null, [A, g]);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: x,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: m,
        children: [(0, i.jsx)(l.Drp, {
            id: "apply",
            label: h.transfer.label,
            subtext: h.transfer.subtext,
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
            disabled: h.transfer.disabled
        }), (0, o.I5)(t) ? (0, i.jsx)(l.Drp, {
            id: "uncancel",
            label: h.uncancel.label,
            subtext: h.uncancel.subtext,
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
            disabled: h.uncancel.disabled
        }) : (0, i.jsx)(l.Drp, {
            id: "cancel",
            label: h.cancel.label,
            subtext: h.cancel.subtext,
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
            disabled: h.cancel.disabled,
            color: "danger"
        }), p]
    })
}