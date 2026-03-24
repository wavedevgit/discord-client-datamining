/** chunk id: 566119 params = (module,exports,require) **/
a.d(t, {
    CC: () => d,
    Jv: () => o,
    RQ: () => _,
    WD: () => i,
    b: () => m,
    gP: () => u,
    o8: () => c,
    ue: () => l
});
var n = a(954571),
    r = a(652215);

function s(e, t) {
    n.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let i = e => {
        s("shop_orbs", e)
    },
    d = e => {
        s("view_billing", e)
    },
    l = e => {
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
    _ = () => {
        s("balance_popover_next_drop")
    },
    m = () => {
        s("balance_popover_helpdesk")
    }