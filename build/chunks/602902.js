/** chunk id: 602902 params = (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => g
}), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(397927),
    s = n(294454),
    a = n(118517),
    o = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    _ = n(518960),
    A = n(372684),
    E = n(439818),
    m = n(399925),
    I = n(696016),
    T = n(652215);
async function g(e, t) {
    let {
        channelId: g,
        analyticsLocations: N,
        messageReference: f
    } = t, C = o.A.getChannel(g);
    if (null != C) {
        if (null != f) {
            let e = u.A.getMessage(f.channel_id, f.message_id);
            null != e && (0, a.Yf)({
                message: e,
                channel: C,
                shouldMention: !1,
                showMentionToggle: !1
            })
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, m.VO)(i),
                    r = i.name ?? (0, I.cM)(i.createdAt),
                    l = (0, E.A)(r);
                if (i.type === A.nQ.CLIP || i.type === A.nQ.VOICE_CLIP) {
                    let r = `${""!==l?l:"clip"}.mp4`;
                    t.push(new File([e], r, {
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
                d.default.track(T.HAw.CLIP_SHARED, {
                    location_stack: N,
                    guild_id: C.guild_id,
                    channel_id: C.id,
                    channel_type: C.type,
                    application_id: i.applicationId,
                    clip_id: i.id
                })
            }(0, _.R)(t, C, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share"
            }), r.closeAllModals()
        } catch (e) {
            throw I.nx.error(e), e
        }
    } else(0, l.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("96758"), n.e("79133"), n.e("22175")]).then(n.bind(n, 243258));
        return n => (0, i.jsx)(t, {
            ...n,
            clips: e,
            analyticsLocations: N
        })
    }, {
        stackingBehavior: "stack",
        modalKey: s.aU
    })
}