/** Chunk was on 39048 **/
/** chunk id: 234721, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => S
}), n(896048), n(733351), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(397927),
    o = n(198982),
    c = n(460760),
    d = n(408213),
    u = n(513461),
    g = n(709977),
    m = n(786180),
    p = n(250527),
    f = n(997509),
    h = n(555337),
    b = n(310345),
    x = n(306846),
    j = n(894222),
    _ = n(716610),
    O = n(652215),
    v = n(324580),
    y = n(985018);

function A(e) {
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

function E(e, t) {
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

function N(e) {
    var t;
    let {
        pendingState: l,
        dirtyState: h,
        originalGuild: x,
        settingsGuild: N,
        settingsMetadata: S,
        settingsProfile: I
    } = e, T = N.id, [C, P] = i.useState(!1), [w, R] = i.useState(null), D = N.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), G = null != (t = (0, m.H)({
        guildId: N.id
    })) ? t : 0, L = i.useCallback(() => {
        R(null), f.A.init(T, O.BEX.ACCESS)
    }, [T]), k = i.useCallback(async e => {
        try {
            P(!0), await e(), R(null)
        } finally {
            P(!1)
        }
    }, []), M = i.useCallback(async e => {
        try {
            await f.A.saveGuild(T, e, {
                throwErr: !0
            })
        } catch (e) {
            throw "object" == typeof e && "message" in e ? R(e.message) : R(y.intl.formatToPlainString(y.t.aTVNes, {
                statusPageURL: O.qF7.STATUS
            })), e
        }
    }, [T]), U = i.useCallback(async (e, t, n) => {
        try {
            await d.Ay.updateVerificationForm(T, e, t, n)
        } catch (e) {
            throw R(new o.LG(e).getAnyErrorMessage()), e
        }
    }, [T]), B = i.useCallback(async (e, t, n) => {
        let r = t.length > 0 ? [{
            field_type: u.rX.TERMS,
            label: y.intl.string(y.t["9suSIA"]),
            values: t,
            required: !0
        }] : [];
        await U(r, e, n)
    }, [U]), F = i.useCallback(e => {
        if (l.isAgeRestricted !== (N.ownerConfiguredContentLevel === O.ftr.AGE_RESTRICTED) && k(async () => {
                let e = l.isAgeRestricted ? O.ftr.AGE_RESTRICTED : O.ftr.DEFAULT;
                await M({
                    ownerConfiguredContentLevel: e
                })
            }), l.joinType === j.J.INVITE) {
            let {
                requireTerms: t,
                termRules: n = []
            } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
            k(async () => {
                if (N.features.has(O.GuildFeatures.DISCOVERABLE)) {
                    let e = new Set(N.features);
                    e.delete(O.GuildFeatures.DISCOVERABLE), await M({
                        features: e
                    })
                }
                h.verificationDirty && await B(t, r, e)
            })
        } else if (l.joinType === j.J.APPLY) {
            let {
                pendingVerificationFields: t
            } = l;
            if (null == t) return;
            k(async () => {
                if (N.features.has(O.GuildFeatures.DISCOVERABLE)) {
                    let e = new Set(N.features);
                    e.delete(O.GuildFeatures.DISCOVERABLE), await M({
                        features: e
                    })
                }
                h.verificationDirty && await U([...t], !0, e), h.profileDirty && null != I && await (0, p._C)(N.id, {
                    visibility: I.visibility
                })
            })
        } else if (l.joinType === j.J.DISCOVERABLE) {
            let {
                requireTerms: t,
                termRules: n = []
            } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
            k(async () => {
                if (h.verificationDirty && await B(t, r, e), h.guildDirty) {
                    (0, b.dl)(N, x);
                    let e = new Set(N.features);
                    e.add(O.GuildFeatures.DISCOVERABLE), e.delete(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), await M({
                        features: e,
                        discoverySplash: N.discoverySplash,
                        description: N.description,
                        preferredLocale: N.preferredLocale
                    });
                    try {
                        await (0, c.Oh)(A({
                            guildId: N.id
                        }, S))
                    } catch (e) {
                        throw R(new o.LG(e).getAnyErrorMessage()), e
                    }
                }
            })
        }
    }, [l, k, N, h, M, B, I, U, x, S]), H = i.useCallback(() => (e => {
        if (l.joinType === j.J.INVITE || l.joinType === j.J.DISCOVERABLE) {
            let {
                requireTerms: e,
                termRules: t = []
            } = l;
            if (t.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) return void R(y.intl.string(y.t.TCHkcd))
        }
        if (l.joinType === j.J.APPLY) {
            var t;
            if (!(null == (t = l.pendingVerificationFields) ? void 0 : t.some(e => (0, g.OP)(e)))) return void R(y.intl.string(y.t.HGVrI3))
        }
        e()
    })(() => {
        var e;
        return e = e => {
            var t;
            return t = () => F(e), void(l.joinType === j.J.DISCOVERABLE && l.settingsView === _.v.ELIGIBLE_DISABLED ? (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("35125").then(n.bind(n, 60852));
                return n => (0, r.jsx)(e, E(A({}, n), {
                    guildId: T,
                    onConfirm: t
                }))
            }) : t())
        }, void(D && G > 0 && l.joinType !== j.J.APPLY ? (0, a.mMO)(async () => {
            let {
                default: t
            } = await n.e("63452").then(n.bind(n, 78903));
            return n => (0, r.jsx)(t, E(A({}, n), {
                guildId: T,
                submittedGuildJoinRequestsCount: G,
                onConfirm: e
            }))
        }) : e())
    }), [D, F, l, T, G]), V = l.joinType === j.J.DISCOVERABLE && l.settingsView === _.v.ELIGIBLE_DISABLED, K = null != N.description && S.primaryCategoryId !== v.ig && S.keywords.length > 0;
    return (0, r.jsx)(s.A, {
        message: V ? y.intl.string(y.t.V2G2Yr) : void 0,
        onSaveText: V ? y.intl.string(y.t["qjtt/p"]) : void 0,
        submitting: C,
        errorMessage: w,
        onReset: L,
        onSave: H,
        disabled: V && !K
    })
}

function S() {
    let {
        pendingState: e,
        dirtyState: t
    } = (0, l.cf)([x.A], () => ({
        pendingState: x.A.pendingState,
        dirtyState: x.A.dirtyState
    })), {
        settingsGuild: n,
        settingsMetadata: i,
        originalGuild: a,
        guildProfile: o
    } = (0, l.cf)([h.A], () => {
        let {
            guild: e,
            guildMetadata: t,
            originalGuild: n,
            profile: r
        } = h.A.getProps();
        return {
            settingsGuild: e,
            settingsMetadata: t,
            originalGuild: n,
            guildProfile: r
        }
    });
    return null == e || null == n ? null : e.joinType === j.J.DISCOVERABLE && e.settingsView === _.v.INELIGIBLE ? (0, r.jsx)(s.A, {
        message: y.intl.string(y.t.TEXwRt),
        onReset: () => f.A.init(n.id, O.BEX.ACCESS)
    }) : (0, r.jsx)(N, {
        pendingState: e,
        dirtyState: t,
        originalGuild: a,
        settingsGuild: n,
        settingsMetadata: i,
        settingsProfile: o
    })
}