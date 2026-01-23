/** Chunk was on web.js **/
/** chunk id: 256905, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => p,
    R: () => _
}), n(896048);
var r = n(627968),
    i = n(397927),
    a = n(734057),
    s = n(954571),
    o = n(793367),
    l = n(652215);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = f(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function f(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let p = "Media Viewer Modal";

function _(e, t) {
    var c, f, _;
    let [h, ...m] = [e, t], {
        location: g,
        contextKey: E
    } = h, y = d(h, ["location", "contextKey"]), [b] = m, O = null == (_ = y.items[null != (c = y.startingIndex) ? c : 0]) || null == (f = _.sourceMetadata) ? void 0 : f.message, v = a.A.getChannel(null == O ? void 0 : O.channel_id);
    (0, o.H9)({
        guildId: null == v ? void 0 : v.guild_id,
        channelId: null == v ? void 0 : v.id,
        channelType: null == v ? void 0 : v.type,
        numMediaItems: y.items.length,
        source: g,
        hasMediaOptions: !y.shouldHideMediaOptions
    }), s.default.track(l.HAw.OPEN_MODAL, {
        type: l.JJy.MEDIA_VIEWER,
        source: g,
        guild_id: null == v ? void 0 : v.guild_id,
        channel_id: null == v ? void 0 : v.id,
        channel_type: null == v ? void 0 : v.type
    }), (0, i.mMO)(async () => {
        let {
            default: e
        } = await n.e("48654").then(n.bind(n, 321565));
        return t => (0, r.jsx)(e, u({}, t, y))
    }, {
        modalKey: p,
        contextKey: E,
        onCloseCallback: o.a2,
        backdropStyle: i.F2Z.LIGHTBOX,
        stackingBehavior: b
    })
}