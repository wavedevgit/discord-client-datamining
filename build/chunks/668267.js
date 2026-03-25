/** chunk id: 668267 params = (module,exports,require) **/
n.d(e, {
    Kg: () => d,
    LO: () => c,
    P: () => h,
    TX: () => u,
    U5: () => g,
    XC: () => A,
    mv: () => o,
    tC: () => C,
    uS: () => _
});
var i = n(967198),
    r = n(954571),
    l = n(5180),
    a = n(652215);
let s = "manual_browsing";

function o(t) {
    (0, l.ai)(i.A.getGuildId()) || (s = t)
}

function d() {
    let t = s;
    return s = "manual_browsing", t
}

function c(t, e, n) {
    r.default.track(a.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
        source: t,
        channel_type: e,
        total_favorites: n
    })
}

function u(t, e) {
    r.default.track(a.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
        channel_type: t,
        total_favorites: e
    })
}

function h() {
    r.default.track(a.HAw.FAVORITES_GUILD_ORDER_UPDATED)
}

function _(t, e) {
    r.default.track(a.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
        source: t,
        is_visible: e
    })
}

function A(t) {
    r.default.track(a.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
        source: t
    })
}

function C(t) {
    r.default.track(a.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, {
        source: t
    })
}

function g(t, e, n, i) {
    r.default.track(a.HAw.FAVORITES_GUILD_VIEWED, {
        source: t,
        total_favorites: e,
        is_xp_enabled: n,
        is_premium_tier_2: i
    })
}