/** chunk id: 482589 params = (module,exports,require) **/
n.d(t, {
    j: () => o
});
var r = n(64700),
    l = n(554146),
    s = n(771781),
    a = n(367727),
    i = n(320118),
    d = n(49999);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, i.F)(),
        n = t?.last_granted_reward ?? null;
    r.useEffect(() => {
        e || (0, s.dD)(l.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != n && (0, a.qr)(l.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, n, {
            dismissAction: d.i.INDIRECT_ACTION
        })
    }, [e, n])
}