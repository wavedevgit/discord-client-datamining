/** chunk id: 602902 params = (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => g
}), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(397927),
    a = n(294454),
    l = n(118517),
    o = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    _ = n(661191),
    E = n(518960),
    A = n(372684),
    m = n(439818),
    I = n(399925),
    T = n(696016),
    N = n(652215);
async function g(e, t) {
    let {
        channelId: g,
        analyticsLocations: p,
        messageReference: C
    } = t, f = o.A.getChannel(g);
    if (null != f) {
        if (null != C) {
            let e = u.A.getMessage(C.channel_id, C.message_id);
            null != e && (0, l.Yf)({
                message: e,
                channel: f,
                shouldMention: !1,
                showMentionToggle: !1
            })
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, I.VO)(i),
                    r = i.name ?? (0, T.cM)(_.default.extractTimestamp(i.id)),
                    s = (0, m.A)(r);
                if (i.type === A.nQ.CLIP || i.type === A.nQ.VOICE_CLIP) {
                    let r = `${""!==s?s:"clip"}.mp4`;
                    t.push(new File([e], r, {
                        type: "video/mp4"
                    })), n.push({
                        clip: i
                    })
                } else if (i.type === A.nQ.SCREENSHOT) {
                    let i = `${""!==s?s:"screenshot"}.jpeg`;
                    t.push(new File([e], i, {
                        type: "image/jpeg"
                    })), n.push({})
                }
                d.default.track(N.HAw.CLIP_SHARED, {
                    location_stack: p,
                    guild_id: f.guild_id,
                    channel_id: f.id,
                    channel_type: f.type,
                    application_id: i.applicationId,
                    clip_id: i.id
                })
            }(0, E.R)(t, f, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share"
            }), r.closeAllModals()
        } catch (e) {
            throw T.nx.error(e), e
        }
    } else(0, s.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("43808"), n.e("43622"), n.e("22175")]).then(n.bind(n, 243258));
        return n => (0, i.jsx)(t, {
            ...n,
            clips: e,
            analyticsLocations: p
        })
    }, {
        stackingBehavior: "stack",
        modalKey: a.aU
    })
}