/** chunk id: 566119, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CC: () => i,
    Jv: () => u,
    RQ: () => m,
    WD: () => s,
    b: () => h,
    gP: () => c,
    o8: () => o,
    ue: () => d
});
var r = n(954571),
    a = n(652215);

function l(e, t) {
    r.default.track(a.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
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
    h = () => {
        l("balance_popover_helpdesk")
    }