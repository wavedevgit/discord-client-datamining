/** chunk id: 566119 params = (module,exports,require) **/
r.d(t, {
    CC: () => l,
    Jv: () => d,
    RQ: () => m,
    WD: () => i,
    b: () => _,
    gP: () => u,
    o8: () => c,
    ue: () => o
});
var a = r(954571),
    n = r(652215);

function s(e, t) {
    a.default.track(n.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let i = e => {
        s("shop_orbs", e)
    },
    l = e => {
        s("view_billing", e)
    },
    o = e => {
        s("update_billing", e)
    },
    d = e => {
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
    _ = () => {
        s("balance_popover_helpdesk")
    }