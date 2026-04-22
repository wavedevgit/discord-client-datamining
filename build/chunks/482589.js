/** chunk id: 482589 params = (module,exports,require) **/
n.d(t, {
    j: () => o
});
var s = n(64700),
    a = n(554146),
    l = n(771781),
    r = n(367727),
    i = n(320118),
    d = n(49999);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, i.F)(),
        n = t?.last_granted_reward ?? null;
    s.useEffect(() => {
        e || (0, l.dD)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != n && (0, r.qr)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, n, {
            dismissAction: d.i.INDIRECT_ACTION
        })
    }, [e, n])
}