/** chunk id: 602902 params = (module,exports,require) **/
n.d(t, {
    K: () => N
}), n(321073);
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(397927),
    r = n(294454),
    s = n(118517),
    o = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    _ = n(661191),
    A = n(518960),
    m = n(372684),
    E = n(439818),
    T = n(399925),
    I = n(696016),
    g = n(652215);
async function N(e, t) {
    let {
        channelId: N,
        analyticsLocations: f,
        messageReference: C
    } = t, h = o.A.getChannel(N);
    if (null != h) {
        if (null != C) {
            let e = u.A.getMessage(C.channel_id, C.message_id);
            null != e && (0, s.Yf)({
                message: e,
                channel: h,
                shouldMention: !1,
                showMentionToggle: !1
            })
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, T.VO)(i),
                    l = i.name ?? (0, I.cM)(_.default.extractTimestamp(i.id)),
                    a = (0, E.A)(l);
                if (i.type === m.nQ.CLIP || i.type === m.nQ.VOICE_CLIP) {
                    let l = `${""!==a?a:"clip"}.mp4`;
                    t.push(new File([e], l, {
                        type: "video/mp4"
                    })), n.push({
                        clip: i
                    })
                } else if (i.type === m.nQ.SCREENSHOT) {
                    let i = `${""!==a?a:"screenshot"}.jpeg`;
                    t.push(new File([e], i, {
                        type: "image/jpeg"
                    })), n.push({})
                }
                d.default.track(g.HAw.CLIP_SHARED, {
                    location_stack: f,
                    guild_id: h.guild_id,
                    channel_id: h.id,
                    channel_type: h.type,
                    application_id: i.applicationId,
                    clip_id: i.id
                })
            }(0, A.R)(t, h, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share"
            }), l.closeAllModals()
        } catch (e) {
            throw I.nx.error(e), e
        }
    } else(0, a.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("43808"), n.e("43622"), n.e("91215")]).then(n.bind(n, 243258));
        return n => (0, i.jsx)(t, {
            ...n,
            clips: e,
            analyticsLocations: f
        })
    }, {
        stackingBehavior: "stack",
        modalKey: r.aU
    })
}