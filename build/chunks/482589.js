/** chunk id: 482589 params = (module,exports,require) **/
a.d(t, {
    j: () => o
});
var n = a(64700),
    r = a(554146),
    s = a(771781),
    i = a(367727),
    d = a(320118),
    l = a(49999);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, d.F)(),
        a = t?.last_granted_reward ?? null;
    n.useEffect(() => {
        e || (0, s.dD)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != a && (0, i.qr)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, a, {
            dismissAction: l.i.INDIRECT_ACTION
        })
    }, [e, a])
}