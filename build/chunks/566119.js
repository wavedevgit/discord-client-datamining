/** chunk id: 566119, original params: e,t,r (module,exports,require) **/
r.d(t, {
    CC: () => i,
    Jv: () => o,
    RQ: () => m,
    WD: () => l,
    b: () => h,
    gP: () => c,
    o8: () => u,
    ue: () => d
});
var n = r(954571),
    a = r(652215);

function s(e, t) {
    n.default.track(a.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
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
    u = e => {
        s("orbs_card_helpdesk", e)
    },
    c = () => {
        s("balance_popover_upsell")
    },
    m = () => {
        s("balance_popover_next_drop")
    },
    h = () => {
        s("balance_popover_helpdesk")
    }