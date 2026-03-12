/** chunk id: 602902 params = (module,exports,require) **/
n.d(t, {
    K: () => C
}), n(321073);
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(397927),
    r = n(294454),
    s = n(118517),
    o = n(734057),
    c = n(31717),
    d = n(320501),
    u = n(954571),
    _ = n(661191),
    m = n(518960),
    A = n(372684),
    E = n(439818),
    I = n(399925),
    T = n(696016),
    f = n(652215);
async function C(e, t) {
    let {
        channelId: C,
        analyticsLocations: N,
        messageReference: g
    } = t, h = o.A.getChannel(C);
    if (null != h) {
        if (null != g) {
            let e = d.A.getMessage(g.channel_id, g.message_id);
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
                let e = await (0, I.VO)(i),
                    l = i.name ?? (0, T.cM)(_.default.extractTimestamp(i.id)),
                    a = (0, E.A)(l);
                if (i.type === A.nQ.CLIP || i.type === A.nQ.VOICE_CLIP) {
                    let l = `${""!==a?a:"clip"}.mp4`;
                    t.push(new File([e], l, {
                        type: "video/mp4"
                    })), n.push({
                        clip: i
                    })
                } else if (i.type === A.nQ.SCREENSHOT) {
                    let i = `${""!==a?a:"screenshot"}.jpeg`;
                    t.push(new File([e], i, {
                        type: "image/jpeg"
                    })), n.push({})
                }
                u.default.track(f.HAw.CLIP_SHARED, {
                    location_stack: N,
                    guild_id: h.guild_id,
                    channel_id: h.id,
                    channel_type: h.type,
                    application_id: i.applicationId,
                    clip_id: i.id
                })
            }(0, m.R)(t, h, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share"
            }), l.closeAllModals()
        } catch (e) {
            throw T.nx.error(e), e
        }
    } else(0, a.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("96758"), n.e("43622"), n.e("73208")]).then(n.bind(n, 243258));
        return n => (0, i.jsx)(t, {
            ...n,
            clips: e,
            analyticsLocations: N
        })
    }, {
        stackingBehavior: "stack",
        modalKey: r.aU
    })
}