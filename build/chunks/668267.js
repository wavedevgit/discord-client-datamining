/** chunk id: 668267 params = (module,exports,require) **/
e.d(t, {
    Kg: () => d,
    LO: () => u,
    P: () => h,
    TX: () => c,
    U5: () => b,
    XC: () => f,
    mv: () => o,
    tC: () => _,
    uS: () => A
});
var i = e(967198),
    l = e(954571),
    a = e(5180),
    r = e(652215);
let s = "manual_browsing";

function o(n) {
    (0, a.ai)(i.A.getGuildId()) || (s = n)
}

function d() {
    let n = s;
    return s = "manual_browsing", n
}

function u(n, t, e) {
    l.default.track(r.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
        source: n,
        channel_type: t,
        total_favorites: e
    })
}

function c(n, t) {
    l.default.track(r.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
        channel_type: n,
        total_favorites: t
    })
}

function h() {
    l.default.track(r.HAw.FAVORITES_GUILD_ORDER_UPDATED)
}

function A(n, t) {
    l.default.track(r.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
        source: n,
        is_visible: t
    })
}

function f(n) {
    l.default.track(r.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
        source: n
    })
}

function _(n) {
    l.default.track(r.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, {
        source: n
    })
}

function b(n, t, e, i) {
    l.default.track(r.HAw.FAVORITES_GUILD_VIEWED, {
        source: n,
        total_favorites: t,
        is_xp_enabled: e,
        is_premium_tier_2: i
    })
}