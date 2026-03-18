/** chunk id: 420216 params = (module,exports,require) **/
"use strict";
n.d(e, {
    r: () => S
});
var i = n(627968);
n(64700);
var r = n(554146),
    s = n(397927),
    l = n(803306),
    a = n(573648),
    o = n(975807),
    c = n(793574),
    u = n(882997),
    d = n(662427),
    E = n(532794),
    _ = n(745299),
    T = n(976860),
    A = n(780964),
    I = n(840065),
    N = n(879945),
    p = n(954571),
    R = n(379848),
    g = n(49999),
    h = n(652215),
    m = n(788868),
    O = n(985018),
    C = n(237082);
let S = t => {
    let {
        dismissibleContent: e,
        noticeType: S
    } = t;
    return (0, i.jsx)(R.Ay, {
        contentTypes: [e],
        groupName: g.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: t => {
            let {
                visibleContent: e,
                markAsDismissed: R
            } = t;
            switch (e) {
                case r.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.UNKNOWN),
                            noticeType: S
                        }), O.intl.string(O.t["+xn1o5"]), (0, i.jsx)("i", {
                            className: C.c9
                        }), (0, i.jsx)("i", {
                            className: C.Vz
                        }), (0, i.jsx)("i", {
                            className: C.p0
                        }), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, s.mMO)(async () => {
                                    let {
                                        default: t
                                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                                    return e => (0, i.jsx)(t, {
                                        source: "Top Bar Nag",
                                        ...e
                                    })
                                })
                            },
                            children: O.intl.string(O.t["1WjMbC"])
                        })]
                    });
                case r.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.UNKNOWN),
                            noticeType: S
                        }), (0, i.jsx)("i", {
                            className: C.TN
                        }), O.intl.string(O.t.lgwX26), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, o.A)(h.AMi.META_QUEST), R(g.i.TAKE_ACTION)
                            },
                            children: O.intl.string(O.t["1WjMbC"])
                        })]
                    });
                case r.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.SPOTIFY,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.UNKNOWN),
                            noticeType: S
                        }), (0, i.jsx)(N.A, {
                            className: C.tV
                        }), O.intl.string(O.t["5NUVHH"]), (0, i.jsx)(s.Z_L, {
                            onClick: () => (0, u.A)({
                                platformType: h.fg2.SPOTIFY,
                                location: "Notice Bar"
                            }),
                            noticeType: S,
                            children: O.intl.string(O.t.S0W8Z5)
                        })]
                    });
                case r.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PLAYSTATION,
                        children: [(0, i.jsx)(s.PMB, {
                            noticeType: S,
                            onClick: () => R(g.i.UNKNOWN)
                        }), (0, i.jsx)("img", {
                            alt: "",
                            className: C.tV,
                            src: a.A.get(h.fg2.PLAYSTATION).icon.whiteSVG
                        }), O.intl.string(O.t.WHWgoY), (0, i.jsx)(s.zr9, {
                            onClick: () => (0, u.A)({
                                platformType: h.fg2.PLAYSTATION,
                                location: "Notice Bar"
                            }),
                            children: O.intl.string(O.t.S0W8Z5)
                        })]
                    });
                case r.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.USER_DISMISS),
                            noticeType: S
                        }), O.intl.string(O.t["3qKN/h"]), (0, i.jsx)(s.Z_L, {
                            onClick: async () => {
                                R(g.i.TAKE_ACTION);
                                try {
                                    let {
                                        startRegisterWebAuthnCredential: t
                                    } = await Promise.resolve().then(n.bind(n, 917136)), {
                                        ticket: e,
                                        challenge: r
                                    } = await t();
                                    (0, s.mMO)(async () => {
                                        let {
                                            RegisterWebAuthnCredentialModal: t
                                        } = await Promise.all([n.e("44667"), n.e("89045")]).then(n.bind(n, 359990));
                                        return n => (0, i.jsx)(t, {
                                            ...n,
                                            ticket: e,
                                            challenge: r,
                                            showAccountSettingsButton: !0
                                        })
                                    })
                                } catch (t) {
                                    (0, s.showToast)((0, s.createToast)(O.intl.string(O.t.xSCvBf), s.ToastType.FAILURE))
                                }
                            },
                            noticeType: S,
                            children: O.intl.string(O.t["ff/XXy"])
                        })]
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)("span", {
                            className: C.lK
                        }), (0, i.jsx)("span", {
                            className: C.$t,
                            children: O.intl.string(O.t["+urf75"])
                        }), (0, i.jsx)(s.Z_L, {
                            className: C.CO,
                            noticeType: S,
                            onClick: () => {
                                p.default.track(h.HAw.PREMIUM_PROMOTION_OPENED, {
                                    location_section: h.JJy.NOTIFICATION_BAR,
                                    location_object: h.ZSU.BUTTON_CTA
                                }), (0, I.openUserSettings)(A.X.NITRO_PANEL)
                            },
                            children: O.intl.string(O.t["8JC5e/"])
                        }), (0, i.jsx)(s.PMB, {
                            onClick: () => {
                                R(g.i.UNKNOWN), (0, l.lA)(h.nhx.PREMIUM_PROMO_DISMISSED, !0)
                            },
                            noticeType: S
                        })]
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(_.A, {
                        dismissCurrentNotice: () => R(g.i.UNKNOWN),
                        subscriptionTier: m.pe.TIER_2
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(_.A, {
                        dismissCurrentNotice: () => R(g.i.UNKNOWN),
                        subscriptionTier: m.pe.TIER_0
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(s.PMB, {
                            noticeType: S,
                            onClick: () => R(g.i.UNKNOWN)
                        }), O.intl.string(O.t["0KFB2B"]), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                R(g.i.UNKNOWN), (0, I.openUserSettings)(A.X.NITRO_PANEL)
                            },
                            children: O.intl.string(O.t.pyYSiO)
                        })]
                    });
                case r.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DANGER,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.UNKNOWN),
                            noticeType: S
                        }), O.intl.string(O.t["7490vQ"]), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, T.pX)(h.BVt.SETTINGS("account"))
                            },
                            children: O.intl.string(O.t.Vm8akB)
                        })]
                    });
                case r.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let y = d.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.UNKNOWN),
                            noticeType: S
                        }), O.intl.string(O.t.pJ4hJE), (0, i.jsx)(s.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                R(g.i.PRIMARY), (0, T.pX)(1 === y.length ? h.BVt.GUILD_SETTINGS(y[0], "role-subscriptions") : h.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                            },
                            children: O.intl.string(O.t["74s74F"])
                        })]
                    });
                case r.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(s.PMB, {
                            onClick: () => R(g.i.UNKNOWN),
                            noticeType: S
                        }), O.intl.string(O.t["O9GI+k"]), (0, i.jsx)(s.Z_L, {
                            onClick: () => {
                                (0, E.A)({
                                    subscriptionTier: m.pe.TIER_2,
                                    analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                    analyticsLocation: h.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                    onClose: () => R(g.i.UNKNOWN)
                                })
                            },
                            noticeType: S,
                            children: O.intl.string(O.t.Zi69D4)
                        })]
                    })
            }
        }
    })
}