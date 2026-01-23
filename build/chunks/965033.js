/** Chunk was on 47841 **/
/** chunk id: 965033, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => G,
    qH: () => w,
    t9: () => P
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(311907),
    c = n(397927),
    d = n(974544),
    u = n(134413),
    g = n(780964),
    m = n(840065),
    p = n(260509),
    f = n(576705),
    b = n(351906),
    h = n(287809),
    x = n(975571),
    j = n(809505),
    _ = n(997509),
    O = n(555337),
    v = n(512122),
    y = n(111771),
    A = n(294363),
    E = n(652215),
    N = n(985018),
    S = n(841541);

function I(e) {
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

function T(e, t) {
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

function C(e) {
    let {
        guild: t
    } = e, n = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), l = i.useCallback(async e => {
        let {
            value: n
        } = e;
        try {
            await _.A.saveGuild(t.id, {
                verificationLevel: n
            }), _.A.updateGuild({
                verificationLevel: n
            })
        } catch (e) {
            (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["46Rs3v"]), c.ToastType.FAILURE))
        }
    }, [t]), s = i.useMemo(() => {
        let e = (0, j.vd)(null == t ? void 0 : t.features.has(E.GuildFeatures.COMMUNITY)).map(e => T(I({}, e), {
            tooltipPosition: "left"
        }));
        return (0, j.w3)(e)
    }, [t]), a = i.useMemo(() => s.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, r.jsxs)("div", {
        className: S.hu,
        children: [(0, r.jsxs)("div", {
            className: S.aZ,
            children: [(0, r.jsx)(c.Text, {
                color: "text-strong",
                variant: "text-md/semibold",
                children: N.intl.string(N.t.DpRdYK)
            }), (0, r.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: N.intl.format(N.t.iuRk2j, {})
            })]
        }), (0, r.jsx)(y.A, {
            changeTitle: N.intl.string(N.t.TxESJG),
            value: null == a ? void 0 : a.value,
            options: s,
            disabled: !n,
            onChange: l
        })]
    })
}

function P(e) {
    let {
        guild: t,
        className: n,
        withDivider: l = !0
    } = e, a = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
        let {
            value: n
        } = e;
        try {
            await _.A.saveGuild(t.id, {
                explicitContentFilter: n
            }), _.A.updateGuild({
                explicitContentFilter: n
            })
        } catch (e) {
            (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["46Rs3v"]), c.ToastType.FAILURE))
        }
    }, [t.id]), u = i.useMemo(() => {
        let e = (0, j.QL)(null == t ? void 0 : t.features.has(E.GuildFeatures.COMMUNITY)).map(e => T(I({}, e), {
            tooltipPosition: "left"
        }));
        return (0, j.w3)(e)
    }, [t]), g = i.useMemo(() => u.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [l && (0, r.jsx)(c.cGx, {
            className: S.yF
        }), (0, r.jsxs)("div", {
            className: s()(S.hu, n),
            children: [(0, r.jsxs)("div", {
                className: S.aZ,
                children: [(0, r.jsx)(c.Text, {
                    color: "text-strong",
                    variant: "text-md/semibold",
                    children: N.intl.string(N.t.bPgfJz)
                }), (0, r.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: N.intl.format(N.t.BI4ukC, {
                        helpdeskArticle: x.A.getArticleURL(E.MVz.SAFE_DIRECT_MESSAGING)
                    })
                })]
            }), (0, r.jsx)(y.A, {
                changeTitle: N.intl.string(N.t["eBd+Uv"]),
                value: null == g ? void 0 : g.value,
                options: u,
                disabled: !a,
                onChange: d
            })]
        })]
    })
}
async function w(e, t) {
    if (e.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return t ? n.add(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.A.saveGuild(e.id, {
        features: n
    })
}

function R(e) {
    let {
        guild: t
    } = e, n = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), l = t.features.has(E.GuildFeatures.COMMUNITY), s = (0, u.fw)(t.id), [a, d] = i.useState(t.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), g = i.useCallback(async e => {
        d(e), await w(t, e)
    }, [t]);
    return l || !s ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: S.hu,
            children: [(0, r.jsx)(c.dOG, {
                label: N.intl.string(N.t.jDarmy),
                description: N.intl.string(N.t["/ee7yK"]),
                badge: "beta",
                checked: a,
                onChange: g,
                disabled: !n
            }), (0, r.jsx)(c.po8, {
                messageType: c.YCn.INFO,
                textVariant: "text-xs/normal",
                children: N.intl.string(N.t.JxO63z)
            })]
        }), (0, r.jsx)(c.cGx, {
            className: S.yF
        })]
    })
}

function D(e) {
    let {
        guild: t,
        mfaLevel: n
    } = e, l = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), s = (0, o.bG)([h.default], () => h.default.getCurrentUser()), {
        isGuildOwnerWithMFA: d,
        showMFAUserTooltip: u
    } = i.useMemo(() => null == s ? {
        canChangeMFALevel: !1,
        showMFAUserTooltip: !1
    } : {
        isGuildOwnerWithMFA: (0, p.ok)(t, s),
        showMFAUserTooltip: !s.mfaEnabled && (0, p.bM)(t, s)
    }, [s, t]), b = n === E.EkJ.ELEVATED, x = (0, a.throttle)(async e => {
        !d || u || await _.A.updateMFALevel({
            guildId: t.id,
            level: e ? E.EkJ.ELEVATED : E.EkJ.NONE
        })
    }, 1e3);
    return l ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.cGx, {
            className: S.yF
        }), (0, r.jsxs)("div", {
            className: S.hu,
            children: [(0, r.jsx)(c.dOG, {
                label: N.intl.string(N.t.lbBfEQ),
                description: N.intl.string(N.t.REr5AI),
                checked: b,
                onChange: x,
                disabled: !d
            }), u && (0, r.jsx)(c.po8, {
                messageType: c.YCn.INFO,
                textVariant: "text-xs/normal",
                children: N.intl.format(N.t.Xz1O0W, {
                    onClick: function() {
                        (0, m.openUserSettings)(g.X.ACCOUNT_PANEL, {
                            section: E.nc_.ACCOUNT
                        })
                    }
                })
            })]
        })]
    }) : null
}

function G() {
    let {
        guild: e,
        mfaLevel: t
    } = (0, o.cf)([O.A], () => O.A.getProps(), []), n = (0, o.bG)([b.A], () => b.A.enabled, []);
    return null == e ? null : n ? (0, r.jsx)(d.A, {}) : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
            className: S.N1,
            variant: "heading-lg/semibold",
            children: N.intl.string(N.t["suhY+Y"])
        }), (0, r.jsx)(v.p, {
            guild: e
        }), (0, r.jsx)(R, {
            guild: e
        }), (0, r.jsx)(C, {
            guild: e
        }), (0, r.jsx)(D, {
            guild: e,
            mfaLevel: t
        }), (0, r.jsx)(P, {
            guild: e
        }), (0, r.jsx)(c.cGx, {
            className: S.yF
        }), (0, r.jsx)("div", {
            className: S.hu,
            children: (0, r.jsx)(A.b, {
                guild: e
            })
        })]
    })
}