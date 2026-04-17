/** chunk id: 482589 params = (module,exports,require) **/
n.d(t, {
    j: () => o
});
var s = n(64700),
    r = n(554146),
    a = n(771781),
    l = n(367727),
    i = n(320118),
    d = n(49999);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, i.F)(),
        n = t?.last_granted_reward ?? null;
    s.useEffect(() => {
        e || (0, a.dD)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != n && (0, l.qr)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, n, {
            dismissAction: d.i.INDIRECT_ACTION
        })
    }, [e, n])
}