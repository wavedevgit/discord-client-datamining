/** Chunk was on web.js **/
/** chunk id: 47671, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.d(t, {
    A: () => M
}), n(896048);
var a, s = n(311907),
    o = n(554146),
    l = n(73153),
    c = n(826673),
    u = n(284016),
    d = n(973654),
    f = n(544028),
    p = n(964404),
    _ = n(253932),
    h = n(617617),
    m = n(95701),
    g = n(734057),
    E = n(287809),
    y = n(927578),
    b = n(427262),
    O = n(644235),
    v = n(385803),
    A = n(185928);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let S = !0,
    T = !1,
    C = e => {
        let {
            presetId: t
        } = e;
        if (null == t) {
            r = void 0;
            return
        }
        r = v.ag[t]
    },
    N = e => {
        let {
            mobileThemesIndex: t
        } = e;
        if (null == t) {
            i = void 0;
            return
        }
        i = t
    },
    w = e => {
        r = void 0
    },
    R = e => {
        let {
            channelId: t,
            guildId: n
        } = e, r = E.default.getCurrentUser();
        if (null == t || null == n || (0, c.k8)(o.M.CLIENT_THEMES_COACHMARK) || !(0, b.G2)(r)) return;
        let i = g.A.getChannel(t);
        null != i && (0, m.ke)(i.type) && (T = !0)
    };

function P() {
    S && (r = void 0), T = !1
}
let D = () => {
        let e = !y.Ay.canUseClientThemes(E.default.getCurrentUser());
        if (e === S) return !1;
        S = e
    },
    x = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = _.eh.getSetting().backgroundGradientPresetId;
        if (null == e) {
            if (null == r) return !1;
            r = void 0
        } else {
            let t = v.ag[e];
            if (t === r) return !1;
            r = t
        }
    },
    L = () => {
        if (!u.A.shouldSync("appearance")) return !1;
        let e = _.eh.getSetting().backgroundGradientPresetId;
        if (p.Ay.useSystemTheme === A.Q_.ON && null != e && (0, d.k7)(A.Q_.OFF), null == e) {
            null != r && (r = void 0);
            return
        }
        let t = v.ag[e],
            n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
        null == t || n || (r = t)
    };
class j extends(a = s.Ay.PersistedStore) {
    initialize(e) {
        null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? v.ag[e.gradientPresetId] : void 0), this.waitFor(g.A, u.A, f.A, p.Ay, h.A, E.default), this.syncWith([E.default], D), this.syncWith([u.A], x)
    }
    getState() {
        return S ? {} : {
            gradientPresetId: null == r ? void 0 : r.id
        }
    }
    get gradientPreset() {
        return r
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, O.FK)(this.gradientPreset)
    }
    get isPreview() {
        return S
    }
    get isCoachmark() {
        return T
    }
    get mobilePendingThemeIndex() {
        return i
    }
    constructor(...e) {
        super(...e), I(this, "migrations", [e => {
            var t;
            return {
                gradientPresetId: null == e || null == (t = e.gradientPreset) ? void 0 : t.id
            }
        }])
    }
}
I(j, "displayName", "ClientThemesBackgroundStore"), I(j, "persistKey", "ClientThemesBackgroundStore");
let M = new j(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: C,
    UPDATE_MOBILE_PENDING_THEME_INDEX: N,
    RESET_PREVIEW_CLIENT_THEME: w,
    CLIENT_THEMES_EDITOR_CLOSE: P,
    CHANNEL_SELECT: R,
    LOGOUT: P,
    CACHE_LOADED: L,
    CONNECTION_OPEN: L,
    OVERLAY_INITIALIZE: L,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: L,
    UNSYNCED_USER_SETTINGS_UPDATE: L,
    USER_SETTINGS_PROTO_UPDATE: L
})