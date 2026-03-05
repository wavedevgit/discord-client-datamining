/** chunk id: 566119 params = (module,exports,require) **/
n.d(t, {
    CC: () => i,
    Jv: () => u,
    RQ: () => m,
    WD: () => l,
    b: () => _,
    gP: () => c,
    o8: () => o,
    ue: () => d
});
var r = n(954571),
    a = n(652215);

function s(e, t) {
    r.default.track(a.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
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
    u = e => {
        s("resubscribe", e)
    },
    o = e => {
        s("orbs_card_helpdesk", e)
    },
    c = () => {
        s("balance_popover_upsell")
    },
    m = () => {
        s("balance_popover_next_drop")
    },
    _ = () => {
        s("balance_popover_helpdesk")
    }