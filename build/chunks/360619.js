/** chunk id: 360619 params = (module,exports,require) **/
n.d(t, {
    AC: () => I,
    NI: () => v,
    PH: () => b
}), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var l = n(406360),
    a = n(86379),
    r = n(643015),
    o = n(945276),
    d = n(35587),
    c = n(677402),
    u = n(207560),
    _ = n(818143),
    g = n(639555),
    m = n(617641),
    A = n(961350);
n(540999);
var h = n(189081),
    p = n(994500),
    x = n(628965),
    E = n(287809),
    T = n(253932),
    S = n(368631),
    C = n(682262),
    f = n(987281);
n(531525);
var N = n(654487);

function b() {
    let e = (0, d.IO)().length,
        t = (0, s.bG)([x.A], () => x.A.getSearchParams()),
        n = (0, C.b_)(),
        f = E.default.getCurrentUser()?.isStaff() ?? !1,
        b = (0, m.Lc)({
            location: "settings"
        }),
        I = (0, g.Rv)({
            location: "settings"
        }),
        v = (0, a.H)(),
        j = (0, c.H)({
            location: N.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY
        }),
        O = (0, s.bG)([h.A], () => h.A.hasLibraryApplication()),
        R = (0, s.bG)([A.default], () => A.default.hasTOTPEnabled()),
        y = T.Q_.useSetting(),
        P = (0, r.A)(),
        D = (0, o.A)() ?? !0,
        L = (0, _.G)()?.length > 0,
        {
            hasBlockedUsers: G,
            hasIgnoredUsers: M
        } = (0, s.cf)([p.A], () => ({
            hasBlockedUsers: p.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: p.A.getIgnoredIDs().length > 0
        })),
        U = (0, u.fk)(),
        k = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(() => (0, S.zj)({
        unseenGiftCount: e,
        searchParams: t,
        isOverlaySupported: n,
        isStaff: f,
        isInappropriateConversationWarningEnabled: b,
        isInapproprateConversationsDefaultOn: I,
        paymentsBlocked: v,
        isEligibleForQuests: j,
        isStricterMessageRequestsEnabled: P,
        hasLibraryApplication: O,
        hasTOTPEnabled: R,
        developerMode: y,
        isAdultUser: D,
        hasSecureFramesVerifiedUserIds: L,
        hasIgnoredUsers: M,
        hasBlockedUsers: G,
        hasAgeGatedFeature: U,
        isHDRAccessibilitySettingExperimentEnabled: k
    }), [y, G, M, O, L, R, t, D, j, I, b, n, f, P, v, e, U, k])
}

function I(e) {
    let t = f.a.useField("searchResults"),
        n = b(),
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

function v(e) {
    return Array.from(new Map(Object.entries(e).filter(e => {
        let [t, n] = e;
        return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || !1 === n.unsearchable)
    })).entries()).map(e => {
        let [t, n] = e;
        return [t, n.searchableTitles]
    })
}
n(985018)