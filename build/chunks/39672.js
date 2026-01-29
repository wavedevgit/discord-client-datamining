/** Chunk was on 2827 **/
/** chunk id: 39672, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(780964),
    a = n(840065),
    o = n(473145),
    c = n(652215),
    d = n(788868),
    u = n(985018);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function m(e) {
    let {
        guildBoostSlot: t,
        onClose: m,
        hasCancelableGuildBoostSlot: g,
        premiumSubscription: A,
        onSelect: f,
        fractionalState: b
    } = e, h = {
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
        case c.Dmq.PAST_DUE:
            h.cancel.disabled = !0, h.cancel.subtext = u.intl.string(u.t.WnL6DV), h.uncancel.disabled = !0;
            break;
        case c.Dmq.PAUSE_PENDING:
        case c.Dmq.PAUSED:
            b === d.xc.NONE && (h.transfer.disabled = !0, h.transfer.subtext = u.intl.string(u.t.LiLRRT), h.cancel.subtext = u.intl.string(u.t["1ywaWL"]), h.cancel.disabled = !0, h.uncancel.disabled = !0)
    }
    let E = i.useMemo(() => A.isPausedOrPausePending && b === d.xc.NONE ? (0, r.jsx)(l.Drp, {
        id: "manage-subscription",
        label: u.intl.string(u.t.obRG6Y),
        action: () => (0, a.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL, {
            section: c.nc_.SUBSCRIPTIONS
        }),
        iconLeft: l.xmO,
        leadingAccessory: {
            type: "icon",
            icon: l.xmO
        }
    }) : null, [b, A]);
    return (0, r.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: f,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: m,
        children: [(0, r.jsx)(l.Drp, {
            id: "apply",
            label: h.transfer.label,
            subtext: h.transfer.subtext,
            action: function() {
                (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 657516));
                    return n => (0, r.jsx)(e, p(_({}, n), {
                        guildBoostSlots: [t],
                        locationSection: c.JJy.SETTINGS_PREMIUM
                    }))
                })
            },
            disabled: h.transfer.disabled
        }), (0, o.I5)(t) ? (0, r.jsx)(l.Drp, {
            id: "uncancel",
            label: h.uncancel.label,
            subtext: h.uncancel.subtext,
            action: function() {
                (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 342744));
                    return n => (0, r.jsx)(e, p(_({}, n), {
                        guildBoostSlotId: t.id
                    }))
                })
            },
            disabled: h.uncancel.disabled
        }) : (0, r.jsx)(l.Drp, {
            id: "cancel",
            label: h.cancel.label,
            subtext: h.cancel.subtext,
            action: function() {
                (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 983511));
                    return n => (0, r.jsx)(e, p(_({}, n), {
                        guildBoostSlot: t
                    }))
                })
            },
            disabled: h.cancel.disabled,
            color: "danger"
        }), E]
    })
}