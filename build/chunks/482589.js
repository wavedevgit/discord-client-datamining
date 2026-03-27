/** chunk id: 482589 params = (module,exports,require) **/
r.d(t, {
    j: () => d
});
var a = r(64700),
    n = r(554146),
    i = r(771781),
    s = r(367727),
    l = r(320118),
    o = r(49999);

function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
            programReward: t
        } = (0, l.F)(),
        r = t?.last_granted_reward ?? null;
    a.useEffect(() => {
        e || (0, i.dD)(n.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != r && (0, s.qr)(n.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, r, {
            dismissAction: o.i.INDIRECT_ACTION
        })
    }, [e, r])
}