/** chunk id: 420216 params = (module,exports,require) **/
n.d(e, {
    r: () => S
});
var i = n(627968);
n(64700);
var l = n(554146),
    r = n(397927),
    s = n(803306),
    a = n(573648),
    o = n(975807),
    c = n(793574),
    d = n(882997),
    u = n(662427),
    E = n(532794),
    _ = n(745299),
    T = n(976860),
    A = n(780964),
    I = n(840065),
    N = n(879945),
    R = n(954571),
    p = n(379848),
    h = n(49999),
    C = n(652215),
    m = n(788868),
    g = n(985018),
    O = n(571655);
let S = t => {
    let {
        dismissibleContent: e,
        noticeType: S
    } = t;
    return (0, i.jsx)(p.Ay, {
        contentTypes: [e],
        groupName: h.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: t => {
            let {
                visibleContent: e,
                markAsDismissed: p
            } = t;
            switch (e) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.UNKNOWN),
                            noticeType: S
                        }), g.intl.string(g.t["+xn1o5"]), (0, i.jsx)("i", {
                            className: O.c9
                        }), (0, i.jsx)("i", {
                            className: O.Vz
                        }), (0, i.jsx)("i", {
                            className: O.p0
                        }), (0, i.jsx)(r.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, r.mMO)(async () => {
                                    let {
                                        default: t
                                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                                    return e => (0, i.jsx)(t, {
                                        source: "Top Bar Nag",
                                        ...e
                                    })
                                })
                            },
                            children: g.intl.string(g.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.UNKNOWN),
                            noticeType: S
                        }), (0, i.jsx)("i", {
                            className: O.TN
                        }), g.intl.string(g.t.lgwX26), (0, i.jsx)(r.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, o.A)(C.AMi.META_QUEST), p(h.i.TAKE_ACTION)
                            },
                            children: g.intl.string(g.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.UNKNOWN),
                            noticeType: S
                        }), (0, i.jsx)(N.A, {
                            className: O.tV
                        }), g.intl.string(g.t["5NUVHH"]), (0, i.jsx)(r.Z_L, {
                            onClick: () => (0, d.A)({
                                platformType: C.fg2.SPOTIFY,
                                location: "Notice Bar"
                            }),
                            noticeType: S,
                            children: g.intl.string(g.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [(0, i.jsx)(r.PMB, {
                            noticeType: S,
                            onClick: () => p(h.i.UNKNOWN)
                        }), (0, i.jsx)("img", {
                            alt: "",
                            className: O.tV,
                            src: a.A.get(C.fg2.PLAYSTATION).icon.whiteSVG
                        }), g.intl.string(g.t.WHWgoY), (0, i.jsx)(r.zr9, {
                            onClick: () => (0, d.A)({
                                platformType: C.fg2.PLAYSTATION,
                                location: "Notice Bar"
                            }),
                            children: g.intl.string(g.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.USER_DISMISS),
                            noticeType: S
                        }), g.intl.string(g.t["3qKN/h"]), (0, i.jsx)(r.Z_L, {
                            onClick: async () => {
                                p(h.i.TAKE_ACTION);
                                try {
                                    let {
                                        startRegisterWebAuthnCredential: t
                                    } = await Promise.resolve().then(n.bind(n, 917136)), {
                                        ticket: e,
                                        challenge: l
                                    } = await t();
                                    (0, r.mMO)(async () => {
                                        let {
                                            RegisterWebAuthnCredentialModal: t
                                        } = await Promise.all([n.e("44667"), n.e("70987")]).then(n.bind(n, 359990));
                                        return n => (0, i.jsx)(t, {
                                            ...n,
                                            ticket: e,
                                            challenge: l,
                                            showAccountSettingsButton: !0
                                        })
                                    })
                                } catch (t) {
                                    (0, r.showToast)((0, r.createToast)(g.intl.string(g.t.xSCvBf), r.ToastType.FAILURE))
                                }
                            },
                            noticeType: S,
                            children: g.intl.string(g.t["ff/XXy"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)("span", {
                            className: O.lK
                        }), (0, i.jsx)("span", {
                            className: O.$t,
                            children: g.intl.string(g.t["+urf75"])
                        }), (0, i.jsx)(r.Z_L, {
                            className: O.CO,
                            noticeType: S,
                            onClick: () => {
                                R.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
                                    location_section: C.JJy.NOTIFICATION_BAR,
                                    location_object: C.ZSU.BUTTON_CTA
                                }), (0, I.openUserSettings)(A.X.NITRO_PANEL)
                            },
                            children: g.intl.string(g.t["8JC5e/"])
                        }), (0, i.jsx)(r.PMB, {
                            onClick: () => {
                                p(h.i.UNKNOWN), (0, s.lA)(C.nhx.PREMIUM_PROMO_DISMISSED, !0)
                            },
                            noticeType: S
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(_.A, {
                        dismissCurrentNotice: () => p(h.i.UNKNOWN),
                        subscriptionTier: m.pe.TIER_2
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(_.A, {
                        dismissCurrentNotice: () => p(h.i.UNKNOWN),
                        subscriptionTier: m.pe.TIER_0
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(r.PMB, {
                            noticeType: S,
                            onClick: () => p(h.i.UNKNOWN)
                        }), g.intl.string(g.t["0KFB2B"]), (0, i.jsx)(r.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                p(h.i.UNKNOWN), (0, I.openUserSettings)(A.X.NITRO_PANEL)
                            },
                            children: g.intl.string(g.t.pyYSiO)
                        })]
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.UNKNOWN),
                            noticeType: S
                        }), g.intl.string(g.t["7490vQ"]), (0, i.jsx)(r.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                (0, T.pX)(C.BVt.SETTINGS("account"))
                            },
                            children: g.intl.string(g.t.Vm8akB)
                        })]
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let y = u.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.UNKNOWN),
                            noticeType: S
                        }), g.intl.string(g.t.pJ4hJE), (0, i.jsx)(r.Z_L, {
                            noticeType: S,
                            onClick: () => {
                                p(h.i.PRIMARY), (0, T.pX)(1 === y.length ? C.BVt.GUILD_SETTINGS(y[0], "role-subscriptions") : C.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                            },
                            children: g.intl.string(g.t["74s74F"])
                        })]
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => p(h.i.UNKNOWN),
                            noticeType: S
                        }), g.intl.string(g.t["O9GI+k"]), (0, i.jsx)(r.Z_L, {
                            onClick: () => {
                                (0, E.A)({
                                    subscriptionTier: m.pe.TIER_2,
                                    analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                    analyticsLocation: C.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                    onClose: () => p(h.i.UNKNOWN)
                                })
                            },
                            noticeType: S,
                            children: g.intl.string(g.t.Zi69D4)
                        })]
                    })
            }
        }
    })
}