/** chunk id: 566119 params = (module,exports,require) **/
n.d(t, {
    CC: () => i,
    Jv: () => o,
    RQ: () => m,
    WD: () => l,
    b: () => h,
    gP: () => u,
    o8: () => c,
    ue: () => d
});
var s = n(954571),
    r = n(652215);

function a(e, t) {
    s.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let l = e => {
        a("shop_orbs", e)
    },
    i = e => {
        a("view_billing", e)
    },
    d = e => {
        a("update_billing", e)
    },
    o = e => {
        a("resubscribe", e)
    },
    c = e => {
        a("orbs_card_helpdesk", e)
    },
    u = () => {
        a("balance_popover_upsell")
    },
    m = () => {
        a("balance_popover_next_drop")
    },
    h = () => {
        a("balance_popover_helpdesk")
    }