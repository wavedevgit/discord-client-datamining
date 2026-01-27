/** Chunk was on web.js **/
/** chunk id: 811602, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Jn: () => p,
    LO: () => f,
    kn: () => d
});
var r = n(873298),
    i = n(731068),
    a = n(253932),
    o = n(930125),
    s = n(338717),
    l = n(632119),
    c = n(444802),
    u = n(652215),
    d = function(e) {
        return e.EXPLICIT = "explicit", e.GORE = "gore", e.SELF_HARM = "self_harm", e
    }({}),
    f = function(e) {
        return e[e.NONE = 0] = "NONE", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.GORE = 2] = "GORE", e[e.SELF_HARM = 4] = "SELF_HARM", e[e.ALL = 7] = "ALL", e
    }({});
let p = {
    explicit: {
        harmType: "explicit",
        obscureReason: s.Oc.EXPLICIT_CONTENT,
        attachmentFlag: u.sbO.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: u.iSj.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: i.IS.EXPLICIT,
        bitmask: 1,
        devSettingKey: "obscure_blur_effect_explicit_content_enabled",
        getProtoUserSettings: e => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.explicitContentSettings;
            return {
                [o.v.GUILD]: null == n ? void 0 : n.explicitContentGuilds,
                [o.v.FRIEND_DM]: null == n ? void 0 : n.explicitContentFriendDm,
                [o.v.NON_FRIEND_DM]: null == n ? void 0 : n.explicitContentNonFriendDm
            }
        },
        getUserSettingsWithDefaults: e => {
            var t, n, r;
            let i = null != e ? e : {
                [o.v.GUILD]: null == (t = a.Vd.getSetting()) ? void 0 : t.explicitContentGuilds,
                [o.v.FRIEND_DM]: null == (n = a.Vd.getSetting()) ? void 0 : n.explicitContentFriendDm,
                [o.v.NON_FRIEND_DM]: null == (r = a.Vd.getSetting()) ? void 0 : r.explicitContentNonFriendDm
            };
            return {
                [o.v.GUILD]: (0, l.Ys)({
                    setting: null == i ? void 0 : i[o.v.GUILD]
                }),
                [o.v.FRIEND_DM]: (0, l.Ys)({
                    setting: null == i ? void 0 : i[o.v.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0
                }),
                [o.v.NON_FRIEND_DM]: (0, l.Ys)({
                    setting: null == i ? void 0 : i[o.v.NON_FRIEND_DM],
                    isDm: !0
                })
            }
        }
    },
    gore: {
        harmType: "gore",
        obscureReason: s.Oc.GORE_CONTENT,
        attachmentFlag: u.sbO.CONTAINS_GORE_CONTENT,
        embedFlag: u.iSj.CONTAINS_GORE_CONTENT,
        genericMediaFlag: i.IS.GORE,
        bitmask: 2,
        devSettingKey: "obscure_blur_effect_gore_content_enabled",
        getProtoUserSettings: e => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.goreContentSettings;
            return {
                [o.v.GUILD]: null == n ? void 0 : n.goreContentGuilds,
                [o.v.FRIEND_DM]: null == n ? void 0 : n.goreContentFriendDm,
                [o.v.NON_FRIEND_DM]: null == n ? void 0 : n.goreContentNonFriendDm
            }
        },
        getUserSettingsWithDefaults: e => {
            var t, n, r;
            let i = null != e ? e : {
                [o.v.GUILD]: null == (t = a.qN.getSetting()) ? void 0 : t.goreContentGuilds,
                [o.v.FRIEND_DM]: null == (n = a.qN.getSetting()) ? void 0 : n.goreContentFriendDm,
                [o.v.NON_FRIEND_DM]: null == (r = a.qN.getSetting()) ? void 0 : r.goreContentNonFriendDm
            };
            return {
                [o.v.GUILD]: (0, c.gC)({
                    setting: null == i ? void 0 : i[o.v.GUILD]
                }),
                [o.v.FRIEND_DM]: (0, c.gC)({
                    setting: null == i ? void 0 : i[o.v.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0
                }),
                [o.v.NON_FRIEND_DM]: (0, c.gC)({
                    setting: null == i ? void 0 : i[o.v.NON_FRIEND_DM],
                    isDm: !0
                })
            }
        }
    },
    self_harm: {
        harmType: "self_harm",
        obscureReason: s.Oc.SELF_HARM_CONTENT,
        attachmentFlag: u.sbO.CONTAINS_SELF_HARM_CONTENT,
        embedFlag: u.iSj.CONTAINS_SELF_HARM_CONTENT,
        genericMediaFlag: i.IS.SELF_HARM,
        bitmask: 4,
        devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
        getProtoUserSettings: e => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.selfHarmContentSettings;
            return {
                [o.v.GUILD]: null == n ? void 0 : n.selfHarmContentGuilds,
                [o.v.FRIEND_DM]: null == n ? void 0 : n.selfHarmContentFriendDm,
                [o.v.NON_FRIEND_DM]: null == n ? void 0 : n.selfHarmContentNonFriendDm
            }
        },
        getUserSettingsWithDefaults: () => ({
            [o.v.GUILD]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [o.v.FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [o.v.NON_FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION
        })
    }
}