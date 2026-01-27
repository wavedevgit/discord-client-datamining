/** Chunk was on 39048 **/
/** chunk id: 423981, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    s = n(118751),
    a = n(311907),
    o = n(562465),
    c = n(397927),
    d = n(974544),
    u = n(421838),
    g = n(773669),
    m = n(498642),
    p = n(71393),
    f = n(351906),
    h = n(954571),
    b = n(555337),
    x = n(855537),
    j = n(907445),
    _ = n(11725),
    O = n(652215),
    v = n(897513),
    y = n(985018),
    A = n(381929);

function E(e) {
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
let N = function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = null;
        return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = y.intl.string(y.t.xO2msf)) : i = y.intl.formatToPlainString(y.t.nskeMw, {
            percentage: (0, s.s)(Math.abs(t), n)
        }), {
            localizedNumber: null != e ? "".concat((0, s.s)(e, n)).concat(r ? "%" : "") : y.intl.string(y.t.jHpxwo),
            subtext: i,
            isTrendingUp: t > 0,
            isTrendingDown: t < 0
        }
    },
    S = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === O.t02.NOT_ENOUGH_GUILD_MEMBERS ? (0, r.jsx)("div", {
            className: A.NA,
            children: (0, r.jsx)(c.wx6, {
                type: "info",
                children: y.intl.string(y.t["FsgE/B"])
            })
        }) : null == e ? null : (0, r.jsx)(c.wx6, {
            type: "critical",
            children: y.intl.string(y.t.Iju63e)
        })
    },
    I = () => {
        let [e, t] = i.useState(!1), n = (0, a.bG)([b.A], () => b.A.getGuildId());
        return (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: A.XU,
            children: (0, r.jsx)(c.Button, {
                variant: "primary",
                text: y.intl.string(y.t.Uskgxx),
                onClick: () => {
                    let e, r;
                    t(!0), (h.default.track(O.HAw.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
                        guild_id: n
                    }), e = null == n ? O.dSh.DEVELOPER_PORTAL : O.dSh.DEVELOPER_PORTAL_GUILD_ANALYTICS(n), r = (0, l.A)(), o.Bo.post({
                        url: O.Rsh.HANDOFF,
                        body: {
                            key: r
                        },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    }).then(t => {
                        let n = t.body.handoff_token;
                        window.open(O.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(r, n, e))
                    }, () => {
                        window.open(e)
                    })).then(() => {
                        t(!1)
                    })
                },
                loading: e
            })
        })
    },
    T = () => {
        let e = (0, a.bG)([b.A], () => b.A.getGuildId()),
            t = (0, a.bG)([m.A], () => m.A.getMemberCount(e)),
            n = (0, a.bG)([p.A], () => p.A.getGuild(e)),
            l = (0, a.bG)([g.default], () => g.default.locale),
            {
                analytics: s,
                errorCode: o
            } = (0, a.cf)([j.A], () => ({
                analytics: null != e ? j.A.getOverviewAnalytics(e) : null,
                errorCode: j.A.getError()
            })),
            h = (0, a.bG)([f.A], () => f.A.getSettings().enabled),
            T = null == t || null == n || null != t && t < 500 && null != n && !n.features.has(O.GuildFeatures.PARTNERED) && !n.features.has(O.GuildFeatures.VERIFIED);
        i.useEffect(() => {
            null == e || T || ((0, x.p9)(e), (0, x.fe)(e), (0, x._z)(e))
        }, [e, T]), i.useEffect(() => {
            (0, u.sF)(v._.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
        }, []);
        let C = null != s ? (0, r.jsx)("div", {
            className: A.__invalid_guildAnalyticsOverviewWrapper,
            children: (0, r.jsxs)("div", {
                className: A.SJ,
                children: [(0, r.jsx)(_.A, E({
                    title: y.intl.string(y.t.i0NorT),
                    tooltipText: y.intl.string(y.t.KiRbLJ)
                }, N(s.visitors, s.visitorsChange, l))), (0, r.jsx)(_.A, E({
                    title: y.intl.string(y.t.DDAHdQ),
                    tooltipText: y.intl.string(y.t.HxWUkU)
                }, N(s.communicators, s.communicatorsChange, l))), (0, r.jsx)(_.A, E({
                    title: y.intl.string(y.t.hYeOqC)
                }, N(s.newMembers, s.newMembersChange, l))), (0, r.jsx)(_.A, E({
                    title: y.intl.string(y.t.jj7OPw),
                    tooltipText: y.intl.string(y.t.MQCslz)
                }, N(s.pctRetained, s.pctRetainedChange, l, !0)))]
            })
        }) : null;
        return (0, r.jsxs)("div", {
            children: [(0, r.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                children: y.intl.string(y.t["0wWfUG"])
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: y.intl.format(y.t.NIZ60a, {})
            }), S(o, T), (0, r.jsxs)("div", {
                className: A.Pg,
                children: [(0, r.jsx)("div", {
                    className: A.jM
                }), (0, r.jsx)(c.Text, {
                    className: A.WO,
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.A5vswv)
                }), (0, r.jsx)(I, {})]
            }), h ? (0, r.jsx)("div", {
                className: A.Rc,
                children: (0, r.jsx)(d.A, {})
            }) : C]
        })
    }