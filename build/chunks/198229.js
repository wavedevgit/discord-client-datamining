/** chunk id: 198229, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(157559),
    o = n(827343),
    s = n(209932),
    d = n(430452),
    u = n(383501),
    c = n(967198),
    A = n(287809),
    b = n(954571),
    g = n(652215),
    f = n(731854),
    m = n(985018),
    p = n(946818);

function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.x.DEFAULT,
        n = (0, r.bG)([A.default], () => {
            var t;
            return (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === e
        }),
        O = (0, r.bG)([s.A], () => s.A.isLocalSoundboardMuted(e)),
        {
            muted: y,
            deafened: v = !1,
            localVideoDisabled: E = !1,
            localVideoAutoDisabled: h = !1
        } = (0, r.cf)([d.A], () => n ? {
            muted: d.A.isSelfMute(t),
            deafened: d.A.isSelfDeaf(t)
        } : {
            muted: d.A.isLocalMute(e, t),
            localVideoDisabled: d.A.isLocalVideoDisabled(e, t),
            localVideoAutoDisabled: d.A.isLocalVideoAutoDisabled(e, t)
        }, [n, t, e]),
        j = d.A.supports(f.O5.DISABLE_VIDEO) && !n ? (0, l.jsx)(i.sLh, {
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
                let n = E ? g.bb8.MANUAL_ENABLED : g.bb8.DISABLED;
                o.A.setDisableLocalVideo(e, n, t)
            },
            checked: E,
            subtext: h ? (0, l.jsxs)("div", {
                className: p.Y,
                children: [(0, l.jsx)(i.EpV, {
                    size: "custom",
                    color: "currentColor",
                    width: 12,
                    className: p.p
                }), m.intl.string(m.t.m2Hyj0)]
            }) : null
        }, "disable-video") : null,
        x = n ? null : (0, l.jsx)(i.sLh, {
            id: "soundboard-sound-mute",
            label: m.intl.string(m.t.LxhEuG),
            action: () => {
                let n = u.A.getRTCConnection();
                b.default.track(g.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                    guild_id: c.A.getGuildId(),
                    target_user_id: e,
                    media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                    parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                    mute_soundboard: !O
                }), o.A.toggleLocalSoundboardMute(e, t)
            },
            checked: O
        }, "soundboard-sound-mute");
    return n ? [(0, l.jsx)(i.sLh, {
        id: "mute",
        label: m.intl.string(m.t.sWmtI6),
        action: () => o.A.toggleSelfMute({
            context: t,
            location: "User Context Menu"
        }),
        checked: y
    }, "self-mute"), (0, l.jsx)(i.sLh, {
        id: "deafen",
        label: m.intl.string(m.t.wjcRFX),
        action: () => o.A.toggleSelfDeaf({
            context: t,
            location: "User Context Menu"
        }),
        checked: v
    }, "self-deafen"), j] : [(0, l.jsx)(i.sLh, {
        id: "mute",
        label: m.intl.string(m.t.sWmtI6),
        action: () => o.A.toggleLocalMute(e, t),
        checked: y
    }, "self-mute"), x, j]
}