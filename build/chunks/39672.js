/** chunk id: 39672 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(780964),
    a = n(858897),
    o = n(473145),
    d = n(652215),
    c = n(788868),
    u = n(985018);

function m(e) {
    let {
        guildBoostSlot: t,
        onClose: m,
        hasCancelableGuildBoostSlot: g,
        premiumSubscription: _,
        onSelect: x,
        fractionalState: h
    } = e, A = {
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
    switch (_.status) {
        case d.Dmq.PAST_DUE:
            A.cancel.disabled = !0, A.cancel.subtext = u.intl.string(u.t.WnL6DV), A.uncancel.disabled = !0;
            break;
        case d.Dmq.PAUSE_PENDING:
        case d.Dmq.PAUSED:
            h === c.xc.NONE && (A.transfer.disabled = !0, A.transfer.subtext = u.intl.string(u.t.LiLRRT), A.cancel.subtext = u.intl.string(u.t["1ywaWL"]), A.cancel.disabled = !0, A.uncancel.disabled = !0)
    }
    let p = s.useMemo(() => _.isPausedOrPausePending && h === c.xc.NONE ? (0, i.jsx)(l.Drp, {
        id: "manage-subscription",
        label: u.intl.string(u.t.obRG6Y),
        action: () => (0, a.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL),
        iconLeft: l.xmO,
        leadingAccessory: {
            type: "icon",
            icon: l.xmO
        }
    }) : null, [h, _]);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: x,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: m,
        children: [(0, i.jsx)(l.Drp, {
            id: "apply",
            label: A.transfer.label,
            subtext: A.transfer.subtext,
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
            disabled: A.transfer.disabled
        }), (0, o.I5)(t) ? (0, i.jsx)(l.Drp, {
            id: "uncancel",
            label: A.uncancel.label,
            subtext: A.uncancel.subtext,
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
            disabled: A.uncancel.disabled
        }) : (0, i.jsx)(l.Drp, {
            id: "cancel",
            label: A.cancel.label,
            subtext: A.cancel.subtext,
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
            disabled: A.cancel.disabled,
            color: "danger"
        }), p]
    })
}