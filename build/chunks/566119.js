/** chunk id: 566119 params = (module,exports,require) **/
r.d(t, {
    CC: () => l,
    Jv: () => o,
    RQ: () => m,
    WD: () => s,
    b: () => _,
    gP: () => u,
    o8: () => c,
    ue: () => d
});
var n = r(954571),
    a = r(652215);

function i(e, t) {
    n.default.track(a.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
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
    m = () => {
        i("balance_popover_next_drop")
    },
    _ = () => {
        i("balance_popover_helpdesk")
    }