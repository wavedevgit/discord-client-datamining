/** chunk id: 668267 params = (module,exports,require) **/
e.d(n, {
    Kg: () => d,
    LO: () => s,
    P: () => f,
    TX: () => c,
    U5: () => b,
    XC: () => A,
    mv: () => u,
    tC: () => _,
    uS: () => h
});
var i = e(967198),
    l = e(954571),
    a = e(5180),
    r = e(652215);
let o = "manual_browsing";

function u(t) {
    (0, a.ai)(i.A.getGuildId()) || (o = t)
}

function d() {
    let t = o;
    return o = "manual_browsing", t
}

function s(t, n, e) {
    l.default.track(r.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
        source: t,
        channel_type: n,
        total_favorites: e
    })
}

function c(t, n) {
    l.default.track(r.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
        channel_type: t,
        total_favorites: n
    })
}

function f() {
    l.default.track(r.HAw.FAVORITES_GUILD_ORDER_UPDATED)
}

function h(t, n) {
    l.default.track(r.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
        source: t,
        is_visible: n
    })
}

function A(t) {
    l.default.track(r.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
        source: t
    })
}

function _(t) {
    l.default.track(r.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, {
        source: t
    })
}

function b(t, n, e, i) {
    l.default.track(r.HAw.FAVORITES_GUILD_VIEWED, {
        source: t,
        total_favorites: n,
        is_xp_enabled: e,
        is_premium_tier_2: i
    })
}