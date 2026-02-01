/** chunk id: 614518, original params: e,t,n (module,exports,require) **/
let l;
n.d(t, {
    A: () => y,
    a: () => m
}), n(896048), n(667532);
var r, i, a = n(735438),
    s = n(311907),
    o = n(582754),
    c = n(73153),
    u = n(927813),
    d = n(667050);
n(806931);
let h = [],
    p = {},
    f = [],
    m = e => {
        null != e && c.h.dispatch({
            type: "VOICE_CHANNEL_EFFECT_CLEAR",
            userId: e
        })
    },
    g = [],
    A = 10 * u.A.Millis.SECOND,
    b = (0, a.debounce)(() => {
        let e = (0, d.fr)(f);
        o.OR.announce(e, "polite"), f = []
    }, 500);
class _ extends(r = s.Ay.Store) {
    get recentlyUsedEmojis() {
        return h
    }
    get isOnCooldown() {
        return null != l && new Date < l
    }
    get effectCooldownEndTime() {
        return l
    }
    getEffectForUserId(e) {
        return p[e]
    }
}(i = "displayName") in _ ? Object.defineProperty(_, i, {
    value: "VoiceChannelEffectsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : _[i] = "VoiceChannelEffectsStore";
let y = new _(c.h, {
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
        null != t && (h.unshift(t), (h = (0, a.uniqBy)(h, "name")).length > 9 && h.pop())
    },
    VOICE_CHANNEL_EFFECT_SEND: e => {
        let {
            emoji: t,
            userId: n,
            animationType: l
        } = e;
        null != t && null != l && (p[n] = {
            emoji: t,
            sentAt: Date.now(),
            animationType: l
        }, f = [...f, {
            emojiName: t.name,
            userId: n
        }], b())
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date;
        if ((g = [e, ...g].slice(0, 20)).length >= 20) {
            let t = g[g.length - 1],
                n = e.getTime() - t.getTime();
            n < A && (l = new Date(e.getTime() + A - n))
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
        let {
            cooldownEndsAtMs: t
        } = e;
        l = new Date(Date.now() + t)
    }
})