/** Chunk was on 91042 **/
/** chunk id: 198229, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(157559),
    o = n(827343),
    d = n(209932),
    s = n(430452),
    u = n(383501),
    c = n(967198),
    A = n(287809),
    b = n(954571),
    g = n(652215),
    f = n(731854),
    m = n(985018),
    O = n(946818);

function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.x.DEFAULT,
        n = (0, i.bG)([A.default], () => {
            var t;
            return (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === e
        }),
        p = (0, i.bG)([d.A], () => d.A.isLocalSoundboardMuted(e)),
        {
            muted: y,
            deafened: E = !1,
            localVideoDisabled: v = !1,
            localVideoAutoDisabled: h = !1
        } = (0, i.cf)([s.A], () => n ? {
            muted: s.A.isSelfMute(t),
            deafened: s.A.isSelfDeaf(t)
        } : {
            muted: s.A.isLocalMute(e, t),
            localVideoDisabled: s.A.isLocalVideoDisabled(e, t),
            localVideoAutoDisabled: s.A.isLocalVideoAutoDisabled(e, t)
        }, [n, t, e]),
        j = s.A.supports(f.O5.DISABLE_VIDEO) && !n ? (0, l.jsx)(r.sLh, {
            id: "disable-video",
            label: m.intl.string(m.t["4MMsWF"]),
            action: () => {
                if (h) return void a.A.show({
                    title: m.intl.string(m.t.m2Hyj0),
                    body: m.intl.string(m.t.EhaK6B),
                    confirmText: m.intl.string(m.t.ND1my3),
                    cancelText: m.intl.string(m.t.jEqEhy),
                    onConfirm: () => o.A.setDisableLocalVideo(e, g.bb8.MANUAL_ENABLED)
                });
                let n = v ? g.bb8.MANUAL_ENABLED : g.bb8.DISABLED;
                o.A.setDisableLocalVideo(e, n, t)
            },
            checked: v,
            subtext: h ? (0, l.jsxs)("div", {
                className: O.Y,
                children: [(0, l.jsx)(r.EpV, {
                    size: "custom",
                    color: "currentColor",
                    width: 12,
                    className: O.p
                }), m.intl.string(m.t.m2Hyj0)]
            }) : null
        }, "disable-video") : null,
        x = n ? null : (0, l.jsx)(r.sLh, {
            id: "soundboard-sound-mute",
            label: m.intl.string(m.t.LxhEuG),
            action: () => {
                let n = u.A.getRTCConnection();
                b.default.track(g.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                    guild_id: c.A.getGuildId(),
                    target_user_id: e,
                    media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                    parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                    mute_soundboard: !p
                }), o.A.toggleLocalSoundboardMute(e, t)
            },
            checked: p
        }, "soundboard-sound-mute");
    return n ? [(0, l.jsx)(r.sLh, {
        id: "mute",
        label: m.intl.string(m.t.sWmtI6),
        action: () => o.A.toggleSelfMute({
            context: t,
            location: "User Context Menu"
        }),
        checked: y
    }, "self-mute"), (0, l.jsx)(r.sLh, {
        id: "deafen",
        label: m.intl.string(m.t.wjcRFX),
        action: () => o.A.toggleSelfDeaf({
            context: t,
            location: "User Context Menu"
        }),
        checked: E
    }, "self-deafen"), j] : [(0, l.jsx)(r.sLh, {
        id: "mute",
        label: m.intl.string(m.t.sWmtI6),
        action: () => o.A.toggleLocalMute(e, t),
        checked: y
    }, "self-mute"), x, j]
}