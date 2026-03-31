/** chunk id: 420216 params = (module,exports,require) **/
n.d(t, {
    r: () => S
});
var i = n(627968);
n(64700);
var l = n(554146),
    s = n(397927),
    a = n(803306),
    r = n(573648),
    o = n(975807),
    c = n(793574),
    d = n(882997),
    u = n(662427),
    h = n(532794),
    A = n(745299),
    _ = n(976860),
    m = n(780964),
    g = n(840065),
    p = n(879945),
    f = n(954571),
    x = n(379848),
    E = n(49999),
    I = n(652215),
    C = n(788868),
    N = n(985018),
    T = n(381703);
let S = e => {
    let {
        dismissibleContent: t,
        noticeType: S
    } = e;
    return (0, i.jsx)(x.Ay, {
        contentTypes: [t],
        groupName: E.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: x
            } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.UNKNOWN),
                            noticeType: S
                        }), N.intl.string(N.t["+xn1o5"]), (0, i.jsx)("i", {
                            className: T.c9
                        }), (0, i.jsx)("i", {
                            className: T.Vz
                        }), (0, i.jsx)("i", {
                            className: T.p0
                        }), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, s.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                                    return t => (0, i.jsx)(e, {
                                        source: "Top Bar Nag",
                                        ...t
                                    })
                                })
                            },
                            children: N.intl.string(N.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.UNKNOWN),
                            noticeType: S
                        }), (0, i.jsx)("i", {
                            className: T.TN
                        }), N.intl.string(N.t.lgwX26), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, o.A)(I.AMi.META_QUEST), x(E.i.TAKE_ACTION)
                            },
                            children: N.intl.string(N.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.SPOTIFY,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.UNKNOWN),
                            noticeType: S
                        }), (0, i.jsx)(p.A, {
                            className: T.tV
                        }), N.intl.string(N.t["5NUVHH"]), (0, i.jsx)(s.Z_L, {
                            onClick: () => (0, d.A)({
                                platformType: I.fg2.SPOTIFY,
                                location: "Notice Bar"
                            }),
                            noticeType: S,
                            children: N.intl.string(N.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PLAYSTATION,
                        children: [(0, i.jsx)(s.PMB, {
                            noticeType: S,
                            onClick: () => x(E.i.UNKNOWN)
                        }), (0, i.jsx)("img", {
                            alt: "",
                            className: T.tV,
                            src: r.A.get(I.fg2.PLAYSTATION).icon.whiteSVG
                        }), N.intl.string(N.t.WHWgoY), (0, i.jsx)(s.zr9, {
                            onClick: () => (0, d.A)({
                                platformType: I.fg2.PLAYSTATION,
                                location: "Notice Bar"
                            }),
                            children: N.intl.string(N.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.USER_DISMISS),
                            noticeType: S
                        }), N.intl.string(N.t["3qKN/h"]), (0, i.jsx)(s.Z_L, {
                            onClick: async () => {
                                x(E.i.TAKE_ACTION);
                                try {
                                    let {
                                        startRegisterWebAuthnCredential: e
                                    } = await Promise.resolve().then(n.bind(n, 917136)), {
                                        ticket: t,
                                        challenge: l
                                    } = await e();
                                    (0, s.mMO)(async () => {
                                        let {
                                            RegisterWebAuthnCredentialModal: e
                                        } = await Promise.all([n.e("44667"), n.e("35510")]).then(n.bind(n, 359990));
                                        return n => (0, i.jsx)(e, {
                                            ...n,
                                            ticket: t,
                                            challenge: l,
                                            showAccountSettingsButton: !0
                                        })
                                    })
                                } catch (e) {
                                    (0, s.showToast)((0, s.createToast)(N.intl.string(N.t.xSCvBf), s.ToastType.FAILURE))
                                }
                            },
                            noticeType: S,
                            children: N.intl.string(N.t["ff/XXy"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)("span", {
                            className: T.lK
                        }), (0, i.jsx)("span", {
                            className: T.$t,
                            children: N.intl.string(N.t["+urf75"])
                        }), (0, i.jsx)(s.Z_L, {
                            className: T.CO,
                            noticeType: S,
                            onClick: () => {
                                f.default.track(I.HAw.PREMIUM_PROMOTION_OPENED, {
                                    location_section: I.JJy.NOTIFICATION_BAR,
                                    location_object: I.ZSU.BUTTON_CTA
                                }), (0, g.openUserSettings)(m.X.NITRO_PANEL)
                            },
                            children: N.intl.string(N.t["8JC5e/"])
                        }), (0, i.jsx)(s.PMB, {
                            onClick: () => {
                                x(E.i.UNKNOWN), (0, a.lA)(I.nhx.PREMIUM_PROMO_DISMISSED, !0)
                            },
                            noticeType: S
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => x(E.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_2
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => x(E.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_0
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(s.PMB, {
                            noticeType: S,
                            onClick: () => x(E.i.UNKNOWN)
                        }), N.intl.string(N.t["0KFB2B"]), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                x(E.i.UNKNOWN), (0, g.openUserSettings)(m.X.NITRO_PANEL)
                            },
                            children: N.intl.string(N.t.pyYSiO)
                        })]
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DANGER,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.UNKNOWN),
                            noticeType: S
                        }), N.intl.string(N.t["7490vQ"]), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, _.pX)(I.BVt.SETTINGS("account"))
                            },
                            children: N.intl.string(N.t.Vm8akB)
                        })]
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let b = u.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.UNKNOWN),
                            noticeType: S
                        }), N.intl.string(N.t.pJ4hJE), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                x(E.i.PRIMARY), (0, _.pX)(1 === b.length ? I.BVt.GUILD_SETTINGS(b[0], "role-subscriptions") : I.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                            },
                            children: N.intl.string(N.t["74s74F"])
                        })]
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => x(E.i.UNKNOWN),
                            noticeType: S
                        }), N.intl.string(N.t["O9GI+k"]), (0, i.jsx)(s.Z_L, {
                            onClick: () => {
                                (0, h.A)({
                                    subscriptionTier: C.pe.TIER_2,
                                    analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                    analyticsLocation: I.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                    onClose: () => x(E.i.UNKNOWN)
                                })
                            },
                            noticeType: S,
                            children: N.intl.string(N.t.Zi69D4)
                        })]
                    })
            }
        }
    })
}