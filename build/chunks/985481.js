/** Chunk was on 83518 **/
/** chunk id: 985481, original params: t,e,n (module,exports,require) **/
n.d(e, {
    CI: () => T,
    LJ: () => s,
    XK: () => o,
    y5: () => U
}), n(638769);
var E = n(64700),
    i = n(311907),
    _ = n(661191),
    l = n(308645),
    A = n(739010),
    r = n(207913),
    a = n(393033),
    u = n(239093);

function S() {
    return (0, i.yK)([r.A], () => r.A.getClassifications()).sort((t, e) => _.default.extractTimestamp(e.id) - _.default.extractTimestamp(t.id))
}

function s(t) {
    let e, n = (0, i.bG)([r.A], () => r.A.getClassification(t)),
        _ = (0, i.bG)([r.A], () => r.A.getClassificationRequestState(t)),
        S = (0, i.bG)([r.A], () => r.A.getIsDsaEligible()),
        s = (0, i.bG)([r.A], () => r.A.getIsAppealEligible());
    if ((0, a._g)(n)) {
        var T;
        e = (null == (T = n.guild_metadata) ? void 0 : T.member_type) === A.Z9.OWNER ? u.w$.GUILD_OWNER : u.w$.GUILD_MEMBER
    } else e = u.w$.USER;
    return E.useEffect(() => {
        void 0 === n && null == _ && l.hH(t)
    }, [t, n, _]), {
        classification: n,
        classificationRequestState: _,
        isDsaEligible: S,
        isAppealEligible: s && null != n && null == n.appeal_status,
        violationType: e
    }
}

function T() {
    let t = S(),
        e = new Date;
    return t.filter(t => new Date(t.max_expiration_time) > e)
}

function o() {
    let t = S(),
        e = new Date;
    return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function U() {
    return (0, i.bG)([r.A], () => r.A.getAppealSignal())
}