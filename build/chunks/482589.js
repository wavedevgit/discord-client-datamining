/** chunk id: 482589, original params: e,t,r (module,exports,require) **/
r.d(t, {
    j: () => u
});
var n = r(64700),
    a = r(554146),
    l = r(771781),
    s = r(367727),
    i = r(320118),
    d = r(49999);

function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, i.F)(),
        r = t?.last_granted_reward ?? null;
    n.useEffect(() => {
        e || (0, l.dD)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != r && (0, s.qr)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, r, {
            dismissAction: d.i.INDIRECT_ACTION
        })
    }, [e, r])
}