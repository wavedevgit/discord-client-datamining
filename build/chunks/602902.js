/** chunk id: 602902 params = (module,exports,require) **/
n.d(t, {
    K: () => N
}), n(321073);
var i = n(627968);
n(64700);
var a = n(192308),
    l = n(397927),
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
async function N(e, t) {
    let {
        channelId: N,
        analyticsLocations: C,
        messageReference: g
    } = t, p = o.A.getChannel(N);
    if (null != p) {
        if (null != g) {
            let e = d.A.getMessage(g.channel_id, g.message_id);
            null != e && (0, s.Yf)({
                message: e,
                channel: p,
                shouldMention: !1,
                showMentionToggle: !1
            })
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, I.VO)(i),
                    a = i.name ?? (0, T.cM)(_.default.extractTimestamp(i.id)),
                    l = (0, E.A)(a);
                if (i.type === A.nQ.CLIP || i.type === A.nQ.VOICE_CLIP) {
                    let a = `${""!==l?l:"clip"}.mp4`;
                    t.push(new File([e], a, {
                        type: "video/mp4"
                    })), n.push({
                        clip: i
                    })
                } else if (i.type === A.nQ.SCREENSHOT) {
                    let i = `${""!==l?l:"screenshot"}.jpeg`;
                    t.push(new File([e], i, {
                        type: "image/jpeg"
                    })), n.push({})
                }
                u.default.track(f.HAw.CLIP_SHARED, {
                    location_stack: C,
                    guild_id: p.guild_id,
                    channel_id: p.id,
                    channel_type: p.type,
                    application_id: i.applicationId,
                    clip_id: i.id
                })
            }(0, m.R)(t, p, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share"
            }), a.closeAllModals()
        } catch (e) {
            throw T.nx.error(e), e
        }
    } else(0, l.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("96758"), n.e("43622"), n.e("26667")]).then(n.bind(n, 243258));
        return n => (0, i.jsx)(t, {
            ...n,
            clips: e,
            analyticsLocations: C
        })
    }, {
        stackingBehavior: "stack",
        modalKey: r.aU
    })
}