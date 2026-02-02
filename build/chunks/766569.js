/** chunk id: 766569, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(974544),
    u = n(793574),
    _ = n(58149),
    p = n(688810),
    m = n(550111),
    g = n(919395),
    A = n(884546),
    f = n(287070),
    b = n(101058),
    h = n(622543),
    E = n(696451),
    O = n(351906),
    x = n(287809),
    C = n(975571),
    S = n(927578),
    T = n(159001),
    I = n(833336),
    N = n(65767),
    j = n(281052),
    y = n(687021),
    v = n(652215),
    P = n(985018),
    R = n(764121);

function D(e) {
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

function L(e, t) {
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

function w(e) {
    (0, o.mMO)(async () => {
        let {
            default: t
        } = await n.e("65281").then(n.bind(n, 547352));
        return n => (0, r.jsx)(t, D({
            source: L(D({}, e), {
                page: v.liQ.GUILD_MEMBER_PROFILE_SETTINGS
            })
        }, n))
    })
}

function M(e) {
    var t, n;
    let {
        selectedGuild: l
    } = e, {
        analyticsLocations: M
    } = (0, p.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE), G = (0, a.bG)([x.default], () => {
        let e = x.default.getCurrentUser();
        return s()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
    }), U = (0, a.bG)([E.Ay], () => null != l ? E.Ay.getMember(l.id, G.id) : null), k = (0, a.bG)([h.A], () => !h.A.isFetchingProfile(G.id, null == l ? void 0 : l.id)), B = (0, a.bG)([O.A], () => O.A.hidePersonalInformation), H = (0, a.cf)([I.A], () => L(D({}, I.A.getAllPending()), {
        source: I.A.getSource()
    })), {
        source: V,
        pendingAvatar: F,
        pendingNameplate: Y
    } = H, W = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
    }(H, ["source", "pendingAvatar", "pendingNameplate"]), K = (0, b.V7)({
        userId: G.id,
        image: F
    }), z = (0, g.lw)({
        pendingValue: Y,
        userValue: null == G || null == (t = G.collectibles) ? void 0 : t.nameplate,
        guildValue: null == U || null == (n = U.collectibles) ? void 0 : n.nameplate,
        guildId: null == l ? void 0 : l.id
    }), {
        pendingDisplayNameStyles: Z
    } = (0, g.B0)(G, null == l ? void 0 : l.id);
    return (i.useEffect(() => () => c.h.wait(T.IM), []), i.useEffect(() => {
        null != V && _.Ay.trackWithMetadata(v.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "guild",
            destination_pane: v.JJy.SETTINGS_CUSTOMIZE_PROFILE,
            source: V
        })
    }, [V]), B) ? (0, r.jsx)(d.A, {}) : k ? (0, r.jsxs)(p.f5, {
        value: M,
        children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: P.intl.format(P.t["/PTB2E"], {
                helpCenterLink: C.A.getArticleURL(v.MVz.GUILD_PROFILES)
            })
        }), null != l ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(y.A, {
                guildId: l.id,
                onChange: e => {
                    null != e && (0, T.JJ)(e)
                }
            }), (0, r.jsx)(A.A, {
                profilePreviewTitle: (0, r.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    className: R.Y,
                    children: P.intl.formatToPlainString(P.t.Tc0slG, {
                        guildName: null == l ? void 0 : l.name
                    })
                }),
                profilePreview: (0, r.jsx)(f.A, L(D({}, W), {
                    pendingAvatar: K,
                    pendingDisplayNameStyles: Z,
                    user: G,
                    guild: l,
                    canUsePremiumCustomization: S.Ay.canUsePremiumProfileCustomization(G),
                    onUpsellClick: w
                })),
                nameplatePreview: (0, r.jsx)(m.A, L(D({}, W), {
                    pendingDisplayNameStyles: Z,
                    user: G,
                    guildId: null == l ? void 0 : l.id,
                    nameplate: z,
                    className: null == z ? R.t : void 0,
                    isHighlighted: !0
                })),
                children: (0, r.jsx)(j.A, {})
            })]
        }) : (0, r.jsx)(N.A, {})]
    }) : (0, r.jsx)(o.y$y, {})
}