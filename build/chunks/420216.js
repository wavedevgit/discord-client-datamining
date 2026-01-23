/** Chunk was on web.js **/
/** chunk id: 420216, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => R
});
var r = n(627968);
n(64700);
var i = n(554146),
    a = n(397927),
    s = n(803306),
    o = n(573648),
    l = n(793574),
    c = n(882997),
    u = n(662427),
    d = n(532794),
    f = n(819982),
    p = n(745299),
    _ = n(976860),
    h = n(780964),
    m = n(840065),
    g = n(879945),
    E = n(954571),
    y = n(379848),
    b = n(49999),
    O = n(652215),
    v = n(789622),
    A = n(788868),
    I = n(985018),
    S = n(237082);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            T(e, t, n[t])
        })
    }
    return e
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let R = e => {
    let {
        dismissibleContent: t,
        noticeType: T
    } = e;
    return (0, r.jsx)(y.Ay, {
        contentTypes: [t],
        groupName: b.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: y
            } = e;
            switch (t) {
                case i.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.DEFAULT,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.UNKNOWN),
                            noticeType: T
                        }), I.intl.string(I.t["+xn1o5"]), (0, r.jsx)("i", {
                            className: S.c9
                        }), (0, r.jsx)("i", {
                            className: S.Vz
                        }), (0, r.jsx)("i", {
                            className: S.p0
                        }), (0, r.jsx)(a.Z_L, {
                            noticeType: T,
                            onClick: () => {
                                (0, a.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                                    return t => (0, r.jsx)(e, C({
                                        source: "Top Bar Nag"
                                    }, t))
                                })
                            },
                            children: I.intl.string(I.t["1WjMbC"])
                        })]
                    });
                case i.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.SPOTIFY,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.UNKNOWN),
                            noticeType: T
                        }), (0, r.jsx)(g.A, {
                            className: S.tV
                        }), I.intl.string(I.t["5NUVHH"]), (0, r.jsx)(a.Z_L, {
                            onClick: () => (0, c.A)({
                                platformType: O.fg2.SPOTIFY,
                                location: "Notice Bar"
                            }),
                            noticeType: T,
                            children: I.intl.string(I.t.S0W8Z5)
                        })]
                    });
                case i.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.PLAYSTATION,
                        children: [(0, r.jsx)(a.PMB, {
                            noticeType: T,
                            onClick: () => y(b.i.UNKNOWN)
                        }), (0, r.jsx)("img", {
                            alt: "",
                            className: S.tV,
                            src: o.A.get(O.fg2.PLAYSTATION).icon.whiteSVG
                        }), I.intl.string(I.t.WHWgoY), (0, r.jsx)(a.zr9, {
                            onClick: () => (0, c.A)({
                                platformType: O.fg2.PLAYSTATION,
                                location: "Notice Bar"
                            }),
                            children: I.intl.string(I.t.S0W8Z5)
                        })]
                    });
                case i.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.DEFAULT,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.USER_DISMISS),
                            noticeType: T
                        }), I.intl.string(I.t["3qKN/h"]), (0, r.jsx)(a.Z_L, {
                            onClick: async () => {
                                y(b.i.TAKE_ACTION);
                                try {
                                    let {
                                        startRegisterWebAuthnCredential: e
                                    } = await Promise.resolve().then(n.bind(n, 917136)), {
                                        ticket: t,
                                        challenge: i
                                    } = await e();
                                    (0, a.mMO)(async () => {
                                        let {
                                            RegisterWebAuthnCredentialModal: e
                                        } = await Promise.resolve().then(n.bind(n, 359990));
                                        return n => (0, r.jsx)(e, w(C({}, n), {
                                            ticket: t,
                                            challenge: i,
                                            showAccountSettingsButton: !0
                                        }))
                                    })
                                } catch (e) {
                                    (0, a.showToast)((0, a.createToast)(I.intl.string(I.t.xSCvBf), a.ToastType.FAILURE))
                                }
                            },
                            noticeType: T,
                            children: I.intl.string(I.t["ff/XXy"])
                        })]
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.PREMIUM_TIER_2,
                        children: [(0, r.jsx)("span", {
                            className: S.lK
                        }), (0, r.jsx)("span", {
                            className: S.$t,
                            children: I.intl.string(I.t["+urf75"])
                        }), (0, r.jsx)(a.Z_L, {
                            className: S.CO,
                            noticeType: T,
                            onClick: () => {
                                E.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                                    location_section: O.JJy.NOTIFICATION_BAR,
                                    location_object: O.ZSU.BUTTON_CTA
                                }), (0, m.openUserSettings)(h.X.NITRO_PANEL, {
                                    section: O.nc_.PREMIUM
                                })
                            },
                            children: I.intl.string(I.t["8JC5e/"])
                        }), (0, r.jsx)(a.PMB, {
                            onClick: () => {
                                y(b.i.UNKNOWN), (0, s.lA)(O.nhx.PREMIUM_PROMO_DISMISSED, !0)
                            },
                            noticeType: T
                        })]
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(p.A, {
                        dismissCurrentNotice: () => y(b.i.UNKNOWN),
                        subscriptionTier: A.pe.TIER_2
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(p.A, {
                        dismissCurrentNotice: () => y(b.i.UNKNOWN),
                        subscriptionTier: A.pe.TIER_0
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.PREMIUM_TIER_2,
                        children: [(0, r.jsx)(a.PMB, {
                            noticeType: T,
                            onClick: () => y(b.i.UNKNOWN)
                        }), I.intl.string(I.t["0KFB2B"]), (0, r.jsx)(a.Z_L, {
                            noticeType: T,
                            onClick: () => {
                                y(b.i.UNKNOWN), (0, m.openUserSettings)(h.X.NITRO_PANEL, {
                                    section: O.nc_.PREMIUM
                                })
                            },
                            children: I.intl.string(I.t.pyYSiO)
                        })]
                    });
                case i.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.DANGER,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.UNKNOWN),
                            noticeType: T
                        }), I.intl.string(I.t["7490vQ"]), (0, r.jsx)(a.Z_L, {
                            noticeType: T,
                            onClick: () => {
                                (0, _.pX)(O.BVt.SETTINGS("account"))
                            },
                            children: I.intl.string(I.t.Vm8akB)
                        })]
                    });
                case i.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let N = u.A.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.DEFAULT,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.UNKNOWN),
                            noticeType: T
                        }), I.intl.string(I.t.pJ4hJE), (0, r.jsx)(a.Z_L, {
                            noticeType: T,
                            onClick: () => {
                                y(b.i.PRIMARY), (0, _.pX)(1 === N.length ? O.BVt.GUILD_SETTINGS(N[0], "role-subscriptions") : O.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                            },
                            children: I.intl.string(I.t["74s74F"])
                        })]
                    });
                case i.M.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.WARNING,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.UNKNOWN),
                            noticeType: T
                        }), I.intl.format(I.t.pdYZyg, {}), (0, r.jsx)(a.Z_L, {
                            onClick: () => (0, f.A)(v.gg.NOTICE),
                            noticeType: T,
                            children: I.intl.string(I.t.LhlgY9)
                        })]
                    });
                case i.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(a.$Td, {
                        color: a.Hv$.PREMIUM_TIER_2,
                        children: [(0, r.jsx)(a.PMB, {
                            onClick: () => y(b.i.UNKNOWN),
                            noticeType: T
                        }), I.intl.string(I.t["O9GI+k"]), (0, r.jsx)(a.Z_L, {
                            onClick: () => {
                                (0, d.A)({
                                    subscriptionTier: A.pe.TIER_2,
                                    analyticsLocations: [l.A.CHECKOUT_RECOVERY_NAGBAR],
                                    analyticsLocation: O.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                    onClose: () => y(b.i.UNKNOWN)
                                })
                            },
                            noticeType: T,
                            children: I.intl.string(I.t.Zi69D4)
                        })]
                    })
            }
        }
    })
}