/** chunk id: 234721 params = (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(397927),
    o = n(198982),
    d = n(460760),
    c = n(408213),
    u = n(513461),
    m = n(709977),
    g = n(786180),
    x = n(250527),
    h = n(997509),
    _ = n(555337),
    p = n(310345),
    A = n(306846),
    f = n(894222),
    j = n(716610),
    N = n(652215),
    E = n(324580),
    C = n(985018);

function b(e) {
    let {
        pendingState: t,
        dirtyState: l,
        originalGuild: _,
        settingsGuild: A,
        settingsMetadata: b,
        settingsProfile: T
    } = e, I = A.id, [v, S] = s.useState(!1), [y, R] = s.useState(null), O = A.features.has(N.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), G = (0, g.H)({
        guildId: A.id
    }) ?? 0, L = s.useCallback(() => {
        R(null), h.A.init(I, N.BEX.ACCESS)
    }, [I]), D = s.useCallback(async e => {
        try {
            S(!0), await e(), R(null)
        } finally {
            S(!1)
        }
    }, []), M = s.useCallback(async e => {
        try {
            await h.A.saveGuild(I, e, {
                throwErr: !0
            })
        } catch (e) {
            throw "object" == typeof e && "message" in e ? R(e.message) : R(C.intl.formatToPlainString(C.t.aTVNes, {
                statusPageURL: N.qF7.STATUS
            })), e
        }
    }, [I]), k = s.useCallback(async (e, t, n) => {
        try {
            await c.Ay.updateVerificationForm(I, e, t, n)
        } catch (e) {
            throw R(new o.LG(e).getAnyErrorMessage()), e
        }
    }, [I]), U = s.useCallback(async (e, t, n) => {
        let i = t.length > 0 ? [{
            field_type: u.rX.TERMS,
            label: C.intl.string(C.t["9suSIA"]),
            values: t,
            required: !0
        }] : [];
        await k(i, e, n)
    }, [k]), P = s.useCallback(e => {
        if (t.isAgeRestricted !== (A.ownerConfiguredContentLevel === N.ftr.AGE_RESTRICTED) && D(async () => {
                let e = t.isAgeRestricted ? N.ftr.AGE_RESTRICTED : N.ftr.DEFAULT;
                await M({
                    ownerConfiguredContentLevel: e
                })
            }), t.joinType === f.J.INVITE) {
            let {
                requireTerms: n,
                termRules: i = []
            } = t, s = i.map(e => e.value.trim()).filter(e => "" !== e);
            D(async () => {
                if (A.features.has(N.GuildFeatures.DISCOVERABLE)) {
                    let e = new Set(A.features);
                    e.delete(N.GuildFeatures.DISCOVERABLE), await M({
                        features: e
                    })
                }
                l.verificationDirty && await U(n, s, e)
            })
        } else if (t.joinType === f.J.APPLY) {
            let {
                pendingVerificationFields: n
            } = t;
            if (null == n) return;
            D(async () => {
                if (A.features.has(N.GuildFeatures.DISCOVERABLE)) {
                    let e = new Set(A.features);
                    e.delete(N.GuildFeatures.DISCOVERABLE), await M({
                        features: e
                    })
                }
                l.verificationDirty && await k([...n], !0, e), l.profileDirty && null != T && await (0, x._C)(A.id, {
                    visibility: T.visibility
                })
            })
        } else if (t.joinType === f.J.DISCOVERABLE) {
            let {
                requireTerms: n,
                termRules: i = []
            } = t, s = i.map(e => e.value.trim()).filter(e => "" !== e);
            D(async () => {
                if (l.verificationDirty && await U(n, s, e), l.guildDirty) {
                    (0, p.dl)(A, _);
                    let e = new Set(A.features);
                    e.add(N.GuildFeatures.DISCOVERABLE), e.delete(N.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), await M({
                        features: e,
                        discoverySplash: A.discoverySplash,
                        description: A.description,
                        preferredLocale: A.preferredLocale
                    });
                    try {
                        await (0, d.Oh)({
                            guildId: A.id,
                            ...b
                        })
                    } catch (e) {
                        throw R(new o.LG(e).getAnyErrorMessage()), e
                    }
                }
            })
        }
    }, [t, D, A, l, M, U, T, k, _, b]), w = s.useCallback(() => (e => {
        if (t.joinType === f.J.INVITE || t.joinType === f.J.DISCOVERABLE) {
            let {
                requireTerms: e,
                termRules: n = []
            } = t;
            if (n.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) return void R(C.intl.string(C.t.TCHkcd))
        }
        t.joinType !== f.J.APPLY || t.pendingVerificationFields?.some(e => (0, m.OP)(e)) ? e() : R(C.intl.string(C.t.HGVrI3))
    })(() => {
        var e;
        return e = e => {
            var s;
            return s = () => P(e), void(t.joinType === f.J.DISCOVERABLE && t.settingsView === j.v.ELIGIBLE_DISABLED ? (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("35125").then(n.bind(n, 60852));
                return t => (0, i.jsx)(e, {
                    ...t,
                    guildId: I,
                    onConfirm: s
                })
            }) : s())
        }, void(O && G > 0 && t.joinType !== f.J.APPLY ? (0, a.mMO)(async () => {
            let {
                default: t
            } = await n.e("63452").then(n.bind(n, 78903));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: I,
                submittedGuildJoinRequestsCount: G,
                onConfirm: e
            })
        }) : e())
    }), [O, P, t, I, G]), B = t.joinType === f.J.DISCOVERABLE && t.settingsView === j.v.ELIGIBLE_DISABLED, F = null != A.description && b.primaryCategoryId !== E.ig && b.keywords.length > 0;
    return (0, i.jsx)(r.A, {
        message: B ? C.intl.string(C.t.V2G2Yr) : void 0,
        onSaveText: B ? C.intl.string(C.t["qjtt/p"]) : void 0,
        submitting: v,
        errorMessage: y,
        onReset: L,
        onSave: w,
        disabled: B && !F
    })
}

function T() {
    let {
        pendingState: e,
        dirtyState: t
    } = (0, l.cf)([A.A], () => ({
        pendingState: A.A.pendingState,
        dirtyState: A.A.dirtyState
    })), {
        settingsGuild: n,
        settingsMetadata: s,
        originalGuild: a,
        guildProfile: o
    } = (0, l.cf)([_.A], () => {
        let {
            guild: e,
            guildMetadata: t,
            originalGuild: n,
            profile: i
        } = _.A.getProps();
        return {
            settingsGuild: e,
            settingsMetadata: t,
            originalGuild: n,
            guildProfile: i
        }
    });
    return null == e || null == n ? null : e.joinType === f.J.DISCOVERABLE && e.settingsView === j.v.INELIGIBLE ? (0, i.jsx)(r.A, {
        message: C.intl.string(C.t.TEXwRt),
        onReset: () => h.A.init(n.id, N.BEX.ACCESS)
    }) : (0, i.jsx)(b, {
        pendingState: e,
        dirtyState: t,
        originalGuild: a,
        settingsGuild: n,
        settingsMetadata: s,
        settingsProfile: o
    })
}