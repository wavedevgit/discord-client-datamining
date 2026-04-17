/** chunk id: 252449 params = (module,exports,require) **/
l.d(t, {
    E: () => j
});
var n = l(627968),
    a = l(64700),
    i = l(735438),
    s = l.n(i),
    r = l(311907),
    d = l(118356),
    o = l(397927),
    c = l(287809),
    u = l(690521),
    m = l(562153),
    h = l(372684),
    p = l(429364),
    x = l(731854),
    g = l(178420);
let f = new d.Vy("ClipsSpeakingOverlay");
class v {
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
        !this.userSpeakingStates.has(e.userId) && 0 === e.speakingFlags && (this.userSpeakingStates.set(e.userId, !0), this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())), this.userSpeakingStates.set(e.userId, (e.speakingFlags & x.ME.VOICE) === x.ME.VOICE)
    }
    processSoundboardEvent(e) {
        let t = this.getSoundboardKey(e.soundboardId, e.userId),
            l = this.soundboardPlayCounts.get(t) ?? 0;
        if (0 === l && !e.playing && (this.soundboardPlayCounts.set(t, 1), this.activeSoundboards.set(t, {
                soundboardId: e.soundboardId,
                name: e.name,
                userId: e.userId,
                emojiId: e.emojiId,
                emojiName: e.emojiName,
                emojiAnimated: e.emojiAnimated
            }), this.timeline.has(0) || this.timeline.set(0, this.getCurrentSnapshot())), e.playing) this.soundboardPlayCounts.set(t, l + 1), this.activeSoundboards.set(t, {
            soundboardId: e.soundboardId,
            name: e.name,
            userId: e.userId,
            emojiId: e.emojiId,
            emojiName: e.emojiName,
            emojiAnimated: e.emojiAnimated
        });
        else {
            let e = Math.max(0, l - 1);
            this.soundboardPlayCounts.set(t, e), 0 === e && this.activeSoundboards.delete(t)
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries()).filter(e => {
                let [t, l] = e;
                return l
            }).map(e => {
                let [t, l] = e;
                return t
            }),
            activeSoundboards: Array.from(this.activeSoundboards.values())
        }
    }
    getEventsAtTimestamp(e) {
        let t = Array.from(this.timeline.keys()).sort((e, t) => e - t),
            l = 0,
            n = t.length - 1,
            a = -1;
        for (; l <= n;) {
            let i = Math.floor((l + n) / 2);
            t[i] <= e ? (a = i, l = i + 1) : n = i - 1
        }
        return -1 === a ? {
            speakingUserIds: [],
            activeSoundboards: []
        } : this.timeline.get(t[a]) ?? {
            speakingUserIds: [],
            activeSoundboards: []
        }
    }
}

function j(e) {
    let {
        clip: t,
        soundboardAudioEnabled: l,
        voiceAudioEnabled: i
    } = e, {
        useCurrentTime: d,
        subscribe: h
    } = (0, p.T)(), x = d(), j = t.decision?.timestamp ?? 0, [b] = a.useState(() => new v(t.timeline ?? [])), C = j - t.length, y = a.useCallback(e => {
        let t = 1e3 * s().round(e, 3),
            l = b.getEventsAtTimestamp(C + t);
        return {
            speakingUserIds: s().sortBy(l.speakingUserIds),
            activeSoundboards: s().sortBy(l.activeSoundboards, "soundboardId")
        }
    }, [b, C]), [A, N] = a.useState(() => y(x)), E = (0, r.cf)([c.default], () => s().pick(c.default.getUsers(), t.users));
    return (a.useEffect(() => h({
        onTimeUpdate: e => {
            let t = y(e);
            N(e => s().isEqual(t, e) ? e : (f.info("Event snapshot changed", {
                newEventSnapshot: t,
                currentEventSnapshot: e
            }), t))
        }
    }), [h, y]), null == j) ? null : (0, n.jsxs)("div", {
        className: g.h8,
        children: [i && A.speakingUserIds.map(e => {
            let l = E[e];
            if (null == l) return null;
            let a = (0, m.mG)(t.guildId, t.channelId, l);
            return (0, n.jsxs)("div", {
                className: g.q7,
                children: [(0, n.jsx)(o.euF, {
                    "aria-label": a,
                    size: o._3J.SIZE_24,
                    src: l.getAvatarURL(null, 24, !1)
                }), (0, n.jsx)(o.Text, {
                    className: g.Xh,
                    color: "always-white",
                    variant: "text-sm/normal",
                    children: a
                })]
            }, e)
        }), l && A.activeSoundboards.map(e => {
            let t = E[e.userId];
            return null == t ? null : (0, n.jsxs)("div", {
                className: g.q7,
                children: [(0, n.jsx)(o.euF, {
                    "aria-label": t.username,
                    size: o._3J.SIZE_24,
                    src: t.getAvatarURL(null, 24, !1)
                }), null != e.emojiId || null != e.emojiName ? (0, n.jsx)("img", {
                    alt: e.name,
                    className: g.g8,
                    src: (0, u.Ez)({
                        id: e.emojiId,
                        name: e.emojiName ?? "",
                        animated: e.emojiAnimated ?? !1
                    }, 24)
                }) : null, (0, n.jsx)(o.Text, {
                    className: g.Xh,
                    color: "always-white",
                    variant: "text-sm/normal",
                    children: e.name
                })]
            }, `${e.soundboardId}:${e.userId}`)
        })]
    })
}