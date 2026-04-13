/** chunk id: 668267 params = (module,exports,require) **/
n.d(e, {
    Kg: () => u,
    LO: () => s,
    P: () => f,
    TX: () => c,
    U5: () => v,
    XC: () => _,
    mv: () => d,
    tC: () => A,
    uS: () => h
});
var i = n(967198),
    a = n(954571),
    l = n(5180),
    r = n(652215);
let o = "manual_browsing";

function d(t) {
    (0, l.ai)(i.A.getGuildId()) || (o = t)
}

function u() {
    let t = o;
    return o = "manual_browsing", t
}

function s(t, e, n) {
    a.default.track(r.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
        source: t,
        channel_type: e,
        total_favorites: n
    })
}

function c(t, e) {
    a.default.track(r.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
        channel_type: t,
        total_favorites: e
    })
}

function f() {
    a.default.track(r.HAw.FAVORITES_GUILD_ORDER_UPDATED)
}

function h(t, e) {
    a.default.track(r.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
        source: t,
        is_visible: e
    })
}

function _(t) {
    a.default.track(r.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
        source: t
    })
}

function A(t) {
    a.default.track(r.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, {
        source: t
    })
}

function v(t, e, n, i) {
    a.default.track(r.HAw.FAVORITES_GUILD_VIEWED, {
        source: t,
        total_favorites: e,
        is_xp_enabled: n,
        is_premium_tier_2: i
    })
}