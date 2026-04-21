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
    a = n(652215);

function r(e, t) {
    s.default.track(a.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
        cta_type: e,
        program_state: t
    })
}
let l = e => {
        r("shop_orbs", e)
    },
    i = e => {
        r("view_billing", e)
    },
    d = e => {
        r("update_billing", e)
    },
    o = e => {
        r("resubscribe", e)
    },
    c = e => {
        r("orbs_card_helpdesk", e)
    },
    u = () => {
        r("balance_popover_upsell")
    },
    m = () => {
        r("balance_popover_next_drop")
    },
    h = () => {
        r("balance_popover_helpdesk")
    }