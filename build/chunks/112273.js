/** Chunk was on 21738 **/
/** chunk id: 112273, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(956793),
    l = n(401843),
    a = n(682261),
    s = n(765379),
    o = n(90644),
    c = n(61330),
    u = n(960076),
    d = n(341915),
    p = n(890687),
    h = n(710969),
    g = n(639214),
    f = n(834615),
    m = n(139675),
    A = n(516085),
    _ = n(928636),
    b = n(812808);
n(595);
var E = n(652215);

function O(e) {
    let {
        party: t,
        onChannelContextMenu: n,
        quest: O
    } = e, y = (0, b.G)(), {
        voiceChannels: I,
        currentActivities: v,
        partiedMembers: S,
        applicationStreams: C,
        guildContext: N
    } = t, T = (0, p.sb)(O), j = [], x = e => {
        let {
            length: t
        } = j;
        j.push(e)
    };
    for (let {
            activity: e
        }
        of(I.length > 0 && I.forEach(e => {
            let {
                members: t,
                channel: i,
                guild: l
            } = e;
            x((0, r.jsx)(_.A.VoiceSection, {
                guild: l,
                channel: i,
                members: t,
                partySize: function(e, t) {
                    let n = e.length;
                    return {
                        knownSize: n,
                        unknownSize: 0,
                        totalSize: n + 0
                    }
                }(t),
                onChannelContextMenu: n
            }, "voice-".concat(i.id)))
        }), t.currentActivities))
        if (null != e) {
            let t = A.Fm(e);
            if (null != t) {
                x(t);
                break
            }
        } return C.length > 0 && y && C.forEach(e => {
        let {
            stream: t,
            streamUser: n,
            activity: a
        } = e;
        x((0, r.jsx)(_.A.ApplicationStreamingSection, {
            guildId: null == N ? void 0 : N.id,
            user: n,
            activity: a,
            applicationStream: t,
            onPreviewClick: () => {
                i.default.selectVoiceChannel(t.channelId), (0, l.Nl)(t)
            }
        }, "application-stream-".concat(t.ownerId)))
    }), v.forEach((e, t) => {
        var n, i, l, p, A, b, y, C, j;
        let {
            activity: P,
            game: w,
            playingMembers: L,
            activityUser: R
        } = e;
        if (null == P || null == P.type) return null;
        if (P.type === E.$pd.PLAYING)
            if (v.length > 1 && !(0, a.A)(P) && null != w) x((0, r.jsx)(_.A.GameSection, {
                icon: w.getIconURL(64),
                name: w.name,
                partySize: {
                    knownSize: L.length,
                    unknownSize: 0,
                    totalSize: L.length
                },
                members: L,
                activity: P
            }, "game-".concat(null != (n = P.session_id) ? n : t, "-").concat(null != (i = P.application_id) ? i : t)));
            else if ((0, s.A)(P)) {
            let e = new Set(L.map(e => e.id)),
                t = null == (l = I.find(e => null != e)) ? void 0 : l.channel;
            null != t && x((0, r.jsx)(_.A.EmbeddedActivitySection, {
                activity: P,
                participants: e,
                channel: t,
                guildId: t.guild_id
            }, "embedded-activity-".concat(P.application_id)))
        } else(0, c.A)(P) ? x((0, r.jsx)(_.A.XboxSection, {
            title: w.name
        }, "xbox-".concat(null != (p = P.session_id) ? p : t))) : x((0, r.jsx)(_.A.RichPresenceSection, {
            activity: P,
            getAssetImage: m.uD,
            user: R
        }, "rich-presence-".concat(null != (A = P.session_id) ? A : t, "-").concat(R.id)));
        else if ((0, u.A)(P)) {
            let e = I.length > 0 && I[0].members.length > 1,
                n = L.length > 1;
            x((0, r.jsx)(_.A.TwitchSection, {
                guildId: null == N ? void 0 : N.id,
                activity: P,
                user: e || n ? R : null,
                getAssetImage: m.uD
            }, "streaming-".concat(null != (b = P.session_id) ? b : t)))
        } else P.type === E.$pd.LISTENING && ((0, o.A)(P) ? x((0, r.jsx)(_.A.SpotifySection, {
            activity: P,
            isSolo: 1 === S.length,
            partySize: {
                knownSize: L.length,
                unknownSize: 0,
                totalSize: L.length
            },
            getAssetImage: m.uD,
            members: L
        }, "spotify-".concat(null != (y = P.session_id) ? y : t, "-").concat(R.id))) : (null != P.assets || (0, a.A)(P)) && x((0, r.jsx)(_.A.RichPresenceSection, {
            activity: P,
            getAssetImage: m.uD,
            user: R
        }, "rich-presence-".concat(null != (C = P.session_id) ? C : t, "-").concat(R.id))));
        T && null != O && null != w && (0, g.zS)(P, O) && (null == O.userStatus || !(0, h.gO)(O.userStatus, d.uF.ACTIVITY_PANEL)) && x((0, r.jsx)(f.A, {
            quest: O
        }, "quest-".concat(O.id, "-").concat(null != (j = P.session_id) ? j : t)))
    }), j.length > 0 ? (0, r.jsx)(_.A.Body, {
        children: j
    }) : null
}