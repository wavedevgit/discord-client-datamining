/** chunk id: 332118 params = (module,exports,require) **/
n.d(t, {
    f: () => d
});
var i = n(64700),
    l = n(311907),
    a = n(299091),
    r = n(408213),
    s = n(212455),
    o = n(652215);

function d(e) {
    let [t, n] = i.useState(!0), d = (0, l.bG)([s.A], () => null != e ? s.A.getJoinRequestGuild(e) : void 0), c = i.useCallback(async e => {
        try {
            let t = a.A.getInviteKeyForGuildId(e);
            null != t && await r.Ay.fetchVerificationForm(e, t)
        } finally {
            n(!1)
        }
    }, []);
    return i.useEffect(() => {
        null == e ? n(!1) : (n(!0), c(e))
    }, [e, c]), {
        canReapply: null != d && d.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        isLoading: t
    }
}