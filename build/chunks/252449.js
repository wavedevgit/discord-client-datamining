/** chunk id: 252449 params = (module,exports,require) **/
a.d(t, {
    E: () => b
});
var l = a(627968),
    n = a(64700),
    i = a(735438),
    s = a.n(i),
    r = a(311907),
    o = a(118356),
    u = a(397927),
    d = a(287809),
    c = a(690521),
    m = a(562153),
    h = a(372684),
    p = a(429364),
    f = a(731854),
    g = a(314212);
let v = new o.Vy("ClipsSpeakingOverlay");
class x {
    timeline;
    userSpeakingStates;
    activeSoundboards;
    soundboardPlayCounts;
    constructor(e) {
        for (const t of (this.timeline = new Map, this.userSpeakingStates = new Map, this.activeSoundboards = new Map, this.soundboardPlayCounts = new Map, [...e].sort((e, t) => e.timestamp - t.timestamp))) t.signal.type === h.Gy.SPEAKING ? this.processSpeakingEvent(t.signal) : t.signal.type === h.Gy.SOUNDBOARD && this.processSoundboardEvent(t.signal), this.timeline.set(t.timestamp, this.getCurrentSnapshot())
    }
    getSoundboardKey(e, t) {
        return `${e}:${t}`
    }
    processSpeakingEvent(e) {
        !this.userSpeakingStates.has(e.userId) && 0 === e.speakingFlags && (this.userSpeakingStates.set(e.userId, !0), this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())), this.userSpeakingStates.set(e.userId, (e.speakingFlags & f.ME.VOICE) === f.ME.VOICE)
    }
    processSoundboardEvent(e) {
        let t = this.getSoundboardKey(e.soundboardId, e.userId),
            a = this.soundboardPlayCounts.get(t) ?? 0;
        if (0 === a && !e.playing && (this.soundboardPlayCounts.set(t, 1), this.activeSoundboards.set(t, {
                soundboardId: e.soundboardId,
                name: e.name,
                userId: e.userId,
                emojiId: e.emojiId,
                emojiName: e.emojiName,
                emojiAnimated: e.emojiAnimated
            }), this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())), e.playing) this.soundboardPlayCounts.set(t, a + 1), this.activeSoundboards.set(t, {
            soundboardId: e.soundboardId,
            name: e.name,
            userId: e.userId,
            emojiId: e.emojiId,
            emojiName: e.emojiName,
            emojiAnimated: e.emojiAnimated
        });
        else {
            let e = Math.max(0, a - 1);
            this.soundboardPlayCounts.set(t, e), 0 === e && this.activeSoundboards.delete(t)
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries()).filter(e => {
                let [t, a] = e;
                return a
            }).map(e => {
                let [t, a] = e;
                return t
            }),
            activeSoundboards: Array.from(this.activeSoundboards.values())
        }
    }
    getEventsAtTimestamp(e) {
        let t = Array.from(this.timeline.keys()).sort((e, t) => e - t),
            a = 0,
            l = t.length - 1,
            n = -1;
        for (; a <= l;) {
            let i = Math.floor((a + l) / 2);
            t[i] <= e ? (n = i, a = i + 1) : l = i - 1
        }
        return -1 === n ? {
            speakingUserIds: [],
            activeSoundboards: []
        } : this.timeline.get(t[n]) ?? {
            speakingUserIds: [],
            activeSoundboards: []
        }
    }
}

function b(e) {
    let {
        clip: t,
        soundboardAudioEnabled: a,
        voiceAudioEnabled: i
    } = e, {
        useCurrentTime: o,
        subscribe: h
    } = (0, p.T)(), f = o(), b = t.decision?.timestamp ?? 0, [j] = n.useState(() => new x(t.timeline ?? [])), _ = b - t.length, C = n.useCallback(e => {
        let t = 1e3 * s().round(e, 3),
            a = j.getEventsAtTimestamp(_ + t);
        return {
            speakingUserIds: s().sortBy(a.speakingUserIds),
            activeSoundboards: s().sortBy(a.activeSoundboards, "soundboardId")
        }
    }, [j, _]), [k, y] = n.useState(() => C(f)), N = (0, r.cf)([d.default], () => s().pick(d.default.getUsers(), t.users));
    return (n.useEffect(() => h({
        onTimeUpdate: e => {
            let t = C(e);
            y(e => s().isEqual(t, e) ? e : (v.info("Event snapshot changed", {
                newEventSnapshot: t,
                currentEventSnapshot: e
            }), t))
        }
    }), [h, C]), null == b) ? null : (0, l.jsxs)("div", {
        className: g.h8,
        children: [i && k.speakingUserIds.map(e => {
            let a = N[e];
            if (null == a) return null;
            let n = (0, m.mG)(t.guildId, t.channelId, a);
            return (0, l.jsxs)("div", {
                className: g.q7,
                children: [(0, l.jsx)(u.euF, {
                    "aria-label": n,
                    size: u._3J.SIZE_24,
                    src: a.getAvatarURL(null, 24, !1)
                }), (0, l.jsx)(u.Text, {
                    className: g.Xh,
                    color: "always-white",
                    variant: "text-sm/normal",
                    children: n
                })]
            }, e)
        }), a && k.activeSoundboards.map(e => {
            let t = N[e.userId];
            return null == t ? null : (0, l.jsxs)("div", {
                className: g.q7,
                children: [(0, l.jsx)(u.euF, {
                    "aria-label": t.username,
                    size: u._3J.SIZE_24,
                    src: t.getAvatarURL(null, 24, !1)
                }), null != e.emojiId || null != e.emojiName ? (0, l.jsx)("img", {
                    alt: e.name,
                    className: g.g8,
                    src: (0, c.Ez)({
                        id: e.emojiId,
                        name: e.emojiName ?? "",
                        animated: e.emojiAnimated ?? !1
                    }, 24)
                }) : null, (0, l.jsx)(u.Text, {
                    className: g.Xh,
                    color: "always-white",
                    variant: "text-sm/normal",
                    children: e.name
                })]
            }, `${e.soundboardId}:${e.userId}`)
        })]
    })
}