/** chunk id: 668267 params = (module,exports,require) **/
n.d(e, {
    Kg: () => u,
    LO: () => s,
    P: () => f,
    TX: () => c,
    U5: () => _,
    XC: () => h,
    mv: () => o,
    tC: () => v,
    uS: () => A
});
var i = n(967198),
    l = n(954571),
    a = n(5180),
    r = n(652215);
let d = "manual_browsing";

function o(t) {
    (0, a.ai)(i.A.getGuildId()) || (d = t)
}

function u() {
    let t = d;
    return d = "manual_browsing", t
}

function s(t, e, n) {
    l.default.track(r.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
        source: t,
        channel_type: e,
        total_favorites: n
    })
}

function c(t, e) {
    l.default.track(r.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
        channel_type: t,
        total_favorites: e
    })
}

function f() {
    l.default.track(r.HAw.FAVORITES_GUILD_ORDER_UPDATED)
}

function A(t, e) {
    l.default.track(r.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
        source: t,
        is_visible: e
    })
}

function h(t) {
    l.default.track(r.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
        source: t
    })
}

function v(t) {
    l.default.track(r.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, {
        source: t
    })
}

function _(t, e, n, i) {
    l.default.track(r.HAw.FAVORITES_GUILD_VIEWED, {
        source: t,
        total_favorites: e,
        is_xp_enabled: n,
        is_premium_tier_2: i
    })
}