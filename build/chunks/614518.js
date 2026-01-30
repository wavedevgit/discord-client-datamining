/** chunk id: 614518, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    A: () => b,
    a: () => m
}), n(896048), n(667532);
var l, i, a = n(735438),
    o = n(311907),
    s = n(582754),
    c = n(73153),
    u = n(927813),
    d = n(667050);
n(806931);
let f = [],
    p = {},
    g = [],
    m = e => {
        null != e && c.h.dispatch({
            type: "VOICE_CHANNEL_EFFECT_CLEAR",
            userId: e
        })
    },
    _ = [],
    h = 10 * u.A.Millis.SECOND,
    y = (0, a.debounce)(() => {
        let e = (0, d.fr)(g);
        s.OR.announce(e, "polite"), g = []
    }, 500);
class A extends(l = o.Ay.Store) {
    get recentlyUsedEmojis() {
        return f
    }
    get isOnCooldown() {
        return null != r && new Date < r
    }
    get effectCooldownEndTime() {
        return r
    }
    getEffectForUserId(e) {
        return p[e]
    }
}(i = "displayName") in A ? Object.defineProperty(A, i, {
    value: "VoiceChannelEffectsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : A[i] = "VoiceChannelEffectsStore";
let b = new A(c.h, {
    VOICE_CHANNEL_EFFECT_CLEAR: e => {
        let {
            userId: t
        } = e;
        null != p[t] && delete p[t]
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
        let {
            emoji: t
        } = e;
        null != t && (f.unshift(t), (f = (0, a.uniqBy)(f, "name")).length > 9 && f.pop())
    },
    VOICE_CHANNEL_EFFECT_SEND: e => {
        let {
            emoji: t,
            userId: n,
            animationType: r
        } = e;
        null != t && null != r && (p[n] = {
            emoji: t,
            sentAt: Date.now(),
            animationType: r
        }, g = [...g, {
            emojiName: t.name,
            userId: n
        }], y())
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date;
        if ((_ = [e, ..._].slice(0, 20)).length >= 20) {
            let t = _[_.length - 1],
                n = e.getTime() - t.getTime();
            n < h && (r = new Date(e.getTime() + h - n))
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
        let {
            cooldownEndsAtMs: t
        } = e;
        r = new Date(Date.now() + t)
    }
})