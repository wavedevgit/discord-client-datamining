/** Chunk was on web.js **/
/** chunk id: 697138, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    a = n(932433),
    o = n(621466),
    s = n(311907),
    l = n(397927),
    c = n(954571),
    u = n(775602),
    d = n(264927),
    f = n(652215),
    p = n(650583),
    _ = n(985018);

function h(e) {
    var t;
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== p.dh.TAB || null == e.target) return;
    let {
        target: n
    } = e, r = null == (t = (0, o.BF)(e)) ? void 0 : t.activeElement;
    (0, o.vq)(n) && c.default.track(f.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: "tab_navigation",
        source_class_list: null != r ? Array.from(r.classList) : [],
        location_object: n.tagName
    })
}

function m(e) {
    let {
        children: t
    } = e, n = (0, s.cf)([u.A], () => ({
        enabled: u.A.useReducedMotion,
        rawValue: u.A.rawPrefersReducedMotion
    })), o = (0, s.cf)([u.A], () => ({
        enabled: u.A.useForcedColors,
        rawValue: u.A.systemForcedColors
    })), c = (0, s.bG)([u.A], () => u.A.isHighContrastModeEnabled), f = (0, s.bG)([u.A], () => u.A.alwaysShowLinkDecorations), p = (0, s.bG)([u.A], () => u.A.keyboardModeEnabled), m = (0, s.bG)([u.A], () => u.A.isSwitchIconsEnabled), g = i.useMemo(() => ({
        reducedMotion: n,
        prefersCrossfades: !1,
        forcedColors: o,
        alwaysShowLinkDecorations: f,
        highContrastModeEnabled: c,
        keyboardModeEnabled: p,
        switchIconsEnabled: m
    }), [n, o, f, c, p, m]);
    return i.useEffect(() => ((0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.Z7)()), _.intl.onLocaleChange(() => (0, d.Z7)()), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, r.jsx)(l.CZY.Provider, {
        value: g,
        children: t
    })
}