/** chunk id: 482589 params = (module,exports,require) **/
r.d(t, {
    j: () => o
});
var n = r(64700),
    a = r(554146),
    i = r(771781),
    s = r(367727),
    l = r(320118),
    d = r(49999);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, l.F)(),
        r = t?.last_granted_reward ?? null;
    n.useEffect(() => {
        e || (0, i.dD)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != r && (0, s.qr)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, r, {
            dismissAction: d.i.INDIRECT_ACTION
        })
    }, [e, r])
}