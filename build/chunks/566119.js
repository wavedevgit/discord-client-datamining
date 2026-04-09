/** chunk id: 566119 params = (module,exports,require) **/
n.d(t, {
    CC: () => i,
    Jv: () => o,
    RQ: () => m,
    WD: () => a,
    b: () => h,
    gP: () => u,
    o8: () => c,
    ue: () => d
});
var r = n(954571),
    l = n(652215);

function s(e, t) {
    r.default.track(l.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let a = e => {
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
    h = () => {
        s("balance_popover_helpdesk")
    }