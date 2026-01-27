/** Chunk was on 39048 **/
/** chunk id: 925622, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D,
    L: () => P
}), n(228524), n(896048), n(321073);
var r = n(627968),
    i = n(64700);
n(516773);
var l = n(311907),
    s = n(562465),
    a = n(506774),
    o = n(36525),
    c = n(314116),
    d = n(990078),
    u = n(421380),
    g = n(397927),
    m = n(964486),
    p = n(47167),
    f = n(345942),
    h = n(808728),
    b = n(498642),
    x = n(71393),
    j = n(576705),
    _ = n(994500),
    O = n(287809),
    v = n(997509),
    y = n(555337),
    A = n(224394),
    E = n(814758),
    N = n(652215),
    S = n(985018),
    I = n(944620),
    T = n(597306);
let C = "dismissedCommunityFeaturesUpsell",
    P = () => {
        let e, {
                guild: t,
                submitting: n,
                errors: i
            } = (0, l.cf)([y.A], () => ({
                submitting: y.A.isSubmitting(),
                guild: y.A.getGuild(),
                errors: y.A.getErrors()
            })),
            s = Object.keys(i),
            a = s.length > 0 ? s[0] : null;
        return e = "rules_channel_id" === a ? S.intl.string(S.t["7IrBYt"]) : null != a ? i[a] : void 0, (0, r.jsx)(o.A, {
            submitting: n,
            onReset: () => {
                null != t && v.A.init(t.id)
            },
            onSave: () => {
                null != t && v.A.saveGuild(t.id, {
                    rulesChannelId: t.rulesChannelId,
                    preferredLocale: t.preferredLocale,
                    safetyAlertsChannelId: t.safetyAlertsChannelId,
                    publicUpdatesChannelId: t.publicUpdatesChannelId,
                    description: t.description,
                    features: t.features
                })
            },
            errorMessage: e
        })
    },
    w = e => {
        let {
            discoveryEnabled: t,
            onboardingEnabled: n,
            guild: o
        } = e, [c, d] = i.useState(!0 === a.w.get(C)), p = (0, l.bG)([b.A], () => {
            var e;
            return null != (e = b.A.getMemberCount(o.id)) ? e : 0
        }), [h, j] = i.useState(!1);
        (0, m.Ay)(() => {
            s.Bo.get({
                url: N.Rsh.GUILD_ADMIN_SERVER_ELIGIBILITY(o.id),
                rejectWithError: !0
            }).then(e => {
                j(e.body.eligible_for_admin_server)
            }).catch(() => j(!1))
        });
        let _ = (0, l.bG)([x.A], () => x.A.getGuild("942897714956472401")),
            O = o.features.has(N.GuildFeatures.COMMUNITY) && p >= 1e3 && h && null == _;
        if (t && n && !O) return null;
        let y = async () => {
            try {
                let e = await s.Bo.post({
                    url: N.Rsh.JOIN_ADMIN_SERVER(o.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                v.A.close(), (0, f.u)(e.body.id)
            } catch (e) {}
        };
        return c && !O ? null : (0, r.jsxs)("div", {
            className: I.Zj,
            children: [(0, r.jsxs)("div", {
                className: I.xw,
                children: [(0, r.jsx)("img", {
                    src: T,
                    alt: "",
                    width: 60,
                    className: I.Tn
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(g.Heading, {
                        variant: "heading-md/semibold",
                        className: I.$P,
                        children: S.intl.string(S.t["pR/Bge"])
                    }), (0, r.jsx)(g.Text, {
                        variant: "text-sm/normal",
                        children: S.intl.string(S.t["V+Yo1l"])
                    })]
                })]
            }), (0, r.jsx)(u.$n, {
                "aria-label": S.intl.string(S.t.cpT0Cq),
                look: u.$n.Looks.BLANK,
                size: u.$n.Sizes.NONE,
                className: I.kz,
                onClick: () => {
                    a.w.set(C, !0), d(!0)
                },
                children: (0, r.jsx)(g.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            }), (0, r.jsxs)("div", {
                className: I.dt,
                children: [O && (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: I.Oy,
                    children: (0, r.jsx)(g.Button, {
                        variant: "primary",
                        size: "sm",
                        text: S.intl.string(S.t.iF1Asi),
                        onClick: y
                    })
                }), n ? null : (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: I.Oy,
                    children: (0, r.jsx)(g.Button, {
                        variant: "primary",
                        size: "sm",
                        text: S.intl.string(S.t["S/Dfid"]),
                        onClick: () => {
                            v.A.setSection(N.BEX.ONBOARDING)
                        }
                    })
                }), t ? null : (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: I.Oy,
                    children: (0, r.jsx)(g.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: S.intl.string(S.t["0kmJdw"]),
                        onClick: () => {
                            v.A.setSection(N.BEX.ACCESS, N.nd0.ACCESS_DISCOVERABLE)
                        }
                    })
                }), (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: I.Oy,
                    children: (0, r.jsx)(g.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: S.intl.string(S.t.BQIYTb),
                        onClick: () => {
                            v.A.setSection(N.BEX.ANALYTICS)
                        }
                    })
                })]
            })]
        })
    },
    R = () => {
        var e, t, n;
        let s = (0, l.bG)([y.A], () => y.A.getGuild()),
            {
                canManageGuild: o,
                isGuildAdmin: u
            } = (0, l.cf)([j.A], () => ({
                canManageGuild: j.A.can(N.xBc.MANAGE_GUILD, s),
                isGuildAdmin: j.A.can(N.xBc.ADMINISTRATOR, s)
            })),
            m = (0, l.bG)([h.Ay], () => null != s ? h.Ay.getChannels(s.id) : null),
            f = i.useMemo(E.fr, []),
            b = !0 !== a.w.get(C);
        if (null == s) return null;
        let x = [];
        null != m && m[h.I6].forEach(e => {
            let {
                channel: t
            } = e;
            t.type === N.rbe.GUILD_TEXT && x.push({
                id: t.id,
                value: t.id,
                label: (0, p.m1)(t, O.default, _.A, !0)
            })
        });
        let A = () => {
                if (null == s) return;
                let e = new Set(s.features);
                e.delete(N.GuildFeatures.COMMUNITY), e.delete(N.GuildFeatures.DISCOVERABLE), e.delete(N.GuildFeatures.PREVIEW_ENABLED), v.A.updateGuild({
                    features: e,
                    rulesChannelId: null,
                    publicUpdatesChannelId: null
                })
            },
            I = e => {
                v.A.updateGuild({
                    description: e
                })
            };
        return (0, r.jsxs)(g.BJc, {
            gap: 24,
            children: [(0, r.jsx)(g.Heading, {
                variant: "heading-lg/semibold",
                children: S.intl.string(S.t.nRtNqn)
            }), b ? (0, r.jsx)(w, {
                discoveryEnabled: s.features.has(N.GuildFeatures.DISCOVERABLE),
                onboardingEnabled: s.features.has(N.GuildFeatures.GUILD_ONBOARDING),
                guild: s
            }) : null, (0, r.jsx)(g.ZiE, {
                selectionMode: "single",
                layout: "horizontal-responsive",
                label: S.intl.string(S.t["otcXP/"]),
                description: S.intl.string(S.t.BtwmYB),
                value: null != (e = s.rulesChannelId) ? e : void 0,
                options: x,
                onSelectionChange: e => {
                    v.A.updateGuild({
                        rulesChannelId: e
                    })
                },
                disabled: !o
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ZiE, {
                selectionMode: "single",
                layout: "horizontal-responsive",
                label: S.intl.string(S.t.vAyDGU),
                description: S.intl.string(S.t.ZFeonu),
                value: null != (t = s.publicUpdatesChannelId) ? t : void 0,
                options: x,
                onSelectionChange: e => {
                    v.A.updateGuild({
                        publicUpdatesChannelId: e
                    })
                },
                disabled: !u
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ZiE, {
                selectionMode: "single",
                layout: "horizontal-responsive",
                label: S.intl.string(S.t.sMkYE8),
                description: S.intl.string(S.t.htioQo),
                value: null != (n = s.safetyAlertsChannelId) ? n : void 0,
                options: x,
                onSelectionChange: e => {
                    v.A.updateGuild({
                        safetyAlertsChannelId: e
                    })
                },
                disabled: !o
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ZiE, {
                selectionMode: "single",
                layout: "horizontal-responsive",
                label: S.intl.string(S.t.pO60fy),
                description: S.intl.string(S.t.aIR73T),
                value: s.preferredLocale,
                options: f,
                onSelectionChange: e => {
                    v.A.updateGuild({
                        preferredLocale: e
                    })
                },
                disabled: !o
            }), (0, r.jsx)(g.cGx, {}), (() => {
                var e;
                if (null != s) return (0, r.jsx)(g.fs1, {
                    label: S.intl.string(S.t["RSfm+i"]),
                    description: S.intl.string(S.t["/B6PRw"]),
                    value: null != (e = s.description) ? e : "",
                    placeholder: S.intl.string(S.t.Nvfowl),
                    onChange: I,
                    maxLength: 300,
                    disabled: !o
                })
            })(), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.D0$, {
                label: S.intl.string(S.t.c1BmbC),
                description: S.intl.string(S.t.aQzVF8),
                layout: "horizontal",
                children: (0, r.jsx)(d.m, {
                    text: u ? null : S.intl.string(S.t["pjG+T3"]),
                    "aria-label": u ? void 0 : S.intl.string(S.t["pjG+T3"]),
                    children: (0, r.jsx)(g.Button, {
                        variant: "critical-primary",
                        size: "sm",
                        text: S.intl.string(S.t.c1BmbC),
                        onClick: () => {
                            s.features.has(N.GuildFeatures.DISCOVERABLE) && s.features.has(N.GuildFeatures.PARTNERED) ? (0, c.A)({
                                title: S.intl.string(S.t.iBnVHc),
                                subtitle: S.intl.string(S.t["P+Sh8V"]),
                                confirmText: S.intl.string(S.t["cY+Oob"]),
                                cancelText: S.intl.string(S.t.oEAioF),
                                onConfirm: A
                            }) : s.features.has(N.GuildFeatures.DISCOVERABLE) ? (0, c.A)({
                                title: S.intl.string(S.t.iBnVHc),
                                subtitle: S.intl.string(S.t["eMx/uZ"]),
                                confirmText: S.intl.string(S.t["cY+Oob"]),
                                cancelText: S.intl.string(S.t.oEAioF),
                                onConfirm: A
                            }) : s.features.has(N.GuildFeatures.PARTNERED) ? (0, c.A)({
                                title: S.intl.string(S.t.iBnVHc),
                                subtitle: S.intl.string(S.t.l1wLeX),
                                confirmText: S.intl.string(S.t["cY+Oob"]),
                                cancelText: S.intl.string(S.t.oEAioF),
                                onConfirm: A
                            }) : A()
                        },
                        disabled: !u
                    })
                })
            })]
        })
    },
    D = () => {
        let e = (0, l.bG)([y.A], () => y.A.getGuild());
        return null == e ? null : e.features.has(N.GuildFeatures.COMMUNITY) ? (0, r.jsx)(R, {}) : (0, r.jsx)(A.A, {
            guild: e
        })
    }