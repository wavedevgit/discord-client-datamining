/** chunk id: 420216 params = (module,exports,require) **/
n.d(e, {
    r: () => x
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
    _ = n(532794),
    E = n(745299),
    T = n(976860),
    A = n(780964),
    I = n(718446),
    N = n(858897),
    R = n(879945),
    p = n(954571),
    h = n(379848),
    C = n(49999),
    g = n(652215),
    m = n(788868),
    O = n(355097),
    S = n(985018),
    y = n(571655);
let x = t => {
    let {
        dismissibleContent: e,
        noticeType: x
    } = t;
    return (0, i.jsx)(h.Ay, {
        contentTypes: [e],
        groupName: C.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: t => {
            let {
                visibleContent: e,
                markAsDismissed: h
            } = t;
            switch (e) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.UNKNOWN),
                            noticeType: x
                        }), S.intl.string(S.t["+xn1o5"]), (0, i.jsx)("i", {
                            className: y.c9
                        }), (0, i.jsx)("i", {
                            className: y.Vz
                        }), (0, i.jsx)("i", {
                            className: y.p0
                        }), (0, i.jsx)(r.Z_L, {
                            noticeType: x,
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
                            children: S.intl.string(S.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.UNKNOWN),
                            noticeType: x
                        }), (0, i.jsx)("i", {
                            className: y.TN
                        }), S.intl.string(S.t.lgwX26), (0, i.jsx)(r.Z_L, {
                            noticeType: x,
                            onClick: () => {
                                (0, o.A)(g.AMi.META_QUEST), h(C.i.TAKE_ACTION)
                            },
                            children: S.intl.string(S.t["1WjMbC"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.UNKNOWN),
                            noticeType: x
                        }), (0, i.jsx)(R.A, {
                            className: y.tV
                        }), S.intl.string(S.t["5NUVHH"]), (0, i.jsx)(r.Z_L, {
                            onClick: () => (0, d.A)({
                                platformType: g.fg2.SPOTIFY,
                                location: "Notice Bar"
                            }),
                            noticeType: x,
                            children: S.intl.string(S.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [(0, i.jsx)(r.PMB, {
                            noticeType: x,
                            onClick: () => h(C.i.UNKNOWN)
                        }), (0, i.jsx)("img", {
                            alt: "",
                            className: y.tV,
                            src: a.A.get(g.fg2.PLAYSTATION).icon.whiteSVG
                        }), S.intl.string(S.t.WHWgoY), (0, i.jsx)(r.zr9, {
                            onClick: () => (0, d.A)({
                                platformType: g.fg2.PLAYSTATION,
                                location: "Notice Bar"
                            }),
                            children: S.intl.string(S.t.S0W8Z5)
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.USER_DISMISS),
                            noticeType: x
                        }), S.intl.string(S.t["3qKN/h"]), (0, i.jsx)(r.Z_L, {
                            onClick: async () => {
                                h(C.i.TAKE_ACTION);
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
                                    (0, r.showToast)((0, r.createToast)(S.intl.string(S.t.xSCvBf), r.ToastType.FAILURE))
                                }
                            },
                            noticeType: x,
                            children: S.intl.string(S.t["ff/XXy"])
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)("span", {
                            className: y.lK
                        }), (0, i.jsx)("span", {
                            className: y.$t,
                            children: S.intl.string(S.t["+urf75"])
                        }), (0, i.jsx)(r.Z_L, {
                            className: y.CO,
                            noticeType: x,
                            onClick: () => {
                                p.default.track(g.HAw.PREMIUM_PROMOTION_OPENED, {
                                    location_section: g.JJy.NOTIFICATION_BAR,
                                    location_object: g.ZSU.BUTTON_CTA
                                }), (0, N.openUserSettings)(A.X.NITRO_PANEL)
                            },
                            children: S.intl.string(S.t["8JC5e/"])
                        }), (0, i.jsx)(r.PMB, {
                            onClick: () => {
                                h(C.i.UNKNOWN), (0, s.lA)(g.nhx.PREMIUM_PROMO_DISMISSED, !0)
                            },
                            noticeType: x
                        })]
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(E.A, {
                        dismissCurrentNotice: () => h(C.i.UNKNOWN),
                        subscriptionTier: m.pe.TIER_2
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(E.A, {
                        dismissCurrentNotice: () => h(C.i.UNKNOWN),
                        subscriptionTier: m.pe.TIER_0
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(r.PMB, {
                            noticeType: x,
                            onClick: () => h(C.i.UNKNOWN)
                        }), S.intl.string(S.t["0KFB2B"]), (0, i.jsx)(r.Z_L, {
                            noticeType: x,
                            onClick: () => {
                                h(C.i.UNKNOWN), (0, N.openUserSettings)(A.X.NITRO_PANEL)
                            },
                            children: S.intl.string(S.t.pyYSiO)
                        })]
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.UNKNOWN),
                            noticeType: x
                        }), S.intl.string(S.t["7490vQ"]), (0, i.jsx)(r.Z_L, {
                            noticeType: x,
                            onClick: () => {
                                (0, T.pX)((0, I.settingsPathToRoute)(O.od.ACCOUNT))
                            },
                            children: S.intl.string(S.t.Vm8akB)
                        })]
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let M = u.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.UNKNOWN),
                            noticeType: x
                        }), S.intl.string(S.t.pJ4hJE), (0, i.jsx)(r.Z_L, {
                            noticeType: x,
                            onClick: () => {
                                h(C.i.PRIMARY), (0, T.pX)(1 === M.length ? g.BVt.GUILD_SETTINGS(M[0], "role-subscriptions") : g.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                            },
                            children: S.intl.string(S.t["74s74F"])
                        })]
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [(0, i.jsx)(r.PMB, {
                            onClick: () => h(C.i.UNKNOWN),
                            noticeType: x
                        }), S.intl.string(S.t["O9GI+k"]), (0, i.jsx)(r.Z_L, {
                            onClick: () => {
                                (0, _.A)({
                                    subscriptionTier: m.pe.TIER_2,
                                    analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                    analyticsLocation: g.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                    onClose: () => h(C.i.UNKNOWN)
                                })
                            },
                            noticeType: x,
                            children: S.intl.string(S.t.Zi69D4)
                        })]
                    })
            }
        }
    })
}