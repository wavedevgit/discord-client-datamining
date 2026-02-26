/** chunk id: 566119, original params: e,t,r (module,exports,require) **/
r.d(t, {
    CC: () => i,
    Jv: () => u,
    RQ: () => m,
    WD: () => s,
    b: () => _,
    gP: () => c,
    o8: () => o,
    ue: () => d
});
var n = r(954571),
    a = r(652215);

function l(e, t) {
    n.default.track(a.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let s = e => {
        l("shop_orbs", e)
    },
    i = e => {
        l("view_billing", e)
    },
    d = e => {
        l("update_billing", e)
    },
    u = e => {
        l("resubscribe", e)
    },
    o = e => {
        l("orbs_card_helpdesk", e)
    },
    c = () => {
        l("balance_popover_upsell")
    },
    m = () => {
        l("balance_popover_next_drop")
    },
    _ = () => {
        l("balance_popover_helpdesk")
    }