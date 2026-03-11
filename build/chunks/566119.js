/** chunk id: 566119 params = (module,exports,require) **/
a.d(t, {
    CC: () => i,
    Jv: () => o,
    RQ: () => m,
    WD: () => l,
    b: () => p,
    gP: () => u,
    o8: () => c,
    ue: () => d
});
var n = a(954571),
    r = a(652215);

function s(e, t) {
    n.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let l = e => {
        s("shop_orbs", e)
    },
    i = e => {
        s("view_billing", e)
    },
    d = e => {
        s("update_billing", e)
    },
    o = e => {
        s("resubscribe", e)
    },
    c = e => {
        s("orbs_card_helpdesk", e)
    },
    u = () => {
        s("balance_popover_upsell")
    },
    m = () => {
        s("balance_popover_next_drop")
    },
    p = () => {
        s("balance_popover_helpdesk")
    }