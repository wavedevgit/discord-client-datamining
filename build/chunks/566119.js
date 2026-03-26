/** chunk id: 566119 params = (module,exports,require) **/
a.d(t, {
    CC: () => l,
    Jv: () => o,
    RQ: () => _,
    WD: () => s,
    b: () => m,
    gP: () => u,
    o8: () => c,
    ue: () => d
});
var r = a(954571),
    n = a(652215);

function i(e, t) {
    r.default.track(n.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let s = e => {
        i("shop_orbs", e)
    },
    l = e => {
        i("view_billing", e)
    },
    d = e => {
        i("update_billing", e)
    },
    o = e => {
        i("resubscribe", e)
    },
    c = e => {
        i("orbs_card_helpdesk", e)
    },
    u = () => {
        i("balance_popover_upsell")
    },
    _ = () => {
        i("balance_popover_next_drop")
    },
    m = () => {
        i("balance_popover_helpdesk")
    }