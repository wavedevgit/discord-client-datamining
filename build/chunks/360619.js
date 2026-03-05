/** chunk id: 360619, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AC: () => O,
    NI: () => R,
    PH: () => j
}), n(560197), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var l = n(406360),
    a = n(86379),
    r = n(643015),
    o = n(945276),
    d = n(834981),
    c = n(155984),
    u = n(35587),
    _ = n(677402),
    g = n(207560),
    m = n(818143),
    A = n(639555),
    h = n(617641),
    p = n(961350);
n(540999);
var x = n(189081),
    E = n(994500),
    T = n(628965),
    S = n(287809),
    C = n(80422),
    I = n(253932),
    f = n(368631),
    b = n(682262),
    N = n(987281);
n(531525);
var v = n(654487);

function j() {
    let e = (0, u.IO)().length,
        t = (0, c.l)(),
        n = (0, s.bG)([T.A], () => T.A.getSearchParams()),
        N = (0, d.VT)(),
        j = (0, b.b_)(),
        {
            shouldMergeGameSettings: O
        } = C.X.useExperiment({
            location: "settings"
        }),
        R = S.default.getCurrentUser()?.isStaff() ?? !1,
        y = (0, h.Lc)({
            location: "settings"
        }),
        P = (0, A.Rv)({
            location: "settings"
        }),
        L = (0, a.H)(),
        D = (0, _.H)({
            location: v.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY
        }),
        G = (0, s.bG)([x.A], () => x.A.hasLibraryApplication()),
        M = (0, s.bG)([p.default], () => p.default.hasTOTPEnabled()),
        U = I.Q_.useSetting(),
        k = (0, r.A)(),
        V = (0, o.A)() ?? !0,
        w = (0, m.G)()?.length > 0,
        {
            hasBlockedUsers: H,
            hasIgnoredUsers: B
        } = (0, s.cf)([E.A], () => ({
            hasBlockedUsers: E.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: E.A.getIgnoredIDs().length > 0
        })),
        Y = (0, g.fk)(),
        F = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(() => (0, f.zj)({
        unseenGiftCount: e,
        showPrepaidPaymentPastDueWarning: t,
        searchParams: n,
        numOfPendingFamilyRequests: N,
        isOverlaySupported: j,
        shouldMergeGameSettings: O,
        isStaff: R,
        isInappropriateConversationWarningEnabled: y,
        isInapproprateConversationsDefaultOn: P,
        paymentsBlocked: L,
        isEligibleForQuests: D,
        isStricterMessageRequestsEnabled: k,
        hasLibraryApplication: G,
        hasTOTPEnabled: M,
        developerMode: U,
        isAdultUser: V,
        hasSecureFramesVerifiedUserIds: w,
        hasIgnoredUsers: B,
        hasBlockedUsers: H,
        hasAgeGatedFeature: Y,
        isHDRAccessibilitySettingExperimentEnabled: F
    }), [U, H, B, G, w, M, n, V, D, P, y, j, R, k, N, L, O, t, e, Y, F])
}

function O(e) {
    let t = N.a.useField("searchResults"),
        n = j(),
        i = n[e],
        s = Object.fromEntries(Object.entries(n).filter(e => {
            let [t, n] = e;
            return n.section === i.section
        })),
        l = Object.fromEntries(Object.entries(s).filter(e => {
            let [t, {
                parent: n,
                section: s
            }] = e;
            return null != n && s === i.section
        }).map(e => {
            let [t, {
                parent: n
            }] = e;
            return [t, n]
        })),
        a = new Set,
        r = e => {
            let t = s[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && r(n)
        },
        o = e => {
            for (let t of (a.add(e), Object.entries(l).filter(t => {
                    let [n, i] = t;
                    return i === e
                }).map(e => {
                    let [t] = e;
                    return t
                }))) o(t)
        };
    for (let e of t.filter(e => e in s))
        if (!a.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                a.clear();
                break
            }
            Object.values(l).includes(e) && o(e), r(e)
        } return a
}

function R(e) {
    return Array.from(new Map(Object.entries(e).filter(e => {
        let [t, n] = e;
        return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || !1 === n.unsearchable)
    })).entries()).map(e => {
        let [t, n] = e;
        return [t, n.searchableTitles]
    })
}
n(985018)