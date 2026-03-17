/** chunk id: 668267 params = (module,exports,require) **/
t.d(n, {
    Kg: () => u,
    LO: () => s,
    P: () => f,
    TX: () => c,
    U5: () => v,
    XC: () => h,
    mv: () => o,
    tC: () => _,
    uS: () => A
});
var i = t(967198),
    r = t(954571),
    l = t(5180),
    a = t(652215);
let d = "manual_browsing";

function o(e) {
    (0, l.ai)(i.A.getGuildId()) || (d = e)
}

function u() {
    let e = d;
    return d = "manual_browsing", e
}

function s(e, n, t) {
    r.default.track(a.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
        source: e,
        channel_type: n,
        total_favorites: t
    })
}

function c(e, n) {
    r.default.track(a.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
        channel_type: e,
        total_favorites: n
    })
}

function f() {
    r.default.track(a.HAw.FAVORITES_GUILD_ORDER_UPDATED)
}

function A(e, n) {
    r.default.track(a.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
        source: e,
        is_visible: n
    })
}

function h(e) {
    r.default.track(a.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
        source: e
    })
}

function _(e) {
    r.default.track(a.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, {
        source: e
    })
}

function v(e, n, t, i) {
    r.default.track(a.HAw.FAVORITES_GUILD_VIEWED, {
        source: e,
        total_favorites: n,
        is_xp_enabled: t,
        is_premium_tier_2: i
    })
}