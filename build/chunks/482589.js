/** chunk id: 482589, original params: e,t,r (module,exports,require) **/
r.d(t, {
    j: () => c
});
var n = r(64700),
    a = r(311907),
    s = r(554146),
    l = r(771781),
    i = r(367727),
    d = r(895944),
    o = r(649032),
    u = r(49999);

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.bG)([d.A], () => {
            let e = d.A.getRewardForProgram(o.W.NITRO);
            return e?.last_granted_reward ?? null
        });
    n.useEffect(() => {
        e || (0, l.dD)(s.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) || null != t && (0, i.qr)(s.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, t, {
            dismissAction: u.i.INDIRECT_ACTION
        })
    }, [e, t])
}