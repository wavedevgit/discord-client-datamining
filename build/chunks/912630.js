/** chunk id: 912630, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
});
var r, i = n(311907),
    a = n(205693),
    o = n(73153),
    s = n(617617),
    l = n(430452),
    c = n(309010),
    u = n(287809),
    d = n(965162);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let m = !1,
    g = null,
    E = !1,
    y = {};

function b(e) {
    let {
        assets: t
    } = e, n = {};
    t.forEach(e => n[e.id] = e), y = n
}

function O(e) {
    let {
        videoFilterAsset: t
    } = e;
    y = h(p({}, y), {
        [t.id]: t
    })
}

function v(e) {
    let {
        videoFilterAsset: t
    } = e;
    y = p({}, y), delete y[t.id]
}

function A(e) {
    var t;
    let n = u.default.getCurrentUser();
    if (null == n) return !1;
    let r = null != e ? e : (0, d.Hk)(null == (t = s.A.settings.voiceAndVideo) ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != c.A.getVoiceChannelId() && l.A.isVideoEnabled() && null != r
}

function I(e) {
    let {
        backgroundOption: t
    } = e;
    A(t) && (E = !0)
}

function S(e) {
    let {
        settings: t
    } = e;
    a.Tr.CAMERA_BACKGROUND_LIVE in t && (m = !0)
}

function T() {
    g !== c.A.getVoiceChannelId() && (E = !1), A() && (E = !0), g = c.A.getVoiceChannelId()
}

function C() {
    m = !1, E = !1, g = null, y = {}
}
class N extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(l.A, c.A, s.A, u.default), this.syncWith([c.A, l.A], T)
    }
    get videoFilterAssets() {
        return y
    }
    get hasBeenApplied() {
        return m
    }
    get hasUsedBackgroundInCall() {
        return E
    }
}
f(N, "displayName", "VideoBackgroundStore");
let w = new N(o.h, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: b,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: O,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: v,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: I,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: S,
    LOGOUT: C
})