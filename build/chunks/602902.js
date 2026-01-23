/** Chunk was on web.js **/
/** chunk id: 602902, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => A
}), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(397927),
    s = n(294454),
    o = n(118517),
    l = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    f = n(661191),
    p = n(518960),
    _ = n(372684),
    h = n(439818),
    m = n(399925),
    g = n(696016),
    E = n(652215);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
async function A(e, t) {
    let {
        channelId: y,
        analyticsLocations: O,
        messageReference: A
    } = t, I = l.A.getChannel(y);
    if (null != I) {
        if (null != A) {
            let e = u.A.getMessage(A.channel_id, A.message_id);
            null != e && (0, o.Yf)({
                message: e,
                channel: I,
                shouldMention: !1,
                showMentionToggle: !1
            })
        }
        try {
            let t = [],
                n = [];
            for (let r of e) {
                var S;
                let e = await (0, m.VO)(r),
                    i = null != (S = r.name) ? S : (0, g.cM)(f.default.extractTimestamp(r.id)),
                    a = (0, h.A)(i);
                if (r.type === _.nQ.CLIP || r.type === _.nQ.VOICE_CLIP) {
                    let i = "".concat("" !== a ? a : "clip", ".mp4");
                    t.push(new File([e], i, {
                        type: "video/mp4"
                    })), n.push({
                        clip: r
                    })
                } else if (r.type === _.nQ.SCREENSHOT) {
                    let r = "".concat("" !== a ? a : "screenshot", ".jpeg");
                    t.push(new File([e], r, {
                        type: "image/jpeg"
                    })), n.push({})
                }
                d.default.track(E.HAw.CLIP_SHARED, {
                    location_stack: O,
                    guild_id: I.guild_id,
                    channel_id: I.id,
                    channel_type: I.type,
                    application_id: r.applicationId,
                    clip_id: r.id
                })
            }(0, p.R)(t, I, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share"
            }), i.closeAllModals()
        } catch (e) {
            throw g.nx.error(e), e
        }
    } else(0, a.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("96758"), n.e("43622"), n.e("87102")]).then(n.bind(n, 243258));
        return n => (0, r.jsx)(t, v(b({}, n), {
            clips: e,
            analyticsLocations: O
        }))
    }, {
        stackingBehavior: "stack",
        modalKey: s.aU
    })
}