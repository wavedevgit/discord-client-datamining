/** chunk id: 420216 params = (module,exports,require) **/
n.d(t, {
    r: () => O
});
var i = n(627968);
n(64700);
var l = n(554146),
    r = n(397927),
    s = n(803306),
    a = n(573648),
    o = n(975807),
    c = n(793574),
    u = n(882997),
    d = n(662427),
    _ = n(532794),
    E = n(745299),
    A = n(976860),
    T = n(780964),
    I = n(840065),
    N = n(879945),
    p = n(954571),
    h = n(379848),
    m = n(49999),
    S = n(652215),
    C = n(788868),
    R = n(985018),
    g = n(237082);
let O = e => {
    let {
        dismissibleContent: t,
        noticeType: O
    } = e;
    return (0, i.jsx)(h.Ay, {
        contentTypes: [t],
        groupName: m.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: h
            } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.UNKNOWN),
                            noticeType: O
                        }), R.intl.string(R.t["+xn1o5"]), (0, i.jsx)("i", {
                            className: g.c9
                        }), (0, i.jsx)("i", {
                            className: g.Vz
                        }), (0, i.jsx)("i", {
                            className: g.p0
                        }), (0, i.jsx)(r.Z_L, {
                            noticeType: O,
                            onClick: () => {
                                (0, r.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                                    return t => (0, i.jsx)(e, {
                                        source: "Top Bar Nag",
                                        ...t
                                    })
                                })
                            },
                            children: R.intl.string(R.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.UNKNOWN),
                            noticeType: O
                        }), (0, i.jsx)("i", {
                            className: g.TN
                        }), R.intl.string(R.t.lgwX26), (0, i.jsx)(r.Z_L, {
                            noticeType: O,
                            onClick: () => {
                                (0, o.A)(S.AMi.META_QUEST), h(m.i.TAKE_ACTION)
                            },
                            children: R.intl.string(R.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.UNKNOWN),
                            noticeType: O
                        }), (0, i.jsx)(N.A, {
                            className: g.tV
                        }), R.intl.string(R.t["5NUVHH"]), (0, i.jsx)(r.Z_L, {
                            onClick: () => (0, u.A)({
                                platformType: S.fg2.SPOTIFY,
                                location: "Notice Bar"
                            }),
                            noticeType: O,
                            children: R.intl.string(R.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [(0, i.jsx)(r.PMB, {
                            noticeType: O,
                            onClick: () => h(m.i.UNKNOWN)
                        }), (0, i.jsx)("img", {
                            alt: "",
                            className: g.tV,
                            src: a.A.get(S.fg2.PLAYSTATION).icon.whiteSVG
                        }), R.intl.string(R.t.WHWgoY), (0, i.jsx)(r.zr9, {
                            onClick: () => (0, u.A)({
                                platformType: S.fg2.PLAYSTATION,
                                location: "Notice Bar"
                            }),
                            children: R.intl.string(R.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.USER_DISMISS),
                            noticeType: O
                        }), R.intl.string(R.t["3qKN/h"]), (0, i.jsx)(r.Z_L, {
                            onClick: async () => {
                                h(m.i.TAKE_ACTION);
                                try {
                                    let {
                                        startRegisterWebAuthnCredential: e
                                    } = await Promise.resolve().then(n.bind(n, 917136)), {
                                        ticket: t,
                                        challenge: l
                                    } = await e();
                                    (0, r.mMO)(async () => {
                                        let {
                                            RegisterWebAuthnCredentialModal: e
                                        } = await Promise.all([n.e("44667"), n.e("89045")]).then(n.bind(n, 359990));
                                        return n => (0, i.jsx)(e, {
                                            ...n,
                                            ticket: t,
                                            challenge: l,
                                            showAccountSettingsButton: !0
                                        })
                                    })
                                } catch (e) {
                                    (0, r.showToast)((0, r.createToast)(R.intl.string(R.t.xSCvBf), r.ToastType.FAILURE))
                                }
                            },
                            noticeType: O,
                            children: R.intl.string(R.t["ff/XXy"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)("span", {
                            className: g.lK
                        }), (0, i.jsx)("span", {
                            className: g.$t,
                            children: R.intl.string(R.t["+urf75"])
                        }), (0, i.jsx)(r.Z_L, {
                            className: g.CO,
                            noticeType: O,
                            onClick: () => {
                                p.default.track(S.HAw.PREMIUM_PROMOTION_OPENED, {
                                    location_section: S.JJy.NOTIFICATION_BAR,
                                    location_object: S.ZSU.BUTTON_CTA
                                }), (0, I.openUserSettings)(T.X.NITRO_PANEL)
                            },
                            children: R.intl.string(R.t["8JC5e/"])
                        }), (0, i.jsx)(r.PMB, {
                            onClick: () => {
                                h(m.i.UNKNOWN), (0, s.lA)(S.nhx.PREMIUM_PROMO_DISMISSED, !0)
                            },
                            noticeType: O
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(E.A, {
                        dismissCurrentNotice: () => h(m.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_2
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(E.A, {
                        dismissCurrentNotice: () => h(m.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_0
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(r.PMB, {
                            noticeType: O,
                            onClick: () => h(m.i.UNKNOWN)
                        }), R.intl.string(R.t["0KFB2B"]), (0, i.jsx)(r.Z_L, {
                            noticeType: O,
                            onClick: () => {
                                h(m.i.UNKNOWN), (0, I.openUserSettings)(T.X.NITRO_PANEL)
                            },
                            children: R.intl.string(R.t.pyYSiO)
                        })]
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.UNKNOWN),
                            noticeType: O
                        }), R.intl.string(R.t["7490vQ"]), (0, i.jsx)(r.Z_L, {
                            noticeType: O,
                            onClick: () => {
                                (0, A.pX)(S.BVt.SETTINGS("account"))
                            },
                            children: R.intl.string(R.t.Vm8akB)
                        })]
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let y = d.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.UNKNOWN),
                            noticeType: O
                        }), R.intl.string(R.t.pJ4hJE), (0, i.jsx)(r.Z_L, {
                            noticeType: O,
                            onClick: () => {
                                h(m.i.PRIMARY), (0, A.pX)(1 === y.length ? S.BVt.GUILD_SETTINGS(y[0], "role-subscriptions") : S.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                            },
                            children: R.intl.string(R.t["74s74F"])
                        })]
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(m.i.UNKNOWN),
                            noticeType: O
                        }), R.intl.string(R.t["O9GI+k"]), (0, i.jsx)(r.Z_L, {
                            onClick: () => {
                                (0, _.A)({
                                    subscriptionTier: C.pe.TIER_2,
                                    analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                    analyticsLocation: S.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                    onClose: () => h(m.i.UNKNOWN)
                                })
                            },
                            noticeType: O,
                            children: R.intl.string(R.t.Zi69D4)
                        })]
                    })
            }
        }
    })
}