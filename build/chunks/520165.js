/** Chunk was on web.js **/
/** chunk id: 520165, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(15285),
    i = n(652896),
    a = n(616356),
    s = n(961350),
    o = n(734057),
    l = n(290863),
    c = n(383501),
    u = n(461213),
    d = n(977997),
    f = n(661191),
    p = n(372684),
    _ = n(696016),
    h = n(652215),
    m = n(985018);

function g(e) {
    if (null != e) return {
        state: e.state,
        details: e.details,
        timestamps: e.timestamps,
        party: null != e.party ? {
            id: e.party.id,
            size: e.party.size
        } : void 0
    }
}

function E(e) {
    var t, n, d;
    if (null != e) {
        let {
            ownerId: t
        } = i.Iy(e);
        if (t !== s.default.getId()) {
            let e = l.A.getActivities(t).find(e => e.type === h.$pd.PLAYING);
            return {
                sourceName: null == e ? void 0 : e.name,
                sourceApplicationId: null == e ? void 0 : e.application_id,
                activity: g(e)
            }
        }
    }
    let f = a.A.getStreamerActiveStreamMetadata(),
        p = null == f ? void 0 : f.pid,
        _ = null == f ? void 0 : f.sourceName,
        m = (() => {
            if (null == f) return r.Ay.getVisibleGame();
            {
                let e = null != p ? r.Ay.getGameForPID(p) : null,
                    t = null != _ ? r.Ay.getGameForName(_) : null;
                return null != e ? e : t
            }
        })(),
        E = null != (t = null == f ? void 0 : f.id) ? t : null == m ? void 0 : m.id,
        y = null != (n = null == f ? void 0 : f.sourceName) ? n : null == m ? void 0 : m.name,
        b = c.A.getChannelId(),
        O = null == y && null != b;
    if (O) {
        let e = null != b ? o.A.getChannel(b) : null;
        y = null != (d = null == e ? void 0 : e.name) ? d : ""
    }
    return {
        sourceName: y,
        sourceApplicationId: E,
        activity: g(u.A.getActivities(!1).find(e => e.type === h.$pd.PLAYING && e.application_id === E)),
        isVoiceOnly: O
    }
}

function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.nQ.CLIP,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
        i = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: a,
            sourceApplicationId: o,
            activity: l,
            isVoiceOnly: u
        } = E(e),
        h = c.A.getChannelId(),
        g = c.A.getGuildId(),
        y = new Set([s.default.getId()]);
    null != h && (y = y.union(new Set(Object.keys(d.A.getVoiceStatesForChannel(h)))));
    let b = "auto" === t;
    r.forEach(e => {
        let {
            signal: t
        } = e;
        "userId" in t && null != t.userId && y.add(t.userId)
    });
    let O = u && n === p.nQ.CLIP ? p.nQ.VOICE_CLIP : n;
    return {
        id: f.default.fromTimestamp(Date.now()),
        version: _.kd,
        applicationName: null != a ? a : m.intl.string(m.t.qtSJxb),
        applicationId: o,
        activity: l,
        users: Array.from(y),
        clipMethod: t,
        isTemporary: b,
        guildId: null != g ? g : void 0,
        channelId: null != h ? h : void 0,
        timeline: r,
        decision: i,
        length: 0,
        thumbnail: "",
        type: O
    }
}