/** chunk id: 482589 params = (module,exports,require) **/
a.d(t, {
    j: () => o
});
var r = a(64700),
    n = a(554146),
    s = a(771781),
    i = a(367727),
    l = a(320118),
    d = a(49999);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, l.F)(),
        a = t?.last_granted_reward ?? null;
    r.useEffect(() => {
        e || (0, s.dD)(n.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != a && (0, i.qr)(n.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, a, {
            dismissAction: d.i.INDIRECT_ACTION
        })
    }, [e, a])
}